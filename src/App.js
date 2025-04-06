import React, { useState, useRef } from "react";
import './App.css'

const User = () => {
  const [cardNumber, setCardNumber] = useState('')

  const cvcRef = useRef(null)

  const HandleInput = e =>{
    const val = e.target.value
    setCardNumber(val)
    if(val.length === 16){
      cvcRef.current.focus()
    }
  } 
  return (
    <div className="w-50 mx-auto">
      <div className="border p-3 mt-5">
        <h1 className="center mb-3 fs-3">Register</h1>
        <div className="d-flex gap-3">
        <input type="text" className="form-control" placeholder="Firstname" onChange={HandleInput} value={cardNumber}/>
        <input ref={cvcRef} type="text" className="form-control" placeholder="Lastname"/>
        </div>
        <button className="btn btn-success mt-3">Send Data</button>
      </div>
    </div>
  )
}


const App = () => {
  return <User firstName="elnoza" lastName="mamatova" link="youtube.com" />
}

export default App;