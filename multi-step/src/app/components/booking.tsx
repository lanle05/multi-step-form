"use client";

import Image from "next/image";

interface StepProps {
  goToNext: () => void;
  goToPrevious: () => void;
}

export default function Booking({ goToNext, goToPrevious }: StepProps) {
  return (
    <>
      <div className="flex items-center justify-center my-4">
        <p className="text-gray-300 text-lg text-center">
          Miles Responsibility
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:px-10 max-w-screen-xl mx-auto px-4">
        <div className="flex justify-center md:w-1/2 w-full">
          <Image
            src="/Images/Miles-Responsibility.png"
            alt="Miles Responsibility"
            width={240}
            height={300}
            className="w-full max-w-[240px] h-auto object-contain"
          />
        </div>
        <p className="text-white text-justify text-sm w-full md:w-1/2 mt-6 md:mt-0 md:text-base leading-relaxed">
          Throughout history, globalization and technological developments have
          always had a great effect on transportation. Today, everybody
          transports above the clouds and under the seas in more different ways
          and durations compared to the past. While the airplane was an extreme
          transportation vehicle for most of us only a quarter century ago, many
          people use it in their daily routines today. Airlines organize so many
          campaigns like elastic schedules, promotion gifts, and discounts to
          maintain this increase in the number of people who fly regularly and
          often. Bonus miles are only one of them. Airlines offer bonus miles to
          the passenger in accordance with the length and frequency of their
          flights. However, most of these miles go to waste without growing
          enough to get a small gift like a teddy bear, let alone a free bonus
          ticket.
        </p>
      </div>

      <div className="flex items-center justify-center gap-3 mt-6 mb-4">
        <button
          className="flex items-center justify-center bg-cyan-500 text-white rounded-2xl px-8 py-2 text-sm sm:text-base"
          onClick={goToPrevious}
        >
          Previous
        </button>
        <button
          className="flex items-center justify-center bg-cyan-500 text-white rounded-2xl px-8 py-2 text-sm sm:text-base"
          onClick={goToNext}
        >
          Next
        </button>
      </div>
    </>
  );
}
