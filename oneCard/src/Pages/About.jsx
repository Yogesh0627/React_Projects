import { useEffect } from "react";
import Footer from "../Components/Footer";

const About = () => {
  useEffect(() => {
    document.title = "About Us - OneCard";
    const favicon = document.getElementById("favicon");
    favicon.href = "https://www.getonecard.app/images/One_logo_16by16.svg";
  }, []);
  return (
    <div>
      <section className="mt-20">
        <div>
          <div className="flex flex-col md:flex-row w-11/12  m-auto  justify-center items-center ">
            <div className="w-full md:w-1/2 m-auto">
              <div className="p-3">
                <h1 className="text-6xl font-serif font-extrabold w-full ">
                  About <br />{" "}
                  <span className="text-[#0093f7]  ">
                    <p className="mt-2  w-full">One Credit Card</p>
                  </span>
                </h1>
              </div>
              <br />
              <div className="text-xl text-[#696969] font-serif font-medium">
                <p className="p-3">
                  Credit cards haven't changed much for over half a century so
                  our team of seasoned bankers, technologists and designers set
                  out to redefine the credit card for YOU - the consumer.
                </p>
                <br />
                <br />
                <p className=" p-3">
                  The result is OneCard - a credit card re-imagined for the
                  mobile generation.
                </p>
              </div>
            </div>
            <div className=" w-full md:w-2/5 m-auto ">
              <img
                className="w-full"
                src="https://www.getonecard.app/images/AboutUs_Banner_2.png"
                alt="AboutImage"
              />
            </div>
          </div>
        </div>
      </section>

      {/*  Featured Section */}

      <section className="bg-[#f2f2f2] p-4">
        <div className="contianer">
          <div className="First-row my-10">
            <div className="text-center p-3 ">
              <span className="text-7xl font-serif font-extrabold">
                Featured <span className="text-[#0093f7] ">In</span>
              </span>
            </div>

            {/* featured IN */}
            <div>
              <div className="flex flex-col gap-10 md:flex md:flex-row w-4/5 m-auto  items-center justify-center">
                <div className="w-3/5 m-auto md:w-1/5 ">
                  <img
                    className="w-full"
                    src="https://www.getonecard.app/images/clients/inc42.png"
                    alt=""
                  />
                </div>
                <div className="w-3/5 m-auto md:w-1/5">
                  <img
                    className="w-full "
                    src="https://www.getonecard.app/images/clients/logo_yourstory.png"
                    alt=""
                  />
                </div>
                <div className="w-3/5 m-auto md:w-1/5">
                  <img
                    className="w-full "
                    src="https://www.getonecard.app/images/clients/businessline.png"
                    alt=""
                  />
                </div>
                <div className="w-3/5 m-auto md:w-1/5 ">
                  <img
                    className="w-full "
                    src="https://www.getonecard.app/images/clients/cio_elets.png"
                    alt=""
                  />
                </div>
                <div className="w-3/5 m-auto md:w-1/5">
                  <img
                    className="w-full "
                    src="https://www.getonecard.app/images/clients/businessstandard.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          {/*  second Part */}

          <div className=" ">
            <div className="flex flex-col justify-center items-center p-7 md:flex-row">
              <div className="w-full md:w-2/5  p-1">
                <div>
                  <img
                    className="m-auto"
                    src="https://www.getonecard.app/images/about/security.svg"
                    alt=""
                  />
                </div>
                <div className="text-center ">
                  <h2 className="text-[#0093f7] m-auto w-full md:w-10/12 p-1  text-5xl  ">
                    We're committed to Data Security
                  </h2>
                </div>
              </div>

              <div className="w-full md:w-2/5  p-2 ">
                <p className="w-full md:w-10/12  text-xl text-[#696969] font-serif font-medium">
                  We are committed to protect users' data and their financial
                  information. We are IS0/IEC 27001:2013 and PCI-DSS V 3.2.1
                  certified and work on the principle of opt-in consent and full
                  transparency. Our rock solid secure processes and technology
                  implementations combined with regulatory compliance is how we
                  access, store and use user data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  3rd secttion */}

      <section className="p-10">
        <div className="">
          <div className="flex flex-col items-center justify-center gap-5 p-3 ">
            <div className="w-fit m-auto  text-center">
              <h2 className="text-7xl font-serif font-extrabold">
                Meet <span className="text-[#0093f7]">Team One</span>
              </h2>
            </div>
            <div className="m-auto text-center p-2">
              <p className="w-full md:w-2/5 m-auto text-xl text-[#696969] font-serif font-medium">
                We are experienced professionals from the financial services
                industry. We have lived it. Now, we are re-imagining it.
              </p>
              <p className="w-full md:w-3/5 m-auto text-xl text-[#696969] font-serif font-medium">
                A fun-loving bunch of folks who have come together to re-imagine
                your experience of credit products in India. Team photos are
                struggling to keep pace with our team size :)
              </p>
            </div>
            <div className="w-full md:w-9/12 rounded-xl m-auto">
              <img
                className="w-full rounded-xl"
                src="https://www.getonecard.app/images/team/team-one2.jpg"
                alt="Meet Team one"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3rd section completed */}
      <Footer />
    </div>
  );
};

export default About;
