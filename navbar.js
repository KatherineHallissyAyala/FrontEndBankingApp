import './styles.css';
//import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){
    const currLocation = window.location.hash;
    const menuItem = document.querySelectorAll("li");
    const menuLength = menuItem.length;
    console.log(currLocation);
    console.log(menuItem);
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">BadBank</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/CreateAccount/">Create Account</NavLink>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#/login/">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#/deposit/">Deposit</a>
                        </li>   
                        <li className="nav-item">
                            <a className="nav-link" href="#/withdraw/">Withdraw</a>
                        </li>   
                        <li className="nav-item">
                            <a className="nav-link" href="#/alldata">AllData</a>
                        </li> 
                    </ul>
                </div>

            </div>
        </nav>
        </>
    );
}