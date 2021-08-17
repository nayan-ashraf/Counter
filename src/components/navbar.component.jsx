import React, { Component } from 'react';
class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
          <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                    <div className="container-fluid ">
                        <a className="navbar-brand mx-auto text-white" href="#">
                           <h4>
                           <span className="text-danger">C</span>ounter <span className="badge bg-secondary">4</span>
                           </h4>
                        </a>
                    </div>
                </nav>
         );
    }
}
 
export default Navbar;