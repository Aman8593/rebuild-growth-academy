import "./about.scss"
const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About Us</h1>
        <p>Welcome to our platform, where we provide cutting-edge tools and resources to help you become a successful trader.</p>
        <p>Our mission is to empower traders with the knowledge and tools needed to make informed decisions, maximize profits, and build long-term wealth. Join us and start mastering the art of trading today!</p>
        <button className="cta-button">Join Us Now</button>
      </div>
      <div className="about-image">
        <img src="/about.jpg" alt="Trading Tools" />
      </div>
    </div>
  );
};

export default About;
