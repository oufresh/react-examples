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
        const found = action.payload.geometries.find(g => g.name === elem.name);
        if (found){
          if(found.type ==="line"){
            elem.coords = [elem.coords[0]+found.dx, elem.coords[1]+found.dy, elem.coords[2], elem.coords[3]]
          }
          elem.top +=found.dy;
          elem.left += found.dx;
            ns.push(elem);
          }
          else
          ns.push(elem);
      }
      return {
        geometries: ns,
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
