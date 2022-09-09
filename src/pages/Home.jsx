import { Link } from 'react-router-dom';

function Home() {
  return (
    <nav className="nav">
      <Link to="/grocery">
        <div className="child">
          <img src="images/grocery.jpeg" alt="grocery" />
        </div>
      </Link>
      <div className="child">
        <img src="images/pharma.jpg" alt="medicaments" />
      </div>
      <div className="child">
        <img src="images/aboutus.jpg" alt="about us" />
      </div>
    </nav>
  );
}

export default Home;
