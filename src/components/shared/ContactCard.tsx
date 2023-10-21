import React from "react";
import { BiEnvelope, BiPhone, BiCopy } from "react-icons/bi";
const ContactCard = () => {
  const copyEmail = async () => {
    const text = document.getElementById("emailItem")!.innerHTML;

    try {
      await navigator.clipboard.writeText(text);
      console.log("Content copied to clipboard");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };
  const copyPhone = async () => {
    const text = document.getElementById("phoneItem")!.innerHTML;

    try {
      await navigator.clipboard.writeText(text);
      console.log("Content copied to clipboard");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };
  return (
    <section
      className="expericne-section-wrapper container relative grid grid-cols-4 mt-24 mb-16"
      id="contactId"
    >
      <div className="col-span-4 flex flex-row justify-center items-center ">
        <span className="inline-block whitespace-nowrap rounded-[0.27rem] bg-gray-200 px-3 py-2 text-center align-baseline text-[0.75em] font-bold leading-none text-gray-600">
          Get in touch
        </span>
      </div>
      <div className="col-span-4 flex flex-row justify-center items-center my-4">
        <p className="text-center text-sm font-light text-gray-600">
          What's next? Feel free to reach out to me if you're looking for a
          developer, have a query, or simply want to connect.
        </p>
      </div>
      <div className="col-span-4 my-4">
        <div className="email-item flex flex-row justify-center items-center mb-3">
          <span className="mx-3">
            <span className="text-3xl">
              <BiEnvelope />
            </span>
          </span>
          <h4 className="text-3xl font-black" id="emailItem">
            ahmedmedodev@gmail.com
          </h4>
          <span className="mx-3" data-te-toggle="tooltip" title="Copy email">
            <span className="text-xl" onClick={copyEmail}>
              <BiCopy />
            </span>
          </span>
        </div>
        <div className="phone-item flex flex-row justify-center items-center">
          <span className="mx-3">
            <span className="text-3xl">
              <BiPhone />
            </span>
          </span>
          <h4 className="text-3xl font-black" id="phoneItem">
            +201023456789
          </h4>
          <span
            className="mx-3"
            data-te-toggle="tooltip"
            data-te-html="true"
            data-te-ripple-init
            data-te-ripple-color="light"
            title="Copy phone"
          >
            <span className="text-xl" onClick={copyPhone}>
              <BiCopy />
            </span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default ContactCard;
