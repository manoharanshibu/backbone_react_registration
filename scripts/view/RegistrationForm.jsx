import React, { Component } from 'react';
import Welcome from './Welcome.jsx';
import Profile from './Profile.jsx';
import Personal from './Personal.jsx';
import Submitted from './Submitted.jsx';
//import StepZilla from 'react-stepzilla';
import StepZilla from '../utils/main';
import RegistrationModel from '../model/RegistrationModel';



export default class RegistrationForm extends Component{
  constructor(props){
    super(props);

    this.model = new RegistrationModel();
  }

  renderForm(){

    const steps =
      [
        {name: 'Welcome', component: <Welcome />},
        {name: 'Profile', component: <Profile />},
        {name: 'Personal', component: <Personal />},
        {name: 'Submitted', component: <Submitted />},
      ]

     return (
      <div className="container">
        <div className='step-progress' style={{maxWidth: '600px'}}>
          <StepZilla steps={steps} model={this.model} />
        </div>
      </div>
    );
  }


  render(){
    return (
       this.renderForm()
    );
  }
}
