<template>
  <li @dragover.stop.prevent="onDragOver"
      @dragenter.prevent.stop="onDragEnter"
      @dragleave.stop="onDragLeave"
      @drop.stop="onDrop"
      :class="classes">
    <span class="fu fu-caret-right-a" v-if="nodeData.children" @click="onExpand"></span>
    <span ref="selector" :class="selectorClasses" draggable="true" @dragstart.stop="onDragStart"
          @dragend.stop="onDragEnd" @click.stop="onSelect">{{ nodeData.title }}</span>
    <ul v-if="nodeData.children&&nodeData.children.length">
      <tree-node v-for="child in nodeData.children" :key="child.key" :node-data="child"></tree-node>
    </ul>
  </li>

</template>
<script>
  import commMixin from './mixin/communicate';
  import '../css/index.scss';
  export default {
    name: 'tree-node',
    props: {
      nodeData: {
        required: true,
        type: Object,
      },
    },
    mixins: [commMixin],
    components: {},
    data() {
      return {
        tree: null,
        prefixCls: 'draggable-tree',
      };
    },
    created() {
      const parent = this.$parent;
      if (parent.isTree) {
        this.tree = parent;
      } else {
        this.tree = parent.tree;
      }
    },
    computed: {
      selectorClasses () {
        const {
          prefixCls, isDisabled, nodeState, draggable, nodeData: { isSelected },
        } = this;
        const wrapCls = `${ prefixCls }-node-content-wrapper`;
      
        return {
          [wrapCls]: true,
          [`${ wrapCls }-${ nodeState || 'normal' }`]: true,
          [`${ prefixCls }-node-selected`]: !isDisabled && isSelected,
          draggable: !isDisabled && draggable,
        };
      },
      classes () {
        const {
          nodeData: {
            dragOverGap,
          },
          isDisabled,
        } = this;
        console.log('dragOverGap=', dragOverGap);
        return {
          'drag-over': !isDisabled && dragOverGap === 'mid',
          'drag-over-gap-top': !isDisabled && dragOverGap === 'top',
          'drag-over-gap-bottom': !isDisabled && dragOverGap === 'bottom',
        };
      },
    },
    methods: {
      onSelect () {
        console.log('on  click')
        this.nodeData.isSelected = true;
      },
      onExpand() {},
      onDragEnter(e){
        e.preventDefault();
      },
      onDragOver(e) {
        this.onNodeDragOver(e, this);
      },
      onDragLeave(e) {
        this.onNodeDragLeave(e, this);
      },
      onDrop(e) {
//        console.log('drop',e);
        this.onNodeDrop(e, this);
      },
      onDragStart(e) {
        this.onNodeDragStart(e, this);
      },
      onDragEnd(e) {
        console.log('onDrag end');
        this.onNodeDragEnd(e, this);
      }
      
    },
  };
</script>
<style scoped></style>
