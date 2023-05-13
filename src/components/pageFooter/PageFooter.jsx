// import React from 'react'
import "./pageFooter.css";
// import Facebook from "../../images/facebook.svg"

function PageFooter() {
  return (
    <div className="main-footer-container">
      <div className="row mb-4">
        <div className="col">
          <div className="footer-headings-left d-flex justify-content-between">
            <div className="col-md-2 col-sm-2 col-xs-2">
              <h5 className="heading">HAKKIMIZDA</h5>
              <ul>
                <li>Galeri hakkında</li>
                <li>Ziyaret Kuralları</li>
                <li>Bizi desteklemek isteyenler için</li>
              </ul>
            </div>
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
        <div className="vr mx-0 p-0"></div>
        <div className="col">
          <div className="footer-right social mt-2 mb-3 d-flex flex-column justify-content-center align-items-center">
            <h5 className="heading">BİZİ TAKİP ET </h5>
            <hr/>
            <div>
              <i className="fa fa-facebook-official fa-lg mx-3" style={{color: "#ffffff"}}></i>{" "}
              <i className="fa fa-instagram fa-lg mx-3" style={{color: "#ffffff"}}></i>{" "}
              <i className="fa fa-twitter fa-lg mx-3" style={{color: "#ffffff"}}></i>{" "}
              <i className="fa-brands fa-youtube fa-lg mx-3" style={{color: "#ffffff"}}></i>
              <i className="fa fa-linkedin-square fa-lg mx-3" style={{color: "#ffffff"}}></i>{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="divider"> </div>
      <div className="row justify-content-center align-items-center">
        <div className="footer-legal-privacy-cookie col-2">Legal Notice</div>
        <div className="footer-legal-privacy-cookie col-2">Privacy policy</div>
        <div className="footer-legal-privacy-cookie col-2">Cookies</div>
      </div>
    </div>
  );
}

export default PageFooter;

/*
    <div className="card bg-white mx-5">
      <div className="row-mb-4">
        <div className="col-md-4 col-sm-4 col-xs-4">
          <div className="footer-text pull-left">
            <div className="d-flex">
              <h1 className="font-weight-bold mr-2 px-3">
                HAPPY CENTER
              </h1>
              <h1>DEVS</h1>
            </div>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
              non pariatur numquam animi nam at impedit odit nisi.
            </p>
            <div className="social mt-2 mb-3">
              {" "}
              <i className="fa fa-facebook-official fa-lg"></i>{" "}
              <i className="fa fa-instagram fa-lg"></i>{" "}
              <i className="fa fa-twitter fa-lg"></i>{" "}
              <i className="fa fa-linkedin-square fa-lg"></i>{" "}
              <i className="fa fa-facebook"></i>{" "}
            </div>
          </div>
        </div>
        <div className="col-md-2 col-sm-2 col-xs-2"></div>
        <div className="col-md-2 col-sm-2 col-xs-2">
          <h5 className="heading">Services</h5>
          <ul>
            <li>IT Consulting</li>
            <li>Development</li>
            <li>Cloud</li>
            <li>Support</li>
          </ul>
        </div>
        <div className="col-md-2 col-sm-2 col-xs-2">
          <h5 className="heading">Industries</h5>
          <ul className="card-text">
            <li>Finance</li>
            <li>Public Sector</li>
            <li>Smart Office</li>
            <li>Retail</li>
          </ul>
        </div>
        <div className="col-md-2 col-sm-2 col-xs-2">
          <h5 className="heading">Company</h5>
          <ul className="card-text">
            <li>About Us</li>
            <li>Blog</li>
            <li>Contact</li>
            <li>Join Us</li>
          </ul>
        </div>
      </div>
      <div className="divider mb-4"> </div>
      <div className="row">
        <div className="col-md-6 col-sm-6 col-xs-6">
          <div className="pull-left">
            <p>
              <i className="fa fa-copyright"></i> 2020 thezpdesign
            </p>
          </div>
        </div>
        <div className="col-md-6 col-sm-6 col-xs-6">
          <div className="pull-right mr-4 d-flex policy">
            <div>Terms of Use</div>
            <div>Privacy Policy</div>
            <div>Cookie Policy</div>
          </div>
        </div>
      </div>
    </div>

*/

// <div className="container-fluid mt-5">
//   <div className="card bg-white mx-5">
//     <div className="row mb-4">
//       <div className="col-md-4 col-sm-4 col-xs-4">
//         <div className="footer-text pull-left">
//           <div className="d-flex">
//             <h1
//               className="font-weight-bold mr-2 px-3"
//               style="color:white; background-color:#957bda"
//             >
//               {" "}
//               T{" "}
//             </h1>
//             <h1 style="color: #957bda">Devs</h1>
//           </div>
//           <p className="card-text">
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//             Commodi non pariatur numquam animi nam at impedit odit nisi.
//           </p>
//           <div className="social mt-2 mb-3">
//             {" "}
//             <i className="fa fa-facebook-official fa-lg"></i>{" "}
//             <i className="fa fa-instagram fa-lg"></i>{" "}
//             <i className="fa fa-twitter fa-lg"></i>{" "}
//             <i className="fa fa-linkedin-square fa-lg"></i>{" "}
//             <i className="fa fa-facebook"></i>{" "}
//           </div>
//         </div>
//       </div>
//       <div className="col-md-2 col-sm-2 col-xs-2"></div>
//       <div className="col-md-2 col-sm-2 col-xs-2">
//         <h5 className="heading">Services</h5>
//         <ul>
//           <li>IT Consulting</li>
//           <li>Development</li>
//           <li>Cloud</li>
//           <li>Support</li>
//         </ul>
//       </div>
//       <div className="col-md-2 col-sm-2 col-xs-2">
//         <h5 className="heading">Industries</h5>
//         <ul className="card-text">
//           <li>Finance</li>
//           <li>Public Sector</li>
//           <li>Smart Office</li>
//           <li>Retail</li>
//         </ul>
//       </div>
//       <div className="col-md-2 col-sm-2 col-xs-2">
//         <h5 className="heading">Company</h5>
//         <ul className="card-text">
//           <li>About Us</li>
//           <li>Blog</li>
//           <li>Contact</li>
//           <li>Join Us</li>
//         </ul>
//       </div>
//     </div>
//     <div className="divider mb-4"> </div>
//     <div className="row" style="font-size:10px;">
//       <div className="col-md-6 col-sm-6 col-xs-6">
//         <div className="pull-left">
//           <p>
//             <i className="fa fa-copyright"></i> 2020 thezpdesign
//           </p>
//         </div>
//       </div>
//       <div className="col-md-6 col-sm-6 col-xs-6">
//         <div className="pull-right mr-4 d-flex policy">
//           <div>Terms of Use</div>
//           <div>Privacy Policy</div>
//           <div>Cookie Policy</div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
