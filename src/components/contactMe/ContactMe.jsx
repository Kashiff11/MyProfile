import React from "react";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <div className="form_container">
        <h2>Contact Me</h2>
        <form onSubmit={this.submitForm} action="https://formspree.io/f/xknpqvzn" method="POST" className="form">
          <div className="input_containers">
            <input type="name" name="name" placeholder="Full Name" className="name_input"/>
          </div>
          <div className="input_containers">
            <input type="email" name="email" placeholder="Email"/>
          </div>
          <div className="input_containers">
            <textarea type="text" name="message" placeholder="Your Message."/>
          </div>
          {status === "SUCCESS" ? <p>Thank you for reaching out! I will be in touch soon.</p> : <button className="contact_submit">Submit</button>}
          {status === "ERROR" && <p>Sorry! There was an error.</p>}
          </form>
        </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}