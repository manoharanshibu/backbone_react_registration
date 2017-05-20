import React, { Component } from 'react';
import {alphaNumeric2} from '../utils/RegEx';

export default class Profile extends Component{
  constructor(props){
    super(props);

    this.isValidated = this.isValidated.bind(this);

    this.state = {
      firstNameValid: '',
      lastNameValid: '',
    }
  }

  errors = {
    firstName: 'Please provide a valid first name',
    lastName: 'Please enter a valid last name',
  };

  componentDidMount(){
    this.refs.firstname.focus();
  }

  isValidated() {
    this.state.firstNameValid = alphaNumeric2.test(this.refs.firstname.value) && (this.refs.firstname.value.length > 2);
    this.state.lastNameValid = alphaNumeric2.test(this.refs.lastname.value) && (this.refs.lastname.value.length > 2);

    if(!this.state.lastNameValid){
      this.refs.lastname.className = 'form-control-error';
      this.refs.lastname.focus();
    }else{
      this.refs.lastname.className = 'form-control';
    }
    if(!this.state.firstNameValid){
      this.refs.firstname.className = 'form-control-error';
      this.refs.firstname.focus();
    }else{
      this.refs.firstname.className = 'form-control';
    }

    this.forceUpdate();
    return (this.state.firstNameValid && this.state.lastNameValid);
  }

  renderForm(){

    return (
      <div className="step personal">
        <div className="row">
          <form id="Form" className="form-horizontal">
            <div className="form-group">
              <label className="col-md-12 control-label">
                <h1>Your Personal Details</h1>
              </label>
            </div>
            <div className="form-group col-md-12 content form-block-holder">
              <label className="control-label col-md-4">
                First Name
              </label>
              <div className="no-error col-md-8">
                <input
                  ref="firstname"
                  autoComplete="off"
                  type="text"
                  defaultValue={this.props.model.firstName}
                  onChange={() => {this.props.model.firstName = this.refs.firstname.value}}
                  placeholder="Please enter first name."
                  className="form-control"
                  required />
                {this.state.firstNameValid === false && <div className="error-box">
                  <p className="error-text">{this.errors.firstName}</p>
                </div>}
              </div>
            </div>
            <div className="form-group col-md-12 content form-block-holder">
              <label className="control-label col-md-4">
                Last Name
              </label>
              <div className="no-error col-md-8">
                <input
                  ref="lastname"
                  autoComplete="off"
                  type="text"
                  defaultValue={this.props.model.lastName}
                  onChange={() => {this.props.model.lastName = this.refs.lastname.value}}
                  placeholder="Please enter last name."
                  className="form-control"
                  required />
                {this.state.lastNameValid === false && <div className="error-box">
                  <p className="error-text">{this.errors.lastName}</p>
                </div>}
              </div>
            </div>
          </form>
        </div>
        <br/><br/><br/>
      </div>
    )
  }

  render(){
    return (
      this.renderForm()
    );
  }

}
