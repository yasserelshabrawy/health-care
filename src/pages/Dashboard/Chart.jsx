import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Legend, Tooltip);

export default function Chart({ data }) {
  const chartData = {
    labels: data.map((item) => item.label),
    datasets: [
      {
        label: "Uncovered",
        data: data.map((item) => item.uncovered),
        backgroundColor: "red",
      },
      {
        label: "Covered",
        data: data.map((item) => item.covered),
        backgroundColor: "blue",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 100,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    barPercentage: 0.8,
    categoryPercentage: 0.3,
  };

  return (
    <div className="bg-white p-4 rounded shadow w-full max-w-4xl mx-auto">
      <div className="flex items-center mb-4">
        <div className="flex items-center justify-center p-2 w-8 h-8 bg-blue-100 rounded-md me-2">
        <svg
          className="w-6 h-6 text-blue-400"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11,3V23H5V3A2.006,2.006,0,0,1,7,1H9A2.006,2.006,0,0,1,11,3Z"
            fill="currentColor"
          />
          <path
            d="M21,11V23H15V11a2.006,2.006,0,0,1,2-2h2A2.006,2.006,0,0,1,21,11Z"
            fill="currentColor"
          />
          <path
            d="M23,24H4a4,4,0,0,1-4-4V1A1,1,0,0,1,2,1V20a2,2,0,0,0,2,2H23a1,1,0,0,1,0,2Z"
            fill="currentColor"
          />
          <path
            d="M23,22H22V11a3,3,0,0,0-3-3H17a3,3,0,0,0-3,3V22H12V3A3,3,0,0,0,9,0H7A3,3,0,0,0,4,3V22a2,2,0,0,1-2-2V1A1,1,0,0,0,0,1V20a4,4,0,0,0,4,4H23a1,1,0,0,0,0-2ZM6,22V3A1,1,0,0,1,7,2H9a1,1,0,0,1,1,1V22Zm10,0V11a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V22Z"
            fill="currentColor"
          />
        </svg>
        </div>
        <h2 className="text-lg font-bold ">Insuranse coverage overview </h2>
      </div>
      <Bar data={chartData} options={options} />
      <div className="flex justify-end gap-4 mt-4 text-sm">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-800"></span>
          {chartData.datasets[1].label}
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
          {chartData.datasets[0].label}
        </div>
      </div>
    </div>
  );
}
