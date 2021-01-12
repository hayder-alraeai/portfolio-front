import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Profile from './pages/Profile';
import Admin from './pages/Admin'
import About from './pages/About'
import Home from './pages/Home'
import Login from './pages/Login'
import { Route, Switch } from "react-router-dom";
import Register from './pages/Register';
function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/login">
                <Login />
            </Route>
            <Route exact path="/about">
                <About />
            </Route>
            <Route exact path="/admin">
                <Admin />
            </Route>
            <Route exact path="/profile">
                <Profile />
            </Route>
            <Route exact path="/register">
                <Register />
            </Route>
            <Route exact path="/logout">
                <Home />
            </Route>
        </Switch>
    </div>
  );
}

export default App;
