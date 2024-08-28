import { useLocation, useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location)
  return (
    <div>
        <h1>Home Page</h1>
        <button onClick={() => navigate('/about')}>Go To About Page</button>
        <button onClick={() => navigate('/filter')}>Go to Filter Page</button>
    </div>
  )
}

export default Home