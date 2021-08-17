import React, { Component } from 'react';
import Counters from './counters.component';
import Navbar from './navbar.component';
class App extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={{'width':'400px', 'margin': '0 auto'}} className="mt-5">
            <Navbar/>
              <Counters />
              </div>
         );
    }
}
 
export default App;