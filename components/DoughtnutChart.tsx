"use client";

import { formatAmount } from "@/lib/utils";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const data = {
    datasets: [
      {
        label: "Budgets",
        data: [50, 750, 75, 100],
        backgroundColor: ["#277C78", "#82C9D7", "#F2CDAC", "#626070"]
      },
    ],
    labels: ["Entertainment", "Bills", "Dining Out", "Personal Care"],
  };

  return (
    <div className="max-w-[99%] mx-auto relative">
      <Doughnut
        data={data}
        width={240}
        height={240}
        options={{
          cutout: "60%",
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
      />

      <div className="absolute top-[40%] left-[28%] flex flex-col items-center justify-center gap-1">
        <h5 className="text-3xl font-bold">{formatAmount(338)}</h5>
        <h6 className="text-sm text-[#696868]">of {formatAmount(975)} limit</h6>
      </div>
    </div>
  );
};

export default DoughnutChart;
