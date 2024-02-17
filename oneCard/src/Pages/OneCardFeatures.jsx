import React from "react";
import Blog_Component from "../Components/Blog_Component";
import { oneCardFeatures } from "../AllData/BlogMenuData";
import Blog_Search from "../Components/Blog_Search";
import Blog_Componentes_Two from "../Components/Blog_Componentes_Two";
import Footer from "../Components/Footer";

const OneCardFeatures = () => {
  const creditCardInDepthMenu = oneCardFeatures.map((item) => (
    <Blog_Component
      key={item.id}
      date={item.date}
      imgLink={item.imageLink}
      query={item.query}
    />
  ));

  React.useEffect(() => {
    document.title = "OneCard Features";
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
              OneCard Features
            </h2>
            <div className="flex flex-col w-fit md:flex-row gap-5 mt-8 pt-4">
              <div className="w-full md:w-3/6 ">
                <img
                  className="w-full rounded-2xl border-2 "
                  src="https://www.getonecard.app/images/blog/fd_backed_onecard.png"
                  alt=""
                />
              </div>
              <div className="w-full md:w-2/5 flex flex-col gap-2  text-[#646464] ">
                <p>Nov 14, 2023</p>
                <h2 className="text-lg text-black font-bold font-serif ">
                  Everything you need to know about FD backed OneCard
                </h2>
                <p className="">
                  Learn more about FD backed OneCard, the partner banks, the
                  various charges associated with the card, and how to make the
                  most of it.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3 pt-1">
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 pb-4  w-4/5 m-auto mt-7 gap-7 ">
            <Blog_Component
              date="Oct 19, 2023"
              query={"How to start using your OneCard credit card"}
              imgLink={
                "https://www.getonecard.app/images/blog/getting_started_with_your_onecard_2.png"
              }
            />
            <Blog_Component
              date="Sep 15, 2023"
              query={
                "Credit Card Transaction Failed: Money Debited? Here's What To Do"
              }
              imgLink={
                "https://www.getonecard.app/images/blog/transaction_failed.png"
              }
            />
            <Blog_Component
              date="Aug 29, 2023"
              query={"OneCard Spends Planner - Features and Benefits"}
              imgLink={
                "https://www.getonecard.app/images/blog/introducing_onecard_spends_planner.png"
              }
            />
          </div>
        </div>
        <div className="w-4/5  m-auto mt-7 flex flex-col md:flex-row gap-5">
          <div className="w-full md:w-2/5">
            <img
              className="w-full rounded-2xl border-2 "
              src="https://www.getonecard.app/images/blog/how_to_use_merchant_emi_on_onecard.png"
              alt=""
            />
          </div>
          <div className="w-full md:w-3/6 flex flex-col gap-2  text-[#646464] ">
            <p>July 31, 2023</p>
            <h2 className="text-lg text-black font-bold font-serif ">
              How to Avail Merchant EMI on OneCard
            </h2>
            <p>
            Get a step-by-step approach on how to avail merchant EMI options using the OneCard app.
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

export default OneCardFeatures;
