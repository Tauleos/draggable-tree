export default {
  inject: {
    treeRoot: {
      default: false,
    },
  },
  computed: {
    isChildren() {
      return !!this.treeRoot;
    },
//    draggable() {
//      const { isChildren, treeRoot } = this;
//      return isChildren ? treeRoot.draggable : false;
//    },
//    rootDragState() {
//      const { isChildren, treeRoot } = this;
//      return isChildren ? treeRoot.dragState : {};
//    },
//    allowDrop() {
//      const { isChildren, treeRoot } = this;
//      return isChildren ? treeRoot.allowDrop : {};
//    },
//    allowDrag() {
//      const { isChildren, treeRoot } = this;
//      return isChildren ? treeRoot.allowDrag : {};
//    },
  },
  methods: {
    onNodeSelect(...args) {
      this.treeRoot.onNodeSelect(...args);
    },
    onNodeExpand(...args) {
      this.treeRoot.onNodeExpand(...args);
    },
    onNodeClick(...args) {
      this.treeRoot.onNodeClick(...args);
    },
    onNodeDragStart(...args) {
      const { isChildren, treeRoot } = this;
      return isChildren ? treeRoot.onNodeDragStart(...args) : false;
    },
    onNodeDragOver(...args) {
      const { isChildren, treeRoot } = this;
      return isChildren ? treeRoot.onNodeDragOver(...args) : false;
    },
    onNodeDragEnd(...args) {
      const { isChildren, treeRoot } = this;
      return isChildren ? treeRoot.onNodeDragEnd(...args) : false;
    },
    onNodeDragLeave(...args) {
      const { isChildren, treeRoot } = this;
      return isChildren ? treeRoot.onNodeDragLeave(...args) : false;
    },
    onNodeDrop(...args) {
      const { isChildren, treeRoot } = this;
      return isChildren ? treeRoot.onNodeDrop(...args) : false;
    },
  },
};
