import React, { Component } from 'react';
import CreditCardValidate from '../creditCardValidate'
import CreditCard from './creditCard'

export default class App extends Component {

	constructor(props){
    super(props);
    this.state= {
    	
    	creditCardValidate : new CreditCardValidate(),
    }
  }


	render(){
		const {creditCardValidate} = this.state;
		return(
				<div>
					<CreditCard  creditCardValidate = {creditCardValidate} />
				</div>
			)
	}
}