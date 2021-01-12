import React, { useState } from 'react'
import logo from '../logo.svg';
import '../App.css';
import Router from '../components/Router'

const Header = () => {
    const [isLogedIn, setIsLogedIn] = useState(true)




    if (isLogedIn) {
        return(
            <header className="App-header">
            <div className="container">
                <div className="logo-title">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="logo-title">Hayder Alraeai</h1>
                </div>
                <Router />
            </div>
      </header>
        )
    }
    return(
        <header className="App-header">
            <div className="container">
                <div className="logo-title">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="logo-title">Hayder Alraeai</h1>
                </div>
                <Router />
            </div>
      </header>
    )
}
export default Header