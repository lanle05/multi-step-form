"use client";
import { useState } from "react";
import { RiVipCrown2Line } from "react-icons/ri";
import { IoPersonOutline } from "react-icons/io5";

interface StepProps {
  goToNext: () => void;
  goToPrevious: () => void;
}

export default function Level({ goToNext, goToPrevious }: StepProps) {
  const [selected, setSelected] = useState<"business" | "economy" | null>(null);

  const handleNext = () => {
    if (selected) {
      goToNext();
    }
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <p className="text-gray-300 text-lg">
          What type of ticket do you want?
        </p>
      </div>

      <div className="flex items-center my-5 justify-center gap-8">
        <button
          onClick={() => setSelected("business")}
          className={`items-center justify-center flex border-none rounded-lg p-8 transition-colors duration-300 ${
            selected === "business" ? "bg-cyan-500 text-white" : "bg-gray-400"
          }`}
        >
          <div className="flex flex-col items-center">
            <RiVipCrown2Line size={50} />
            Business
          </div>
        </button>

        <button
          onClick={() => setSelected("economy")}
          className={`items-center justify-center flex border-none rounded-lg p-8 transition-colors duration-300 ${
            selected === "economy" ? "bg-cyan-500 text-white" : "bg-gray-400"
          }`}
        >
          <div className="flex flex-col items-center">
            <IoPersonOutline size={50} />
            Economy
          </div>
        </button>
      </div>

      <div className="flex items-center justify-center gap-3">
        <button
          className="flex items-center justify-center bg-cyan-500 text-white rounded-2xl border-none px-10 py-1"
          onClick={goToPrevious}
        >
          Previous
        </button>
        <button
          className={`flex items-center justify-center rounded-2xl border-none px-10 py-1 ${
            selected
              ? "bg-cyan-500 text-white"
              : "bg-gray-300 text-gray-600 cursor-not-allowed"
          }`}
          onClick={handleNext}
          disabled={!selected}
        >
          Next
        </button>
      </div>
    </>
  );
}
