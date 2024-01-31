import { useState } from 'react';
import axios from 'axios';// Make sure to import useNavigate if you are using it with React Router
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import route from './apis/routes'

function App() {
  const [username, setUserID] = useState();
  const [password, setPassword] = useState();
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignin = async (e) => {
    console.log(username, password);
    console.log(`Login attempt with username: ${username} and password: ${password}`);
    e.preventDefault();
    try {
      const response = await axios.post(route.signIn, {
        username,
        password,
      });
      if (response.status === 200) {
        const token = response.data.token;
        localStorage.setItem('token', token); 
        //await navigate('/Card');
      }
      else{
        setErrorMessage(response.data)
      }
    } catch (error) {
      if (error.response && error.response.status === 201) {
        setErrorMessage('User already registered');
      } else {
        setErrorMessage('An error occurred');
      }
  }
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSignin}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>User ID</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter User ID"
              required=""
              onChange={(e) => setUserID(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              required=""
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="button" onClick={handleSignin} className="btn btn-success">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">{/* Forgot <a href="#">password?</a> */}</p>
        </div>
      </form>
    </div>
  );
}

export default App;
