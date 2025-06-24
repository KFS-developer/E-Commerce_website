import '../style/AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Us</h1>
        <p>Learn more about our mission, vision, and the story behind our project.</p>
      </div>

      <div className="about-section">
        <h2>Our Mission</h2>
        <p>
          We aim to deliver high-quality products and services that bring value to our users.
          Our mission is to make shopping easier, smarter, and more enjoyable.
        </p>
      </div>

      <div className="about-section">
        <h2>Why We Started</h2>
        <p>
          This project was born out of a need for reliable, affordable, and stylish everyday items.
          We believe that great design and functionality should be accessible to everyone.
        </p>
      </div>

      <div className="about-section">
        <h2>Our Team</h2>
        <p>
          We are a passionate group of developers, designers, and dreamers working together
          to build something meaningful. Our focus is always on the user experience.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;