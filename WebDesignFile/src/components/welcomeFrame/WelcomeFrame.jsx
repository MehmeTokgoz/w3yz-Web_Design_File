// import React from "react";
import "./welcomeFrame.css";

function WelcomeFrame() {
  return (
    <div className="container my-5 ">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center w-100">
          <div className="welcome-frame-header">
            Happy Galeri’ye Hoşgeldiniz
          </div>
          <div className="welcome-frame-text">
            bu muhteşem müzede keşfedilecek o kadar çok sanat eseri var ki! Bu
            yüzden en iyi şekilde yararlanmak için ziyaretinizi önceden
            planlayın. Temaya dayalı bir turu takip etmek için neden ziyaretçi
            parkurlarımızdan birini seçmiyorsunuz? Molaya ihtiyacınız olduğunda,
            müzenin dinlendirici bahçelerinden daha iyi neresi var?
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeFrame;