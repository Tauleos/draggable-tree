<template>
  <li @dragover.stop="onDragOver"
      @drop.stop="onDrop">
    <span class="ux-tree-switcher" v-if="nodeData.children" @click="onExpand"></span>
    <span ref="selector" draggable="true" @dragstart.stop="onDragStart"
          @dragend.stop="onDragEnd">{{ nodeData.title }}</span>
    <ul v-if="nodeData.children&&nodeData.children.length">
      <tree-node v-for="child in nodeData.children" :node-data="child"></tree-node>
    </ul>
  </li>

</template>
<script>
  
  export default {
    name: 'tree-node',
    props: {
      nodeData: {
        required: true,
        type: Object,
        default() {
          return {
            _id: null,
            title: '', //显示的标题
            isExpand: true, //是否展开
            noDrag: false, //此节点禁用拖拽
            noDrop: false, //此节点禁用放置
            children: [], //子项
          };
        },
      },
    },
    components: {},
    data() {
      return {
        tree: null,
      };
    },
    created() {
      const parent = this.$parent;
      if (parent.isTree) {
        this.tree = parent;
      } else {
        this.tree = parent.tree;
      }
      this.nodeData._id = this.generateId();
    },
    methods: {
      onExpand() {},
      onDragOver(e) {
        this.tree.$emit('tree-node-drag-over', e, this);
        event.preventDefault();
      },
      onDrop(e) {
        this.tree.$emit('tree-node-drop', e, this);
        e.preventDefault();
      },
      onDragStart(e) {
        this.tree.$emit('tree-node-drag-start', e, this);
      },
      onDragEnd(e) {
        this.tree.$emit('tree-node-drag-end', e, this);
      },
      generateId() {
        return Math.random().toString(36).substring(2);
      },
      
    },
  };
</script>
<style scoped>
  .dragArea {
    width: 200px;
    margin: auto;
    min-height: 50px;
    outline: 1px dashed;
  }
</style>
