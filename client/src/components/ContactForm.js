import React from "react";

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.props.handleChange(e);
    }
    handleSubmit(e) {
        e.preventDefault();     
        this.props.handleSubmit();
    }

    render() {
        let name = this.props.name;
        let email = this.props.email;
        let message = this.props.message;
        return (
            <div className='contactFormDiv'>
                <h2>Contact Me!</h2>
                <p>Use this form to send me an E-mail so we can get in touch!</p>
                <form 
                    onSubmit={this.handleSubmit}
                    className='contactForm'
                >
                    <label>
                        Name:
                        <input
                            type='text'
                            name='name'
                            required={true}
                            value={name}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        E-mail:
                        <input
                            type='email'
                            name='email'
                            required={true}
                            value={email}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        Message:
                        <textarea
                            type='text'
                            name='message'
                            required={true}
                            value={message}
                            onChange={this.handleChange}
                        >
                        </textarea>
                    </label>
                    <input className='button' type='submit' value='Send E-mail'/>
                </form>
            </div>
        );
    }
}

export default ContactForm;