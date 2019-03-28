import * as React from 'react'
import { store, useStore } from './hookstore'
import { CounterButton } from "./CounterButton";

// setting the store initial state
store.state = 0

function StatefulHello() {
  const [timesClicked, updateTimesClicked] = useStore()

  return (
    <div>
      <h2>The button inside this component was clicked {timesClicked} times</h2>
      <CounterButton
        onClick={() => updateTimesClicked(timesClicked + 1)}
      >
        Update
      </CounterButton>
    </div>
  )
}

export { StatefulHello }
