import React, { useState, useRef } from "react";

const User = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [dateNumber, setDateNumber] = useState('')

  const cvcRef = useRef(null)
  const dateRef = useState(null)

  const HandleInput = e =>{
    const val = e.target.value
    setCardNumber(val)
    if(val.length === 16){
      cvcRef.current.focus()
    }
  }
  const HandleInputDate = e  => {
    const val = e.target.value
    setDateNumber(val)
    if(val.length === 3){
      dateRef.current.focus()
    }
  }  
  return (
    <div className="w-50 mx-auto">
      <div className="border p-3 mt-5">
        <input type="text" className="form-control" placeholder="Card number" onChange={HandleInput} value={cardNumber}/>
        <input ref={cvcRef} type="text" className="form-control mt-2" placeholder="Secure number" onChange={HandleInputDate} value={dateNumber}/>
        <input ref={dateRef} type="text" className="form-control mt-2" placeholder="Date/Month"/>
      </div>
    </div>
  )
}


const App = () => {
  return <User firstName="elnoza" lastName="mamatova" link="youtube.com" />
}

export default App;