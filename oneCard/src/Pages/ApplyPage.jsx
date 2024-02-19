import React, { useEffect } from "react";

const ApplyPage = () => {
  const [phoneNumber, setPhoneNumber] = React.useState("");

  const handleChange = (e) => {
    setPhoneNumber(e.target.value);
  };
  useEffect(() => {
    document.title = "OneCard";
    const favicon = document.getElementById("favicon");
    // console.log(favicon);
    favicon.href = "/src/images/faviconForApply.ico";
  }, []);
  return (
    <div className="">
      <section className="bg-[url('https://www.getonecard.app/assets/apply/bg_web.png')]  bg-cover bg-center h-screen">
        <div className=" flex items-center flex-wrap">
          <div className=" flex md:flex  flex-row items-end md:pb-6 pb-4  justify-center md:w-20 md:h-32  w-16 h-20 rounded-bl-3xl rounded-br-3xl ml-10 sm:ml-20 bg-gray-200 bg-opacity-5 ">
            <img
              className="md:h-16 md:w-16 h-10 w-10"
              src="https://www.getonecard.app/images/One_logo_white_59by336.svg"
              alt="onecard"
            />
          </div>
          <div className="flex md:ml-10 w-full md:w-auto mt-8 sm:mt-0 justify-center px-5 md:px-0 ">
            <div className="w-full ">
              <p className=" text-xs sm:text-sm    text-gray-500 w-10 sm:w-auto">
                Contact Details
              </p>
              <div className="flex items-center w-full ">
                <div className="h-6 w-6 sm:h-8 sm:w-8  rounded-full flex justify-center text-normal items-center font-semibold bg-white text-black  border-2  border-circlestroke-100 ">
                  1
                </div>
                <div className="w-10 sm:w-24 h-1 border-0.5 border-circlestroke-100 flex-grow bg-circlebg-100 mx-1 rounded-md "></div>
              </div>
            </div>

            <div className="w-full ">
              <p className=" text-xs sm:text-sm    text-gray-500 w-10 sm:w-auto">
                Personal Details
              </p>
              <div className="flex items-center w-full ">
                <div className="h-6 w-6 sm:h-8 sm:w-8  rounded-full flex justify-center text-white text-normal items-center font-semibold bg-circlebg-100 text-circlestroke-100  border-2  border-circlestroke-100 ">
                  2
                </div>
                <div className="w-10 sm:w-24 h-1 border-0.5 border-circlestroke-100 flex-grow bg-circlebg-100 mx-1 rounded-md ">
                  {" "}
                </div>
              </div>
            </div>
            <div className="w-full ">
              <p className=" text-xs sm:text-sm    text-gray-500 w-10 sm:w-auto">
                Address Details
              </p>
              <div className="flex items-center w-full ">
                <div className="h-6 w-6 sm:h-8 sm:w-8  rounded-full flex justify-center text-normal text-gray-500 items-center font-semibold bg-circlebg-100 text-circlestroke-100  border-2  border-circlestroke-100 ">
                  3
                </div>
                <div className="w-10 sm:w-24 h-1 border-0.5 border-circlestroke-100 flex-grow bg-circlebg-100 mx-1 rounded-md ">
                  {" "}
                </div>
              </div>
            </div>
            <div className="w-full ">
              <p className=" text-xs sm:text-sm    text-gray-500 w-10 sm:w-auto">
                Credit Assessment
              </p>
              <div className="flex items-center w-full ">
                <div className="h-6 w-6 sm:h-8 sm:w-8  rounded-full flex justify-center text-normal items-center text-gray-500 font-semibold bg-circlebg-100 text-circlestroke-100  border-2  border-circlestroke-100 ">
                  4
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="  flex    mt-10 md:mt-20     w-full  pb-10 sm:pb-0 2xl:mt-44">
          <div className="w-full md:w-4/5 px-10 md:px-0 ">
            <section className=" ">
              <div className=" flex-col flex  items-start md:items-baseline md:pl-20   ">
                <p className="  text-3xl font-semibold 2xl:text-4xl text-white   ">
                  Enter Mobile Number
                </p>
              </div>
              <div>
                <p className="text-base   flex-col flex  items-start mt-2  md:items-baseline md:pl-20 2xl:text-xl ">
                  <span className="text-subtextcolor-100  text-gray-500">
                    Enter mobile number used for instant login
                  </span>
                </p>
              </div>
              <div className="flex-col flex  items-start md:items-baseline md:pl-20 mt-5 pl-0">
                <div className="  flex items-center sm:justify-start sm:px-0   ">
                  <div>
                    <div className="border-boxcolor-100 flex w-18 px-3 text-white justify-center items-center  bg-transparent rounded-bl-lg   rounded-tl-lg border text-2xl md:text-3xl  border-gray-700  h-14 md:h-16  focus:outline-none focus:bg-transparent 2xl:w-24 2xl:h-20 2xl:text-4xl">
                      <span>+91</span>
                    </div>
                  </div>
                  <div>
                    <input
                      className="w-56 text-white  h-14  rounded-br-lg rounded-tr-lg  px-5 md:w-60 md:h-16 2xl:w-96 2xl:h-20   bg-transparent text-2xl md:text-3xl 2xl:text-4xl  focus:outline-none focus:bg-transparent font-semibold  border-boxcolor-100 placeholder-placehodertextcolor-100   border    focus:shadow-outline"
                      type="text"
                      placeholder="0000000000"
                      maxLength="10"
                      autoComplete="false"
                      defaultValue={phoneNumber}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </section>
            <div className="  flex-col flex mt-8 items-center md:items-start md:pl-20  ">
              <div className="flex  w-full    ">
                <input
                  className="w-4  h-4 undefined form-checkbox  bg-transparent text-2xl md:text-3xl 2xl:text-4xl  focus:outline-none focus:bg-transparent font-semibold  border-boxcolor-100 placeholder-placehodertextcolor-100   border    focus:shadow-outline"
                  type="checkbox"
                  placeholder=""
                  autoComplete="false"
                  defaultValue={true}
                  defaultChecked
                />
                <div className=" sm:w-96  ml-5 w-full text-sm 2xl:text-xl 2xl:w-120    ">
                  <p className="  text-subtextcolor-100   text-gray-500 font-normal  ">
                    I have read and agree to OneCard’s{" "}
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://getonecard.app/legal/terms/ "
                      className=" text-white font-normal tracking-wide"
                    >
                      Terms of Use
                    </a>{" "}
                    and{" "}
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://getonecard.app/legal/privacy/"
                      className=" text-white font-normal tracking-wide"
                    >
                      Privacy Policy.
                    </a>
                  </p>

                  <p className=" mt-5  text-subtextcolor-100  font-normal tracking-wide  text-gray-500 ">
                    I hereby request for a copy of my credit information and /or
                    aggregates
                    <span className="hidden">
                      on my registered email ID or through my OneCard account,
                      and authorize Experian and CIBIL to also provide the same
                      to OneConsumer Pvt. Ltd. on my behalf. I also authorize
                      OneCard to communicate via SMS, Email and Whatsapp.
                    </span>{" "}
                    <button
                      type="button"
                      className=" text-white font-normal inline "
                    >
                      Know more
                    </button>
                  </p>
                </div>
              </div>
              <div className="mt-8 w-full flex justify-center md:justify-start ">
                <button
                  type="button"
                  className={`bg-gray-400 w-32 md:w-36 text-xl rounded-xl h-10 md:h-12 ${
                    phoneNumber.length === 10 ? "bg-blue-500" : "undefined"
                  }`}
                  disabled=""
                >
                  <div className=" flex justify-center items-center text-white ">
                    <span>Get OTP</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className=" w-2/5  hidden md:flex ">
            <div>
              <img
                src="https://www.getonecard.app/assets/apply/phone_number.svg"
                alt="phone"
                className="md:h-80 md:w-80 w-full  "
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApplyPage;
