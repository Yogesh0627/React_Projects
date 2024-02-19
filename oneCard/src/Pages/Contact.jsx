import { useEffect } from "react";
import Footer from "../Components/Footer";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact Us";
    const favicon = document.getElementById("favicon");
    favicon.href = "https://drive.google.com/file/d/1yD5ha7Dvg4vc3ajU6JSpTERf8mOLM0Oz/view?usp=sharing" || "src\\images\favIcon_Black.svg";
  }, []);
  return (
    <>
      <section className="p-4 mt-20">
        <div>
          <div className="text-7xl text-center font-semibold">
            <h1>
              Contact <span className="text-[#0093f5]">Us</span>
            </h1>
          </div>
          <div className="flex flex-col md:flex-row  justify-center gap-5 p-14  ">
            <div className=" p-4 ">
              <div className="text-center text-2xl font-medium">
                <img
                  className="m-auto"
                  src="https://www.getonecard.app/images/contact/phone.svg"
                  alt="contact"
                />
                <p className="my-4">
                  1800 <span> </span> 210 <span> </span> 9111
                </p>
                <br />
              </div>
              <div className="text-center text-2xl font-medium ">
                <img
                  className="m-auto"
                  src="https://www.getonecard.app/images/contact/email.svg"
                  alt="contact"
                />
                <p className="my-4">help@getonecard.app</p>
              </div>
              <br />
              <div className="text-center text-2xl font-medium">
                <img
                  className="m-auto"
                  src="https://www.getonecard.app/images/contact/address.svg"
                  alt="contact"
                />
                <p className="my-4">
                  OneHQ, Survey No. 127, Seasons Rd,
                  <br /> Opposite Sarjaa, Aundh, Pune, Maharashtra <br />{" "}
                  411007.
                  <br />
                  <br />
                  CIN - U67100PN2022PTC212648
                </p>
              </div>
            </div>
            <div className=" text-center  ">
              <img
                className="m-auto"
                src="https://www.getonecard.app/images/contact/pune_map.svg"
                alt="mapImage"
              />
              <a
                href="https://www.google.com/maps/place/FPL+Technologies/@18.5526245,73.7300612,12z/data=!4m6!3m5!1s0x3bc2bfb0efff62bb:0xdffe3bd1be6f3d76!8m2!3d18.5535635!4d73.8090231!16s%2Fg%2F11h_400wc4?hl=en&entry=ttu"
                target="_blank"
                rel="noreferrer"
                className="text-[#1893f7] text-lg font-medium"
              >
                Find us on Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="text-center text-3xl font-extrabold font-serif">
          <h3>
            Call/Email us or feel free to <br /> drop by. <br />
            <span className="text-[#0093f5]">Coffee/Chai is on us!</span>
          </h3>
        </div>
        <br />
        <br />
        <Footer />
      </section>
    </>
  );
};

export default Contact;
