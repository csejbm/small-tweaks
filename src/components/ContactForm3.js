import React, { Component } from "react";
import refreshIcon from '../img/refresh-icon@2x.png';

class ContactForm3 extends Component {
  
  constructor() {
    super();
    this.handleChange={
      message: this.handleChange.bind(this, 'message'),
      name: this.handleChange.bind(this, 'name'),
      email: this.handleChange.bind(this, 'email'),
      phone: this.handleChange.bind(this, 'phone')
    }
    this.state = {
      showHideContactForm1: false,
      done: false,
      message: '',
      name: '',
      email: '',
      phone: '',
    };
    this.hideComponent = this.hideComponent.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  hideComponent(name,) {
    console.log(name);
    switch (name) {
      case "showHideContactForm1":
        this.setState({ showHideContactForm1: !this.state.showHideContactForm1 });
        break;
      default:
        this.setState(null);
    }
  }

refreshComponent(name,) {
    console.log(name);
    switch (name) {
      case "refreshContactForm":
        this.setState({ done: !this.state.done });
        break;
      default:
        this.setState(null);
    }
  }

  handleChange(name, event) {
    this.setState({ [name]: event.target.value });
  }

  handleSubmit (event) {
    event.preventDefault()

    const templateId = 'template_IClyReLt';
    this.sendFeedback(templateId, {message_html: this.state.message, from_name: this.state.name, reply_to: this.state.email, phone: this.state.phone});
    }

  
    sendFeedback (templateId, variables) {
      window.emailjs.send("mailgun", 'template_IClyReLt', variables, "user_DAxRhCUOWyZbMpVlmpKOk").then(res => {
        this.setState({ done: true});
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    }

  render() {
    const { showHideContactForm1 } = this.state;
    const { done } = this.state;
    return ( 
    <div>
        <h3 className="mx-auto"><b>Deep down, I just want to be happy</b></h3>
        <div className="text-left">
        <p>Good choice. Although we can’t promise you happiness, we can help your business out. And hey, that could make you truly happy after all :)</p>
        { !done && 
        <div>
          <div>
            {showHideContactForm1 && <p style={{paddingTop: 12}}>Let’s have a chat…</p>}
          </div>
          <form id="contactForm1" className="contact_form text-left" onSubmit={this.handleSubmit}>
            
            {showHideContactForm1 && 
            
          <div>
            <label htmlFor="name">Your Name</label><br />
            <input type="text" id="name" required name="name" onChange={this.handleChange.name} value={this.state.name} style={{width: "100%"}} /><br />
            <label htmlFor="email">Work Email</label><br />
            <input type="email" id="email" name="email" onChange={this.handleChange.email} value={this.state.email} required style={{width: "100%"}} /><br />
            <label htmlFor="phone">Phone</label><br />
            <input type="tel" id="phone" name="phone" onChange={this.handleChange.phone} value={this.state.phone} style={{width: "100%"}} /><br />
            <div className="text-center">
              <input type="submit" className="mx-auto contact-button smallred" value="Send" />
            </div>
          </div>  
          }
          </form>
        </div>}
        <div className="text-center mx-auto">
        {!showHideContactForm1 && <button className="mx-auto contact-button smallred" onClick={() => this.hideComponent("showHideContactForm1")}>
            Next
        </button>}
        <br />
        </div>
      </div>
      { done && 
        <div>
          <p className="success">We got your message, and we’ll get back to you shortly.</p>
          <button className="refresh" onClick={() => this.refreshComponent("refreshContactForm")}><img src={refreshIcon} width={38} alt="refresh form" className="success" /></button>
        </div>
      }
    </div>
    );
  }
}

export default ContactForm3;