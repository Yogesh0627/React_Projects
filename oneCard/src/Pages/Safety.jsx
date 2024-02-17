import React from "react";
import Blog_Component from "../Components/Blog_Component";
import { RepaymentsAndEmi, safetyMenu } from "../AllData/BlogMenuData";
import Blog_Search from "../Components/Blog_Search";
import Blog_Componentes_Two from "../Components/Blog_Componentes_Two";
import Footer from "../Components/Footer";

const Safety = () => {
  const creditCardInDepthMenu = safetyMenu.map((item) => (
    <Blog_Component
      key={item.id}
      date={item.date}
      imgLink={item.imageLink}
      query={item.query}
    />
  ));

  React.useEffect(() => {
    document.title = "Repayments and Emi";
  }, []);
  return (
    <div className="mt-24 pt-2 ">
      <div className="">
        <Blog_Search />
      </div>
      <div className="flex flex-col gap-4">
        <div className="">
          <div className="w-4/5  m-auto">
            <h2 className="font-bold text-xl p-1 font-serif">
              Safety
            </h2>
            <div className="flex flex-col w-fit md:flex-row gap-5 mt-8 pt-4">
              <div className="w-full md:w-3/6 ">
                <img
                  className="w-full rounded-2xl border-2 "
                  src="https://www.getonecard.app/images/blog/tips_to_protect_your_credit_card_online.png"
                  alt=""
                />
              </div>
              <div className="w-full md:w-2/5 flex flex-col  gap-2  text-[#646464] ">
                <p>Jul 14, 2023</p>
                <h2 className="text-lg text-black font-bold font-serif ">
                  How To Protect Your Credit Card Information Online
                </h2>
                <p className="">
                  Protecting your credit card information while using it online
                  is crucial. Discover simple yet effective tips to do so.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3 pt-1">
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2  pb-4  w-4/5 m-auto mt-7 gap-7 ">
            <Blog_Component
              date="Jun 16, 2023"
              query={"Learn What is CyberCrime & How to Complain in CyberCrime"}
              imgLink={
                "https://www.getonecard.app/images/blog/filing_a_cyber_crime_complaint_in_india.png"
              }
            />
            <Blog_Component
              date="May 06, 2022"
              query={
                "Social Engineering - How Fraudsters Use Psychology to Con You"
              }
              imgLink={
                "https://www.getonecard.app/images/blog/Social_Engineering_Fraud_1.png"
              }
            />
            <Blog_Component
              date="Feb 21, 2022"
              query={"7 tips for safe digital banking practices"}
              imgLink={
                "https://www.getonecard.app/images/blog/blog-safe-digital-banking-practices.png"
              }
            />
          </div>
        </div>
        <div className="w-4/5  m-auto mt-7 flex flex-col md:flex-row gap-5">
          <div className="w-full md:w-2/5">
            <img
              className="w-full rounded-2xl border-2 "
              src="https://www.getonecard.app/images/blog/stay-safe-from-spear-phishing.png"
              alt=""
            />
          </div>
          <div className="w-full md:w-3/6 flex flex-col gap-2   text-[#646464] ">
            <p>Jan 20, 2022</p>
            <h2 className="text-lg text-black font-bold font-serif ">
              How to Stay Safe from Spear Phishing?
            </h2>
            <p>
              As spear phishing becomes more common, it is important to know how
              you can protect yourself against it
            </p>
          </div>
        </div>
      </div>
      <div className=" mt-20 mb-10">
        <div className="w-4/5   m-auto">
          <div className=" grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-7">
            {creditCardInDepthMenu}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Safety;
