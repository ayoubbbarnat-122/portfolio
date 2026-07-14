import WorkSteps from "./WorkSteps";
import { workStepData } from "../../data/profile";

const WorkProcess = () => {
  return (
    <div
      className="content grid xl:grid-cols-2 xl:items-center px-2 py-5 md:py-10 lg:py-25 xl:py-35 max-xxl:px-4"
      id="work-process"
    >
      <div className="lg:pe-10 xl:pe-35.75 max-xs:mb-3 max-xl:mb-8">
        <p className="section-title max-xl:text-center">Ma démarche</p>
        <p className="mt-6 mb-4 md:text-[18px] text-sm font-normal max-xl:text-center text-gray-500">
          De la collecte des données à la mise en production, j'applique une
          approche structurée pour transformer des problématiques métier en
          solutions data fiables et actionnables.
        </p>
        <p className="mt-6 md:text-[18px] text-sm font-normal max-xl:text-center text-gray-500">
          Exploration, modélisation, évaluation et déploiement : chaque étape
          est pensée pour garantir la qualité et la valeur des résultats.
        </p>
      </div>

      <div className="grid xs:grid-cols-2 justify-end my-2 w-fit mx-auto ">
        {workStepData.map((data, index) => {
          return (
            <WorkSteps
              data={data}
              style={`max-xs:mt-3 p-4 sm:p-8 bg-white aspect-auto sm:max-w-78 ${
                index % 2 == 1 ? "xs:ms-3 xs:mt-6 " : "xs:mb-6"
              }`}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WorkProcess;
