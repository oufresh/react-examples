export interface ITimer {
    running: boolean
    value: number
}

export const initialValue: ITimer = {
    running: false,
    value: 0
};