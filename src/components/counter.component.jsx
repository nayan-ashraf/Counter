import React, { Component } from "react";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

class Counter extends Component {

  formatValue () {
    if( this.props.value == 0) {
      return "Zero";
    }
    else return this.props.value;
  }


  render() {
    return (
      <div>
        <button className="btn btn-dark m-2" title="Delete" onClick = {() =>this.props.delete ( this.props.id )}>
        <FontAwesomeIcon icon={faTrash} style={{'color': 'red'}}/> 
        </button>
        <span
          className="text-center text-dark m-2"
          style={{ display: "inline-block", width: "100px" }}
        >
          <h6> {this.formatValue()} </h6>
        </span>
        <button className="btn btn-dark m-2" onClick = {() => this.props.onDecrement(this.props.id)} >
        <FontAwesomeIcon icon={faMinus} /> 
        </button>
        <button className="btn btn-dark m-2" onClick = {() =>this.props.onReset( this.props.id )} >Reset</button>
        <button
          className="btn btn-dark m-2"
          onClick={() => this.props.onIncrement( this.props.id )}
        >
          <FontAwesomeIcon icon={faPlus} /> 
        </button>

        {/* onClick={() => this.props.onDecrement(this.props.id)} */}
      </div>
    );
  }
}

export default Counter;
