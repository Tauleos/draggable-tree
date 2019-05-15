<template>
  <ul class="draggable-tree">
    <tree-Node v-for="item in list" :key="item.title" :node-data="item"></tree-Node>
  </ul>
</template>
<script>
  import treeNode from './tree-node.vue';
  import { calcDragOverGap } from './utils';
  
  export default {
    name: 'draggable-tree',
    model: {
      prop: 'list',
    },
    props: {
      list: {
        required: true,
        type: Array,
      },
      defaultExpandAll: {
        type: Boolean,
        default: true,
      },
    },
    components: { treeNode },
    data() {
      return {
        isTree: true,
        dragState: {
          dragOverNode: null,
          dropPosition: '',
          dragNode: null,
        },
      };
    },
    created() {
      this.$on('tree-node-drag-start', this.onNodeDragStart);
      this.$on('tree-node-drag-over', this.onNodeDragOver);
      this.$on('tree-node-drag-end', this.onNodeDragEnd);
      this.$on('tree-node-drop', this.onNodeDrop);
    },
    methods: {
      onNodeDragOver(e, treeNode) {
        this.dragState.dropPosition = calcDragOverGap(event, treeNode.$refs.selector);
      },
      onNodeDrop(event, treeNode) {
        console.log('drop');
        let that = this;
        let { dragNode, dropPosition } = this.dragState;
        let { nodeData: dragData } = dragNode;
        //let dragData = this.dragState.dragNode.nodeData;
        let dragParent = dragNode.$parent.nodeData;
        if (!dragParent) {
          Object.defineProperty(dragParent = {}, 'children', {
            get: function() {
              debugger;
              return that.list;
            },
            set: function(child) {
              console.log(child);
              that.list.children = child;
            },
          });
        }
        let dropData = treeNode.nodeData;
        let dropParent = treeNode.$parent.nodeData;
        if (!dropParent) {
          Object.defineProperty(dropParent = {}, 'children', {
            get: function() {
              debugger;
              return that.list;
            },
            set: function(child) {
              console.log(child);
              that.list.children = child;
            },
          });
        }
        
        if (dragData._id !== dropData._id) {
          debugger;
          //把拖拽元素从父节点中删除
          dragParent.children.splice(dragParent.children.indexOf(dragData), 1);
          if (dropPosition === 'mid') {
            dropData.children ?
              dropData.children.push(dragData)
              : ( this.$set(dropData, 'children', [dragData]) );
          } else {
            
            let index = dropParent.children.indexOf(dropData);
            if (dropPosition === 'top') {
              dropParent.children.splice(index, 0, dragData);
            } else {
              dropParent.children.splice(index + 1, 0, dragData);
            }
          }
        }
        
      },
      onNodeDragStart(event, treeNode) {
        console.log('drag start', treeNode);
        this.dragState.dragNode = treeNode;
      },
      onNodeDragEnd(evt) {
        this.dragState.dragNode = null;
        this.dragState.dropPosition = '';
      },
      
    },
    
  };
</script>
<style scoped></style>
