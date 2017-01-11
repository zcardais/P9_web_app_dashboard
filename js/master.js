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
          backgroundColor: "rgba(222, 223, 244, 1)",
          borderColor: "rgba(162, 166, 226, 1)",
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: "rgba(103, 107, 182, 1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(99, 105, 207, 1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 5,
          pointHitRadius: 10,
          data: [750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250],
      }
      ]
  };

  var option = {
    // Options go here
};

  var myLineChart = Chart.Line(ctxl,{
    type: 'line',
    data:dataLine,
    options:option
  })


  // Bar Chart
  var ctxb = $("#barChart");
  console.log(ctxb)
  var barChart = new Chart(ctxb, {
      type: 'bar',
      data: {
          labels: ["S", "M", "T", "W", "T", "F", "S"],
          datasets: [{
              label: 'DAILY TRAFFIC',
              data: [75, 100, 175, 125, 225, 200, 100],
              backgroundColor: [
              'rgba(104, 108, 183, 0.8)',
              'rgba(104, 108, 183, 0.8)',
              'rgba(104, 108, 183, 0.8)',
              'rgba(104, 108, 183, 0.8)',
              'rgba(104, 108, 183, 0.8)',
              'rgba(104, 108, 183, 0.8)',
              'rgba(104, 108, 183, 0.8)'
              ],
              borderColor: [
              'rgba(104, 108, 183, 1)',
              'rgba(104, 108, 183, 1)',
              'rgba(104, 108, 183, 1)',
              'rgba(104, 108, 183, 1)',
              'rgba(104, 108, 183, 1)',
              'rgba(104, 108, 183, 1)',
              'rgba(104, 108, 183, 1)'
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
                "rgba(129, 176, 189, 0.8)",
                "rgba(144, 199, 148, 0.8)",
                "rgba(104, 108, 183, 0.8)"
              ],
              hoverBackgroundColor: [
                "rgba(129, 176, 189, 1)",
                "rgba(144, 199, 148, 1)",
                "rgba(104, 108, 183, 1)"
              ]
          }]
  };

  var ctxd = $("#doughnutChart");
  console.log(ctxd);
  var myDoughnutChart = new Chart(ctxd, {
      type: 'doughnut',
      data: dataDoughnut,
  });

});
