import React from "react";

const Offer_Card_Component = ({
  imageLink,
  logoLink,
  title,
  offer,
  validity,
}) => {
  return (
    <div className="">
      <div className="border-2 rounded-2xl relative z-10 w-fit mb-6">
        <div className=" relative w-fit ">
          <div className="w-fit rounded-2xl">
            <img
              className="w-96 h-48 object-cover rounded-2xl"
              src={imageLink}
              alt=""
            />
          </div>
          <div className="w-20 absolute top-36 rounded-2xl left-8">
            <img
              className="w-full object-cover rounded-2xl"
              src={logoLink}
              alt=""
            />
          </div>
        </div>

        <div className="mt-10 pl-2 flex flex-col gap-3 ">
          <div className=" text-lg  mx-2 my-2 font-serif">
            <h2 className="font-bold">{title}</h2>
            <p className="">{offer}</p>
          </div>
          <button className="text-white font-semibold mx-2 my-2  text-base px-6 py-1 rounded-lg w-36 h-10 bg-gradient-to-r from-[#217ee6] to-[#2498e3]">
            Offer Details
          </button>
          <p className=" text-lg mx-2 my-2 font-serif"> {validity}</p>
        </div>
      </div>
    </div>
  );
};

export default Offer_Card_Component;
