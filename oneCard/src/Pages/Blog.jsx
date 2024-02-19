import  { useEffect } from "react";
import Blog_Componentes_Two from "../Components/Blog_Componentes_Two";
import Footer from "../Components/Footer";
import Blog_Search from "../Components/Blog_Search";

const Blog = () => {

  useEffect(() => {
    document.title = "OneCard Blog: Tips, Guides & Insights on Credit Cards";
    const favicon = document.getElementById("favicon");
    favicon.href = "src/images/favIcon_Black.svg";
  }, []);
  return (
    <div>
      <div className=" mt-20 pt-8 ">
        <div>
          <div className="w-4/5 m-auto flex flex-col md:flex-row justify-evenly items-center mb-16 py-4 shadow-lg rounded-2xl">
            <div className="w-2/5">
              <div className=" flex flex-col gap-3 w-4/5 m-auto">
                <p className="text-sm text-[#696969] font-normal">
                  <span className="text-[#0090FA] font-bold text-sm">
                    OneCard
                  </span>
                  <span className="mx-2">|</span>Jul 14,2023
                </p>
                <div>
                  <p className="text-[#646464] text-xl font-bold font-serif">
                    Why Paying Credit Card Minimum Amount Does Not Help ?
                  </p>
                </div>
                <p>By OneCard</p>
              </div>
            </div>
            <div className="w-3/6 border-2 shadow-md rounded-2xl">
              <img
                className="w-full rounded-2xl"
                src="https://www.getonecard.app/images/blog/Should_you_pay_just_the_minimum_amount_due.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="w-4/5 rounded-lg shadow-xl py-3 pl-3 pr-2 m-auto flex items-center justify-center gap-1 mt-10 mb-16">
          <input
            className=" w-full focus-visible:outline-none "
            type="text"
            placeholder="Search By Keywords"
          />
          <img
            className="w-8 "
            src="https://www.getonecard.app/images/icons/credit_card_in_depth.png"
            alt=""
          />
        </div>
        <div>
          <Blog_Search />
        </div>
        {/* menu start here */}
        <section>
          <div>
            <div>
              <Blog_Componentes_Two
                title="Explore Latest"
                imagelink1="https://www.getonecard.app/images/blog/steps_to_lock_unlock_credit_card.png"
                imagelink2="https://www.getonecard.app/images/blog/types_of_credit_cards.png"
                imagelink3="https://www.getonecard.app/images/blog/offers_on_credit_card_bill_payment.png"
                query1="How to Block and Unblock Your Credit Card"
                query2="What are the Different Types of Credit Cards?"
                query3="Credit Card Bill Payment Offers: Save Money and Earn Benefits"
                Navi="/category/explorelatest"
              />

              <Blog_Componentes_Two
                title="Credit Card In-Depth"
                imagelink1="https://www.getonecard.app/images/blog/steps_to_lock_unlock_credit_card.png"
                imagelink2="https://www.getonecard.app/images/blog/types_of_credit_cards.png"
                imagelink3="https://www.getonecard.app/images/blog/offers_on_credit_card_bill_payment.png"
                query1="How to Block and Unblock Your Credit Card"
                query2="What are the Different Types of Credit Cards?"
                query3="Credit Card Bill Payment Offers: Save Money and Earn Benefits"
                Navi="/category/creditcardindepth"
              />

              <Blog_Componentes_Two
                title="Culture & Credit Card"
                imagelink1="https://www.getonecard.app/images/blog/credit_score_using_onecard.png"
                imagelink2="https://www.getonecard.app/images/blog/saving_money_on_hotels_while_travelling.png"
                imagelink3="https://www.getonecard.app/images/blog/managing_money.png"
                query1="How To Use Your OneCard to Build Your Credit Score"
                query2="Top 5 Ways To Save Money on Hotels While Travelling"
                query3="Tips on Managing Your Money Well While Travelling Abroad"
                Navi="/category/cultureandcreditcard"
              />

              <Blog_Componentes_Two
                title="OneCard Features"
                imagelink1="https://www.getonecard.app/images/blog/fd_backed_onecard.png"
                imagelink2="https://www.getonecard.app/images/blog/getting_started_with_your_onecard_2.png"
                imagelink3="https://www.getonecard.app/images/blog/transaction_failed.png"
                query1="Everything you need to know about FD backed OneCard"
                query2="How to start using your OneCard credit card"
                query3="Credit Card Transaction Failed: Money Debited? Here's What To Do"
                Navi="/category/onecardfeatures"
              />

              <Blog_Componentes_Two
                title="Repayments & EMI"
                imagelink1="https://www.getonecard.app/images/blog/onecard_bill_payment_1.png"
                imagelink2="https://www.getonecard.app/images/blog/Should_you_pay_just_the_minimum_amount_due.png"
                imagelink3="https://www.getonecard.app/images/blog/Demystifying_Billing_Cycle.png"
                query1="How to pay your OneCard bill"
                query2="Why Paying Credit Card Minimum Amount Does Not Help?"
                query3="Credit Card Billing Cycle: What is It and How Does it Work?"
                Navi="/category/repaymentandemi"
              />

              <Blog_Componentes_Two
                title="Safety"
                imagelink1="https://www.getonecard.app/images/blog/tips_to_protect_your_credit_card_online.png"
                imagelink2="https://www.getonecard.app/images/blog/filing_a_cyber_crime_complaint_in_india.png"
                imagelink3="https://www.getonecard.app/images/blog/Social_Engineering_Fraud_1.png"
                query1="How To Protect Your Credit Card Information Online"
                query2="Learn What is CyberCrime & How to Complain in CyberCrime"
                query3="Social Engineering - How Fraudsters Use Psychology to Con You"
                Navi="/category/safety"
              />
            </div>
          </div>
        </section>
        {/* menu end here */}
        {/* Footer Section */}
        <section>
          <div>
            <div>
              <Footer />
            </div>
          </div>
        </section>
        {/*  Footer Section End here */}
      </div>
    </div>
  );
};

export default Blog;
