!function (e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? module.exports = t()
    : 'function' == typeof define && define.amd ? define([], t) : 'object' ==
    typeof exports ? exports.draggableTree = t() : e.draggableTree = t();
}(window, function () {
  return function (e) {
    var t = {};
    
    function n (r) {
      if (t[r]) return t[r].exports;
      var o = t[r] = { i: r, l: !1, exports: {} };
      return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
    }
    
    return n.m = e, n.c = t, n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }, n.r = function (e) {
      'undefined' != typeof Symbol && Symbol.toStringTag &&
      Object.defineProperty(e, Symbol.toStringTag,
        { value: 'Module' }), Object.defineProperty(e, '__esModule',
        { value: !0 });
    }, n.t = function (e, t) {
      if (1 & t && ( e = n(e) ), 8 & t) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (n.r(r), Object.defineProperty(r, 'default',
        { enumerable: !0, value: e }), 2 & t && 'string' !=
      typeof e) for (var o in e) n.d(r, o,
        function (t) {return e[t];}.bind(null, o));
      return r;
    }, n.n = function (e) {
      var t = e && e.__esModule
        ? function () {return e.default;}
        : function () {return e;};
      return n.d(t, 'a', t), t;
    }, n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, n.p = '', n(n.s = 8);
  }([
    function (e, t, n) {
      var r = n(5);
      'string' == typeof r && ( r = [[e.i, r, '']] ), r.locals &&
      ( e.exports = r.locals );
      ( 0, n(3).default )('66740c94', r, !1, {});
    },
    function (e, t, n) {
      var r = n(7);
      'string' == typeof r && ( r = [[e.i, r, '']] ), r.locals &&
      ( e.exports = r.locals );
      ( 0, n(3).default )('6299d21a', r, !1, {});
    },
    function (e, t, n) {
      'use strict';
      e.exports = function (e) {
        var t = [];
        return t.toString = function () {
          return this.map(function (t) {
            var n = function (e, t) {
              var n = e[1] || '', r = e[3];
              if (!r) return n;
              if (t && 'function' == typeof btoa) {
                var o = ( a = r, '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,' +
                  btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + ' */' ),
                  i = r.sources.map(function (e) {
                    return '/*# sourceURL=' + r.sourceRoot + e + ' */';
                  });
                return [n].concat(i).concat([o]).join('\n');
              }
              var a;
              return [n].join('\n');
            }(t, e);
            return t[2] ? '@media ' + t[2] + '{' + n + '}' : n;
          }).join('');
        }, t.i = function (e, n) {
          'string' == typeof e && ( e = [[null, e, '']] );
          for (var r = {}, o = 0; o < this.length; o++) {
            var i = this[o][0];
            null != i && ( r[i] = !0 );
          }
          for (o = 0; o < e.length; o++) {
            var a = e[o];
            null != a[0] && r[a[0]] || ( n && !a[2] ? a[2] = n : n &&
              ( a[2] = '(' + a[2] + ') and (' + n + ')' ), t.push(a) );
          }
        }, t;
      };
    },
    function (e, t, n) {
      'use strict';
      
      function r (e, t) {
        for (var n = [], r = {}, o = 0; o < t.length; o++) {
          var i = t[o], a = i[0],
            s = { id: e + ':' + o, css: i[1], media: i[2], sourceMap: i[3] };
          r[a] ? r[a].parts.push(s) : n.push(r[a] = { id: a, parts: [s] });
        }
        return n;
      }
      
      n.r(t), n.d(t, 'default', function () {return h;});
      var o = 'undefined' != typeof document;
      if ('undefined' != typeof DEBUG && DEBUG && !o) throw new Error(
        'vue-style-loader cannot be used in a non-browser environment. Use { target: \'node\' } in your Webpack config to indicate a server-rendering environment.');
      var i = {},
        a = o && ( document.head || document.getElementsByTagName('head')[0] ),
        s = null, d = 0, u = !1, c = function () {}, l = null,
        f = 'data-vue-ssr-id', p = 'undefined' != typeof navigator &&
        /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
      
      function h (e, t, n, o) {
        u = n, l = o || {};
        var a = r(e, t);
        return g(a), function (t) {
          for (var n = [], o = 0; o < a.length; o++) {
            var s = a[o];
            ( d = i[s.id] ).refs--, n.push(d);
          }
          t ? g(a = r(e, t)) : a = [];
          for (o = 0; o < n.length; o++) {
            var d;
            if (0 === ( d = n[o] ).refs) {
              for (var u = 0; u < d.parts.length; u++) d.parts[u]();
              delete i[d.id];
            }
          }
        };
      }
      
      function g (e) {
        for (var t = 0; t < e.length; t++) {
          var n = e[t], r = i[n.id];
          if (r) {
            r.refs++;
            for (var o = 0; o < r.parts.length; o++) r.parts[o](n.parts[o]);
            for (; o < n.parts.length; o++) r.parts.push(m(n.parts[o]));
            r.parts.length > n.parts.length &&
            ( r.parts.length = n.parts.length );
          } else {
            var a = [];
            for (o = 0; o < n.parts.length; o++) a.push(m(n.parts[o]));
            i[n.id] = { id: n.id, refs: 1, parts: a };
          }
        }
      }
      
      function v () {
        var e = document.createElement('style');
        return e.type = 'text/css', a.appendChild(e), e;
      }
      
      function m (e) {
        var t, n,
          r = document.querySelector('style[' + f + '~="' + e.id + '"]');
        if (r) {
          if (u) return c;
          r.parentNode.removeChild(r);
        }
        if (p) {
          var o = d++;
          r = s || ( s = v() ), t = b.bind(null, r, o, !1), n = b.bind(null, r,
            o, !0);
        } else r = v(), t = function (e, t) {
          var n = t.css, r = t.media, o = t.sourceMap;
          r && e.setAttribute('media', r);
          l.ssrId && e.setAttribute(f, t.id);
          o && ( n += '\n/*# sourceURL=' + o.sources[0] +
            ' */', n += '\n/*# sourceMappingURL=data:application/json;base64,' +
            btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + ' */' );
          if (e.styleSheet) e.styleSheet.cssText = n; else {
            for (; e.firstChild;) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n));
          }
        }.bind(null, r), n = function () {r.parentNode.removeChild(r);};
        return t(e), function (r) {
          if (r) {
            if (r.css === e.css && r.media === e.media && r.sourceMap ===
              e.sourceMap) return;
            t(e = r);
          } else n();
        };
      }
      
      var y, _ = ( y = [], function (e, t) {
        return y[e] = t, y.filter(Boolean).
          join('\n');
      } );
      
      function b (e, t, n, r) {
        var o = n ? '' : r.css;
        if (e.styleSheet) e.styleSheet.cssText = _(t, o); else {
          var i = document.createTextNode(o), a = e.childNodes;
          a[t] && e.removeChild(a[t]), a.length
            ? e.insertBefore(i, a[t])
            : e.appendChild(i);
        }
      }
    },
    function (e, t, n) {
      'use strict';
      var r = n(0);
      n.n(r).a;
    },
    function (e, t, n) {
      ( e.exports = n(2)(!1) ).push([
        e.i,
        '\n.dragArea[data-v-387b92c8] {\n  width: 200px;\n  margin: auto;\n  min-height: 50px;\n  outline: 1px dashed;\n}\n',
        '']);
    },
    function (e, t, n) {
      'use strict';
      var r = n(1);
      n.n(r).a;
    },
    function (e, t, n) {
      ( e.exports = n(2)(!1) ).push([
        e.i,
        '\n.dragArea[data-v-e1a1a612] {\n  width: 200px;\n  margin: auto;\n  min-height: 50px;\n  outline: 1px dashed;\n}\n',
        '']);
    },
    function (e, t, n) {
      'use strict';
      n.r(t);
      var r = function () {
        var e = this.$createElement, t = this._self._c || e;
        return t('ul', { staticClass: 'ux-tree' }, this._l(this.list,
          function (e) {
            return t('tree-Node', { key: e.title, attrs: { 'node-data': e } });
          }), 1);
      };
      r._withStripped = !0;
      var o = function () {
        var e = this, t = e.$createElement, n = e._self._c || t;
        return n('li', {
          on: {
            dragover: function (t) {
              return t.stopPropagation(), e.onDragOver(t);
            }, drop: function (t) {return t.stopPropagation(), e.onDrop(t);},
          },
        }, [
          e.nodeData.children
            ? n('span',
            { staticClass: 'ux-tree-switcher', on: { click: e.onExpand } })
            : e._e(),
          e._v(' '),
          n('span', {
            ref: 'selector',
            attrs: { draggable: 'true' },
            on: {
              dragstart: function (t) {
                return t.stopPropagation(), e.onDragStart(t);
              },
              dragend: function (t) {return t.stopPropagation(), e.onDragEnd(t);},
            },
          }, [e._v(e._s(e.nodeData.title))]),
          e._v(' '),
          e.nodeData.children && e.nodeData.children.length ? n('ul',
            e._l(e.nodeData.children, function (e) {
              return n('tree-node', { key: e.title, attrs: { 'node-data': e } });
            }), 1) : e._e()]);
      };
      o._withStripped = !0;
      var i = {
        name: 'tree-node',
        props: {
          nodeData: {
            required: !0,
            type: Object,
            default: function () {
              return {
                _id: null,
                title: '',
                isExpand: !0,
                noDrag: !1,
                noDrop: !1,
                children: [],
              };
            },
          },
        },
        components: {},
        data: function () {return { tree: null };},
        created: function () {
          var e = this.$parent;
          e.isTree
            ? this.tree = e
            : this.tree = e.tree, this.nodeData._id = this.generateId();
        },
        methods: {
          onExpand: function () {},
          onDragOver: function (e) {
            this.tree.$emit('tree-node-drag-over', e,
              this), event.preventDefault();
          },
          onDrop: function (e) {
            this.tree.$emit('tree-node-drop', e, this), e.preventDefault();
          },
          onDragStart: function (e) {
            this.tree.$emit('tree-node-drag-start', e, this);
          },
          onDragEnd: function (e) {
            this.tree.$emit('tree-node-drag-end', e, this);
          },
          generateId: function () {
            return Math.random().
              toString(36).
              substring(2);
          },
        },
      };
      n(4);
      
      function a (e, t, n, r, o, i, a, s) {
        var d, u = 'function' == typeof e ? e.options : e;
        if (t && ( u.render = t, u.staticRenderFns = n, u._compiled = !0 ), r &&
        ( u.functional = !0 ), i && ( u._scopeId = 'data-v-' + i ), a
          ? ( d = function (e) {
            ( e = e || this.$vnode && this.$vnode.ssrContext || this.parent &&
              this.parent.$vnode && this.parent.$vnode.ssrContext ) ||
            'undefined' == typeof __VUE_SSR_CONTEXT__ ||
            ( e = __VUE_SSR_CONTEXT__ ), o && o.call(this, e), e &&
            e._registeredComponents && e._registeredComponents.add(a);
          }, u._ssrRegister = d )
          : o && ( d = s
          ? function () {o.call(this, this.$root.$options.shadowRoot);}
          : o ), d) if (u.functional) {
          u._injectStyles = d;
          var c = u.render;
          u.render = function (e, t) {return d.call(t), c(e, t);};
        } else {
          var l = u.beforeCreate;
          u.beforeCreate = l ? [].concat(l, d) : [d];
        }
        return { exports: e, options: u };
      }
      
      var s = a(i, o, [], !1, null, '387b92c8', null);
      s.options.__file = 'src/tree-node.vue';
      var d = s.exports, u = .25, c = 2;
      var l = {
        name: 'draggable-tree',
        props: { list: { required: !0, type: Array } },
        components: { treeNode: d },
        data: function () {
          return {
            isTree: !0,
            dragState: { dragOverNode: null, dropPosition: '', dragNode: null },
          };
        },
        created: function () {
          this.$on('tree-node-drag-start', this.onNodeDragStart), this.$on(
            'tree-node-drag-over', this.onNodeDragOver), this.$on(
            'tree-node-drag-end', this.onNodeDragEnd), this.$on(
            'tree-node-drop', this.onNodeDrop);
        },
        methods: {
          onNodeDragOver: function (
            e, t) {
            this.dragState.dropPosition = function (
              e, t) {
              var n = e.clientY, r = t.getBoundingClientRect(), o = r.top,
                i = r.bottom, a = r.height, s = Math.max(a * u, c), d = 'mid';
              return n <= o + s ? d = 'top' : n >= i - s && ( d = 'bottom' ), d;
            }(event, t.$refs.selector);
          },
          onNodeDrop: function (e, t) {
            console.log('drop');
            var n = this, r = this.dragState, o = r.dragNode,
              i = r.dropPosition, a = o.nodeData, s = o.$parent.nodeData;
            s || Object.defineProperty(s = {}, 'children', {
              get: function () {return n.list;},
              set: function (e) {console.log(e), n.list.children = e;},
            });
            var d = t.nodeData, u = t.$parent.nodeData;
            if (u || Object.defineProperty(u = {}, 'children', {
              get: function () {return n.list;},
              set: function (e) {console.log(e), n.list.children = e;},
            }), a._id !== d._id) if (s.children.splice(s.children.indexOf(a),
              1), 'mid' === i) d.children ? d.children.push(a) : this.$set(d,
              'children', [a]); else {
              var c = u.children.indexOf(d);
              'top' === i ? u.children.splice(c, 0, a) : u.children.splice(
                c + 1, 0, a);
            }
          },
          onNodeDragStart: function (e, t) {
            console.log('drag start', t), this.dragState.dragNode = t;
          },
          onNodeDragEnd: function (e) {this.dragState.dragNode = null, this.dragState.dropPosition = '';},
        },
      }, f = ( n(6), a(l, r, [], !1, null, 'e1a1a612', null) );
      f.options.__file = 'src/draggable-tree.vue';
      var p = f.exports;
      p.install = function (e) {e.component(p.name, p);};
      t.default = p;
    }]);
});
