import './Contact.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
function Contact() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_lih30gz', 'template_b5194ub', form.current, 'oQ5i0iCEerm3AD_X5')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className="contact">
            <div className="main-title">
                <h1>GET IN TOUCH</h1>
                <p>Please fill out the form below to send us an email and we will get back to you as soon as possible.</p>
            </div>
            <div className="container">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name" placeholder='Name' required />
                    <input type="email" name="user_email" placeholder='Email' required />
                    <textarea name="message" placeholder='Message' required />
                    <input className='sub' type="submit" value="SEND MESSAGE" required />
                </form>
                <div className="info">
                    <div className="address"><span>Address</span> <br /> 4321 California St, San Francisco, CA 12345</div>
                    <div className="phone"><span>Phone</span> <br /> +2126 01479046</div>
                    <div className="email"><span>Email</span> <br /> ayoubimejad12@gmail.com</div>
                </div>
            </div>
        </div>
    )
}
export default Contact;