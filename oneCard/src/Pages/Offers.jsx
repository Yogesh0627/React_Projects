import React, { useEffect } from "react";
import Offer_Card_Component from "../Components/Offer_Card_Component";
import {
  AutomobileDetails,
  BillsAndUtilititesDetails,
  EducationDetails,
  ElectronicDetails,
  EntertainmentDetails,
  Food_And_Dine_Details,
  FuelDetails,
  GroceryDetails,
  HealthAndWellnessDetails,
  JewelleryAndWatches,
  OtherDetails,
  RentDetails,
  ShoppingDetails,
  TravelDetails,
} from "../Components/OfferData";
import Footer from "../Components/Footer";
const Offers = () => {
  useEffect(() => {
    document.title =
      "Credit Card Offers: Avail Latest Offers & Deals with OneCard";
  }, []);

  const Groceries = GroceryDetails.map((item) => (
    <Offer_Card_Component
      imageLink={item.imglink}
      logoLink={item.logolink}
      offer={item.offer}
      title={item.validity}
      validity={item.validity}
    />
  ));

  const FoodAndDine = Food_And_Dine_Details.map((item) => (
    <Offer_Card_Component
      imageLink={item.imglink}
      logoLink={item.logolink}
      offer={item.offer}
      title={item.validity}
      validity={item.validity}
    />
  ));

  const Shopping = ShoppingDetails.map((item) => (
    <Offer_Card_Component
      imageLink={item.imglink}
      logoLink={item.logolink}
      offer={item.offer}
      title={item.validity}
      validity={item.validity}
    />
  ));

  const Electronics = ElectronicDetails.map((item) => (
    <Offer_Card_Component
      imageLink={item.imglink}
      logoLink={item.logolink}
      offer={item.offer}
      title={item.validity}
      validity={item.validity}
    />
  ));

  const Travels = TravelDetails.map((item) => (
    <Offer_Card_Component
      imageLink={item.imglink}
      logoLink={item.logolink}
      offer={item.offer}
      title={item.validity}
      validity={item.validity}
    />
  ));

  const Rent = RentDetails.map((item) => (
    <Offer_Card_Component
      imageLink={item.imglink}
      logoLink={item.logolink}
      offer={item.offer}
      title={item.validity}
      validity={item.validity}
    />
  ));

  const Education = EducationDetails.map((item) => (
    <Offer_Card_Component
      imageLink={item.imglink}
      logoLink={item.logolink}
      offer={item.offer}
      title={item.validity}
      validity={item.validity}
    />
  ));

  const BillsAndUtilities = BillsAndUtilititesDetails.map((item) => (
    <Offer_Card_Component
      imageLink={item.imglink}
      logoLink={item.logolink}
      offer={item.offer}
      title={item.validity}
      validity={item.validity}
    />
  ));

  const Entertainment = EntertainmentDetails.map((item) => (
    <Offer_Card_Component
      imageLink={item.imglink}
      logoLink={item.logolink}
      offer={item.offer}
      title={item.validity}
      validity={item.validity}
    />
  ));

  const Automobiles = AutomobileDetails.map((item) => (
    <Offer_Card_Component
      imageLink={item.imglink}
      logoLink={item.logolink}
      offer={item.offer}
      title={item.validity}
      validity={item.validity}
    />
  ));

  const Other = OtherDetails.map((item) => (
    <Offer_Card_Component
      imageLink={item.imglink}
      logoLink={item.logolink}
      offer={item.offer}
      title={item.validity}
      validity={item.validity}
    />
  ));

  const Fuel = FuelDetails.map((item) => (
    <Offer_Card_Component
      imageLink={item.imglink}
      logoLink={item.logolink}
      offer={item.offer}
      title={item.validity}
      validity={item.validity}
    />
  ));

  const JewelleryAndWatch = JewelleryAndWatches.map((item) => (
    <Offer_Card_Component
      imageLink={item.imglink}
      logoLink={item.logolink}
      offer={item.offer}
      title={item.validity}
      validity={item.validity}
    />
  ));

  const HealthAndWellness = HealthAndWellnessDetails.map((item) => (
    <Offer_Card_Component
      imageLink={item.imglink}
      logoLink={item.logolink}
      offer={item.offer}
      title={item.validity}
      validity={item.validity}
    />
  ));

  return (
    <div className="mt-10 pt-20">
      <div className="text-center">
        <h1 className="font-serif font-extrabold text-6xl">
          OneCard <span className="text-[#0193F7]">Offers</span>
        </h1>
      </div>
      <section className="mt-2 py-5">
        <div className="">
          <div className="mt-20">
            <div className="w-3/4 m-auto">
              <h2 className="text-2xl pb-8 pl-2 font-serif font-bold text-[#0193f7]">
                Groceries
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  w-3/4 gap-x-8 m-auto ">
              {Groceries}
            </div>
          </div>
          <div className="mt-20">
            <div className="w-3/4 m-auto">
              <h2 className="text-2xl pb-8 pl-2 font-serif font-bold text-[#0193f7]">
                Food & Dine
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  w-3/4 gap-x-8 m-auto ">
              {FoodAndDine}
            </div>
          </div>
          <div className="mt-20">
            <div className="w-3/4 m-auto">
              <h2 className="text-2xl pb-8 pl-2 font-serif font-bold text-[#0193f7]">
                Shopping
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-3/4 gap-x-8 m-auto ">
              {Shopping}
            </div>
          </div>
          <div className="mt-20">
            <div className="w-3/4 m-auto">
              <h2 className="text-2xl pb-8 pl-2 font-serif font-bold text-[#0193f7]">
                Electronics
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  w-3/4 gap-x-8 m-auto ">
              {Electronics}
            </div>
          </div>
          <div className="mt-20">
            <div className="w-3/4 m-auto">
              <h2 className="text-2xl pb-8 pl-2 font-serif font-bold text-[#0193f7]">
                Travel
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  w-3/4 gap-x-8 m-auto ">
              {Travels}
            </div>
          </div>
          <div className="mt-20">
            <div className="w-3/4 m-auto">
              <h2 className="text-2xl pb-8 pl-2 font-serif font-bold text-[#0193f7]">
                Rent
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  w-3/4 gap-x-8 m-auto ">{Rent}</div>
          </div>
          <div className="mt-20">
            <div className="w-3/4 m-auto">
              <h2 className="text-2xl pb-8 pl-2 font-serif font-bold text-[#0193f7]">
                Education
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  w-3/4 gap-x-8 m-auto ">
              {Education}
            </div>
          </div>
          <div className="mt-20">
            <div className="w-3/4 m-auto">
              <h2 className="text-2xl pb-8 pl-2 font-serif font-bold text-[#0193f7]">
                Bills & Utilities
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  w-3/4 gap-x-8 m-auto ">
              {BillsAndUtilities}
            </div>
          </div>
          <div className="mt-20">
            <div className="w-3/4 m-auto">
              <h2 className="text-2xl pb-8 pl-2 font-serif font-bold text-[#0193f7]">
                Entertainment
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  w-3/4 gap-x-8 m-auto ">
              {Entertainment}
            </div>
          </div>
          <div className="mt-20">
            <div className="w-3/4 m-auto">
              <h2 className="text-2xl pb-8 pl-2 font-serif font-bold text-[#0193f7]">
                Automobiles
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  w-3/4 gap-x-8 m-auto ">
              {Automobiles}
            </div>
          </div>
          <div className="mt-20">
            <div className="w-3/4 m-auto">
              <h2 className="text-2xl pb-8 pl-2 font-serif font-bold text-[#0193f7]">
                Other
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  w-3/4 gap-x-8 m-auto ">
              {Other}
            </div>
          </div>
          <div className="mt-20">
            <div className="w-3/4 m-auto">
              <h2 className="text-2xl pb-8 pl-2 font-serif font-bold text-[#0193f7]">
                Fuel
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  w-3/4 gap-x-8 m-auto ">{Fuel}</div>
          </div>
          <div className="mt-20">
            <div className="w-3/4 m-auto">
              <h2 className="text-2xl pb-8 pl-2 font-serif font-bold text-[#0193f7]">
                Jewellery & Watches
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  w-3/4 gap-x-8 m-auto ">
              {JewelleryAndWatch}
            </div>
          </div>
          <div className="mt-20">
            <div className="w-3/4 m-auto">
              <h2 className="text-2xl pb-8 pl-2 font-serif font-bold text-[#0193f7]">
                Health & Wellness
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  w-3/4 gap-x-8 m-auto ">
              {HealthAndWellness}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Offers;
