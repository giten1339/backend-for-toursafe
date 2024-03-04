import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/nav.css";

// import { useProductContext } from "../context/StoreContext";
export const Navbar = () => {
  const { logout, user } = useProductContext();
  console.log(user);
  const navigate = useNavigate(); // Initialize useNavigate
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <h2>E-park </h2>
        </div>
        <div>
          <ul>

            {user!==""?(
              <>
              
            <NavLink to="/profile">
            <li>
              <a>Profile</a>
            </li>
            </NavLink>
              <NavLink to="/parking">
              <li>
                <a>Book a Spot</a>
              </li>
            </NavLink>


            </>

            ):(
              <NavLink to="/">
              <li>
                <a>Home</a>
              </li>
              </NavLink>

            )

            }
            

            <NavLink to="/contact">
              <li>
                <a>Contact</a>
              </li>
            </NavLink>

            {user!==""?(
              <li>
              <button onClick={() => logout()} className="logoutbtn">Logout</button>

              </li>
            ):""
            }

          </ul>
        </div>
      </div>
    </>
  );
};