"use client";

interface StepProps {
  goToNext: () => void;
  goToPrevious: () => void;
}

export default function Ticket({ goToNext, goToPrevious }: StepProps) {
  return (
    <>
      <div className="overflow-x-auto max-w-4xl mx-auto my-6 rounded-lg shadow-lg">
        <table className="min-w-full text-sm md:text-base text-black border border-gray-300 rounded-lg">
          <caption className="caption-top text-lg font-semibold text-center py-4 bg-gray-400 text-cyan-600">
            Ticket Information
          </caption>
          <thead>
            <tr className=" ">
              <th className="px-4 py-2">From</th>
              <th className="px-4 py-2">To</th>
              <th className="px-4 py-2">Type</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Miles</th>
              <th className="px-4 py-2">Gift Miles</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td colSpan={7}>
                <hr className="border-t border-gray-400 my-2" />
              </td>
            </tr>
            <tr className=" text-center">
              <td className="px-4 py-2">Moskova</td>
              <td className="px-4 py-2">Madrid</td>
              <td className="px-4 py-2">Business</td>
              <td className="px-4 py-2">27/08/2021</td>
              <td className="px-4 py-2">21143</td>
              <td className="px-4 py-2">2129</td>
              <td className="px-4 py-2">32.7</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
        <button
          className="bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-2xl px-8 py-2 transition duration-200"
          onClick={goToPrevious}
        >
          Previous
        </button>
        <button
          className="bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-2xl px-8 py-2 transition duration-200"
          onClick={goToNext}
        >
          Next
        </button>
      </div>
    </>
  );
}
