import { useEffect } from "react";
import Blog_Component from "../Components/Blog_Component";
import Footer from "../Components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { handleApply } from "../Components/Navigation ";

const Home = () => {
  useEffect(() => {
    document.title = "OneCard - India's best metal credit card";
    const favicon = document.getElementById("favicon");
    // console.log(favicon);
    favicon.href = "src/images/favIcon_Black.svg";
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <div>
        <section className="heroSection mt-20  ">
          <div className="flex flex-col md:flex-row p-8 m-auto  items-center justify-center ">
            <div className=" p-4 flex flex-col gap-6 w-full   md:w-1/2">
              <div className="">
                <div className="mb-2">
                  <h5 className="text-3xl font-bold font-serif">Say Hi to</h5>
                </div>
                <h1 className="text-[rgba(24,147,247,1)] font-serif text-6xl font-extrabold">
                  One Credit Card
                </h1>
              </div>
              <div className="text-[rgba(24,147,247,1)] text-base  font-bold">
                Co-branded Card Issuers :{" "}
              </div>
              <div className="w-3/4 md:w-96  h-auto ">
                <img
                  className="w-fit h-fit"
                  src="https://www.getonecard.app/images/legal/Bank_Logos_1.png"
                  alt=""
                />
              </div>
              <div className=" text-lg p-2">
                <p>
                  {" "}
                  India's best metal credit card. Built with full-stack tech.
                  Backed by the principles of simplicity, transparency, and
                  giving back control to the user.
                </p>
              </div>
              <button
                onClick={() => handleApply(navigate, "/apply")}
                className="bg-[#1893f7] text-white p-1 h-10 w-40 rounded-md text-base font-extrabold font-serif"
              >
                Apply Now
              </button>
            </div>
            <div className="w-fit md:w-2/5">
              <video
                autoPlay
                loop
                src="https://www.getonecard.app/images/say_hi_2x_d3_.mp4"
              >
                {/* <source src="https://www.getonecard.app/images/say_hi_2x_d3_.mp4" type='video/mp4'/> */}
              </video>
            </div>
          </div>
        </section>
        {/*  section one completed */}

        <section className="bg-[#000000] p-8 ">
          <div className="text-center   px-4 mt-12 mb-12">
            <div className="  p-3 m-auto">
              <h2
                className="text-6xl font-extrabold font-serif text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-600 to-green-400 to-yellow-200"
                style={{
                  backgroundImage:
                    "linear-gradient(92deg, #217ee6 3%, #3187d5 44%, #69a798 70%, #fcf2a6 95%)",
                }}
              >
                No Hidden Fees Ever.
              </h2>
            </div>
            <br />
            <div className=" mt-7 ">
              <span className="text-5xl text-white font-medium font-serif">
                No Joining Fees.
              </span>
              <br />
              <br />
              <span className="text-5xl font-medium text-white font-serif">
                No Annual Fees.
              </span>
              <br />
              <br />
              <span className="text-5xl font-medium text-white font-serif">
                No Rewards Redemption Fees.
              </span>
            </div>
          </div>
        </section>
        {/* section two end here */}

        {/* section three starts here */}

        <section className=" bg-[#ffffff] p-6">
          <div className=" w-full">
            <div className="flex w-5/6 m-auto flex-col md:flex-row justify-evenly items-center ">
              <div className="h-[500px]  w-full md:w-1/2">
                <video
                  className="h-full"
                  autoPlay
                  loop
                  src="https://www.getonecard.app/images/Website_Card_controls.mp4"
                ></video>
              </div>
              <div className="w-full md:w-1/2">
                <div className="text-right p-4 ">
                  <div className="flex flex-row-reverse">
                    <img
                      src="https://www.getonecard.app/images/feature/control_app_icon.svg"
                      alt="handMobile"
                    />
                  </div>
                  <br />
                  <h3 className="text-6xl font-extrabold font-serif">
                    Powerful <br />
                    mobile app
                  </h3>
                  <br />
                  <div className="text-2xl font-medium font-serif">
                    <p className="text-[#696969]">
                      Control all aspects of your co-branded credit card from
                      the powerful OneCard app - transaction limit,
                      domestic/international use, online/offline use,
                      contactless payments and much more.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* (section three completed) */}

        {/* section four starts here */}
        <section className="bg-[#f2f2f2] ">
          <div>
            <div className=" flex flex-col md:flex-row w-11/12 m-auto justify-center items-center ">
              <div className=" p-5 w-full md:w-1/2 ">
                <img
                  src="https://www.getonecard.app/images/feature/metal_icon.svg"
                  alt="metal"
                />
                <br />
                <h2 className="text-6xl font-extrabold font-serif   ">
                  It's metal
                </h2>
                <br />
                <div className=" font-medium font-serif  w-full md:w-4/5">
                  <p className="text-[#696969] text-2xl">
                    A co-branded credit card that is exclusive, and exquisitely
                    crafted with metal, because you deserve only the best. Why
                    settle for plastic cards anymore?
                  </p>
                </div>
              </div>

              <div className="w-5/6 md:w-2/5 ">
                <video
                  autoPlay
                  loop
                  src="https://www.getonecard.app/images/CardRotation_d5.mp4"
                >
                  {/* <source src="https://www.getonecard.app/images/CardRotation_d5.mp4" type="video/mp4" /> */}
                </video>
              </div>
            </div>
          </div>
        </section>

        {/* section four Ends Here  */}
        {/* section five Starts Here  */}
        <section className=" bg-[#ffffff] p-6">
          <div className=" w-full">
            <div className="flex flex-col w-5/6 m-auto md:flex-row justify-center items-center ">
              <div className="h-[500px] w-full md:w-2/5">
                <video
                  className="h-full"
                  autoPlay
                  loop
                  src="https://www.getonecard.app/images/website_seamless_onboarding.mp4"
                ></video>
              </div>
              <div className="w-full md:w-1/2">
                <div className="text-right p-4  w-full   ">
                  <div className="  flex flex-row-reverse">
                    <img
                      className=""
                      src="https://www.getonecard.app/images/feature/kyc_icon.svg"
                      alt="handMobile"
                    />
                  </div>
                  <br />
                  <h3 className="text-6xl font-extrabold w-full font-serif  ">
                    Seamless <br />
                    on-boarding
                  </h3>
                  <br />
                  <div className="flex flex-row-reverse">
                    <div className="text-2xl font-medium font-serif w-full  md:w-5/6 ">
                      <p className="text-[#696969]">
                        Get started using a completely digital on- boarding
                        process, and activate your One Credit Card App in less
                        than 5 minutes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* section five ends here */}

        {/* section six starts here */}
        <section className="bg-[#f2f2f2] p-6">
          <div>
            <div className="flex flex-col w-11/12 m-auto md:flex-row justify-evenly items-center ">
              <div className=" p-5 w-full md:w-1/2 ">
                <img
                  src="https://www.getonecard.app/images/feature/rewards_icon.svg"
                  alt="metal"
                />
                <br />
                <h2 className="text-6xl font-extrabold font-serif">
                  5X rewards on your top spends
                </h2>
                <br />
                <div className=" font-medium font-serif w-full md:w-[72%]">
                  <p className="text-[#696969] text-2xl">
                    5X rewards on Top 2 spend categories. Points are credited
                    instantly and never expire. Just swipe right to redeem. No
                    more rounding off, get even fractional points.
                  </p>
                </div>
              </div>

              <div className="h-[500px] w-5/6 md:w-2/5 ">
                <video
                  className="h-full"
                  autoPlay
                  loop
                  src="https://www.getonecard.app/images/feature/rewards.mp4"
                >
                  {/* <source src="https://www.getonecard.app/images/feature/rewards.mp4" type="video/mp4" /> */}
                </video>
              </div>
            </div>
          </div>
        </section>
        {/* section six ends here */}

        {/* section seven starts here */}

        <section className=" bg-[#ffffff]">
          <div className=" w-full">
            <div className="flex flex-col w-11/12 m-auto md:flex-row justify-center items-center ">
              <div className="h-[500px] w-full md:w-2/5 ">
                <video
                  className="h-full"
                  autoPlay
                  loop
                  src="https://www.getonecard.app/images/feature/emi.mp4"
                ></video>
              </div>
              <div className="w-full md:w-3/5">
                <div className="text-right p-4   w-full ">
                  <div className="flex flex-row-reverse">
                    <img
                      className=""
                      src="https://www.getonecard.app/images/feature/emi.svg"
                      alt="handMobile"
                    />
                  </div>
                  <br />
                  <div className="flex flex-row-reverse">
                    <h3 className="text-6xl font-extrabold font-serif w-full lg:w-4/5">
                      One Credit Card EMI
                    </h3>
                  </div>
                  <br />
                  <div className="flex flex-row-reverse">
                    <div className="text-2xl font-medium font-serif w-full lg:w-3/5">
                      <p className="text-[#696969]">
                        Shop in full, pay in parts. No calls, no emails, no
                        documentation. Get points on EMI transactions, repay
                        EMIs with reward points. Manage EMIs from the EMI
                        Dashboard.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* section seven ends here */}

        {/* section eight starts here */}

        <section className="bg-[#f2f2f2] ">
          <div>
            <div className=" flex flex-col w-5/6 m-auto md:flex-row  justify-evenly items-center py-20">
              <div className="w-full md:w-2/5 ">
                <img
                  className="w-20 h-14"
                  src="https://www.getonecard.app/images/feature/Family_icon_for_web.png"
                  alt="metal"
                />
                <br />
                <div className=" w-full">
                  <h2 className="text-6xl font-extrabold font-serif ">
                    MyFamily
                  </h2>
                </div>
                <br />
                <div className=" font-medium font-serif">
                  <p className="text-[#696969] text-2xl">
                    Share limit with your family. They get their own co-branded
                    One Credit Card with separate offers while you keep track
                    and control of their spending.
                  </p>
                </div>
              </div>

              <div className="w-full md:w-1/2">
                <img
                  className="w-fit "
                  src="https://www.getonecard.app/images/feature/website_familycard_64c.gif"
                />
              </div>
            </div>
          </div>
        </section>
        {/* section eight ends here */}

        {/* section Blog Starts here */}
        <section className="">
          <div>
            <div className="text-center my-10">
              <h2 className="text-6xl font-extrabold font-serif">
                From Our <span className="text-[rgba(0,147,247,1)]">Blog</span>
              </h2>
            </div>

            <div>
              <div className="my-5 p-10 ">
                <div className="text-left w-4/5 m-auto  mb-2">
                  <h2 className="text-xl text-left font-serif font-extrabold">
                    Explore Latest
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-center w-full md:w-4/5 m-auto gap-7">
                  <Blog_Component
                    date="Dec 18, 2023"
                    query="How to Block and Unblock Your Credit Card"
                    imgLink="https://www.getonecard.app/images/blog/steps_to_lock_unlock_credit_card.png"
                  />
                  <Blog_Component
                    date="Dec 18, 2023"
                    query="What are the Different Types of Credit Cards?"
                    imgLink="https://www.getonecard.app/images/blog/types_of_credit_cards.png"
                  />
                  <Blog_Component
                    date="Dec 18, 2023"
                    query="Credit Card Bill Payment Offers: Save Money and Earn Benefits"
                    imgLink="https://www.getonecard.app/images/blog/offers_on_credit_card_bill_payment.png"
                  />
                </div>
              </div>

              <div className="text-center p-3">
                <Link to={"/category/explorelatest"}>
                  <button className="bg-[#1893f7] m-auto text-white p-1 h-10 w-40 rounded-md text-base font-extrabold font-serif">
                    View All
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* section Blog Ends here */}

        {/* Banking Section Starts here */}

        <section className="bg-[#f2f2f2] p-8 mb-12">
          <div>
            <div className="text-center flex flex-col justify-center items-center gap-8 p-10">
              <div>
                <h2 className="text-6xl font-extrabold font-serif">
                  Banking Partners
                </h2>
              </div>
              <div>
                <p className="text-2xl font-medium p-2 text-[#696969]">
                  OneCard is a co-branded credit card issued by Scheduled
                  commercial Banks and Financial Institutions in partnership
                  with OneCard. The issuing Banks/Financial Institutions are :
                </p>
              </div>
              <div className="w-full md:w-1/3 flex justify-center items-center p-2">
                <img
                  className="w-full"
                  src="https://www.getonecard.app/images/legal/Bank_Logos_1.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
        {/* Banking Section Ends here */}

        {/* Investors Section Starts Here */}

        <section className="p-10 mb-4">
          <div>
            <div>
              <div className="flex flex-col justify-center items-center gap-5">
                <div>
                  <h2 className="text-6xl font-extrabold font-serif">
                    Investors
                  </h2>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-medium p-2 text-[#696969]">
                    We are backed by marquee investors who share our vision,
                    passion, and commitment to
                    <br />
                    first principles.
                  </p>
                </div>
                <div className=" p-3 w-fit flex flex-wrap justify-center mb-5 gap-7">
                  <div>
                    <img
                      src="https://www.getonecard.app/images/team/matrix-logo.svg"
                      alt="matrix"
                    />
                  </div>
                  <div>
                    <img
                      src="https://www.getonecard.app/images/team/sequoia-logo.svg"
                      alt="sequoia"
                    />
                  </div>
                  <div>
                    <img
                      src="https://www.getonecard.app/images/team/hummingbird-logo.svg"
                      alt="humming-bird"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Investors Section Ends Here */}

        {/* Footer Starts Here */}
        <Footer />
        {/* Footer Ends Here */}
      </div>
    </>
  );
};

export default Home;
