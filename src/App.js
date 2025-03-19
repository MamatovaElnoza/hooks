import React, { useState } from "react";

const User = () => {
  const [counter, setCount] = useState(0)
  const [active, setActive] = useState(true)

  const onIncrement = () => setCount(prevState => prevState + 1)
  const onToggle = () => setActive(prevState => !prevState)

  const colors = {
    fontWeight: 'bold',
    color: active ? 'green' : 'red'
  }

  return (
    <div className="w-50 mx-auto">
      <div className="border p-3 mt-5">
        <p className="text-center" style={colors}>User activated: {counter}</p>
        <div className="d-flex justify-content-center">
          <button className="btn btn-success" onClick={onIncrement}>Increase</button>
          <button className="btn btn-warning" onClick={onToggle}>Toggle</button>
        </div>
      </div>
    </div>
  )
}


const App = () => {
  return <User firstName="elnoza" lastName="mamatova" link="youtube.com" />
}

export default App;