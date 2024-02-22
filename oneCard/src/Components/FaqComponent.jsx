import  { useState } from "react";

const FaqComponent = ({ qstn, ans }) => {
  const [answer, setAnswer] = useState(false);
  const handleAnswer = () => {
    setAnswer(!answer);
  }; 
  return (
    <div className="flex flex-col gap-8">
      <div
        onClick={handleAnswer}
        className="w-4/5 px-5 hover:cursor-pointer rounded-2xl shadow-lg h-24 bg-[#f5f5f5] m-auto flex items-center"
      >
        <h3 className="text-xl font-medium">
          <p >{qstn}</p>
        </h3>
      </div>
      <div
        style={{ display: answer ? "block" : "none" }}
        className={`flex px-5 items-center w-4/5 m-auto text-xl text-justify `}
      >
        <p>{ans}</p>
      </div>
    </div>
  );
};

export default FaqComponent;
