import React, { Component } from 'react';
import Counters from './counters.component';
import Navbar from './navbar.component';
import Button from './button.component';

class App extends Component {
    
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
    
      // Increment counter value 
      handleIncrement = (id) => {
        const single_counter = this.state.counters.map((counter, idx) => {
          if (counter.id === id) return { id: idx, value: counter.value + 1 };
          else return counter;
        });
        
        this.setState({ counters: single_counter });
      }
    
    // Decrement counter value 
      handleDecrement = (id) => {
        const single_counter = this.state.counters.map((counter, idx) => {
            if (counter.id === id && counter.value >0 ) return { id: idx, value: counter.value - 1 };
            else return counter;
          });
      
          this.setState({ counters: single_counter });
          console.log(this.state.counters.length)
      }

    //    reset value on single counter
      handleReset = (id) => {
        const single_counter = this.state.counters.map((counter, idx) => {
            if (counter.id === id) return { id: idx, value: 0 };
            else return counter;
          });
          
          this.setState({ counters: single_counter });
      }
    
      // reset all counter value 
      handleAllReset = () => {
        const single_counter = this.state.counters.map((counter, idx) => {
            return { id: idx, value: 0 } 
        });
          
          this.setState({ counters: single_counter });
      }
    
      // delete single counter
    handleDelete = (id) => {
        const all_counter = this.state.counters.filter((counter) => {
            if( counter.id !== id) return true;
        });
        
        this.setState({ counters: all_counter });
    }

    //  create a new counter
    addNewCounter = () => {
        const generate_id = this.state.counters.length;
        const new_counters_array = [...this.state.counters, { id: generate_id, value: 0}]
     
        this.setState ({ counters: new_counters_array })        
    }

    // non-zero counter 
    handleNonZeroItems = () => {
        let count = 0;
        this.state.counters.forEach(counter => {
            if(counter.value > 0) count++;
        })
        return count;
    }

    
    render() { 
        return ( 
            <div style={{'width':'400px', 'margin': '0 auto'}} className="mt-5">
                
                <Navbar 
                    onNonZeroItems={this.handleNonZeroItems()} 
                />

                <Button 
                    action={this.handleAllReset}
                    buttonInnerText = "Reset All"
                />
                <Button 
                    action={this.addNewCounter}
                    buttonInnerText = "Add A New Counter"
                />

                {this.state.counters.map((counter) => {
                    return <Counters 
                    key={counter.id}
                    value={counter.value}
                    id={counter.id}
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                    onReset={this.handleReset}
                    delete={this.handleDelete}
                    />
                })              
                }
              </div>
         );
    }
}
 
export default App;