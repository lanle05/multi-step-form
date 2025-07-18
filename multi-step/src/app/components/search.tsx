"use client";

import { useState } from "react";
import {
  FaPlaneDeparture,
  FaPlaneArrival,
  FaCalendarAlt,
} from "react-icons/fa";

interface StepProps {
  goToNext: () => void;
}

export default function Search({ goToNext }: StepProps) {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departDate, setDepartDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [error, setError] = useState("");

  const handleNext = () => {
    if (!from || !to || !departDate || !returnDate) {
      setError("All fields are required.");
      return;
    }

    setError("");
    goToNext();
  };

  return (
    <div className="bg-gray-900 p-6 rounded-lg w-full max-w-4xl mx-auto mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* From */}
        <div className="flex flex-col space-y-2">
          <label className="text-white text-sm flex items-center gap-2">
            <FaPlaneDeparture />
            From
          </label>
          <input
            type="text"
            placeholder="Country, city or airport"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="w-full px-4 py-2 rounded-md bg-white text-gray-800"
          />
        </div>

        {/* To */}
        <div className="flex flex-col space-y-2">
          <label className="text-white text-sm flex items-center gap-2">
            <FaPlaneArrival />
            To
          </label>
          <input
            type="text"
            placeholder="Country, city or airport"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="w-full px-4 py-2 rounded-md bg-white text-gray-800"
          />
        </div>

        {/* Depart Date */}
        <div className="flex flex-col space-y-2">
          <label className="text-white text-sm flex items-center gap-2">
            <FaCalendarAlt />
            Depart Date
          </label>
          <input
            type="date"
            value={departDate}
            onChange={(e) => setDepartDate(e.target.value)}
            className="w-full px-4 py-2 rounded-md bg-white text-gray-800"
          />
        </div>

        {/* Return Date */}
        <div className="flex flex-col space-y-2">
          <label className="text-white text-sm flex items-center gap-2">
            <FaCalendarAlt />
            Return Date
          </label>
          <input
            type="date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            className="w-full px-4 py-2 rounded-md bg-white text-gray-800"
          />
        </div>
      </div>

      {error && <p className="text-red-500 mt-4 text-sm">{error}</p>}

      <div className="mt-6 text-center">
        <button
          className="bg-cyan-500 text-white px-10 py-2 rounded-2xl disabled:opacity-50"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
