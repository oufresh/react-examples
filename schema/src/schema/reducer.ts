import { SaveGeometries, ToggleEditing } from "./actions";
import { SchemaStateType } from "./type";

const reducer = (
  state: SchemaStateType | undefined = { geometries: [], editing: false },
  action: SaveGeometries | ToggleEditing
): SchemaStateType => {
  switch (action.type) {
    case "SaveGeometries":
      const ns = [];
      for (const elem of state.geometries) {
        ns.push(elem);
      }
      return {
        geometries: ns,
        editing: state.editing,
      };
    case "ToggleEditing":
      return {
        editing: !state.editing,
        geometries: state.geometries,
      };
    default:
      //console.log(state);
      return state;
  }
};

export default reducer;
