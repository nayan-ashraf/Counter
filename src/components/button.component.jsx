import React, { Component } from 'react';

class Button extends Component {
    state = {  }
    render() { 
        return ( 
            <button className="btn btn-dark m-2" onClick={this.props.action}>
            {this.props.buttonInnerText}
          </button>
         );
    }
}
 
export default Button;