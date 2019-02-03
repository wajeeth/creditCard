
import React, { Component } from 'react';
//import logo from '../logo.svg';
import logo from '../images/loading.jpg';
import '../css/loading.css';

export default class Loading extends Component {

  // fake authentication Promise
  authenticate(){
    return new Promise(resolve => setTimeout(resolve, 2000))
  }

  componentDidMount(){
    this.authenticate().then(() => {
      const ele = document.getElementById('ipl-progress-indicator')
      if(ele){
        // fade out
        ele.classList.add('available')
        setTimeout(() => {
          // remove from DOM
          ele.outerHTML = ''
        }, 2000)
      }
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">

          <img src={logo} className="App-logo" alt="logo" />
          
        </div>
        <p className="App-intro">
          
        </p>
      </div>
    );
  }
}



