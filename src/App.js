import React, { useState } from "react";
import './App.css'

const App = () => {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')

  const validateInput = text => {
    if (text.search(/\d/) > - 0) {
      return true
    } else {
      return false
    }
  }

  const validateColorFirstname = validateInput(firstname) ? 'text-danger' : null
  const validateColorLastname = validateInput(lastname) ? 'text-danger' : null

  return (
    <div className="w-50 mx-auto">
      <div className="border p-3 mt-5">
        <h1 className="center mb-3 fs-3">Register</h1>
        <div className="d-flex gap-3">
          <input type="text" className={`form-control ${validateColorFirstname}`} placeholder="Firstname" onChange={e => setFirstname(e.target.value)} value={firstname} />
          <input type="text" className={`form-control ${validateColorLastname}`} placeholder="Lastname" value={lastname} onChange={e => setLastname(e.target.value)}/>
        </div>
        <button className="btn btn-success mt-3">Send Data</button>
      </div>
    </div>
  )
}


export default App;