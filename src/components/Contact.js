import React, { useRef } from 'react';
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const form = useRef();
const [status, setStatus] = useState({});
const [buttonText, setButtonText] = useState('Send');
  const sendEmail = (e) => {
    e.preventDefault();
     setButtonText("Sending...");

    emailjs.sendForm(`${process.env.REACT_APP_SERV}`, `${process.env.REACT_APP_TEMP}` , form.current, `${process.env.REACT_APP_PUB}`)
      .then((result) => {
          console.log(result.text);
            setStatus({ succes: true, message: 'Message sent successfully'});
            setButtonText("Submitted successfully");
      }, (error) => {
          console.log(error.text);
            setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
            setButtonText("Oops,Submission failed");
      });
  };



  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form ref={form} onSubmit={sendEmail}>
                  <Row>

                    <Col size={12} md={6} className="px-1">
                    <input type="text" name="user_name"  placeholder='Your Name'/>
                    </Col>
                    <Col size={12} md={6}  className="px-1" >
                    <input type="email" name="user_email" placeholder='Your Email' />
                    </Col>

                    <Col  md={12} className="px-1">
                      <textarea rows="6" name="message" placeholder='Your Text'></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                    {
                     status.message &&
                     <Col>
                       <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                     </Col>
                   }
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
