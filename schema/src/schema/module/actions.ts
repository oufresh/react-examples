export type SaveGeometries = {
    type: "SaveGeometries",
    payload: {
    geometries: Array<any>//,
    //changed: Array<string | number>
    }
};
export type ToggleEditing = {
    type: "ToggleEditing",
    payload: boolean
};

export type SelectObjects = {
    type: "SelectObjects",
    payload: Array<any>
};

export type DeSelectObjects = {
    type: "DeSelectObjects",
    payload: Array<any>
};