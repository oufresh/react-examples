import * as React from 'react'
import { store, useStore } from './hookstore'

// setting the store initial state
store.state = 0

function StatefulHello() {
  const [timesClicked, updateTimesClicked] = useStore()

  return (
    <div>
      <h2>The button inside this component was clicked {timesClicked} times</h2>
      <button
        type="button"
        onClick={() => updateTimesClicked(timesClicked + 1)}
      >
        Update
      </button>
    </div>
  )
}

export { StatefulHello }
