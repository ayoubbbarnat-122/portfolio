import Roles from "./Roles";
import { profile, rolesData } from "../../data/profile";

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">Mes compétences</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            Ingénieur data diplômé, je combine machine learning, data engineering
            et développement web pour concevoir des solutions utiles et
            industrialisables.
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
            Python, SQL, React, TensorFlow, ElasticSearch, AWS : j'interviens
            sur l'ensemble de la chaîne de valeur data, de la collecte au
            déploiement.
          </p>
        </div>
        <a
          href={`mailto:${profile.email}`}
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          Me contacter
        </a>
      </div>
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
