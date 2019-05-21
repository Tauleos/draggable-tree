<template>
  <li
    @dragover.stop.prevent="onDragOver"
    @dragenter.prevent.stop="onDragEnter"
    @dragleave.stop="onDragLeave"
    @drop.stop="onDrop"
    :class="classes"
  >
    <span :class="switcherClasses" @click="onExpand"></span>
    <span
      ref="selector"
      :class="selectorClasses"
      draggable="true"
      @dragstart.stop="onDragStart"
      @dragend.stop="onDragEnd"
      @click.stop="onSelect"
    >
      <node-content :node="nodeData" />
    </span>
    <c-transition>
      <ul
        v-if="
          nodeData.isExpanded && nodeData.children && nodeData.children.length
        "
        style="overflow: hidden"
      >
        <tree-node
          v-for="child in nodeData.children"
          :key="child.key"
          :node-data="child"
        ></tree-node>
      </ul>
    </c-transition>
  </li>
</template>
<script>
import cTransition from "./c-transition.vue";
import "../css/index.scss";
export default {
  name: "tree-node",
  props: {
    nodeData: {
      required: true,
      type: Object
    },
    isDisabled: {
      type: Boolean,
      default: false
    }
  },
  inject: {
    treeRoot: {
      default: false
    }
  },
  components: {
    cTransition,
    nodeContent: {
      props: {
        node: {
          required: true
        }
      },
      render(h) {
        const parent = this.$parent;
        const { treeRoot } = parent;
        const { node } = this;
        const { originNode } = node;
        return treeRoot.renderContent ? (
          treeRoot.renderContent({
            node: originNode,
            parentNode: (node.parent || {}).originNode
          })
        ) : treeRoot.$scopedSlots.renderContent ? (
          treeRoot.$scopedSlots.renderContent({
            node: originNode,
            parentNode: (node.parent || {}).originNode
          })
        ) : (
          <span class="draggable-tree-title">{node.title}</span>
        );
      }
    }
  },

  data() {
    return {
      prefixCls: "draggable-tree"
    };
  },
  computed: {
    switcherClasses() {
      const {
        prefixCls,
        nodeData: { isExpanded, isParent }
      } = this;
      if (!isParent) {
        return {
          [`${prefixCls}-switcher ${prefixCls}-switcher-noop`]: true
        };
      }
      return {
        [`${prefixCls}-switcher`]: true,
        [`${prefixCls}-switcher_${isExpanded ? "open" : "close"}`]: true
      };
    },
    selectorClasses() {
      const {
        prefixCls,
        isDisabled,
        nodeState,
        draggable,
        nodeData: { isSelected }
      } = this;
      const wrapCls = `${prefixCls}-node-content-wrapper`;

      return {
        [wrapCls]: true,
        [`${wrapCls}-${nodeState || "normal"}`]: true,
        [`${prefixCls}-node-selected`]: !isDisabled && isSelected,
        draggable: !isDisabled && draggable
      };
    },
    classes() {
      const {
        nodeData: { dragOverGap },
        isDisabled
      } = this;
      return {
        "drag-over": !isDisabled && dragOverGap === "mid",
        "drag-over-gap-top": !isDisabled && dragOverGap === "top",
        "drag-over-gap-bottom": !isDisabled && dragOverGap === "bottom"
      };
    }
  },
  methods: {
    onSelect(e) {
      this.nodeData.isSelected = true;
      this.treeRoot.onNodeSelect(e, this.nodeData);
    },
    onExpand(e) {
      this.nodeData.isExpanded = !this.nodeData.isExpanded;
      this.treeRoot.onNodeExpand(e, this.nodeData);
    },
    onDragEnter(e) {
      e.preventDefault();
    },
    onDragOver(e) {
      this.treeRoot.onNodeDragOver(e, this);
    },
    onDragLeave(e) {
      this.treeRoot.onNodeDragLeave(e, this);
    },
    onDrop(e) {
      this.treeRoot.onNodeDrop(e, this);
    },
    onDragStart(e) {
      this.treeRoot.onNodeDragStart(e, this);
    },
    onDragEnd(e) {
      this.treeRoot.onNodeDragEnd(e, this);
    }
  }
};
</script>
<style scoped></style>
