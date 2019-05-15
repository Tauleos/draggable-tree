<template>
  <div class="app">
    <draggable-tree :list="list"></draggable-tree>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        list: [{
          'children': [{
            'children': [{
              'app': 'mpadmin',
              'key': 'mpadmin_M_04_01_01',
              'title': '服务列表',
              'path': '/publish/serve/list',
              'redirect': 0,
              'type': 'menu',
              //'children': [],
            }, {
              'app': 'mpadmin',
              'key': 'mpadmin_M_04_01_02',
              'title': '帮助文档列表',
              'path': '/publish/serve/doc/list',
              'redirect': 0,
              'type': 'menu',
              //'children': [],
            }], 'icon': '', 'key': 'mpadmin_M_04_01', 'title': '服务管理', 'redirect': 0, 'type': 'submenu',
          }, {
            'children': [{
              'app': 'mpadmin',
              'key': 'mpadmin_M_04_02_01',
              'title': '解决方案列表',
              'path': '/publish/solution/list',
              'redirect': 0,
              'type': 'menu',
              'children': [],
            }, {
              'app': 'mpadmin',
              'key': 'mpadmin_M_04_02_02',
              'title': '帮助文档列表',
              'path': '/publish/solution/doc/list',
              'redirect': 0,
              'type': 'menu',
              'children': [],
            }], 'key': 'mpadmin_M_04_02', 'title': '解决方案管理', 'redirect': 0, 'type': 'submenu',
          }], 'icon': 'near-m', 'key': 'mpadmin_M_04', 'title': '服务发布管理', 'redirect': 0, 'type': 'submenu',
        }],
      };
    },
  };
</script>

<style scoped>

</style>
