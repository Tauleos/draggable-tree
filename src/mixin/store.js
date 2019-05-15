import { getNodeKey, normalizeNode } from '../utils';

export default {
  created () {
    this.treeStore = {
      isInit: false,
      seed: 0,
      pos: 0,
      rootNodes: [],
      nodesMap: {},
      selectedKeys: [],
      expandedKeys: [],
      checkedKeys: [],
      halfCheckedKeys: [],
    };
  },
  methods: {
    createNodes (nodes, parent, level, from = 'init') {
      const {
        treeStore,
        rowKey,
        defaultExpandAll: expandAll,
        createNodes,
      } = this;
      const { expandedKeys } = treeStore;
      const length = nodes.length;
      if (length === 0) {
        return [];
      }
      let ret = [];
      for (let i = 0; i < length; i++) {
        let item = nodes[i];
        const key = getNodeKey(item, rowKey, treeStore);
        const node = {
          ...item, ...{
            key,
            parent,
            level,
            isExpanded: expandedKeys.includes(key) || ( !!expandAll ),
            isSelected: false,
            dragOverGap: 'none',
          },
        };
        let isParent = false;
        let childNodes;
        if (Array.isArray(item.children) && item.children.length > 0) {
          childNodes = createNodes(item.children, node, level + 1, from);
          isParent = true;
        }
        node.children = childNodes;
        node.isParent = isParent;
        this.registerNode(node);
        ret.push(node);
      }
      return ret;
      
    },
    registerNode (node) {
      this.treeStore.nodesMap[node.key] = node;
    },
    setChildren (parentData, childData, index = -1) {
      let { children } = parentData;
      if (!Array.isArray(children)) {
        children = [];
      }
      if (index === -1) {
        children.push(childData);
      } else {
        children.splice(index, 0, childData);
      }
      parentData.children = children;
      
    },
    addChildren (parent, child) {
      this.setChildren(parent, child);
    },
    removeChildren (parent, child) {
      let { children } = parent;
      if (Array.isArray(children)) {
        parent.children = children.filter(v => v.key !== child.key);
      }
    },
  },
};
