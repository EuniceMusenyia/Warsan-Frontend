import React, { useEffect } from "react";
import { Chart } from "chart.js";
import { FaUsers, FaSyringe, FaTimes } from 'react-icons/fa';
import { FaFilter } from 'react-icons/fa';
import { BsPersonCircle } from "react-icons/bs";

function CombinedCharts() {
  useEffect(() => {
    // Stacked Bar Chart
    var stackedCtx = document.getElementById('stackedBarChart').getContext('2d');

    var stackedChart = new Chart(stackedCtx, {
      type: 'bar',
      data: {
        labels: ["Polio", "MMR", "DTaP", "Hib", "Hepatitis B", "BCG"],
        datasets: [{
          label: "Immunization Rate",
          backgroundColor: [
            "#68BBD6",
            "#68BBD6",
            "#68BBD6",
            "#68BBD6",
            "#68BBD6",
            "#68BBD6",
          ],
          data: [70, 40, 60, 20, 15, 10]
        }]
      },
      options: {
        responsive: true, // Make the chart responsive
        maintainAspectRatio: false, // Allow the chart to adjust aspect ratio
        scales: {
          xAxes: [{
            stacked: true,
            barPercentage: 0.6,
            categoryPercentage: 0.7,
          }],
          yAxes: [{
            stacked: true,
            barPercentage: 0.6,
            categoryPercentage: 0.2,
            ticks: {
              beginAtZero: true
            },
            gridLines: {
              offsetGridLines: true
            }
          }]
        }
      }
    });

    // Pie Chart
    var pieCtx = document.getElementById('myChart').getContext('2d');

    const total = 20 + 80;
    const immunizedPercentage = (20 / total) * 100;
    const notImmunizedPercentage = (80 / total) * 100;

    var pieChart = new Chart(pieCtx, {
      type: 'pie',
      data: {
        labels: ["Immunized", "Not Immunized"],
        datasets: [{
          data: [immunizedPercentage, notImmunizedPercentage],
          borderColor: [
            "#1082EB",
            "#DA95F2",
          ],
          backgroundColor: [
            "#1082EB",
            "#DA95F2",
          ],
          borderWidth: 1,
        }]
      },
      options: {
        responsive: true, // Make the chart responsive
        maintainAspectRatio: false, // Allow the chart to adjust aspect ratio
        scales: {
          xAxes: [{
            display: false,
          }],
          yAxes: [{
            display: false,
          }],
        }
      },
    });

    // Line Chart
    var lineCtx = document.getElementById('lineChart').getContext('2d');
    var lineChart = new Chart(lineCtx, {
      type: 'line',
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
          data: [30, 67, 54, 56, 82, 70, 80],
          label: "Coverage Rate",
          borderColor: "rgb(62,149,205)",
          backgroundColor: "rgb(62,149,205,0.1)",
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  }, []);

  return (
    <div className="bg-white pl-10">
      <div className="flex-auto ml-64">
        <a className="text-blue-500 font-bold text-2xl">
          Overview
        </a>

        <a className="text-bleu-500 " style={{ marginLeft: "68%" }}></a>

        <a className="text-blue-500 ml-6">
          Vaccines <FaFilter className="inline-block mr-1" />
        </a>
        <a className="text-blue-500 ml-">
          Regions <FaFilter className="inline-block mr-1" />
          <span className="float-right text-5xl w-20 mt-2"><BsPersonCircle /></span>
        </a>
      </div>
      <div className="flex justify-between px-6 text-black bg-white mt-10 mx-40 ml-56">
        <div className="bg-blue-400 px-4 py-4 border-1 text-white flex items-center w-1/4 rounded-xl shadow-2xl border border-blue-500">
          <FaUsers size={24} className="mr-2" />
          <div>
            <h1>Population</h1>
            <p>17,000,000</p>
          </div>
        </div>
        <div className="bg-blue-400 px-4 py-4 border-1 text-white flex items-
            center w-1/4 rounded-xl shadow-2xl border border-blue-500">
          <FaSyringe size={24} className="mr-2" />
          <div>
            <h1>Immunized</h1>
            <p>400,000</p>
          </div>
        </div>
        <div className="bg-blue-400 px-4 py-4 border-1 text-white flex items-center w-1/4 rounded-xl shadow-2xl border border-blue-500">
          <FaTimes size={24} className="mr-2" />
          <div>
            <h1>Not Immunized</h1>
            <p>16,600,000</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row ml-32 justify-between mx-20 space-y-4 bg-white" style={{ marginTop: "-10%" }}>
        <div className="w-[800px] h-screen flex mx-auto my-32">
          <div className="border border-gray-400 rounded-xl w-full h-[65vh] my-auto shadow-xl bg-white">
            <canvas id="stackedBarChart" width="800" height="800"></canvas>
          </div>
        </div>

        <div className="flex flex-col ">
          <div className="w-[500px] h-[50vh] flex mx-auto my-auto mt-[180px]"> {/* Reduced height */}
            <div className="border border-gray-400 rounded-xl w-full h-fit my-auto shadow-xl bg-white ">
              <canvas id="myChart" width="400" height="300"></canvas>
            </div>
          </div>

          <div className="w-[500px] h-[50vh] mb-10% flex my-16 mt-[170px]"> {/* Reduced height */}
            <div className="border border-gray-400 pt-0 rounded-xl md:w-full h-fit my-auto shadow-xl -mt-60">
              <canvas id="lineChart" width="400" height="300"></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CombinedCharts;
