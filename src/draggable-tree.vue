<template>
  <ul class="draggable-tree">
    <tree-Node v-for="item in nodes" :key="item.key" :node-data="item"></tree-Node>
  </ul>
</template>
<script>
  import treeNode from './tree-node.vue';
  import { calcDragOverGap } from './utils';
  import storeMixin from './mixin/store';
  
  export default {
    name: 'draggable-tree',
    mixins:[storeMixin],
    provide() {
      return {
        treeRoot: this,
      };
    },
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
        nodes:[]
      };
    },
    created() {
      this.nodes = this.createNodes(this.list, null, 0);
    },
    methods: {
      onNodeDragOver(e, treeNode) {
        this.clearDragOverGap(treeNode);
        this.dragState.dropPosition = calcDragOverGap(event, treeNode.$refs.selector);
        treeNode.nodeData.dragOverGap = this.dragState.dropPosition;
      },
      onNodeDrop(event, dropNode) {
        let that = this;
        let treeData = this.nodes.map(v=>v); //目测是浅拷贝
        let { dragNode, dropPosition } = this.dragState;
        let { nodeData: dragData } = dragNode;
        //let dragData = this.dragState.dragNode.nodeData;
        let dragParentData = dragNode.nodeData.parent;
        if (!dragParentData) {
          Object.defineProperty(dragParentData = {}, 'children', {
            get: function() {
              return treeData;
            },
            set: function(childs) {
              debugger;
              treeData = childs;
            },
          });
        }
        let dropData = dropNode.nodeData;
        let dropParentData = dropData.parent;
        if (!dropParentData) {
          Object.defineProperty(dropParentData = {}, 'children', {
            get: function() {
              return treeData;
            },
            set: function(childs) {
              debugger;
              treeData = childs;
            },
          });
        }
        
        if (dragData.key !== dropData.key) {
          debugger;
          //把拖拽元素从父节点中删除
          this.removeChildren(dragParentData,dragData);
          if (dropPosition === 'mid') {
            this.addChildren(dropData,dragData);
          } else {
            let index = dropParentData.children.indexOf(dropData);
            this.setChildren(dropParentData,dragData,dropPosition === 'top' ? index:index+1)
            
          }
        }
        this.nodes = this.createNodes(treeData,null,0,'drop');
        //TODO 开放drop事件
        
      },
      onNodeDragStart(event, treeNode) {
        this.dragState.dragNode = treeNode;
      },
      onNodeDragEnd(evt) {
        this.dragState.dragNode = null;
        this.dragState.dropPosition = '';
      },
      onNodeDragLeave(e, treeNode) {
        this.clearDragOverGap(treeNode);
      },
      clearDragOverGap(treeNode){
        treeNode.nodeData.dragOverGap = 'none';
      }
      
    },
    
  };
</script>
<style scoped></style>
