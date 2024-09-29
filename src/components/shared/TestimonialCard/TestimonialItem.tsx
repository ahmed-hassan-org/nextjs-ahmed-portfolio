import React from "react";

type Props = {
  imageId: number;
};

const TestimonialItem = ({ imageId = 1 }: Props) => {
  return (
    <div className="shadow-lg block rounded-lg bg-white p-6 dark:bg-gray-700 w-full">
      <div className="w-full flex flex-row justify-center items-center">
        <img
          src={`https://tecdn.b-cdn.net/img/new/avatars/${imageId}.webp`}
          className="w-32 sm:w-16 rounded-full"
          alt="Avatar"
        />
      </div>
      <p className="mb-4 mt-3 text-base sm:text-sm sm:text-justify text-gray-600 dark:text-gray-200">
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
      </p>
    </div>
  );
};

export default TestimonialItem;
