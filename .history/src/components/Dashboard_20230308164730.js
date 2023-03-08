import React from "react";

const dataDoughnut = {
  labels: ["JavaScript", "Python", "Ruby"],
  datasets: [
    {
      label: "My First Dataset",
      data: [300, 50, 100],
      backgroundColor: [
        "rgb(133, 105, 241)",
        "rgb(164, 101, 241)",
        "rgb(101, 143, 241)",
      ],
      hoverOffset: 4,
    },
  ],
};

const configDoughnut = {
  type: "doughnut",
  data: dataDoughnut,
  options: {},
};

export default function Dashboard() {
  <div>
    <h2>Dashboard</h2>
    <div class="overflow-hidden rounded-lg shadow-lg">
      <div class="bg-neutral-50 py-3 px-5 dark:bg-neutral-700 dark:text-neutral-200">
        Doughnut chart
      </div>
      <canvas class="p-10" id="chartDoughnut"></canvas>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  </div>;
}
