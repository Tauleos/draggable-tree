import { getNodeKey, normalizeNode } from "../utils";

export default {
  created() {
    this.treeStore = {
      seed: 0,
      nodesMap: {},
      selectedKey: "",
      expandedKeys: []
    };
  },
  methods: {
    normalizeNode(nodes, parent, level = 0) {
      const { treeStore, rowKey, expandAll } = this;
      const { expandedKeys } = treeStore;
      const length = nodes.length;
      if (length === 0) {
        return [];
      }
      let list = [];

      for (let i = 0; i < length; i++) {
        let item = nodes[i];
        item.level = level;
        const key = getNodeKey(item, rowKey, treeStore);
        const node = {
          ...item,
          ...{
            title: item[this.props.title],
            key,
            parent,
            originNode: item.originNode || item,
            isExpanded: expandedKeys.includes(key) || !!expandAll,
            isSelected: false,
            dragOverGap: "none"
          }
        };
        let isParent = false;
        let childNodes;
        if (
          Array.isArray(item[this.props.children]) &&
          item[this.props.children].length > 0
        ) {
          childNodes = this.normalizeNode(
            item[this.props.children],
            node,
            level + 1
          );
          isParent = true;
          node.children = childNodes;
        }
        node.isParent = isParent;
        this.flattenNode(node);
        this.addStoreExpandKeys(node);
        list.push(node);
      }
      return list;
    },
    flattenNode(node) {
      this.treeStore.nodesMap[node.key] = node;
    },
    setChildren(parentData, childData, index = -1) {
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
    addChildren(parent, child) {
      this.setChildren(parent, child);
    },
    removeChildren(parent, child) {
      let { children } = parent;
      if (Array.isArray(children)) {
        parent.children = children.filter(v => v !== child);
      }
    },
    updateStoreSelectedKeys(key) {
      let oldKey = this.treeStore.selectedKey;
      if (oldKey) {
        let oldNodeData = this.treeStore.nodesMap[oldKey];
        oldNodeData.isSelected = false;
      }
      this.treeStore.selectedKey = key;
    },
    addStoreExpandKeys(node) {
      if (node.isExpanded && node.isParent) {
        this.updateStoreExpandedKeys(node.key, "add");
      }
    },
    updateStoreExpandedKeys(key, type = "add") {
      let { expandedKeys } = this.treeStore;
      if (type === "add") {
        !expandedKeys.includes(key) && expandedKeys.push(key);
      } else {
        this.treeStore.expandedKeys = expandedKeys.filter(i => i === key);
      }
    },
    clearStoreExpandedKeys() {
      this.treeStore.expandedKeys = [];
    },
    getStoreExpandedKeys() {
      return [...this.treeStore.expandedKeys];
    }
  }
};
