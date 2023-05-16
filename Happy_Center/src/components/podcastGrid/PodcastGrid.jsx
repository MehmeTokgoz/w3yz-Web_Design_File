import "./podcastGrid.css";
import Grid1 from "../../images/grid-1.svg";
import Grid2 from "../../images/grid-2.svg";
import Grid3 from "../../images/grid-3.svg";
import Grid4 from "../../images/grid-4.svg";
import Grid5 from "../../images/grid-5.svg";
import Grid6 from "../../images/grid-6.svg";
import Grid7 from "../../images/grid-7.svg";
import Grid8 from "../../images/grid-8.svg";
import Grid9 from "../../images/grid-9.svg";
import Grid10 from "../../images/grid-10.jpeg";
import Grid11 from "../../images/grid-11.svg";
import Grid12 from "../../images/grid-12.svg";

function PodcastGrid() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center align-items-center p-5">
          <div className="introduction-main-container">
            <div className="introduction-text-container">
              <h1>Podcast</h1>
              <h3>
                bu muhteşem müzede keşfedilecek o kadar çok sanat eseri var ki!
                Bu yüzden en iyi şekilde .
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officia, voluptatibus possimus quas placeat ut saepe minima
                animi eum voluptatum vitae distinctio eius rem, delectus tempora
                sapiente. Natus exercitationem minima veritatis.
              </p>
              <p className="mt-5">SPOTIFAY</p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <img
                src={Grid1}
                className="w-100 shadow-1-strong rounded mb-2"
                alt="#"
              />
              <img
                src={Grid4}
                className="w-100 shadow-1-strong rounded mb-2 mt-md-3"
                alt="#"
              />
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <img
                src={Grid2}
                className="w-100 shadow-1-strong rounded mb-2"
                alt="#"
              />
              <img
                src={Grid7}
                className="w-100 shadow-1-strong rounded mt-md-3"
                alt="#"
              />
            </div>
            <div className="col-lg-6 col-md-12">
              <img
                src={Grid3}
                className="w-100 shadow-1-strong rounded mb-2"
                alt="#"
              />
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <img
                    src={Grid5}
                    className="w-100 shadow-1-strong rounded mb-2"
                    alt="#"
                  />
                </div>
                <div className="col-lg-6 col-md-6">
                  <img
                    src={Grid6}
                    className="w-100 shadow-1-strong rounded mb-2"
                    alt="#"
                  />
                </div>
              </div>
              <img
                src={Grid8}
                className="w-100 shadow-1-strong rounded mb-2"
                alt="#"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row mx-auto px-md-4">
        <div className="col-md-3">
          <div className="card-image-header-container thumbnail text-left">
            <img
              src={Grid9}
              className="w-100 shadow-1-strong rounded mb-2 img-fluid"
              alt="#"
            />
            <div className="card-headers-text caption ">
              <p className="card-header">EUROPEAN</p>
              <p className="card-paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                possimus corrupti eveniet ratione.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card-image-header-container thumbnail text-left">
            <img
              src={Grid10}
              className="w-100 shadow-1-strong rounded mb-2 img-fluid"
              alt="#"
            />
            <div className="card-headers-text caption ">
              <p className="card-header">EUROPEAN</p>
              <p className="card-paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                possimus corrupti eveniet ratione.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card-image-header-container thumbnail text-left">
            <img
              src={Grid11}
              className="w-100 shadow-1-strong rounded mb-2 img-fluid"
              alt="#"
            />
            <div className="card-headers-text caption ">
              <p className="card-header">EUROPEAN</p>
              <p className="card-paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                possimus corrupti eveniet ratione.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className=" thumbnail text-left">
            <img
              src={Grid12}
              className="w-100 shadow-1-strong rounded mb-2 img-fluid"
              alt="#"
            />
            <div className="card-headers-text caption ">
              <p className="card-header">EUROPEAN</p>
              <p className="card-paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                possimus corrupti eveniet ratione.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PodcastGrid;
