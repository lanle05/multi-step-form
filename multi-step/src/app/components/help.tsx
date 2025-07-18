"use client";
import { BsFillHouseHeartFill } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import { LuHandshake } from "react-icons/lu";
import { FaWheelchair } from "react-icons/fa";
import {useState} from "react";

interface StepProps {
  goToPrevious: () => void;
}

export default function Help({ goToPrevious }: StepProps) {
  const [selected, setSelected] = useState <"foundation" | "world" | "hands" | "disabled" | null>(null)
  return (
    <>
      <div className="flex items-center justify-center">
        <p className="text-gray-300 text-lg">Who do you want to help?</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 max-w-lg mx-auto my-5 gap-8">
        <button
          onClick={() => setSelected("foundation")}
          className={`items-center justify-center flex border-none rounded-lg p-8 transition-colors duration-300 ${
            selected === "foundation" ? "bg-cyan-500 text-white" : "bg-gray-400"
          }`}
        >
          <div className="flex flex-col items-center">
            <BsFillHouseHeartFill size={50} />
            Foundation
          </div>
        </button>

        <button
          onClick={() => setSelected("world")}
          className={`items-center justify-center flex border-none rounded-lg p-8 transition-colors duration-300 ${
            selected === "world" ? "bg-cyan-500 text-white" : "bg-gray-400"
          }`}
        >
          <div className="flex flex-col items-center">
            <TbWorld size={50} />
            World
          </div>
        </button>
        <button
          onClick={() => setSelected("hands")}
          className={`items-center justify-center flex border-none rounded-lg p-8 transition-colors duration-300 ${
            selected === "hands" ? "bg-cyan-500 text-white" : "bg-gray-400"
          }`}
        >
          <div className="flex flex-col items-center">
            <LuHandshake size={50} />
            Hands
          </div>
        </button>
        <button
          onClick={() => setSelected("disabled")}
          className={`items-center justify-center flex border-none rounded-lg p-8 transition-colors duration-300 ${
            selected === "disabled" ? "bg-cyan-500 text-white" : "bg-gray-400"
          }`}
        >
          <div className="flex flex-col items-center">
            <FaWheelchair size={50} />
            Economy
          </div>
        </button>
      </div>
      <div className="flex items-center justify-center gap-3">
        <button
          className="flex items-center justify-center bg-cyan-500 text-white rounded-2xl border-none px-10 py-1"
          onClick={goToPrevious}
        >
          Previous{" "}
        </button>
      </div>
    </>
  );
}
