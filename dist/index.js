!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.draggableTree=t():e.draggableTree=t()}(window,function(){return n={},o.m=r=[function(e,t,r){var n=r(1);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,r(4).default)("73e5b6b0",n,!1,{})},function(e,t,r){(e.exports=r(2)(!1)).push([e.i,'.draggable-tree{font-family:"Chinese Quote",-apple-system,BlinkMacSystemFont,"Segoe UI","PingFang SC","Hiragino Sans GB","Microsoft YaHei","Helvetica Neue",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";font-size:12px;line-height:1.5;color:fade(#000, 65%);box-sizing:border-box;margin:0;padding:0;list-style:none;user-select:none}.draggable-tree ul,.draggable-tree ol{list-style:none;margin:0;padding:0}.draggable-tree li{margin:0;padding:4px 0;list-style:none;white-space:nowrap;outline:0;-khtml-user-drag:element;-webkit-user-drag:element}.draggable-tree li ul{margin:0;padding:0 0 0 18px}.draggable-tree li.drag-over>.draggable-tree-node-content-wrapper{background-color:#1b85ff;color:white;opacity:0.8}.draggable-tree li.drag-over-gap-top>.draggable-tree-node-content-wrapper{border-top-color:#1b85ff}.draggable-tree li.drag-over-gap-bottom>.draggable-tree-node-content-wrapper{border-bottom-color:#1b85ff}.draggable-tree li .draggable-tree-node-content-wrapper{display:inline-block;padding:0 5px;border-radius:2px;margin:0;cursor:move;text-decoration:none;vertical-align:top;color:fade(#000, 65%);transition:all 0.3s;height:24px;line-height:24px;width:calc(100% - 24px);user-select:none;border-top:2px transparent solid;border-bottom:2px transparent solid}.draggable-tree li .draggable-tree-node-content-wrapper:hover{background-color:#e8f7ff}.draggable-tree li .draggable-tree-node-content-wrapper.draggable-tree-node-selected{background-color:#bfe6ff}.draggable-tree li span.draggable-tree-switcher{margin:0;width:24px;height:24px;line-height:24px;display:inline-block;vertical-align:top;border:0 none;cursor:pointer;outline:none;text-align:center;position:relative}.draggable-tree li span.draggable-tree-switcher.draggable-tree-switcher-noop{cursor:default}.draggable-tree li span.draggable-tree-switcher.draggable-tree-switcher_open:after{content:\'\';display:inline-block;font-size:12px;font-size:"7px/9";border-left:7px solid transparent;border-top:7px solid;border-right:7px solid transparent;transform:scale(.58333) rotate(0deg);display:inline-block;font-weight:bold;transition:transform 0.3s}.draggable-tree li span.draggable-tree-switcher.draggable-tree-switcher_close:after{content:\'\';display:inline-block;font-size:12px;font-size:"7px/9";border-left:7px solid transparent;border-top:7px solid;border-right:7px solid transparent;transform:scale(.58333) rotate(0deg);display:inline-block;font-weight:bold;transition:transform 0.3s}.draggable-tree li span.draggable-tree-switcher.draggable-tree-switcher_close:after{transform:rotate(270deg) scale(0.59)}.draggable-tree.is-drop-not-allow .draggable-tree-node-content-wrapper{cursor:not-allowed}.draggable-tree.is-drop-not-allow li.drag-over>span[draggable="true"]{background-color:white;color:black;opacity:1}.draggable-tree>li:first-child{padding-top:7px}.draggable-tree>li:last-child{padding-bottom:7px}.draggable-tree .c-move-enter-active,.draggable-tree .c-move-leave-active{transition:all 0.3s ease-in-out}\n',""])},function(e,t,r){"use strict";e.exports=function(r){var i=[];return i.toString=function(){return this.map(function(e){var t=function(e,t){var r=e[1]||"",n=e[3];if(!n)return r;if(t&&"function"==typeof btoa){var o=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(n),a=n.sources.map(function(e){return"/*# sourceURL="+n.sourceRoot+e+" */"});return[r].concat(a).concat([o]).join("\n")}return[r].join("\n")}(e,r);return e[2]?"@media "+e[2]+"{"+t+"}":t}).join("")},i.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},n=0;n<this.length;n++){var o=this[n][0];null!=o&&(r[o]=!0)}for(n=0;n<e.length;n++){var a=e[n];null!=a[0]&&r[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),i.push(a))}},i}},function(e,t,r){"use strict";r.r(t);function n(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",{staticClass:"draggable-tree",class:e.getClasses},e._l(e.nodes,function(e){return r("tree-Node",{key:e.key,attrs:{"node-data":e}})}),1)}function o(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{class:t.classes,attrs:{draggable:"true"},on:{dragover:function(e){return e.stopPropagation(),e.preventDefault(),t.onDragOver(e)},dragenter:function(e){return e.preventDefault(),e.stopPropagation(),t.onDragEnter(e)},dragleave:function(e){return e.stopPropagation(),t.onDragLeave(e)},drop:function(e){return e.stopPropagation(),t.onDrop(e)},dragstart:function(e){return e.stopPropagation(),t.onDragStart(e)},dragend:function(e){return e.stopPropagation(),t.onDragEnd(e)}}},[r("span",{class:t.switcherClasses,on:{click:t.onExpand}}),t._v(" "),r("span",{ref:"selector",class:t.selectorClasses,on:{click:function(e){return e.stopPropagation(),t.onSelect(e)}}},[r("node-content",{attrs:{node:t.nodeData}})],1),t._v(" "),r("c-transition",[t.nodeData.isExpanded&&t.nodeData.children&&t.nodeData.children.length?r("ul",{staticStyle:{overflow:"hidden"}},t._l(t.nodeData.children,function(e){return r("tree-node",{key:e.key,attrs:{"node-data":e}})}),1):t._e()])],1)}function a(){var e=this,t=e.$createElement;return(e._self._c||t)("transition",{attrs:{name:"c-move"},on:{"before-enter":e.beforeEnter,enter:e.enter,"after-enter":e.afterEnter,"before-leave":e.beforeLeave,leave:e.leave,"after-leave":e.afterLeave}},[e._t("default")],2)}function i(e,t,r,n,o,a,i,d){var s,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=r,l._compiled=!0),n&&(l.functional=!0),a&&(l._scopeId="data-v-"+a),i?(s=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},l._ssrRegister=s):o&&(s=d?function(){o.call(this,this.$root.$options.shadowRoot)}:o),s)if(l.functional){l._injectStyles=s;var c=l.render;l.render=function(e,t){return s.call(t),c(e,t)}}else{var p=l.beforeCreate;l.beforeCreate=p?[].concat(p,s):[s]}return{exports:e,options:l}}a._withStripped=o._withStripped=n._withStripped=!0;var d=i({name:"c-transition",data:function(){return{}},methods:{beforeEnter:function(e){e.style.height=""},enter:function(e){var t=getComputedStyle(e).height;e.style.visibility="",e.style.height=0,setTimeout(function(){e.style.height=t},0)},afterEnter:function(e){e.style.height=""},beforeLeave:function(e){var t=getComputedStyle(e).height;e.style.height=t},leave:function(e){setTimeout(function(){e.style.height=0},0)},afterLeave:function(e){e.style.height=""}}},a,[],!1,null,null,null);d.options.__file="src/c-transition.vue";var s=d.exports;r(0);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=i({name:"tree-node",props:{nodeData:{required:!0,type:Object},isDisabled:{type:Boolean,default:!1}},inject:{treeRoot:{default:!1}},components:{cTransition:s,nodeContent:{props:{node:{required:!0}},render:function(e){var t=this.$parent.treeRoot,r=this.node,n=r.originNode;return t.renderContent?t.renderContent({node:n,parentNode:(r.parent||{}).originNode}):t.$scopedSlots.renderContent?t.$scopedSlots.renderContent({node:n,parentNode:(r.parent||{}).originNode}):e("span",{class:"draggable-tree-title"},[r.title])}}},data:function(){return{prefixCls:"draggable-tree"}},computed:{switcherClasses:function(){var e,t=this.prefixCls,r=this.nodeData,n=r.isExpanded;return r.isParent?(l(e={},"".concat(t,"-switcher"),!0),l(e,"".concat(t,"-switcher_").concat(n?"open":"close"),!0),e):l({},"".concat(t,"-switcher ").concat(t,"-switcher-noop"),!0)},selectorClasses:function(){var e,t=this.prefixCls,r=this.isDisabled,n=this.nodeState,o=this.draggable,a=this.nodeData.isSelected,i="".concat(t,"-node-content-wrapper");return l(e={},i,!0),l(e,"".concat(i,"-").concat(n||"normal"),!0),l(e,"".concat(t,"-node-selected"),!r&&a),l(e,"draggable",!r&&o),e},classes:function(){var e=this.nodeData.dragOverGap,t=this.isDisabled;return{"drag-over":!t&&"mid"===e,"drag-over-gap-top":!t&&"top"===e,"drag-over-gap-bottom":!t&&"bottom"===e}}},methods:{onSelect:function(e){this.nodeData.isSelected=!0,this.treeRoot.onNodeSelect(e,this.nodeData)},onExpand:function(e){this.nodeData.isExpanded=!this.nodeData.isExpanded,this.treeRoot.onNodeExpand(e,this.nodeData)},onDragEnter:function(e){e.preventDefault()},onDragOver:function(e){this.treeRoot.onNodeDragOver(e,this)},onDragLeave:function(e){this.treeRoot.onNodeDragLeave(e,this)},onDrop:function(e){this.treeRoot.onNodeDrop(e,this)},onDragStart:function(e){try{e.dataTransfer.setData("text/plain","")}catch(e){}this.treeRoot.onNodeDragStart(e,this)},onDragEnd:function(e){this.treeRoot.onNodeDragEnd(e,this)}}},o,[],!1,null,"387b92c8",null);c.options.__file="src/tree-node.vue";var p=c.exports;function b(e,t,r){var n=e.key;if(t&&(n=function(e){return"function"==typeof e}(t)?t(e):e[t]),!function(e){return null!=e}(n)){var o=r.seed+1;n="$$id_".concat(o),r.seed=o}return n}function u(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function y(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(r,!0).forEach(function(e){g(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var m=i({name:"draggable-tree",mixins:[{created:function(){this.treeStore={seed:0,nodesMap:{},selectedKey:"",expandedKeys:[]}},methods:{normalizeNode:function(e,t){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:0,n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:"init",o=this.treeStore,a=this.rowKey,i=this.defaultExpandAll,d=this.selectedKey,s=o.expandedKeys,l=e.length;if(this.treeStore.selectedKey=d,0===l)return[];for(var c=[],p=0;p<l;p++){var u=e[p];u.level=r;var f=b(u,a,o),g=y({},u,{},{title:u[this.props.title],key:f,parent:t,originNode:u.originNode||u,isExpanded:s.includes(f)||"init"===n&&!!i,isSelected:!!d&&d===f,dragOverGap:"none"}),h=!1,v=void 0;Array.isArray(u[this.props.children])&&0<u[this.props.children].length&&(v=this.normalizeNode(u[this.props.children],g,r+1,n),h=!0,g.children=v),g.isParent=h,this.flattenNode(g),this.addStoreExpandKeys(g),c.push(g)}return c},flattenNode:function(e){this.treeStore.nodesMap[e.key]=e},setChildren:function(e,t,r){var n=2<arguments.length&&void 0!==r?r:-1,o=e.children;Array.isArray(o)||(o=[]),-1===n?o.push(t):o.splice(n,0,t),e.children=o},addChildren:function(e,t){this.setChildren(e,t)},removeChildren:function(e,t){var r=e.children;Array.isArray(r)&&(e.children=r.filter(function(e){return e!==t}))},updateStoreSelectedKeys:function(e){var t=this.treeStore.selectedKey;t&&t!==e&&(this.treeStore.nodesMap[t].isSelected=!1);this.treeStore.selectedKey=e,this.treeStore.nodesMap[e]&&(this.treeStore.nodesMap[e].isSelected=!0)},addStoreExpandKeys:function(e){e.isExpanded&&e.isParent&&this.updateStoreExpandedKeys(e.key,"add")},updateStoreExpandedKeys:function(t,e,r){var n=1<arguments.length&&void 0!==e?e:"add",o=2<arguments.length&&void 0!==r&&r,a=this.treeStore.expandedKeys,i=this.resetStoreKeys("isExpanded");o?i(a,this.treeStore.expandedKeys=t):"add"===n?(a.includes(t)||a.push(t),i([],a)):(this.treeStore.expandedKeys=a.filter(function(e){return e!==t}),i(this.treeStore.expandedKeys,[]))},clearStoreExpandedKeys:function(){this.treeStore.expandedKeys=[]},getStoreExpandedKeys:function(){return u(this.treeStore.expandedKeys)},resetStoreKeys:function(v){var b=this;return function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[],r=!0,n=!1,o=void 0;try{for(var a,i=e[Symbol.iterator]();!(r=(a=i.next()).done);r=!0){var d=a.value,s=b.treeStore.nodesMap[d];s&&(s[v]=!1)}}catch(e){n=!0,o=e}finally{try{r||null==i.return||i.return()}finally{if(n)throw o}}var l=!0,c=!1,p=void 0;try{for(var u,f=t[Symbol.iterator]();!(l=(u=f.next()).done);l=!0){var g=u.value;console.log("newKey",g);var h=b.treeStore.nodesMap[g];h&&(h[v]=!0)}}catch(e){c=!0,p=e}finally{try{l||null==f.return||f.return()}finally{if(c)throw p}}}}}}],provide:function(){return{treeRoot:this}},model:{prop:"list"},props:{list:{required:!0,type:Array},defaultExpandAll:{type:Boolean,default:!0},expandedKeys:{type:Array,default:function(){return[]}},renderContent:{type:Function},props:{required:!1,type:Object,default:function(){return{title:"title",children:"children"}}},rowKey:String,selectedKey:String,allowDrop:Function},components:{treeNode:p},data:function(){return{dragState:{dragOverNode:null,dropPosition:"",dragNode:null,allowDrop:!0},nodes:[],treeStore:{}}},watch:{expandedKeys:function(){this.updateStoreExpandedKeys(this.expandedKeys,null,!0)},selectedKey:function(e){this.updateStoreSelectedKeys(e)},list:{handler:function(e){console.log("in watch",e),this.nodes=this.normalizeNode(e,null,0,"change")},deep:!0}},created:function(){this.updateStoreExpandedKeys(this.expandedKeys,null,!0),this.nodes=this.normalizeNode(this.list,null,0)},computed:{getClasses:function(){var e=this.dragState;return{"is-dragging":!!e.dragNode,"is-drop-not-allow":!e.allowDrop}}},methods:{onNodeSelect:function(e,t){this.updateStoreSelectedKeys(t.key,"add"),this.$emit("select",t.originNode)},onNodeExpand:function(e,t){var r=t.key,n=t.isExpanded;this.updateStoreExpandedKeys(r,n?"add":"del"),this.$emit("expand",this.getStoreExpandedKeys(),{expanded:n,node:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?h(r,!0).forEach(function(e){v(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):h(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}({},t.originNode),e:e})},onNodeDragOver:function(e,t){var r=this.dragState.dragNode;this.clearDragOverGap(t);var n=function(e,t){var r=e.clientY,n=t.getBoundingClientRect(),o=n.top,a=n.bottom,i=n.height,d=Math.max(.25*i,2),s="mid";return r<=o+d?s="top":a-d<=r&&(s="bottom"),s}(event,t.$refs.selector),o=!0;"function"==typeof this.allowDrop&&(o=this.allowDrop({node:r.nodeData.originNode,parentNode:(r.nodeData.parent||{}).originNode},{node:t.nodeData.originNode,parentNode:(t.nodeData.parent||{}).originNode},n)),e.dataTransfer.dropEffect=o?"move":"none",this.dragState.allowDrop=o,this.dragState.dragOverNode=t,this.dragState.dropPosition=n,t.nodeData.dragOverGap=this.dragState.dropPosition},dropInSelf:function(e){for(var t=this.dragState.dragNode,r=e.nodeData.parent;r;){if(r.key===t.nodeData.key)return!0;r=r.parent}return!1},onNodeDrop:function(e,t){var r=this.dragState,n=r.dragNode,o=r.dropPosition;if(!this.dropInSelf(t)){var a=this.nodes.map(function(e){return e.originNode}),i=n.nodeData,d={};i.parent?d=i.parent.originNode:Object.defineProperty(d,"children",{get:function(){return a},set:function(e){a=e}});var s=t.nodeData,l={};s.parent?l=s.parent.originNode:Object.defineProperty(l,"children",{get:function(){return a},set:function(e){a=e}});var c=i.originNode,p=s.originNode;if(c!==p)if(this.removeChildren(d,c),"mid"===o)this.addChildren(p,c);else{var u=l.children.indexOf(p);this.setChildren(l,c,"top"===o?u:u+1)}this.$emit("input",a),this.nodes=this.normalizeNode(a,null),this.$emit("drop",{dragNode:i.originNode,dragParentNode:i.parent},{dropNode:s.originNode,dropParentNode:s.parent},o)}},onNodeDragStart:function(e,t){console.log("drag start",t),this.dragState.dragNode=t},onNodeDragEnd:function(e){console.log("on end",this.dragState),this.clearDragOverGap(this.dragState.dragOverNode),e.dataTransfer.dropEffect="move",this.dragState.dragNode=null,this.dragState.dropPosition="",this.dragState.allowDrop=!0},onNodeDragLeave:function(e,t){this.clearDragOverGap(t)},clearDragOverGap:function(e){e.nodeData.dragOverGap="none"}}},n,[],!1,null,"e1a1a612",null);m.options.__file="src/draggable-tree.vue";var S=m.exports;S.install=function(e){e.component(S.name,S)};t.default=S},function(e,t,r){"use strict";function s(e,t){for(var r=[],n={},o=0;o<t.length;o++){var a=t[o],i=a[0],d={id:e+":"+o,css:a[1],media:a[2],sourceMap:a[3]};n[i]?n[i].parts.push(d):r.push(n[i]={id:i,parts:[d]})}return r}r.r(t),r.d(t,"default",function(){return g});var n="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!n)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l={},o=n&&(document.head||document.getElementsByTagName("head")[0]),a=null,i=0,c=!1,d=function(){},p=null,u="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function g(i,e,t,r){c=t,p=r||{};var d=s(i,e);return h(d),function(e){for(var t=[],r=0;r<d.length;r++){var n=d[r];(o=l[n.id]).refs--,t.push(o)}e?h(d=s(i,e)):d=[];for(r=0;r<t.length;r++){var o;if(0===(o=t[r]).refs){for(var a=0;a<o.parts.length;a++)o.parts[a]();delete l[o.id]}}}}function h(e){for(var t=0;t<e.length;t++){var r=e[t],n=l[r.id];if(n){n.refs++;for(var o=0;o<n.parts.length;o++)n.parts[o](r.parts[o]);for(;o<r.parts.length;o++)n.parts.push(b(r.parts[o]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{var a=[];for(o=0;o<r.parts.length;o++)a.push(b(r.parts[o]));l[r.id]={id:r.id,refs:1,parts:a}}}}function v(){var e=document.createElement("style");return e.type="text/css",o.appendChild(e),e}function b(t){var r,n,e=document.querySelector("style["+u+'~="'+t.id+'"]');if(e){if(c)return d;e.parentNode.removeChild(e)}if(f){var o=i++;e=a=a||v(),r=S.bind(null,e,o,!1),n=S.bind(null,e,o,!0)}else e=v(),r=function(e,t){var r=t.css,n=t.media,o=t.sourceMap;n&&e.setAttribute("media",n);p.ssrId&&e.setAttribute(u,t.id);o&&(r+="\n/*# sourceURL="+o.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");if(e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}.bind(null,e),n=function(){e.parentNode.removeChild(e)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else n()}}var y,m=(y=[],function(e,t){return y[e]=t,y.filter(Boolean).join("\n")});function S(e,t,r,n){var o=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=m(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}}],o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=3);function o(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return r[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}var r,n});