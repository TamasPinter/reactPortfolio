import React from "react";

function Contact () {
  return(
      // <!-- Contact Section-->
      <section className="page-section" id="contact" class="p-5 mb-4 bg-light container-fluid py-5">
          <div className="container"> 
              {/* <!-- Contact Section Heading--> */}
              <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
              {/* <!-- Icon Divider--> */}
             
              {/* <!-- Contact Section Form--> */}
              <div className="row justify-content-center">
                  <div className="col-lg-8 col-xl-7">
                      {/* <!-- * * * * * * * * * * * * * * *-->
                      <!-- * * SB Forms Contact Form * *-->
                      <!-- * * * * * * * * * * * * * * *-->
                      */}
                      <form id="contactForm" data-sb-form-api-token="7abbae9f-c0a5-4c84-8554-4e6da348b5bb">
                          {/* <!-- Name input--> */}
                          <div className="form-floating mb-3">
                              <input className="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                              <label htmlFor="name">Full name</label>
                              <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                          </div>
                          {/* <!-- Email address input--> */}
                          <div className="form-floating mb-3">
                              <input className="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                              <label htmlFor="email">Email address</label>
                              <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                              <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                          </div>
                          {/* <!-- Phone number input--> */}
                          <div className="form-floating mb-3">
                              <input className="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
                              <label htmlFor="phone">Phone number</label>
                              <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                          </div>
                          {/* <!-- Message input--> */}
                          <div className="form-floating mb-3">
                              <textarea className="form-control" id="message" type="text" placeholder="Enter your message here..." style={{height: "10rem"}} data-sb-validations="required"></textarea>
                              <label htmlFor="message">Message</label>
                              <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                          </div>
                          {/* <!-- Submit success message--> */}
                          {/* <!----> */}
                          {/* <!-- This is what your users will see when the form--> */}
                          {/* <!-- has successfully submitted--> */}
                          <div className="d-none" id="submitSuccessMessage">
                              <div className="text-center mb-3">
                                  <div className="fw-bolder">Thank You! I will be in contact with you soon 😁</div>

                                  <br />
                              </div>
                          </div>
                          {/* <!-- Submit error message--> */}
                          {/* <!----> */}
                          {/* <!-- This is what your users will see when there is--> */}
                          {/* <!-- an error submitting the form--> */}
                          <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                          {/* <!-- Submit Button--> */}
                          <button className="btn btn-primary btn-xl" id="submitButton" type="submit">Send</button>
                      </form>
                  </div>
              </div>
          </div>
      </section>
  )
}

export default Contact;