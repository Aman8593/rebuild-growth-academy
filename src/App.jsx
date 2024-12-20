import "./App.scss";

function App() {
  return (
    <>
      <div className="navbar ">
        <h1 className="navbar-logo">Rebuild Growth Academy</h1>
        <ul className="nav-link">
          <li>
            <a href="default.asp">Home</a>
          </li>

          <li>
            <a href="contact.asp">Contact</a>
          </li>
          <li>
            <a href="about.asp">About</a>
          </li>
        </ul>
      </div>
      <div className="home">
        <img className="img" href="/public/bull.jpg" alt="bull" />
        <div>
          <h1>Learn to trade in the most simplified way.</h1>
          <p>
            Rebuild Growth Academy is the best stock market institute that
            provides the most simplified and to-the-point stock market course
            from the scratch for beginners.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
