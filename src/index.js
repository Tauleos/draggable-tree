import draggableTree from './draggable-tree.vue';

draggableTree.install = function install(Vue) {
  Vue.component(draggableTree.name, draggableTree);
};
export default draggableTree;
