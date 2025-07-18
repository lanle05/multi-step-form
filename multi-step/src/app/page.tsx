"use client";

import { useState } from "react";
import Search from "./components/search";
import Level from "./components/level";
import ProgressBar from "./components/progressbar";
import Ticket from "./components/ticket";
import Booking from "./components/booking";
import Help from "./components/help";

export default function Home() {
  const steps = ["search", "level", "ticket", "booking", "help"];
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const currentStep = steps[currentStepIndex];

  const goToNext = () => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex((prev) => prev + 1);
    }
  };

  const goToPrevious = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
    }
  };
  return (
    <>
      <div className="flex flex-col items-center h-screen bg-gray-900 px-4 sm:px-8 overflow-y-auto">
        <h1 className="text-2xl my-5 text-xl sm:text-2xl text-center font-bold mb-4 text-white">
          Search Flights, Cheapest Flights
        </h1>
        <p className="text-white text-base ">
          All the plane tickets you are looking for together!
        </p>
        <ProgressBar steps={steps} currentStep={steps[currentStepIndex]} />
        {currentStep === "search" && <Search goToNext={goToNext} />}
        {currentStep === "level" && (
          <Level goToNext={goToNext} goToPrevious={goToPrevious} />
        )}
        {currentStep === "ticket" && (
          <Ticket goToNext={goToNext} goToPrevious={goToPrevious} />
        )}
        {currentStep === "booking" && (
          <Booking goToNext={goToNext} goToPrevious={goToPrevious} />
        )}
        {currentStep === "help" && <Help goToPrevious={goToPrevious} />}
      </div>
    </>
  );
}
