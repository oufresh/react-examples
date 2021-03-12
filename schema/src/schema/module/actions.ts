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