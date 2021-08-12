import React, { Component } from 'react';
class Counter extends Component {
  state = { 
    items: [0, 7]
   }

    formatValue = () => {
      if(this.state.items[0]== 0) return 'Zero';
      else return this.state.items[0];
   }
    handleIncrement = () => {
      const array = [...this.state.items];
      array[0]++;

      this.setState({
        items: array
      })
    }
    handleDecrement = () => {
      const array = [...this.state.items];
      array[0]--;

      this.setState({
        items: array
      })

    }

    handleReset = () => {
      const array = [...this.state.items];
      array[0] =0;

      this.setState({
        items: array
      })

    }
  render() { 
    return ( 
      <>     

          <div className="card border-success mb-3" style={{'max-width': '18rem', 'margin':'100px auto'}}>
            <div className="card-header bg-dark font-weight-bold text-white border-light text-center "><h1>Counter</h1></div>
              <div className="card-body text-success">
                <p className="card-text">
                  <div className="row">
                  <h1 className="text-center text-dark" id="text">{this.formatValue()}</h1>

                  </div>
                  <div className="row mt-2">
                    <div className="col-md-4">
                    <button className="btn btn-dark w-100 h-100" onClick={this.handleDecrement}>-</button>
                    </div>
                    <div className="col-md-4">
                    <button className="btn btn-dark w-100 h-100" onClick={this.handleReset}>Reset</button>

                    </div>
                    <div className="col-md-4">
                    <button className="btn btn-dark w-100 h-100" onClick={this.handleIncrement}>+</button>
                    </div>
                  
                  </div>

                </p>
            </div>
            <div className="card-footer  border-dark bg-dark">         
            </div>
          </div>
       
      </>
     );
  }
}
 
export default Counter;