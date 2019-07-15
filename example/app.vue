<template>
  <div class="app">
    <button @click="toggleExpand">toggle</button>
    <button @click="toggleSelected">toggle</button>
    <draggable-tree
      @drop="onDrop"
      :expand-all="expandAll"
      v-model="list"
      rowKey="menuId"
      :selected-key="selectedKey"
      :props="{ title: 'title', children: 'children' }"
      :allow-drop="allowDrop"
      :render-content="renderContent"
    >
      <!--            <span slot="renderContent" slot-scope="{node}">testrenderContent</span>-->
    </draggable-tree>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedKey: "1",
      list: [
        {
          menuId: "1",
          title: "1管理"
        },
        {
          menuId: "2",
          title: "2管理"
        },
        {
          menuId: "3",
          title: "3管理"
        },
        {
          title: "4管理"
        },
        {
          title: "5管理"
        }
      ],
      expandAll: true
    };
  },
  methods: {
    toggleExpand() {
      this.expandAll = !this.expandAll;
    },
    toggleSelected() {
      this.selectedKey = String(++this.selectedKey);
    },
    renderContent({ node, parent }) {
      // console.log(node);
      const { isShow } = this;
      return (
        <span style="color: green">
          {node.title}
          <button onClick={() => this.addChildren(node)}>addchildren</button>
          <button onClick={() => this.addnext(node, parent)}>addnext</button>
        </span>
      );
    },
    allowDrop(dragNode, overNode, type) {
      console.log(dragNode, overNode, type);
      // if (dropNode.key === "mpadmin_M_04_02_02") {
      //   return type !== "mid";
      // }
      return true;
    },
    onDrop(data) {
      //      console.log(data);
    },
    addChildren(node) {
      // console.log(node);
      if (!node.children) {
        this.$set(node, "children", []);
      }
      node.children.push({
        key: "test-1",
        title: "test"
      });
    },
    addnext(node, parent) {
      // console.log(node, parent);
      if (parent) {
        let idx = parent.indexOf(node);
        parent.splice(idx, 0, {
          title: "test"
        });
        //        parent.push({
        //          title: "test"
        //        });
      } else {
        let idx = this.list.indexOf(node);
        this.list.splice(idx + 1, 0, {
          title: "test"
        });
        //        this.list.push({ title: "test" });
      }
    }
  }
};
</script>

<style scoped></style>
