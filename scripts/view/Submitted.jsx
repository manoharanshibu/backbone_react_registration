import React, { Component } from 'react';
export default class Profile extends Component{
  constructor(props){
    super(props);

    this.state = {
      status : '',
    }
  }

  componentDidMount(){
    /*service.doRegister(JSON.stringify(this.props.model))
      .then(this.onRegistrationSuccess.bind(this))
      .catch(this.onRegistrationFailure.bind(this));*/
    this.onRegistrationSuccess();
  }

  onRegistrationSuccess(){
      this.setState({ status: 'Registered Successfully' });
  }

  onRegistrationFailure(){
    this.setState({ status: 'Registration Failed' });
  }

  renderForm(){
    return (
      <div className="step submitted">
        <div className="row">
            <div className="form-group">
              <label className="col-md-12 control-label">
                <h1>{ this.state.status }</h1>
              </label>
            </div>
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
