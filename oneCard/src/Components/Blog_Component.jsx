import React from "react";

const Blog_Component = ({ imgLink, date, query }) => {
  // console.log('bg',imgLink)
  return (
    <div className="w-fit h-fit rounded-xl  ">
      <img className="rounded-xl shadow-md w-full " src={imgLink} alt="" />
      <div className="w-[96%] py-4 ">
        <p className="text-sm text-[#696969]">{date}</p>
        <p className="text-lg text-[#2c2c2c] mt-1">{query}</p>
      </div>
    </div>
  );
};

export default Blog_Component;
