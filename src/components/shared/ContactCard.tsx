import React from "react";
import { BiEnvelope, BiPhone, BiCopy } from "react-icons/bi";
import { toast } from "react-toastify";
const ContactCard = () => {
  const copyEmail = async () => {
    const text = document.getElementById("emailItem")!.innerHTML;

    try {
      await navigator.clipboard.writeText(text);
      toast.info("Email copied to clipboard", { position: "bottom-left" });
    } catch (err) {
      toast.info("Email copied to clipboard", { position: "bottom-left" });
    }
  };
  const copyPhone = async () => {
    const text = document.getElementById("phoneItem")!.innerHTML;

    try {
      await navigator.clipboard.writeText(text);
      toast.info("Phone copied to clipboard", { position: "bottom-left" });
    } catch (err) {
      toast.info("Email copied to clipboard", { position: "bottom-left" });
    }
  };
  return (
    <section
      className="expericne-section-wrapper container relative grid grid-cols-4 mt-24 sm:mt-8 dark:bg-gray-900 py-5 h-[300px]"
      id="contactId"
    >
      <div className="col-span-4 flex flex-row justify-center items-center ">
        <span className="inline-block whitespace-nowrap rounded-[0.27rem] bg-gray-200 px-3 py-2 text-center align-baseline text-[0.75em] font-bold leading-none text-gray-600">
          Get in touch
        </span>
      </div>
      <div className="col-span-4 flex flex-row justify-center items-center my-2">
        <p className="text-center text-sm sm:text-xs sm:text-center font-light text-gray-600 dark:text-gray-300">
          What's next? Feel free to reach out to me if you're looking for <br />
          a developer, have a query, or simply want to connect.
        </p>
      </div>
      <div className="col-span-4 my-4">
        <div className="email-item flex flex-row justify-center items-center mb-3">
          <span className="mx-3">
            <span className="md:text-3xl sm:text-xl">
              <BiEnvelope className="dark:text-gray-300 text-gray-900" />
            </span>
          </span>
          <h4
            className="md:text-3xl sm:text-base font-black text-gray-950 dark:text-gray-200"
            id="emailItem"
          >
            ahmedmedodev@gmail.com
          </h4>
          <span className="mx-3" data-te-toggle="tooltip" title="Copy email">
            <span className="text-xl sm:text-base" onClick={copyEmail}>
              <BiCopy className="dark:text-gray-300 text-gray-900" />
            </span>
          </span>
        </div>
        <div className="phone-item flex flex-row justify-center items-center">
          <span className="mx-3">
            <span className="md:text-3xl sm:text-xl">
              <BiPhone className="dark:text-gray-300 text-gray-900" />
            </span>
          </span>
          <h4
            className="md:text-3xl sm:text-base font-black text-gray-950 dark:text-gray-200"
            id="phoneItem"
          >
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
            <span className="text-xl sm:text-base" onClick={copyPhone}>
              <BiCopy className="dark:text-gray-300 text-gray-900" />
            </span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default ContactCard;
