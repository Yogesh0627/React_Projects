import  { useEffect } from "react";
import Blog_Component from "../Components/Blog_Component";
import { cultureAndCreditCard } from "../AllData/BlogMenuData";
import Blog_Search from "../Components/Blog_Search";
import Footer from "../Components/Footer";

const CultureAndCreditCard = () => {
  const creditCardInDepthMenu = cultureAndCreditCard.map((item) => (
    <Blog_Component
      key={item.id}
      date={item.date}
      imgLink={item.imageLink}
      query={item.query}
    />
  ));

  useEffect(() => {
    document.title = "Culture And Credit Card";
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
              Culture & Credit Card
            </h2>
            <div className="flex flex-col w-fit md:flex-row gap-5 mt-8 pt-4">
              <div className="w-full md:w-3/6 ">
                <img
                  className="w-full rounded-2xl border-2 "
                  src="https://www.getonecard.app/images/blog/travel_destinations_with_easy_visa.png"
                  alt=""
                />
              </div>
              <div className="w-full md:w-2/5 flex flex-col gap-2  text-[#646464] ">
                <p>Jan 18, 2024</p>
                <h2 className="text-lg text-black font-bold font-serif ">
                  Trending International Destinations With Easy Visa for Indian
                  Travellers
                </h2>
                <p className="">
                  List of trending travel destinations you can visit without
                  going through a tedious visa application process.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3 pt-1">
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 pb-4  w-4/5 m-auto mt-7 gap-7 ">
            <Blog_Component
              date="Jan 16, 2024"
              query={"When To Use Credit Card EMI and When to Avoid"}
              imgLink={
                "https://www.getonecard.app/images/blog/credit_card_emi.png"
              }
            />
            <Blog_Component
              date="Jan 11, 2024"
              query={"How to Use Your Credit Card to Save Tax"}
              imgLink={
                "https://www.getonecard.app/images/blog/save_tax_using_your_credit_card.png"
              }
            />
            <Blog_Component
              date="Dec 11, 2023"
              query={"How To Use Your OneCard to Build Your Credit Score"}
              imgLink={
                "https://www.getonecard.app/images/blog/credit_score_using_onecard.png"
              }
            />
          </div>
        </div>
        <div className="w-4/5  m-auto mt-7 flex flex-col md:flex-row gap-5">
          <div className="w-full md:w-2/5">
            <img
              className="w-full rounded-2xl border-2 "
              src="https://www.getonecard.app/images/blog/saving_money_on_hotels_while_travelling.png"
              alt=""
            />
          </div>
          <div className="w-full md:w-3/6 flex flex-col gap-2  text-[#646464] ">
            <p>Nov 23, 2023</p>
            <h2 className="text-lg text-black font-bold font-serif ">
              Top 5 Ways To Save Money on Hotels While Travelling
            </h2>
            <p>
              Booking cheaper accommodation is not the only way to save money on
              hotels. Read this blog to learn more ways to save on hotel
              expenses.
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

export default CultureAndCreditCard;
