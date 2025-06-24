import { useState } from 'react';
import '../style/ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Message sent!');
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />

        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />

        <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} />

        <textarea name="message" placeholder="Your Message" rows="6" value={formData.message} onChange={handleChange} required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactPage;