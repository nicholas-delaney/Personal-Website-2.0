import React from "react";
import axios from "axios";
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      message: '',
      formSuccess: null,
      errors: null,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit() {      
      // send POST request to server with email info
      axios.post('/contact', {
          name: this.state.name,
          email: this.state.email,
          message: this.state.message,
      })
      .then((res) => {
          this.setState({
            name: '',
            email: '',
            message: '',
            formSuccess: res.data.formSuccess 
          });
      })
      .catch((err) => {
          this.setState({
            formSuccess: false,
            errors: err,
          });
      });
  } 

  render() {
    let name = this.state.name;
    let email = this.state.email;
    let message = this.state.message;
    let formSuccess = this.state.formSuccess;
    // change style.display of success message on this.state.formSuccess
    return (
      <div className='contactContent'>
        <ContactInfo />
        {
          formSuccess && 
            <div className='formSuccess'>
              <h2>Your E-mail has been sent successfully!</h2>
              <p>Thank you for your interest in getting in touch with me, I will get back to you as soon as I can!</p> 
            </div>
        }
        <ContactForm 
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          name={name}
          email={email}
          message={message}
        />
      </div>
    );
  }
}

export default Contact;