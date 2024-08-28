import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
       
      <Link to="/about">About</Link>
      <br />
      <Link to="/">Home</Link>
    </div>
  );
};

export default Navbar;
