import "./Navbar.css";
import { IoSearchSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar-wrapper">
          <img src="./navbar.svg" alt="" />
          <div className="nav-wrap">
            <div className="nav-medium">
              <input type="text" placeholder="Serach" />
            </div>
            <div className="nav-icon-box">
              <a href="">
                {" "}
                <IoSearchSharp className="icon" />
              </a>
            </div>
          </div>
          <p>Your Account</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
