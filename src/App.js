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

//   componentDidMount() {
//     document.title = `Counter: ${this.state.counter}`
//     console.log('mounting');
//   }
//   componentDidUpdate() {
//     document.title = `Counter: ${this.state.age}`
//     console.log('update');
//   }
//   componentWillUnmount(){
//     alert('component will unmount!');
//     console.log('unmount');
//   }

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

const User = () => {
  const [counter, setCount] = useState(0)
  const [active, setActive] = useState(true)

  const onIncrement = () => setCount(prevState => prevState + 1)
  const onToggle = () => setActive(prevState => !prevState)

  const counterGenerate = () => {
    return new Array(counter).fill('').map((_, idx) => `Counter number: ${idx + 1}`)
  }
  console.log(counterGenerate());
  

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

  return (
    <>
      <User firstName="elnoza" lastName="mamatova" link="youtube.com" />
    </>
  )
}

export default App;