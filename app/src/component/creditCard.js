import React, { Component } from 'react';
//import logo from './logo.svg';
//import '../App.css';
//import {CreditCardValidate} from './creditCardValidate'
import Loading from '../component/loading'
import _ from 'lodash'
import PropTypes from 'prop-types';

export default class CreditCard extends Component {

  constructor(props){
    super(props);
    this.state= {
    
      loading : false  
    }

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event){

    event.preventDefault();
    this.setState({
      loading : true
    });
  }
  
  render() {
    //const {creditCardValidate} = this.state;
    const {creditCardValidate} = this.props;
    return (
            <div className="user-form">
            

              <form onSubmit={this.onSubmit} method="post">
                <div className="card-bounding">



                  <div className="card-container">
                      <input placeholder="User Name"  />
                  </div>

                  <aside>Card Number:</aside>
                  <div className="card-container">
                      <div className="card-type"></div>
                      <input placeholder="0000 0000 0000 0000" onChange = {(e) => {
                          
                          creditCardValidate.validate(e);
                      }} />
                      <div className="card-valid" >&#xea10;</div>
                  </div>

                  <div className="card-details clearfix">
                      <div className="expiration">
                        <aside>Expiration Date</aside>
                        <input onChange={(e) => {
                          
                          creditCardValidate.expiry(e);
                        }} maxLength="7" placeholder="mm yyyy" />
                      </div>

                      <div className="cvv">
                        <aside>CVV</aside>
                        <input placeholder="XXX"/>
                      </div>

                  </div>

                  <div className="">
                      <button type="submit"> Submit </button>
                      {this.state.loading ? <Loading /> : null }
                  </div>

                </div>
              </form>

              

            </div>

    );
  }
}

 
