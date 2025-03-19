import React, { useEffect, useRef } from "react";

const User = () => {
  const cvcRef = useRef(null)

  useEffect(() => {
    console.log(cvcRef.current);
    
  })
  
  return (
    <div className="w-50 mx-auto">
      <div className="border p-3 mt-5">
        <input type="text" className="form-control" placeholder="Card number"/>
        <input ref={cvcRef} type="text" className="form-control mt-2" placeholder="Secure number"/>
      </div>
    </div>
  )
}


const App = () => {
  return <User firstName="elnoza" lastName="mamatova" link="youtube.com" />
}

export default App;