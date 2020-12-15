import { SaveGeometries, ToggleEditing } from "./actions";
import { SchemaStateType } from "./type";

const reducer = (
  state: SchemaStateType | undefined = { geometries: [], editing: false, editingGeometries: [] },
  action: SaveGeometries | ToggleEditing
): SchemaStateType => {
  switch (action.type) {
    case "SaveGeometries":
      const ns = [];
      for (const elem of state.geometries) {
        ns.push(elem);
      }
      return {
        geometries: state.geometries,
        editing: state.editing,
        editingGeometries: action.payload.geometries
      };
    case "ToggleEditing":
      return {
        editing: !state.editing,
        geometries: state.geometries,
        editingGeometries: []
      };
    default:
      //console.log(state);
      return state;
  }
};

export default reducer;
