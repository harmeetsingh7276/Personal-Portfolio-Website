import React , { useRef } from 'react';
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rrqfagj', 'template_cf4jxan', form.current, 'BuJGLCxL2DSsw3cK4')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">

          <article className="contact_option">
          <MdOutlineEmail className='contact_option_icon'/>
            <h4>Email</h4>
            <h5>harmeetsingh7276@gmail.com</h5>
            <a href="mailto:harmeetsingh7276@gmail.com" target='_blank'>Send a Message</a>
          </article>

          <article className="contact_option">
          <RiMessengerLine className='contact_option_icon'/>
            <h4>Messenger</h4>
            <h5>Harmeet Singh Gorowada</h5>
            <a href="https://m.me/harmeet.singh.376043" target='_blank'>Send a Message</a>
          </article>

          <article className="contact_option">
          <BsWhatsapp className='contact_option_icon'/>
            <h4>Whastapp</h4>
            <h5>+91 7276720124</h5>
            <a href="https://api.whatsapp.com/send?phone+917276720124" target='_blank'>Send a Message</a>
          </article>

        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact