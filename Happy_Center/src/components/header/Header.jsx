import "./header.css";
import Logo1 from "../../images/Logo_HAPPY GALERİ.svg";
import Logo from "../../images/Logo_Warm.svg";

function Header() {
  return (
    <header className="header container-fluid">
      <div className="row d-flex justify-content-between">
        <div className="col">
          <a className="logo-anchor" href="#">
            <img className="logo-warm" src={Logo} alt="" />
            <img className="happy-galery" src={Logo1} alt="" />
          </a>
        </div>
        <div className="col">
          <nav className="navbar">
            <div>
              <ul className="navbar-nav d-flex flex-row mx-auto">
                <li className="nav-item mx-2">
                  <a href="" className="nav-link nav-link-texts mx-auto">
                    Hakkımızda
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a href="" className="nav-link nav-link-texts mx-auto">
                    Sıkça Sorulan Sorular
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a href="" className="nav-link nav-link-texts mx-auto">
                    Galeri
                  </a>
                </li>
                <li className="nav-item mx-2 ">
                  <a href="" className="nav-link nav-link-texts mx-auto">
                    İletişim
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a href="" className="nav-link nav-link-texts mx-auto">
                    Giriş Yap
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a href="" className="nav-link nav-link-texts mx-auto">
                    Alışveriş (0)
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
export default Header;
