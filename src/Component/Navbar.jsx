import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/about">About</Link>
      <br />
      <Link to="/">Home</Link>
      <br />
     
    </div>
  );
};

export default Navbar;
