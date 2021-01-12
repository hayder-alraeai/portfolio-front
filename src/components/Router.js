import '../App.css';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Router() {

  return (
        <div className="nav">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/logout">Logout</Link></li>
                <li><Link to="/admin">Admin</Link></li>
            </ul>
        </div>
  );
}

export default Router;