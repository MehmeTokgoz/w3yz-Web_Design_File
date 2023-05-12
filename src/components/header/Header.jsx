// import React from 'react'
import "./header.css";
import Logo1 from "../../images/Logo_HAPPY GALERİ.svg";
import Logo from "../../images/Logo_Warm.svg";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="row">
              <div className="col d-flex flex-row justify-content-left align-items-center ">
                <a
                  className="logo-anchor"
                  href="#"
                >
                  <img className="logo-warm" src={Logo} alt="" />
                  <img className="happy-galery" src={Logo1} alt="" />
                </a>
              </div>
              <div className="col d-flex justify-content-around align-items-center">
                <nav className="navbar">
                  <div>
                    <ul className="navbar-nav d-flex flex-row justify-content-around">
                      <li className="nav-item mx-2">
                        <a href="" className="nav-link nav-link-texts">
                          Hakkımızda
                        </a>
                      </li>
                      <li className="nav-item mx-2">
                        <a href="" className="nav-link nav-link-texts">
                          SIkça SOrulan Sorular
                        </a>
                      </li>
                      <li className="nav-item mx-2">
                        <a href="" className="nav-link nav-link-texts">
                          Galeri
                        </a>
                      </li>
                      <li className="nav-item mx-2">
                        <a href="" className="nav-link nav-link-texts">
                          İletişim
                        </a>
                      </li>
                      <li className="nav-item mx-2">
                        <a href="" className="nav-link nav-link-texts">
                          Giriş Yap
                        </a>
                      </li>
                      <li className="nav-item mx-2">
                        <a href="" className="nav-link nav-link-texts">
                          Alışveriş (0)
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
