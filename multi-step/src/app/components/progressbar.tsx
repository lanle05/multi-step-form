"use client";
import React from "react";
import {
    MapPin,
    Signpost,
    SlidersHorizontal,
    List,
    Heart
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  search: <MapPin size={20} />,
  level: <Signpost size={20} />,
  ticket: <SlidersHorizontal size={20} />,
  booking: <List size={20} />,
  help: <Heart size={20} />,
};

interface ProgressBarProps {
  steps : string[];
  currentStep: string;
}

export default function ProgressBar({ steps, currentStep }: ProgressBarProps) {
  return (
    <>
      <div className="flex items-center justify-center px-4 py-6 bg-[#0f172a]">
        {steps.map((step, index) => {
          const isActive = currentStep.includes(step);
          return (
            <div key={step} className="flex items-center">
              {index !== 0 && <div className="h-1 w-25 bg-gray-400" />}
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center
              ${
                isActive
                  ? "bg-cyan-500 text-white"
                  : "border-2 border-gray-400 text-gray-400"
              }
            `}
              >
                {iconMap[step]}
              </div>
            </div>
          ); })}
      </div>
    </>
  );
}