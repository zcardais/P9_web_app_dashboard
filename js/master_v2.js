// Options
var legend_options = {
    display: true,
    position: "bottom",
    labels: {
        fontFamily: 'Raleway, sans-serif',
        boxWidth: 10
    }
};

// GLOBAL CHARTS OPTIONS

Chart.defaults.global.defaultFontFamily = "'Roboto', Helvetica, Arial, sans-serif";
Chart.defaults.global.maintainAspectRatio = false;
Chart.defaults.global.responsive = true;
Chart.defaults.bar.scaleShowVerticalLines = false;

// ------------------------------------------------------
// LINE CHARTS
// ------------------------------------------------------

// Hourly, Daily, Weekly and Monthly Datasets for line charts

var hourly_data = {
    labels: ['12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00'],
    datasets: [
        {
            data: [4500, 5000, 5500, 6000, 6500, 7000, 8000, 7500, 6500, 6000, 5500],
            backgroundColor: 'rgba(88, 20, 181, 0.3)',
            lineTension: 0,
            pointBorderColor: 'rgba(88, 20, 18, 0.8)',
            pointRadius: 6,
            pointBorderWidth: 2,
            pointBackgroundColor: '#fff'
        }
    ]
};


var daily_data = {
   labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
   datasets: [
       {
           data: [5000, 6000, 5500, 6500, 7000, 7500, 8000],
           backgroundColor: 'rgba(74, 217, 217, 0.3)',
           lineTension: 0,
           pointBorderColor: 'rgba(74, 217, 217, 0.8)',
           pointRadius: 6,
           pointBorderWidth: 2,
           pointBackgroundColor: '#fff'
       }
   ]
};

var weekly_data = {
 labels: ['16-22','23-29','30-5','6-12','13-19','20-26','27-3','4-10','11-17','18-24','25-31'],
 datasets: [
     {
         data: [6000, 8000, 9000, 8500, 7000, 9500, 9000, 8000, 7000, 6500, 5500],
         backgroundColor: 'rgba(245, 165, 3, 0.3)',
         lineTension: 0,
         pointBorderColor: 'rgba(245, 165, 3, 0.8)',
         pointRadius: 6,
         pointBorderWidth: 2,
         pointBackgroundColor: '#fff'
     }
 ]
};

var monthly_data = {
 labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov', 'Dec'],
 datasets: [
     {
         data: [6000, 8000, 9000, 8500, 7000, 9500, 9000, 8000, 7000, 6500, 5500, 4500],
         backgroundColor: 'rgba(242, 56, 90, 0.3)',
         lineTension: 0,
         pointBorderColor: 'rgba(242, 56, 90, 0.8)',
         pointRadius: 6,
         pointBorderWidth: 2,
         pointBackgroundColor: '#fff'
     }
 ]
};

var line_chart_area = document.getElementById("web-traffic-line-chart").getContext('2d');
var line_chart = new Chart(line_chart_area, {
   type: 'line',
   data: weekly_data,
   options: {
       legend: {
           display: false
       },
       scales: {
           yAxes: [{
               type: 'linear',
               ticks: {
                   max: 10000,
                   min: 4000,
                   stepSize: 2000
               }
           }],
           xAxes: [{
               gridLines: {
                   drawTicks: false,
                   color: '#dfdfdf'
               }
           }]
       }
   }
});

// Button clicks function to swap line charts datasets

$("#datasets-options a").click(function(event) {
       $('#datasets-options a').removeClass("active");
       $(this).addClass("active");
       event.preventDefault(event);
   });

   // Update charts
    $("#hourly-btn").click(function(event) {
        event.preventDefault(event);
        line_chart.config.data = hourly_data;
        line_chart.update();
    });

    $("#daily-btn").click(function(event) {
        event.preventDefault(event);
        line_chart.config.data = daily_data;
        line_chart.update();
    });

    $("#weekly-btn").click(function(event) {
        event.preventDefault(event);
        line_chart.config.data = weekly_data;
        line_chart.update();
    });

    $("#monthly-btn").click(function(event) {
        event.preventDefault(event);
        line_chart.config.data = monthly_data;
        line_chart.update();
    });
