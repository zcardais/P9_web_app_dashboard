$(document).ready(function() {

  // Line Chart
  var ctxl = $('#lineChart');
  console.log(ctxl);

  var dataLine = {
      labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
      datasets: [
      {
        label: "TRAFFIC",
        fill: true,
        lineTension: 0.1,
        backgroundColor: "rgba(226, 227, 246, .5)",
        borderWidth: 1,
        borderColor: "rgba(169, 172, 229, 1)",
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: "rgba(116, 120, 191, 1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 2,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(90, 96, 208, .7)",
        pointHoverBorderWidth: 2,
        pointRadius: 4,
        pointHitRadius: 10,
        data: [750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250],
      }
    ]
  };

  var options = {
    showLines: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero:true
        }
      }]
    },
    resposive: true,
    legend: {
      position: 'none',
    },
  };

  var myLineChart = Chart.Line(ctxl,{
    type: 'line',
    data:dataLine,
    options:options
  });


  // Bar Chart
  var ctxb = $("#barChart");
  console.log(ctxb);
  var barChart = new Chart(ctxb, {
      type: 'bar',
      data: {
          labels: ["S", "M", "T", "W", "T", "F", "S"],
          datasets: [{
              label: 'DAILY TRAFFIC',
              data: [75, 100, 175, 125, 225, 200, 100],
              backgroundColor:[
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)'
                ],
              hoverBackgroundColor:[
                'rgba(115, 119, 191, .5)',
                'rgba(115, 119, 191, .5)',
                'rgba(115, 119, 191, .5)',
                'rgba(115, 119, 191, .5)',
                'rgba(115, 119, 191, .5)',
                'rgba(115, 119, 191, .5)',
                'rgba(115, 119, 191, .5)'
                ],
              borderColor: [
                'rgba(90, 96, 208, .7)',
                'rgba(90, 96, 208, .7)',
                'rgba(90, 96, 208, .7)',
                'rgba(90, 96, 208, .7)',
                'rgba(90, 96, 208, .7)',
                'rgba(90, 96, 208, .7)',
                'rgba(90, 96, 208, .7)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          },
          responsive: true,
          legend: {
            position: 'none',
          },
          title: {
            // display: false
          }
        }
      });


  // Doughnut Chart
  var dataDoughnut = {
    labels: [
      "Phones",
      "Tablets",
      "Desktop"
    ],
    datasets: [
      {
        data: [15, 15, 70],
        backgroundColor: [
          "rgba(116, 177, 191, 1)",
          "rgba(129, 201, 143, 1)",
          "rgba(115, 119, 191, 1)"
        ],
        hoverBackgroundColor: [
          "rgba(116, 177, 191, .5)",
          "rgba(129, 201, 143, .5)",
          "rgba(115, 119, 191, .5)"
        ]
      }]
    };

    var ctxd = $("#doughnutChart");
    console.log(ctxd);
    var myDoughnutChart = new Chart(ctxd, {
      type: 'doughnut',
      data: dataDoughnut,
      options: {
        responsive: true,
        legend: {
          position: 'right',
        },
        title: {
          display: true
        }
      }
    });
  });
