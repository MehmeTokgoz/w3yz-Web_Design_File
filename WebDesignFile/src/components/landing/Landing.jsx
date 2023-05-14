import "./landing.css";
import LandingImage from "../../images/landing.svg";

function Landing() {
  return (
    <div className="landing-container">
      <img className="landing-image w-100" src={LandingImage} alt="#" />
      <div className="text-continer">
        <div className="landing-image-header-text">
          Çocuklar için sanat eğitimi
        </div>
        <div className="landing-image-header-content">
          Ücretsiz aile etkinliklerimizde bir sanat dünyası oyunu oynayın,
          çocuklarınızla yaratın ve keşfedin
        </div>
      </div>
    </div>
  );
}

export default Landing;

//////İLK KOD/////////////

// function Landing() {
//   return (
//     <div className="landing-container d-flex justify-content-center align-items-center">
//       <img className="landing-image" src={LandingImage} alt="#" />
//       <div>
//         <div className="landing-image-header-text">
//           Çocuklar için sanat eğitimi
//         </div>
//         <div className="landing-image-header-content">
//           Ücretsiz aile etkinliklerimizde bir sanat dünyası oyunu oynayın,
//           çocuklarınızla yaratın ve keşfedin
//         </div>
//         <div className="hidden-ellipse-1"></div>
//         <div className="hidden-ellipse-2"></div>
//       </div>
//     </div>
//   );
// }

// export default Landing;
