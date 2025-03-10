import React, { useState } from "react";

// class User extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { counter: 0, age: '' };
//   }

//   onPlus = () => this.setState(prevState => ({ counter: prevState.counter + 1 }))
//   onMinus = () => this.setState(prevState => ({ counter: prevState.counter - 1 }))
//   Zero = () => this.setState({ counter: 0 })

//   changeHandler = e => { this.setState({ age: e.target.value }) };

//   render() {
//     const { firstName, lastName, link } = this.props
//     const { age, counter } = this.state

//     return (
//       <div className="w-50 mx-auto">
//         <div className="border p-3 mt-5">
//           <h4>Mening ismim - {firstName}, sharifim - {lastName}, yoshim - {age}</h4>
//           <a href={link}>Youtube</a>
//           <div className="mt-3">
//             <button className="btn btn-success" onClick={this.onPlus}>
//               increment
//             </button>
//             <button className="btn btn-danger mx-2" onClick={this.onMinus}>
//               decrement
//             </button>
//             <button className="btn btn-info" onClick={this.Zero}>
//               restart
//             </button>
//             <p>{counter}</p>
//           </div>
//           <form>
//             <span>Yoshingizni kursating:</span>
//             <input className="form-control" type="text" onChange={e => this.changeHandler(e, 'sammi')} />
//           </form>
//         </div>
//       </div>
//     )
//   }
// }

const User = ({ firstName, lastName, link }) => {
  const [counter, setCount] = useState(0)

  const onIncrement = () => {
    setCount(prevCount => prevCount + 1)    
  }

  const onDicrement = () => {
    setCount(prevCount => prevCount - 1)    
  }

  const onRestart = () => {
    setCount(0)
  }
  
  return (
    <div className="w-50 mx-auto">
      <div className="border p-3 mt-5">
        <h1>Mening ismim - {firstName}, sharifim - {lastName}</h1>
        <a href={link}>Youtube</a>
        <p className="text-center">{counter}</p>
        <div className="d-flex justify-content-center">
          <button className="btn btn-success" onClick={onIncrement}>+</button>
          <button className="btn btn-danger mx-2" onClick={onDicrement}>-</button>
          <button className="btn btn-warning" onClick={onRestart}>+</button>
        </div>
      </div>
    </div>
  )
}


const App = () => {
  return (
    <>
      <User firstName="elnoza" lastName="mamatova" link="youtube.com" />
      <User firstName="iroda" lastName="po'latova" link="youtube.com" />
    </>
  )
}

export default App;