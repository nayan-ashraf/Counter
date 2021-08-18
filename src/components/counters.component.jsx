import React, { Component } from "react";
import Counter from "./counter.component";

class Counters extends Component {

  render() {
    return (
      <>
        

        {/* <button className="btn btn-dark m-2 " onClick={this.addNewCounter}>
          Add A New Counter
        </button> */}

      
          <Counter
            key = {this.props.id}
            value = {this.props.value}
            id = {this.props.id}
            onIncrement = { this.props.onIncrement}
            onDecrement = { this.props.onDecrement}
            onReset = { this.props.onReset }
            delete = { this.props.delete }
          />
        
      </>
    );
  }
}

export default Counters;

// 1. arrow function ( without curly brace )
// 2. map, filter, forEach
// 3. find, indexOf
