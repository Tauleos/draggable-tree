import Tree from './draggable-tree.vue';

Tree.install = function install(Vue) {
  Vue.component(Tree.name, Tree);
};
export default Tree;
