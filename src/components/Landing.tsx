import { PropsWithChildren } from "react";
import "./styles/Landing.css";
import { profile } from "../data/profile";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              {profile.name.first}
              <br />
              <span>{profile.name.last}</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>{profile.hero.prefix}</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">{profile.hero.primary}</div>
              <div className="landing-h2-2">{profile.hero.primaryAlt}</div>
            </h2>
            <h2>
              <div className="landing-h2-info">{profile.hero.secondary}</div>
              <div className="landing-h2-info-1">{profile.hero.secondaryAlt}</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
