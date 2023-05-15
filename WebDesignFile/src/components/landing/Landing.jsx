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
