import './Navbar.css';
import { Link } from "react-router-dom";
import logo from './logo.jpeg'


export default function navbar() {
    const currentPath = window.location.pathname ;
    function getActivClass(path){
        return currentPath === path ? 'page-activ':'';
    }
    return(
        <div>
        <nav className="navbar navbar-expand-lg d-flex  bg-black border-bottom border-body" data-bs-theme="dark">
            <div className="container-fluid  dsplay-flex">
                <img src={logo} alt='logo' className="logo" />
                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
                        <li className="nav-item ms-5">
                            <Link className={getActivClass('/')} to="/">Home</Link>
                        </li>
                        <li className="nav-item ms-5">
                            <Link className={getActivClass('/about')} to="/about">About</Link>
                        </li>
                        <li className="nav-item ms-5">
                            <Link className={getActivClass('/contact')} to="/contact">Contact</Link>
                        </li>
                        {/* <li className="nav-item ms-5">
                            <Link className={getActivClass('/login')} to="/login">Login</Link>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>   
    </div>
    );
}