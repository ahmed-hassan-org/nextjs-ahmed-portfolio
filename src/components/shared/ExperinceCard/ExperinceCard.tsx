import React from "react";
import ExperinceItemCard from "./ExperinceItemCard";

const ExperinceCard = () => {
  return (
    <section
      className="expericne-section-wrapper container relative grid grid-cols-4 mt-24 mb-16"
      id="experinceId"
    >
      <div className="col-span-4 flex flex-row justify-center items-center ">
        <span className="inline-block whitespace-nowrap rounded-[0.27rem] bg-gray-200 px-3 py-2 text-center align-baseline text-[0.75em] font-bold leading-none text-gray-600">
          Experience
        </span>
      </div>
      <div className="col-span-4">
        <p className="mt-4 mb-10 text-sm text-gray-600 font-light text-center">
          Here is a quick summary of my most recent experiences:
        </p>
      </div>
      <div className="col-span-4">
        <ExperinceItemCard></ExperinceItemCard>
        <ExperinceItemCard></ExperinceItemCard>
        <ExperinceItemCard></ExperinceItemCard>
        <ExperinceItemCard></ExperinceItemCard>
        <ExperinceItemCard></ExperinceItemCard>
      </div>
    </section>
  );
};

export default ExperinceCard;
