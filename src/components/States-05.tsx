import { useState } from "react"

const States = () => {
  const [state, setState] = useState(false);
  const handleState = () => {
    setState(!state);
  }
  return (
    <div className="app">
        <h1 className="stateTit">States</h1>
        <button className={state ? 'states-button' : 'states-button blueB'} onClick={handleState}>Click me</button>
    </div>
  )
}

export default States