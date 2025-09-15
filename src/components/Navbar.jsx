import React from "react";

import { Link } from "react-router-dom";
const Navbar =()=>{
 
    return (
      <div >
        <nav className="navbar fixed-top navbar-expand-sm bg-body-black navbar-light bg-dark" >
          <div className="container-fluid" style={{color:"white"}} >
            {/* <Link className="navbar-brand" to="/">bg-body-black */}
             <b>NEWS</b>
            {/* </Link> */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
             
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/general" style={{color:"white"}}>
                    Home
                  </Link>
                </li>
                {/* <li className="nav-item"><a Link  className="nav-link" to="/">About</a></li> */}

                <li className="nav-item">
                  <Link className="nav-link" to="/business" style={{color:"white"}}>
                    Business
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link" to="/general">
                    General
                  </Link>
                </li> */}
                <li className="nav-item">
                  {" "}
                  <Link className="nav-link" to="/entertainment" style={{color:"white"}}>
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/science" style={{color:"white"}}>
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/health"style={{color:"white"}} >
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sports"style={{color:"white"}} >
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/technology" style={{color:"white"}}>
                    Technology
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }


export default Navbar;
