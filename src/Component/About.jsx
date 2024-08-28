import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1> About Page</h1>
      <Link to="/user/anil" state={{name:'Anil Sindhu', age:27}}>Anil</Link>
      <br />
      <Link to="/user/peter">Peter</Link>
    </div>
  );
};

export default About;
