export function dragRelatedObjects(
  canvas: fabric.Canvas,
  e: fabric.IEvent,
  geometries: Array<any>
): void {}

//return updated geometries after dragging
export function drageEnd(e: fabric.IEvent, geometries: Array<any>): Array<any> {
  const gs = [];
  if (e.target) {
    //const geom = geometries.find(g => g.name === target.name);
    const target = e.target as fabric.Object | any;
    const t = e.transform as any;
    const dy = (e.target.top as number) - t.original.top;
    const dx = (e.target.left as number) - t.original.left;
    gs.push({
      name: target.name,
      type: target.type,
      dx,
      dy
    });
    if (target.data) {
      if (target.data.connections && target.data.connections.length > 0) {
        for ( const conn of target.data.connections) {
        //const c = target.data.connections[0];
        const ancored = geometries.find((g) => g.name === conn.name);
        console.log(ancored);
        const ancorPoint = ancored.data.p1 === target.name ?  "p1" : "p2";
        gs.push({
          name: ancored.name,
          type: ancored.type,
          dx,
          dy,
          ancorPoint
        });
      }
      }
    }
  }
  return gs;
}
