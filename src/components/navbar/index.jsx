import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <h1 className="navbar-brand" href="#">
            Fantastic Fitness Friend
          </h1>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  to="home"
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="pastWorkouts" className="nav-link" href="#">
                  Past Workouts
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="currentWorkouts" className="nav-link" href="#">
                  Current Workouts
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="futureWorkouts" className="nav-link">
                  Future Workouts
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
