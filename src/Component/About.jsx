import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1> About Page</h1>
      <Link to="/user/anil">Anil</Link>
      <br />
      <Link to="/user/peter">Peter</Link>
    </div>
  );
};

export default About;
