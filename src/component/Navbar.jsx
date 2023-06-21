import { useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  function handle() {
    document.querySelector("div .navbar-collapse").classList.toggle("show");
  }
  useEffect(() => {
    document.querySelectorAll(".nav-link").forEach((ele) => {
      ele.addEventListener('click', (e) => {
        // e.preventDefault(); 
        document.querySelector(`.${(e.target.textContent).toLocaleLowerCase()}`).scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  });

  //navbar navbar-expand-lg  navbar-fixed-top
  return (
    <div className="header sticky-top">
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">REACT LANDING PAGE</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={handle}>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active p-lg-3" aria-current="page" href='#features'>FEATURES</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link p-lg-3" href="#about">ABOUT</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link p-lg-3" href="#services">SERVICES</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link p-lg-3" href="#gallery">GALLERY</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link p-lg-3" href="#testimonials">TESTIMONIALS</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link p-lg-3 " href="#team">TEAM</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link p-lg-3" href="#contact">CONTACT</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>



  );
}
export default Navbar;
