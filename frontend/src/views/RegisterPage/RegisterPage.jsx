import { useState, useContext } from "react";
import AuthContext from "../../context/AuthContext";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const { registerUser } = useContext(AuthContext);

  const handleSubmit = async e => {
    e.preventDefault();
    registerUser(username, password, password2);
  };

  return (
    <div className='login-form'>
    <div className="card my-log-card">
    <div className="card-body">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <hr />
        <div>
          <label htmlFor="username" className="form-label my-log-label">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            onChange={e => setUsername(e.target.value)}
            placeholder="Username"
            required
          />
        </div>
        <br></br>
        <div>
          <label htmlFor="password" className="form-label my-log-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </div>
        <br/>
        <div>
          <label className="form-label my-log-label" htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="confirm-password"
            onChange={e => setPassword2(e.target.value)}
            placeholder="Confirm Password"
            required
          />
          <p>{password2 !== password ? "Passwords do not match" : ""}</p>
        </div>
        <br/>
        <button className="btn my-reg-btn">Register</button>
      </form>
      </div>
      </div>
    </div>
  );
}

export default Register;