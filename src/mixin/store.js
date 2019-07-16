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
    normalizeNode(nodes, parent, level = 0, from = "init") {
      const { treeStore, rowKey, defaultExpandAll, selectedKey } = this;
      const { expandedKeys } = treeStore;
      const length = nodes.length;
      this.treeStore.selectedKey = selectedKey;
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
            isExpanded:
              expandedKeys.includes(key) ||
              //              expandAll,
              (from === "init" ? !!defaultExpandAll : false),
            isSelected: !!selectedKey ? selectedKey === key : false,
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
            level + 1,
            from
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
      if (oldKey && oldKey !== key) {
        let oldNodeData = this.treeStore.nodesMap[oldKey];
        oldNodeData.isSelected = false;
      }
      this.treeStore.selectedKey = key;
      //      this.resetStoreKeys('selectedKey');
      this.treeStore.nodesMap[key] &&
        (this.treeStore.nodesMap[key].isSelected = true);
    },
    addStoreExpandKeys(node) {
      if (node.isExpanded && node.isParent) {
        this.updateStoreExpandedKeys(node.key, "add");
      }
    },
    updateStoreExpandedKeys(key, type = "add", replace = false) {
      let { expandedKeys } = this.treeStore;
      let resetFunc = this.resetStoreKeys("isExpanded");
      if (replace) {
        this.treeStore.expandedKeys = key;
        resetFunc(expandedKeys, key);
        return;
      }
      if (type === "add") {
        !expandedKeys.includes(key) && expandedKeys.push(key);
        resetFunc([], expandedKeys);
      } else {
        this.treeStore.expandedKeys = expandedKeys.filter(i => i !== key);
        resetFunc(this.treeStore.expandedKeys, []);
      }
    },
    clearStoreExpandedKeys() {
      this.treeStore.expandedKeys = [];
    },
    getStoreExpandedKeys() {
      return [...this.treeStore.expandedKeys];
    },
    resetStoreKeys(keyName) {
      return (oldKey = [], newKey = []) => {
        for (let i of oldKey) {
          let node = this.treeStore.nodesMap[i];
          if (node) {
            node[keyName] = false;
          }
        }
        for (let i of newKey) {
          console.log("newKey", i);
          let node = this.treeStore.nodesMap[i];
          if (node) {
            node[keyName] = true;
          }
        }
      };
    }
  }
};
