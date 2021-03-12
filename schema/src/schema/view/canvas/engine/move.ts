export function dragRelatedObjects(
  e: fabric.IEvent,
  geometries: Array<any>
): void {}

//return updated geometries after dragging
export function drageEnd(e: fabric.IEvent, geometries: Array<any>): Array<any> {
  return geometries;
}
