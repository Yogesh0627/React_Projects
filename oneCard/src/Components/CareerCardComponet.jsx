const CareerCardComponet = ({ job, loc, index }) => {
  return (
    <div
      key={index}
      className="flex flex-col  sm:flex-row  justify-between h-52 md:h-44 w-full md:w-4/5 mx-auto border-b-2 border-gray-200 px-5  items-center"
    >
      <div>
        <div>
          <h3 className="text-xl w-full md:w-80 font-bold text-center sm:text-left font-serif ">
            {job}
          </h3>
          <p className="text-center sm:text-left text-lg ">{loc}</p>
        </div>
      </div>
      <div className="pb-10 sm:pb-0">
        <button className="bg-gradient-to-b from-[#217ee6] to-[#2498e3] text-white  h-11 w-36 rounded-lg text-base font-semibold font-serif">
          View Details
        </button>
      </div>
    </div>
  );
};

export default CareerCardComponet;
