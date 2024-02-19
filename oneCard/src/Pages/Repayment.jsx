import React from "react";
import Blog_Component from "../Components/Blog_Component";
import { RepaymentsAndEmi } from "../AllData/BlogMenuData";
import Blog_Search from "../Components/Blog_Search";
import Footer from "../Components/Footer";

const RepaymentAndEmi = () => {
  const creditCardInDepthMenu = RepaymentsAndEmi.map((item) => (
    <Blog_Component
      key={item.id}
      date={item.date}
      imgLink={item.imageLink}
      query={item.query}
    />
  ));

  React.useEffect(() => {
    document.title = "Repayments and Emi";
    const favicon = document.getElementById("favicon");
    favicon.href = "src/images/favIcon_Black.svg";
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
              Repayments & EMI
            </h2>
            <div className="flex flex-col w-fit md:flex-rowgap-5 mt-8 pt-4">
              <div className="w-full md:w-3/6 ">
                <img
                  className="w-full rounded-2xl border-2 "
                  src="https://www.getonecard.app/images/blog/onecard_bill_payment_1.png"
                  alt=""
                />
              </div>
              <div className="w-full md:w-2/5 flex flex-col gap-2  text-[#646464] ">
                <p>Oct 30, 2023</p>
                <h2 className="text-lg text-black font-bold font-serif ">
                  How to pay your OneCard bill
                </h2>
                <p className="">
                  Discover the multiple ways you can pay your OneCard bill.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3 pt-1">
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 pb-4  w-4/5 m-auto mt-7 gap-7 ">
            <Blog_Component
              date="Aug 12, 2022"
              query={"Why Paying Credit Card Minimum Amount Does Not Help?"}
              imgLink={
                "https://www.getonecard.app/images/blog/Should_you_pay_just_the_minimum_amount_due.png"
              }
            />
            <Blog_Component
              date="May 18, 2022"
              query={
                "Credit Card Billing Cycle: What is It and How Does it Work?"
              }
              imgLink={
                "https://www.getonecard.app/images/blog/Demystifying_Billing_Cycle.png"
              }
            />
            <Blog_Component
              date="Dec 29, 2021"
              query={"Debt Trap - What Is It and How to Avoid It?"}
              imgLink={
                "https://www.getonecard.app/images/blog/blog-avoid-debt-trap.png"
              }
            />
          </div>
        </div>
        <div className="w-4/5  m-auto mt-7 flex flex-col md:flex-row gap-5">
          <div className="w-full md:w-2/5">
            <img
              className="w-full rounded-2xl border-2 "
              src="https://www.getonecard.app/images/blog/blog-emi-bnpl-affect-credit-score.png"
              alt=""
            />
          </div>
          <div className="w-full md:w-3/6 flex flex-col gap-2  text-[#646464] ">
            <p>Dec 20, 2021</p>
            <h2 className="text-lg text-black font-bold font-serif ">
              Do EMIs and BNPL Affect Your Credit Score?
            </h2>
            <p>
              Buy Now Pay Later and converting purchases to EMI is common now.
              Does it affect your credit score? Read on.
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

export default RepaymentAndEmi;
