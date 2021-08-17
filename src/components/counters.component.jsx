import React, { Component } from "react";
import Counter from "./counter.component";

class Counters extends Component {
  state = {
    counters: [
      { id: 0, value: 0 },
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
    ],
  };

  //This is for Incrementing counter value 
  handleIncrement = (id) => {
    const single_counter = this.state.counters.map((counter, idx) => {
      if (counter.id === id) return { id: idx, value: counter.value + 1 };
      else return counter;
    });
    
    this.setState({ counters: single_counter });
  }

//This is for Decrementing counter value 
  handleDecrement = (id) => {
    const single_counter = this.state.counters.map((counter, idx) => {
        if (counter.id === id && counter.value >0 ) return { id: idx, value: counter.value - 1 };
        else return counter;
      });
  
      this.setState({ counters: single_counter });
      console.log(this.state.counters.length)
  }

  //This is for Reset single counter value 
  handleReset = (id) => {
    const single_counter = this.state.counters.map((counter, idx) => {
        if (counter.id === id) return { id: idx, value: 0 };
        else return counter;
      });
      
      this.setState({ counters: single_counter });
  }

  //This is for reseting all counter value 
  handleAllReset = () => {
    const single_counter = this.state.counters.map((counter, idx) => {
        return { id: idx, value: 0 } 
    });
      
      this.setState({ counters: single_counter });
  }

  //This is for deleting single counter
handleDelete = (id) => {
    const all_counter = this.state.counters.filter((counter) => {
        if( counter.id !== id) return true;
    });
    
    this.setState({ counters: all_counter });
}

addNewCounter = () => {
    const generate_id = this.state.counters.length;
    const new_counters_array = [...this.state.counters, { id: generate_id, value: 0}]
    

    // const new_data = this.state.counters.push(
    //     {
    //         id: generate_id,
    //         value: 0
    //     }
    // );
    this.setState (
        {
            counters: new_counters_array
        }
    )


    
}


  render() {
    return (
      <>
        <button className="btn btn-dark m-2" onClick={this.handleAllReset}>
          Reset All
        </button>

        <button className="btn btn-dark m-2 " onClick={this.addNewCounter}>
          Add A New Counter
        </button>

        {this.state.counters.map((counter) => (
          <Counter
            key = {counter.id}
            value = {counter.value}
            id = {counter.id}
            onIncrement = { this.handleIncrement }
            onDecrement = { this.handleDecrement }
            onReset = { this.handleReset }
            delete = { this.handleDelete }
          />
        ))}
      </>
    );
  }
}

export default Counters;

// 1. arrow function ( without curly brace )
// 2. map, filter, forEach
// 3. find, indexOf
