<template>
  <div class="app">
    <button @click="toggleExpand">toogle</button>
    <draggable-tree
      @drop="onDrop"
      :expand-all="expandAll"
      v-model="list"
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
      list: [
        {
          title: "服务发布管理",
          children: [
            {
              title: "child-1"
            },
            {
              title: "child-2"
            }
          ]
        }
      ],
      expandAll: true
    };
  },
  methods: {
    toggleExpand() {
      this.expandAll = !this.expandAll;
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
      debugger;
      if (parent) {
        parent.push({
          title: "test"
        });
      } else {
        this.list.push({ title: "test" });
      }
    }
  }
};
</script>

<style scoped></style>
