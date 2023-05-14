import "./visitFrame.css";
import Arrow from "../../images/arrow.svg";
import Aileile from "../../images/aile-ile.svg";
import Grup from "../../images/grup-olarak.svg";
import Arastirma from "../../images/arastirma-icin.svg";
import Engel from "../../images/engelinize-göre.svg";
import Kurumsal from "../../images/kurumsal-egitim.svg";
import Sponsorluk from "../../images/sponsorluk-icin.svg";

function VisitFrame() {
  return (
    <div className="visit-container my-5">
      <div className="row">
        <div className="col-6">
          <div className="visit-texts-container">
            <p className="select-visit-type-header fs-1 ">
              {" "}
              Ziyaret biçimini seç
            </p>
            <p className="select-visit-type-text fs-1">
              {" "}
              Bu muhteşem müzeyi nasıl keşfetmek istersin?
            </p>
          </div>
        </div>
        <div className="col-6 visit-types-container my-2">
          <div className="row">
            <div className="col-6">
              <div className="row mx-auto">
                <div className="col-2">
                  <img className="image-fluid" src={Aileile} alt="" />
                </div>
                <div className="col-7">
                  {" "}
                  <p className="">Aile ile ziyaret</p>{" "}
                </div>
                <div className="col-3">
                  <img className="" src={Arrow} alt="" />
                </div>
              </div>
              <div className="row mx-auto">
                <div className="col-2">
                  <img className="image-fluid" src={Grup} alt="" />
                </div>
                <div className="col-7">
                  {" "}
                  <p className="">Grup Olarak ziyaret</p>{" "}
                </div>
                <div className="col-3">
                  <img className="" src={Arrow} alt="" />
                </div>
              </div>
              <div className="row mx-auto">
                <div className="col-2">
                  <img className="image-fluid" src={Arastirma} alt="" />
                </div>
                <div className="col-7">
                  {" "}
                  <p className="">Araştırma için ziyaret</p>{" "}
                </div>
                <div className="col-3">
                  <img className="" src={Arrow} alt="" />
                </div>
              </div>
            </div>
            <div className="col-6 mx-auto">
              <div className="row mx-auto ">
                <div className="col-2">
                  <img className="image-fluid" src={Engel} alt="" />
                </div>
                <div className="col-7">
                  {" "}
                  <p className="">Engelinize göre ziyaret</p>{" "}
                </div>
                <div className="col-3">
                  <img className="" src={Arrow} alt="" />
                </div>
              </div>
              <div className="row mx-auto ">
                <div className="col-2">
                  <img className="image-fluid" src={Kurumsal} alt="" />
                </div>
                <div className="col-7">
                  {" "}
                  <p className="">Kurumsal eğitim için ziyaret</p>{" "}
                </div>
                <div className="col-3">
                  <img className="" src={Arrow} alt="" />
                </div>
              </div>
              <div className="row mx-auto ">
                <div className="col-2">
                  <img className="image-fluid" src={Sponsorluk} alt="" />
                </div>
                <div className="col-7">
                  {" "}
                  <p className="">Sponsor olmak için ziyaret</p>{" "}
                </div>
                <div className="col-3">
                  <img className="" src={Arrow} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VisitFrame;
