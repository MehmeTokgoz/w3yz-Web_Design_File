import "./pageFooter.css";
import Facebook from "../../images/f.svg";
import Instagram from "../../images/Instagram.svg";
import Twitter from "../../images/twitter.svg";
import Youtube from "../../images/youtube.svg";
import Pinterest from "../../images/pinterest.svg";
import LinkedIn from "../../images/linkedin.svg";
import Pseudo from "../../images/pseudo.svg";

function PageFooter() {
  return (
    <div className="main-footer-container">
      <div className="row mb-4">
        <div className="col-lg-7">
          <div className="footer-headings-left d-flex justify-content-between">
            <div className="col-md-2 col-sm-2 col-xs-2">
              <h5 className="heading">HAKKIMIZDA</h5>
              <ul>
                <li>Galeri hakkında</li>
                <li>Ziyaret Kuralları</li>
                <li>Bizi desteklemek isteyenler için</li>
              </ul>
            </div>
            <div className="col-md-1 col-sm-1 col-xs-1"></div>
            <div className="col-md-2 col-sm-2 col-xs-2">
              <h5 className="heading">WEBSİTEMİZ</h5>
              <ul>
                <li>Online bilet al</li>
                <li>Mağaza</li>
                <li>Koleksiyonlar</li>
              </ul>
            </div>
            <div className="col-md-2 col-sm-2 col-xs-2">
              <h5 className="heading">CONTACT</h5>
              <ul>
                <li>Sıkça sorulan sorular</li>
                <li>İletişime geç</li>
                <li>bize fikir verin</li>
                <li>Kariyer</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="vr mx-0 p-0 d-lg-block"></div>
        <div className="col-lg-4">
          <div className="footer-right social mt-0 ms-3 mb-3 d-flex flex-column justify-content-start">
            <div className="d-flex">
              <div className="d-flex justify-content-between">
                <h5 className="heading">BİZİ TAKİP ET </h5>
                {/* <div className="divider" /> */}
                <img className="pseudo-line" src={Pseudo} alt="" />
              </div>
            </div>
            <div className="d-flex flex-row justify-content-between">
              <div className="icon-container d-flex flex-row justify-content-center align-items-center">
                <img src={Facebook} alt="" />
              </div>
              <div className="icon-container d-flex flex-row justify-content-center align-items-center">
                <img src={Instagram} alt="" />
              </div>
              <div className="icon-container d-flex flex-row justify-content-center align-items-center">
                <img src={Twitter} alt="" />
              </div>
              <div className="icon-container d-flex flex-row justify-content-center align-items-center">
                <img src={Youtube} alt="" />
              </div>
              <div className="icon-container d-flex flex-row justify-content-center align-items-center">
                <img src={Pinterest} alt="" />
              </div>
              <div className="icon-container d-flex flex-row justify-content-center align-items-center">
                <img src={LinkedIn} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="divider"> </div>
      <div className="row justify-content-center align-items-center">
        <div className="footer-legal-privacy-cookie col-4 col-md-2">
          Legal Notice
        </div>
        <div className="footer-legal-privacy-cookie col-4 col-md-2">
          Privacy Policy
        </div>
        <div className="footer-legal-privacy-cookie col-4 col-md-2">
          Cookies
        </div>
      </div>
    </div>
  );
}

export default PageFooter;
