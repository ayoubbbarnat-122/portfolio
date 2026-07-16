import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { profile } from "C:/Users/USER/Desktop/picto-1.0.0/src/data/profile.js";
import { profile } from "../../../data/profile.js";
const socialIcons = [
  { icon: faLinkedin, link: profile.linkedin },
  { icon: faEnvelope, link: `mailto:${profile.email}` },
  { icon: faPhone, link: `tel:${profile.phone.replace(/\s/g, "")}` },
];

const SocialMedia = () => {
  return socialIcons.map((item, index) => (
    <a
      href={item.link}
      className={`text-picto-primary hover:bg-picto-primary p-2 pt-3 xs:p-2.5 xs:pt-3.75 sm:pt-4 md:pt-5 sm:p-3 md:p-3.75 hover:text-white rounded-md`}
      key={index}
      target={item.link.startsWith("http") ? "_blank" : undefined}
      rel={item.link.startsWith("http") ? "noreferrer" : undefined}
    >
      <FontAwesomeIcon
        icon={item.icon}
        className={`text-xl w-4.5 aspect-square`}
      />
    </a>
  ));
};

export default SocialMedia;
