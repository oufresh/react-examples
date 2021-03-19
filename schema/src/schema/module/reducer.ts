import { SaveGeometries, ToggleEditing, SelectObjects, DeSelectObjects } from "./actions";
import { SchemaStateType } from "./type";

const reducer = (
  state: SchemaStateType | undefined = { geometries: [], editing: false, editingGeometries: [], selected: [] },
  action: SaveGeometries | ToggleEditing | SelectObjects | DeSelectObjects
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
        editingGeometries: action.payload.geometries,
        selected: state.selected
      };
    case "ToggleEditing":
      return {
        editing: !state.editing,
        geometries: state.geometries,
        editingGeometries: [],
        selected: state.selected
      };
      case "SelectObjects":
        return {
          geometries: state.geometries,
          editing: state.editing,
          editingGeometries: state.editingGeometries,
          selected: action.payload
        };
        case "DeSelectObjects":
        return {
          geometries: state.geometries,
          editing: state.editing,
          editingGeometries: state.editingGeometries,
          selected: [] //for now clean all not deselected in event
        };
    default:
      //console.log(state);
      return state;
  }
};

export default reducer;
