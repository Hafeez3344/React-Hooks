 import React, { Component } from 'react'
 
 export default class ClasssState extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         counter:0
      }
    }

    Increase = () =>{
        this.setState({
            counter: this.state.counter + 1
        })
    }

    Decrease = () =>{
        this.setState({
            counter: this.state.counter - 1
        })
    }
    
   render() {
     return (
       <div>
         <h1>Counter With Class State</h1>

         <h1>{this.state.counter}</h1>
         <button onClick={this.Increase}>Increment</button>
         <button onClick={this.Decrease}>Decrement</button>

       </div>
     )
   }
 }
 