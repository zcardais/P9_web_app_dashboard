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

Chart.defaults.global.defaultFontFamily = "'Raleway', Helvetica, Arial, sans-serif";
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
            data: [14, 16, 23, 14, 16, 16, 14, 11, 16, 12, 6],
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
           data: [195, 309, 312, 285, 2258, 275, 149],
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
         data: [2567, 1932, 2510, 2197, 2047, 5979, 4386, 4507, 2132, 1899, 2590],
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
         data: [20125, 20076, 20699, 14996, 11885, 12131, 18193, 22760, 18870, 13905, 10942, 15515],
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
                   max: 25000,
                   min: 0,
                   stepSize: 5000
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
        // line_chart.scaleService.updateScaleDefaults('linear', {
        //   ticks: {
        //     max: 300
        //   }
        // })
        line_chart.options.scales.yAxes[0].ticks.max = 300;
        line_chart.options.scales.yAxes[0].ticks.stepSize = 50;
        console.log(line_chart);
        line_chart.update();
    });

    $("#daily-btn").click(function(event) {
        event.preventDefault(event);
        line_chart.config.data = daily_data;
        line_chart.options.scales.yAxes[0].ticks.max = 25000;
        line_chart.options.scales.yAxes[0].ticks.stepSize = 5000;
        line_chart.update();
    });

    $("#weekly-btn").click(function(event) {
        event.preventDefault(event);
        line_chart.config.data = weekly_data;
        line_chart.options.scales.yAxes[0].ticks.max = 25000;
        line_chart.options.scales.yAxes[0].ticks.stepSize = 5000;
        line_chart.update();
    });

    $("#monthly-btn").click(function(event) {
        event.preventDefault(event);
        line_chart.config.data = monthly_data;
        line_chart.options.scales.yAxes[0].ticks.max = 25000;
        line_chart.options.scales.yAxes[0].ticks.stepSize = 5000;
        line_chart.update();
    });


// ------------------------------------------------------
// BAR CHARTS
// ------------------------------------------------------

var bar_chart_area = document.getElementById("daily-traffic-bar-chart");
var bar_chart = new Chart(bar_chart_area, {
  type: 'bar',
  data: {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
      label: false,
      data: [196, 309, 312, 286, 2258, 275, 149],
      backgroundColor: '#7377bf'
    }]
  },
  options: {
    stacked: true,
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero:true
        }
      }]
    }
  }
});

// ------------------------------------------------------
// DONUT CHARTS
// ------------------------------------------------------
var donut_chart_area = document.getElementById("source-traffic-donut-chart");
var donut_chart = new Chart(donut_chart_area, {
  type: 'doughnut',
  data: {
    labels: ["Mobile", "Tablets", "Desktop"],
    datasets: [{
      data: [520, 98, 3167],
      backgroundColor: [
        "#74B1BF",
        "#81C98F",
        "#7377BF"
      ],
      hoverBackgroundColor: [
        "#25a0bc",
        "#4abf61",
        "#484FCB"
      ]
    }]
  },
  options: {
    responsive: true,
    legend: {
      display: true,
      position: "bottom",
      labels: {
        fontFamily: 'Raleway, sans-serif',
        boxWidth: 10
      }
    }
  }
});

// CLOSE ALERT DIV ON CLICK
 $("#closebtn").click(function() {
     $("#alert").fadeOut("slow");
 });

 var notifications = $('#notifications');
 notifications.addClass('hidden');

 var toggleNotifications = $('#notification');
 toggleNotifications.on('click', function(){
   notifications.toggleClass('hidden');
 })


 // SHOW THE MODAL DIALOG BOX WHEN THE BELL ICON IS CLICKED
 $( "#dialog" ).dialog({ autoOpen: false });
 $( "#opener" ).click(function() {
   $( "#dialog" ).dialog( "open" );
 });
