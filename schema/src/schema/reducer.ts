import { SaveGeometries } from "./actions"
import { StateType } from "./store";

const reducer = (state: StateType = [], action: SaveGeometries) => {
    switch (action.type) {
      case  "SaveGeometries":
          const ns = [];
          for (const elem of state) {
              ns.push(elem);
          }
          return ns;
      default:
          console.log(state);
        return state;
    }
  }

  export default reducer;