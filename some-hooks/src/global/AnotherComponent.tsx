import * as React from 'react'
import { useStore } from './hookstore'

function AnotherComponent(): React.ReactElement<void> {
  const [timesClicked] = useStore()
  /* this would not be the same state from StatefulHello
    const [ timesClicked, updateTimesClicked] = useState() */
  return (
    <div>
      <h2>{timesClicked} times the user clicked on the button.</h2>
    </div>
  )
}

export { AnotherComponent }
