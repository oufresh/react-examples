export function getObject(
  canvas: fabric.Canvas | fabric.StaticCanvas | null,
  objectName: string,
  objType?: string
) {
  const found = canvas?.getObjects().find((o) => {
    if (objType) {
      return o.type === "line" && o.name === objectName;
    }
    return false;
  });
  return found;
}
