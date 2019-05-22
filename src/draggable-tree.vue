<template>
  <ul class="draggable-tree" :class="getClasses">
    <tree-Node
      v-for="item in nodes"
      :key="item.key"
      :node-data="item"
    ></tree-Node>
  </ul>
</template>
<script>
import treeNode from "./tree-node.vue";
import { calcDragOverGap } from "./utils";
import storeMixin from "./mixin/store";

export default {
  name: "draggable-tree",
  mixins: [storeMixin],
  provide() {
    return {
      treeRoot: this
    };
  },
  model: {
    prop: "list"
  },
  props: {
    list: {
      required: true,
      type: Array
    },
    expandAll: {
      type: Boolean,
      default: true
    },
    renderContent: {
      type: Function
    },
    props: {
      required: false,
      type: Object,
      default() {
        return {
          title: "title",
          children: "children"
        };
      }
    },
    allowDrop: Function
  },
  components: { treeNode },
  data() {
    return {
      dragState: {
        dragOverNode: null,
        dropPosition: "",
        dragNode: null,
        allowDrop: true
      },
      nodes: [],
      treeStore: {}
    };
  },
  watch: {
    expandAll() {
      this.clearStoreExpandedKeys();
      this.nodes = this.normalizeNode(this.list, null, 0);
    },
    list: {
      handler() {
        console.log(this.list);
        debugger;
        this.nodes = this.normalizeNode(this.list, null, 0);
      },
      deep: true
    }
  },
  created() {
    this.nodes = this.normalizeNode(this.list, null, 0);
  },
  computed: {
    getClasses() {
      let { dragState } = this;
      return {
        "is-dragging": !!dragState.dragNode,
        "is-drop-not-allow": !dragState.allowDrop
      };
    }
  },
  methods: {
    onNodeSelect(e, nodeData) {
      this.updateStoreSelectedKeys(nodeData.key, "add");
      this.$emit("select", nodeData.originNode);
    },
    onNodeExpand(e, nodeData) {
      let { key, isExpanded } = nodeData;
      this.updateStoreExpandedKeys(key, isExpanded ? "add" : "del");
      this.$emit("expand", this.getStoreExpandedKeys(), {
        expanded: isExpanded,
        domEvent: e
      });
    },
    onNodeDragOver(e, treeNode) {
      let { dragNode } = this.dragState;

      this.clearDragOverGap(treeNode);
      let position = calcDragOverGap(event, treeNode.$refs.selector);
      let allow = true;
      if (typeof this.allowDrop === "function") {
        allow = this.allowDrop(
          dragNode.nodeData.originNode,
          treeNode.nodeData.originNode,
          position
        );
      }
      e.dataTransfer.dropEffect = allow ? "move" : "none";
      this.dragState.allowDrop = allow;
      this.dragState.dragOverNode = treeNode;
      this.dragState.dropPosition = position;
      treeNode.nodeData.dragOverGap = this.dragState.dropPosition;
    },
    dropInSelf(dropNode) {
      let { dragNode } = this.dragState;
      let parent = dropNode.nodeData.parent;
      while (parent) {
        if (parent.key === dragNode.nodeData.key) {
          return true;
        } else {
          parent = parent.nodeData.parent;
        }
      }
      return false;
    },
    onNodeDrop(e, dropNode) {
      let { dragNode, dropPosition } = this.dragState;
      if (this.dropInSelf(dropNode)) {
        return;
      }

      let treeData = this.nodes.map(v => v.originNode); //获取原始数据

      let { nodeData: dragData } = dragNode;
      //let dragData = this.dragState.dragNode.nodeData;
      let dragParentData = dragNode.nodeData.parent;
      if (!dragParentData) {
        Object.defineProperty((dragParentData = {}), "children", {
          get: function() {
            return treeData;
          },
          set: function(childs) {
            treeData = childs;
          }
        });
      }
      let dropData = dropNode.nodeData;
      let dropParentData = dropData.parent;
      if (!dropParentData) {
        Object.defineProperty((dropParentData = {}), "children", {
          get: function() {
            return treeData;
          },
          set: function(childs) {
            treeData = childs;
          }
        });
      }

      if (dragData.key !== dropData.key) {
        //把拖拽元素从父节点中删除
        this.removeChildren(dragParentData, dragData);
        if (dropPosition === "mid") {
          this.addChildren(dropData, dragData);
        } else {
          let index = dropParentData.children.indexOf(dropData);
          this.setChildren(
            dropParentData,
            dragData,
            dropPosition === "top" ? index : index + 1
          );
        }
      }
      this.nodes = this.normalizeNode(treeData, null);
      this.$emit("drop", {
        dragNode: dragData.originNode,
        dragNodeParent: dragData.parent,
        dropNode: dropData.originNode,
        dropNodeParent: dropData.parent
      });
    },
    onNodeDragStart(event, treeNode) {
      console.log("drag start", treeNode);
      this.dragState.dragNode = treeNode;
    },
    onNodeDragEnd(e) {
      console.log("on end", this.dragState);
      this.clearDragOverGap(this.dragState.dragOverNode);
      e.dataTransfer.dropEffect = "move";
      this.dragState.dragNode = null;
      this.dragState.dropPosition = "";
      this.dragState.allowDrop = true;
    },
    onNodeDragLeave(e, treeNode) {
      this.clearDragOverGap(treeNode);
    },
    clearDragOverGap(treeNode) {
      treeNode.nodeData.dragOverGap = "none";
    }
  }
};
</script>
<style scoped></style>
