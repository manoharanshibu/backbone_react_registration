import React, { Component } from 'react';
import RegistrationForm from './view/RegistrationForm';
require('./css/main.css');


export default class App extends Component {
  render() {
    return (
      // Add your component markup and other subcomponent references here.
      <div>
        <h1>Registration</h1>
        <RegistrationForm></RegistrationForm>
      </div>
    );
  }
}
