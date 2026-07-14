import Marquee from "react-fast-marquee";
import { profile } from "../../data/profile";

const HappyClients = () => {
  return (
    <div className="content py-10 md:py-25 flex flex-col items-center px-2">
      <div className="max-w-144.25 text-center ">
        <p className="section-title mb-6">Expériences & formations</p>
        <p className="text-[14px] sm:text-lg text-soft-dark font-normal">
          Entreprises et écoles avec lesquelles j'ai collaboré ou étudié au
          cours de mon parcours.
        </p>
      </div>
      <Marquee pauseOnHover={true} speed={100} className="">
        <p className="flex items-center pt-4 md:pt-10">
          {profile.companies.map((company) => (
            <span
              className="ps-5 sm:ps-10 md:ps-20 text-xl sm:text-2xl md:text-3xl font-semibold text-[#B8BCC2]"
              key={company}
            >
              {company}
            </span>
          ))}
        </p>
      </Marquee>
    </div>
  );
};

export default HappyClients;
