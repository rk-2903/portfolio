import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";
import { profile } from "../data/profile";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href={`mailto:${profile.contact.email}`} data-cursor="disable">
                {profile.contact.email}
              </a>
            </p>
            <h4>Phone</h4>
            <p>{profile.contact.phone}</p>
            <h4>Location</h4>
            <p>{profile.contact.location}</p>
            <h4>Education</h4>
            <p>{profile.education.current}</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href={profile.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href={profile.contact.resume}
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Resume <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>{profile.name.full}</span>
            </h2>
            <h5>
              <MdCopyright /> {profile.footerYear}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
