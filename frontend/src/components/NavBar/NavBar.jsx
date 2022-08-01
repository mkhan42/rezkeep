import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from '../../context/AuthContext'
import './NavBar.css'

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  console.log(user);
  const [showLink, setShowLink] = useState(false);
  return (
    <>
          {user ? (
            <nav className="my-user-nav navbar fixed-top">
            <div className="container-fluid">
            <div className="ml-auto mx-auto my-user-links">
              <Link className="my-btn btn" to="/home">Home</Link>
              <Link className="my-btn btn" to="/scheduled">Scheduled</Link>
              <Link className="my-btn btn" to="/history">History</Link>
              <Link className="my-btn btn" to="/new">Add</Link>
              <button className="my-btn btn" onClick={logoutUser}>Logout</button>
            </div>
            </div>
            </nav>
          ) : (
            <>
            <nav className="login-nav">
            <div className="auth-links">
            <h1>Welcome to <span className="my-auth-name">RezKeeper!</span></h1>
            <h3> Keep track of all your past and new restaurant visits</h3>
            <br/>
            <img src="https://media3.giphy.com/media/ko87RwG6T5XzrD9uTX/giphy.gif?cid=ecf05e47t0z3xz4smsqk05xzfhbzqhclfbcg96p1p91vem8x&rid=giphy.gif&ct=g" width="200px"/>
            <br/>
            <br/>
              <Link className="my-log-btn btn" to="/login">Login</Link> 
              <br/>
              <br/>
              <p>OR</p>
              <Link className="my-log-btn btn" to="/register">Register</Link>
            </div>
            </nav>
            </>
          )}
    </>
  );
};

export default Navbar;