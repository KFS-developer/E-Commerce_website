import '../style/ServicePage.css';

const services = [
  {
    title: 'Fast Delivery',
    description: 'We ensure quick and safe delivery to your doorstep with real-time tracking.',
    icon: '🚚',
  },
  {
    title: '24/7 Customer Support',
    description: 'Our support team is available around the clock to assist you.',
    icon: '📞',
  },
  {
    title: 'Easy Returns',
    description: 'Not satisfied? Enjoy hassle-free returns within 30 days.',
    icon: '🔄',
  },
  {
    title: 'Secure Payments',
    description: 'Your transactions are encrypted and 100% secure.',
    icon: '🔒',
  },
];

const ServicePage = () => {
  return (
    <div className="services-container">
      <h1 className="services-title">Our Services</h1>
      <p className="services-subtitle">We offer top-notch features to enhance your experience.</p>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicePage;
