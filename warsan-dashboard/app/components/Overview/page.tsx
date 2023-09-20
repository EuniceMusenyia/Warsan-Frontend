import React, { useEffect } from "react";
import { Chart } from "chart.js";
import {IoCaretDownSharp} from "react-icons/io5";
import { IoCaretDownOutline} from "react-icons/io5";

function StackedAndPie() {
  useEffect(() => {
    // Stacked Bar Chart
    var stackedCtx = document.getElementById('stackedBarChart').getContext('2d');

    var stackedChart = new Chart(stackedCtx, {
      type: 'bar',
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July","August","September","October","November","December"],
        datasets: [{
          data: [70, 90, 44, 60, 83, 90, 100],
          label: "Polio",
          borderColor: "#68BBD6",
          backgroundColor: "#68BBD6",
          borderWidth: 2
        }, {
          data: [10, 21, 60, 44, 17, 21, 17],
          label: "MMR",
          borderColor: "#DA95F2",
          backgroundColor: "#DA95F2",
          borderWidth: 2
        }, {
          data: [60, 13, 20, 12, 50, 0, 16],
          label: "DTaP",
          borderColor: "#017D7D",
          backgroundColor: "#017D7D",
          borderWidth: 2
        } ,{
            data: [10, 21, 60, 44, 17, 21, 17],
            label: "Hib",
            borderColor: "##6DD18F",
            backgroundColor: "#6DD18F",
            borderWidth: 2
          }, {
            data: [10, 30, 20, 44, 17, 21, 17],
            label: "Hepatitis B",
            borderColor: "#ffa500",
            backgroundColor: "#ffc04d",
            borderWidth: 2
          }, {
            data: [10, 21, 60, 44, 17, 21, 17],
            label: "BCG)",
            borderColor: "#044357",
            backgroundColor: "#044357",
            borderWidth: 2
          },
    ]
      },
      options: {
        scales: {
          xAxes: [{
            stacked: true
          }],
          yAxes: [{
            stacked: true
          }],
        }
      },
    });

    // Pie Chart
    var pieCtx = document.getElementById('myChart').getContext('2d');

    // Calculate percentages based on the total
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
          borderWidth: 2,
        }]
      },
      options: {
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
    
  }, []);

  return (
    <div className="bg-white">
      <div className="flex-auto">
        <a className="text-blue-500 font-bold ml-20 text-2xl">
          Overview </a>
        
          <a className="text-black"style={{marginLeft:"75%"}}>Regions</a>
            
          <a className="text-blue-500 ml-6">Vaccines</a>
       
      </div>
    <div className="flex justify-between px-80 text-black bg-white mt-10">
  <div className="bg-blue-400 px-6 py-4 border-1 text-white">
    
    <h1> Population</h1>
    <p>17,000,000</p>
  </div>
  <div className="bg-blue-400 px-6 py-4 border-1 text-white">
    <h1>Immunized</h1>
    <p>400,000</p>
  </div>
  <div className="bg-blue-400 px-6 py-4 border-1 text-white">
    <h1>Not Immunized</h1>
    <p>16,600,000</p>
  </div>
</div>

    
    <div className="flex justify-between space-y-6 bg-white"style={{marginTop:"-10%"}}>
        <div>
      {/* Stacked-Bar Chart */}
      <h1 className="w-[110px] mx-auto mt-10 text-xl font-semibold capitalize">Stacked-Bar Chart</h1>
     
      <div className="w-[900px] h-screen flex mx-auto my-auto">
        <div className="border border-gray-400 rounded-xl w-full h-fit my-auto shadow-xl bg-white">
          <canvas id="stackedBarChart"></canvas>
        </div>
      </div>
      </div>

      {/* Pie Chart */}
      <div>
      <h1 className="w-[110px] mx-auto mt-10 text-xl font-semibold capitalize">Pie Chart</h1>
      <div className="w-[900px] h-screen flex mx-auto my-auto">
        <div className="border border-gray-400 rounded-xl w-full h-fit my-auto shadow-xl bg-white pb-2">
          <canvas id="myChart"></canvas>
        </div>
      </div>
      </div>
      </div>
      </div>
  
  );
}

export default StackedAndPie;
