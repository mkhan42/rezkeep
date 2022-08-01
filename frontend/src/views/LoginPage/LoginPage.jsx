import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import './LoginPage.css'

const LoginPage = () => {
  const { loginUser } = useContext(AuthContext);
  const handleSubmit = e => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    username.length > 0 && loginUser(username, password);
    // window.location.href='/home'

  };

  return (
    <div className='login-form'>
    <div className="card my-log-card">
    <div className="card-body">
      <form onSubmit={handleSubmit}>
        <h1>Login </h1>
        <hr />
        <label htmlFor="username">Username</label>
        <input className="form-control" type="text" id="username" placeholder="Enter Username" />
        <label htmlFor="password">Password</label>
        <input className="form-control" type="password" id="password" placeholder="Enter Password" />
        <button className="btn" type="submit">Login</button>
      </form>
      </div>
      </div>
      </div>
  );
};

export default LoginPage;