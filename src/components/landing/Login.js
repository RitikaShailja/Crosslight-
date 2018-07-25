import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './style.css'
import InputElement from './InputElement'
import AxiosCall from './../AxiosCall';
import { Link } from 'react-router-dom';

export default class Example extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      fields:{},
      errors:{}
    }
  }
  handleValidation(){
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    
    if(!fields["email"]){
      formIsValid = false;
      errors["email"] = "Cannot be empty";
    }
    if(typeof fields["email"] !== "undefined"){
      let lastAtPos = fields["email"].lastIndexOf('@');
      let lastDotPos = fields["email"].lastIndexOf('.');

    if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 &&  lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
    }
    this.setState({
      errors: errors
    });
    return formIsValid;
  }
  contactSubmit(e){
    e.preventDefault();

    if(this.handleValidation()){
      alert("Form submitted");
    }
    else{
      alert("Form has errors");
    }
  }
  handleChange(field,e){
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({fields});
  }
  tiktik(){
      this.props.history.push({
          pathname : "./axios"
      })
  }
  
  render() {
    return (
      <div>
          <button onClick={this.tiktik.bind(this)}>tiktik</button>      	
        <form name="contactform" className="contactform" onSubmit= {this.contactSubmit.bind(this)}>
          <div className="col-md-6">
            <fieldset className="border">
                <h4>Login</h4>
                <InputElement 
                    width ="98%"
                    height ="30px"
                    placeholder="sample@gmail.com"
                    onChange={this.handleChange.bind(this, "email")} 
                    value={this.state.fields["phone"]}

                />
                <span className="error">{this.state.errors["email"]}</span>
                <h4>Password</h4>
                <InputElement
                    type="password" 
                    width ="98%"
                    height ="30px"
                    placeholder="***********"
                    onChange={this.handleChange.bind(this, "passw")} 
                    value={this.state.fields["passw"]}

                />
              <span className="error">{this.state.errors["passw"]}</span>
            </fieldset>
          </div>
          <div className="col-md-12">
            <fieldset className="border">
              <button className="btn btn-lg pro" id="submit" value="Submit">Send Message</button>
            </fieldset>
          </div>
        </form>
        
      </div>
    );
  }
}
