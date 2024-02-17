import React, { useEffect } from "react";
import Blog_Component from "../Components/Blog_Component";
import { creditCardInDepth } from "../AllData/BlogMenuData";
import Blog_Search from "../Components/Blog_Search";
import Blog_Componentes_Two from "../Components/Blog_Componentes_Two";
import Footer from "../Components/Footer";

const CreditCardInDepth = () => {
  const creditCardInDepthMenu = creditCardInDepth.map((item) => (
    <Blog_Component
      key={item.id}
      date={item.date}
      imgLink={item.imageLink}
      query={item.query}
    />
  ));

  useEffect(() => {
    document.title = "Credit Card In-Depth";
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
              Credit Card In-Depth
            </h2>
            <div className="flex flex-col w-fit md:flex-row gap-5 mt-8 pt-4">
              <div className="w-full md:w-3/6 ">
                <img
                  className="w-full rounded-2xl border-2 "
                  src="https://www.getonecard.app/images/blog/steps_to_lock_unlock_credit_card.png"
                  alt=""
                />
              </div>
              <div className="w-full md:w-2/5  flex flex-col gap-2  text-[#646464] ">
                <p>Dec 18, 2023</p>
                <h2 className="text-lg text-black font-bold font-serif ">
                  How to Block and Unblock Your Credit Card
                </h2>
                <p className="">
                  Losing a credit card or suspecting unauthorised usage can be a
                  distressing experience.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3 pt-1">
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 pb-4  w-4/5 m-auto mt-7 gap-7 ">
            <Blog_Component
              date="Dec 18, 2023"
              query={"What are the Different Types of Credit Cards?"}
              imgLink={
                "https://www.getonecard.app/images/blog/types_of_credit_cards.png"
              }
            />
            <Blog_Component
              date="Dec 18, 2023"
              query={
                "Credit Card Bill Payment Offers: Save Money and Earn Benefits"
              }
              imgLink={
                "https://www.getonecard.app/images/blog/offers_on_credit_card_bill_payment.png"
              }
            />
            <Blog_Component
              date="Dec 18, 2023"
              query={"Visa Vs Mastercard: Which Credit Card is Better"}
              imgLink={
                "https://www.getonecard.app/images/blog/visa_vs_mastercard.png"
              }
            />
          </div>
        </div>
        <div className="w-4/5  m-auto mt-7 flex flex-col md:flex-row gap-5">
          <div className="w-full md:w-2/5">
            <img
              className="w-full rounded-2xl border-2 "
              src="https://www.getonecard.app/images/blog/minimum_amount_due_in_credit_cards.png"
              alt=""
            />
          </div>
          <div className="w-full md:w-3/6 flex flex-col gap-2  text-[#646464] ">
            <p>Dec 18, 2023</p>
            <h2 className="text-lg text-black font-bold font-serif ">
              What is the Minimum Amount Due in Credit Cards?
            </h2>
            <p>
              Credit cards are a convenient and popular tool to manage expenses.
            </p>
          </div>
        </div>
      </div>
      <div className=" mt-20 mb-10">
        <div className="w-4/5   m-auto">
          <div className="  grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-7">
            {creditCardInDepthMenu}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CreditCardInDepth;
