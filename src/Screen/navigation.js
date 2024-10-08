import React, { Component } from "react";
import { Link } from "react-router-dom";
import './navigation.css'

export default class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark ">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Gym
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/exercice">
                EJERCICIOS
            
                </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/routines">
                RUTINAS
                </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/nutricion">
                NUTRICIÓN
                </Link>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
