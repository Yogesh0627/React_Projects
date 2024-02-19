import { useEffect } from "react";
import CareerCardComponet from "../Components/CareerCardComponet";
import { Career } from "../AllData/CareerData";
import Footer from "../Components/Footer";
const Careers = () => {
  useEffect(() => {
    document.title = "Careers at FPL";
    const favicon = document.getElementById("favicon");
    favicon.href = "src/images/favIcon_Black.svg";
  }, []);

  const allJobs = Career.map((item, index) => (
    <CareerCardComponet
      job={item.opportunity}
      loc={item.location}
      key={index}
    />
  ));
  return (
    <div>
      <section className="mt-20">
        <div>
          <div className="flex flex-col gap-10">
            <div className="w-full md:w-4/5 text-center m-auto">
              <h1 className="text-6xl font-extrabold font-serif">
                Careers at{" "}
                <span className="text-[#0093f7]">
                  FPL Technologies Pvt. Ltd.
                </span>
              </h1>
            </div>
            <div className="w-full md:w-4/5 m-auto">
              <p className="w-full md:w-3/5 m-auto text-lg font-serif">
                We are re-imagining credit & payments from First Principles, and
                are looking for professionals who share that same vision. If you
                want to be at the cutting edge of fintech in India, give us a
                shout on careers@getonecard.app
              </p>
            </div>
            <div className="w-full md:w-4/5 m-auto">
              <div className="w-full border-2 rounded-xl  m-auto">
                <img
                  className="w-max rounded-xl"
                  src="https://www.getonecard.app/images/gallery/careers_onecard_onescore.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div>
            {/* <div className="text-center m-auto">
              <h2 className="text-6xl font-extrabold font-serif">
                Life at <span className="text-[#0093f7]">OneCard</span>
              </h2>
            </div> */}

            <div className="mt-20 pt-10">
              <div className="w-4/5 md:w-3/5 m-auto text-center shadow-2xl mt-10  py-10">
                <div className=" flex  items-center w-full md:w-4/5 m-auto justify-center border-b-2 border-gray-200  h-40">
                  <h2 className="text-3xl pb-8 font-medium font-serif">
                    Open Positions
                  </h2>
                </div>
                <div className="flex flex-col gap-5">
                  {allJobs}
                </div>
              </div>
              <div>
                <h3 className="m-auto w-fit text-lg rounded-md px-5 my-10 py-3 text-[#ff0000] bg-[#ffff00] border-2">
                  Recruitment Fraud Alert
                </h3>
              </div>
            </div>
          </div>

          <div>
            <Footer />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
