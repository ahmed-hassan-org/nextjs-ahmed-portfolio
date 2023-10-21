import React from "react";

const ExperinceItemCard = () => {
  return (
    <div className="experince-item-card grid grid-cols-7 border-b-2 border-b-gray-300 dark:border-b-0  pb-5 card mb-3 mt-6 dark:bg-gray-700 mx-40 rounded-md py-6">
      <div className="md:col-span-2 sm:col-span-7 sm:order-1 md:order-1">
        <h5 className="m-0 text-primary-green md:text-center text-lg dark:text-primary-green">
          Company Name
        </h5>
      </div>
      <div className="sm:col-span-7 md:col-span-3 sm:order-3 md:order-2">
        <h6 className="m-0 text-lg font-bold text-gray-900 sm:mb-4 dark:text-white">
          Sr.Software engineer
        </h6>
        <ul className="list-disc sm:mx-4">
          <li>
            <h6 className="text-base font-extralight text-gray-600 dark:text-gray-200">
              Create application structure
            </h6>
          </li>
          <li>
            <h6 className="text-base font-extralight text-gray-600 dark:text-gray-200">
              Create application structure
            </h6>
          </li>
          <li>
            <h6 className="text-base font-extralight text-gray-600 dark:text-gray-200">
              Create application structure
            </h6>
          </li>
          <li>
            <h6 className="text-base font-extralight text-gray-600 dark:text-gray-200">
              Create application structure
            </h6>
          </li>
        </ul>
      </div>
      <div className="md:col-span-2 sm:col-span-7 md:order-3 sm:order-2 sm:my-2">
        <p className="m-0 text-base font-light text-gray-600 dark:text-white">
          01-12-2021 - Preset
        </p>
      </div>
    </div>
  );
};

export default ExperinceItemCard;
