const DRAG_SIDE_RANGE = 0.25;
const DRAG_MIN_GAP = 2;

export function calcDragOverGap(e, el) {
  const { clientY } = e;
  const { top, bottom, height } = el.getBoundingClientRect();
  const offset = Math.max(height * DRAG_SIDE_RANGE, DRAG_MIN_GAP);
  let gap = 'mid';
  if (clientY <= top + offset) {
    gap = 'top';
  } else if (clientY >= bottom - offset) {
    gap = 'bottom';
  }
  return gap;
}
