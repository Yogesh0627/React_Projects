import { useEffect } from "react";
import FaqComponent from "../Components/FaqComponent";
import { FaqData } from "../AllData/FaqData";
import Footer from "../Components/Footer";

const FAQ = () => {
  useEffect(() => {
    document.title = "Frequently Asked Questions";
    const favicon = document.getElementById("favicon");
    favicon.href = "src/images/favIcon_Black.svg";
  }, []);

  const AllFaq = FaqData.map((item, index) => (
    <FaqComponent qstn={item.Question} ans={item.Answer} key={index} />
  ));
  return (
    <div className=" mt-16">
      <div>
        <div className="w-4/5 m-auto pt-6 ">
          <img
            className="m-auto"
            src="https://www.getonecard.app/images/about/faq.svg"
            alt=""
          />
        </div>
        <div className="m-auto text-center mt-10 pt-6">
          <h1 className="text-6xl font-extrabold font-serif">
            Frequently Asked <span className="text-[#0093f7]">Questions</span>
          </h1>
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-12 pt-16 mt-5">{AllFaq}</div>
      </div>
      <div className="mt-16">
        <Footer />
      </div>
    </div>
  );
};

export default FAQ;
