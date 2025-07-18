"use client";
import React from "react";
import { MapPin, Signpost, SlidersHorizontal, List, Heart } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  search: <MapPin size={20} />,
  level: <Signpost size={20} />,
  ticket: <SlidersHorizontal size={20} />,
  booking: <List size={20} />,
  help: <Heart size={20} />,
};

interface ProgressBarProps {
  steps: string[];
  currentStep: string;
}

export default function ProgressBar({ steps, currentStep }: ProgressBarProps) {
  return (
    <div className="w-full px-2">
      <div className="flex items-center justify-center py-6 bg-[#0f172a] flex-nowrap">
        {steps.map((step, index) => {
          const isActive = currentStep.includes(step);
          return (
            <div key={step} className="flex items-center">
              {index !== 0 && (
                <div className="h-1 w-[6vw] sm:w-[5vw] md:w-16 bg-gray-400 shrink-0" />
              )}
              <div
                className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-colors duration-300 shrink-0
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
          );
        })}
      </div>
    </div>
  );
}
