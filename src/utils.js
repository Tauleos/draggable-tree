//import warning from 'warning';
export function isDef(v) {
  return v !== null && v !== undefined;
}

export function isFunction(fn) {
  return typeof fn === "function";
}
export function getNodeKey(node, rowKey, treeStore) {
  let { key } = node;
  if (rowKey) {
    key = isFunction(rowKey) ? rowKey(node) : node[rowKey];
  }

  if (!isDef(key)) {
    //    warning(
    //      false,
    //      'Each record in dataSource of tree should have a unique `key` prop, or set `rowKey` to an unique primary key'
    //    );
    const { seed } = treeStore;
    const id = seed + 1;
    key = `$$id_${id}`;
    // eslint-disable-next-line
    treeStore.seed = id;
  }

  return key;
}

const DRAG_SIDE_RANGE = 0.25;
const DRAG_MIN_GAP = 2;

export function calcDragOverGap(e, el) {
  const { clientY } = e;
  const { top, bottom, height } = el.getBoundingClientRect();
  const offset = Math.max(height * DRAG_SIDE_RANGE, DRAG_MIN_GAP);
  let gap = "mid";
  if (clientY <= top + offset) {
    gap = "top";
  } else if (clientY >= bottom - offset) {
    gap = "bottom";
  }
  return gap;
}
