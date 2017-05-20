import React, { Component } from 'react';
import {email, password2, mobilePhone, username} from '../utils/RegEx';

export default class Profile extends Component{
  constructor(props){
    super(props);

    this.isValidated = this.isValidated.bind(this);

    this.state = {
      emailValid: '',
      userNameValid: '',
      mobileValid: '',
    }
  }

  errors = {
    email: 'Please provide a valid email address',
    username: 'Please enter a valid user name',
    mobile: 'Please enter a valid mobile phone number',
  };

  isValidated() {
    this.state.emailValid = email.test(this.refs.email.value);
    this.state.mobileValid = mobilePhone.test(this.refs.mobile.value);
    this.state.userNameValid = username.test(this.refs.username.value) && (this.refs.username.value.length > 5);

    if(!this.state.mobileValid){
      this.refs.mobile.className = 'form-control-error';
      this.refs.mobile.focus();
    }else{
      this.refs.mobile.className = 'form-control';
    }
    if(!this.state.userNameValid){
      this.refs.username.className = 'form-control-error';
      this.refs.username.focus();
    }else{
      this.refs.username.className = 'form-control';
    }
    if(!this.state.emailValid){
      this.refs.email.className = 'form-control-error';
      this.refs.email.focus();
    }else{
      this.refs.email.className = 'form-control';
    }
    this.forceUpdate();
    return (this.state.emailValid && this.state.userNameValid && this.state.mobileValid);
  }

  componentDidMount(){
    this.refs.email.focus();
  }


  renderForm(){
    return (
      <div className="step profile">
        <div className="row">
          <form id="Form" className="form-horizontal">
            <div className="form-group">
              <label className="col-md-12 control-label">
                <h1>Your Profile</h1>
              </label>
            </div>
            <div className="form-group col-md-12 content form-block-holder">
              <label className="control-label col-md-4">
                Email Address
              </label>
              <div className="no-error col-md-8">
                <input
                  ref="email"
                  autoComplete="off"
                  type="email"
                  defaultValue={this.props.model.email}
                  onChange={() => {this.props.model.email = this.refs.email.value}}
                  placeholder="shibu@shibu.com"
                  className="form-control"
                  required />
                {this.state.emailValid === false && <div className="error-box">
                  <p className="error-text">{this.errors.email}</p>
                </div>}
              </div>
            </div>
            <div className="form-group col-md-12 content form-block-holder">
              <label className="control-label col-md-4">
                User Name
              </label>
              <div className="no-error col-md-8">
                <input
                  ref="username"
                  autoComplete="off"
                  type="text"
                  defaultValue={this.props.model.username}
                  onChange={() => {this.props.model.username = this.refs.username.value}}
                  placeholder="Please enter username."
                  className="form-control"
                  required />
                {this.state.userNameValid === false && <div className="error-box">
                  <p className="error-text">{this.errors.username}</p>
                </div>}
              </div>
            </div>
            <div className="form-group col-md-12 content form-block-holder">
              <label className="control-label col-md-4">
                Mobile Phone
              </label>
              <div className="no-error col-md-8">
                <input
                  ref="mobile"
                  autoComplete="off"
                  type="text"
                  defaultValue={this.props.model.mobile}
                  onChange={() => {this.props.model.mobile = this.refs.mobile.value}}
                  placeholder="Please enter mobile phone number."
                  className="form-control"
                  required />
                {this.state.mobileValid === false && <div className="error-box">
                  <p className="error-text">{this.errors.mobile}</p>
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
