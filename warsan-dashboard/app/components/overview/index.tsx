'use client'

import React, { useEffect } from "react";
import { Chart } from "chart.js";
import { FaUsers, FaSyringe, FaTimes } from 'react-icons/fa';
import { FaChevronDown} from 'react-icons/fa';
import { BsPersonCircle } from "react-icons/bs";

function Overview() {
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
        responsive: true, 
        maintainAspectRatio: false, 
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
        responsive: true, 
        maintainAspectRatio: false, 
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
    <div className="bg-white pl-10 ">
      <div className="flex-auto ml-64 pt-8 ">
        <a className="text-blue-500 font-bold text-4xl">
          Overview
        </a>

        <a className="text-bleu-500 " style={{ marginLeft: "68%" }}></a>

        <a className="text-blue-500 font-bold ml-16">
          Vaccines <FaChevronDown className="inline-block mr-5 text-sm font-bold" />
        </a>
        <a className="text-blue-500 font-bold">
          Regions <FaChevronDown className="inline-block mr-1 text-sm" />
          {/* <span className="float-right -ml-5 text-3xl w-20 mt-2 mr-2p"><BsPersonCircle /></span> */}

        </a>
      </div>

      <div className="mt-10 -mb-60 ml-20">
      <div className="flex bg-hey w-10/12 justify-between px-12 mt-10 mx-48 ml-52 py-8 rounded"> 
        
  <div className="bg-blue-400 px-4 py-4 text-white flex items-center w-1/4 rounded-md">
  <FaUsers size={56} className="mr-2 p-2 ml-5 bg-white rounded-full text-customBlue" />
    <div className="ml-8 text-xl font-bold">
      <h1>Population</h1>
      <p>17,000,000</p>
    </div>
  </div>
  <div className="bg-blue-400 px-4 py-4 text-white flex items-center w-1/4 rounded-xl">
    <FaSyringe size={56} className="mr-2 p-2 ml-5 bg-white rounded-full text-customBlue" />
    <div className="ml-8 text-xl font-bold">
      <h1>Immunized</h1>
      <p>400,000</p>
    </div>
  </div>
  <div className="bg-blue-400 px-4 py-4 text-white flex items-center w-1/4 rounded-xl">
    <FaTimes size={58} className="mr-2 p-2 ml-5 bg-white rounded-full text-customBlue" />
    <div className="ml-8 text-xl font-bold">
      <h1>Unimmunized</h1>
      <p>16,600,000</p>
    </div>
  </div>
</div>

      </div>
    

      
{/*  */}
<div className="flex flex-row ml-32 justify-between mx-20 mt-60 space-y-4">
  <div className="w-[800px] mx-auto mt-1 flex items-center"> {}
    <div className="border border-gray-400 rounded-xl w-full shadow-xl bg-white">
      <canvas id="stackedBarChart" width="720" height="550"></canvas>
    </div>
  </div>

  <div className="flex flex-col">
    <div className="w-[500px] mx-auto mt-10 flex items-center"> {}
      <div className="border border-gray-400 rounded-xl w-full shadow-xl bg-white">
        <canvas id="myChart" width="360" height="240"></canvas>
      </div>
    </div>

    <div className="w-[500px] mx-auto my-16 flex items-center"> {}
      <div className="border border-gray-400 pt-0 rounded-xl w-full shadow-xl">
        <canvas id="lineChart" width="360" height="240"></canvas>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Overview;