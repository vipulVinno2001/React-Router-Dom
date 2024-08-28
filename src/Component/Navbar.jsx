import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/about">About</Link>
      <br />
      <Link to="/">Home</Link>
      <br />
      <Link to="/filter">Filter</Link>
      <br />
      <Link to="/contact">Contact</Link>
     
    </div>
  );
};

export default Navbar;
