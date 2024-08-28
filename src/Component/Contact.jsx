import { Link, Outlet } from "react-router-dom"


const Contact = () => {
  return (
    <div>
        <h1>Contact US</h1>
        <h2>Here we have Some Other Business</h2>
        <Link to="company">Company</Link>
        <br />
        <Link to="channel">Channel</Link>
        <br />
        <Link to="other">Other</Link>
        <Outlet />

    </div>
  )
}

export default Contact