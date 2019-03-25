import { useState } from 'react'

export type StoreSetterFunction = (value: any) => any

export interface IStore {
  state: any
  setState: StoreSetterFunction
  setters: Array<any>
}

//function takin n any parameters
export type SetterFunction = (...args: any[]) => any

export const store: IStore = {
  state: {},
  setState(value: any) {
    this.state = value
    this.setters.forEach((setter: SetterFunction) => setter(this.state))
  },
  setters: [],
}

store.setState = store.setState.bind(store)

// this is the custom hook we'll call on components.
export function useStore(): [any, StoreSetterFunction] {
  const [state, set] = useState(store.state)
  if (!store.setters.includes(set)) {
    store.setters.push(set)
  }

  return [state, store.setState]
}
