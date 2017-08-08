
// -- Area Chart Example
var ctx = document.getElementById("chartForReservationPage");
var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [
            "Thu 10", "Fri 11", "Sat 12", "Sun 13", "Mon 14", "Tue 15", "Wed 16"
        ],
        datasets: [
            {
                label: "Predicted degree of congestion",
                lineTension: 0.3,
                backgroundColor: "rgba(92,184,92,0.0)",
                borderColor: "rgba(92,184,92,1)",
                borderDash: [0,0],
                pointRadius: 0,
                pointBackgroundColor: "rgba(92,184,92,1)",
                pointBorderColor: "rgba(255,255,255,0.8)",
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(92,184,92,1)",
                pointHitRadius: 20,
                pointBorderWidth: 2,
                data: [30, 20, 24, 10, 10, 40, 30],
            }
        ],
    },
    options: {
        scales: {
            xAxes: [{
                time: {
                    unit: 'date'
                },
                gridLines: {
                    display: false
                },
                ticks: {
                    maxTicksLimit: 7
                }
            }],
            yAxes: [{
                ticks: {
                    min: 0,
                    maxTicksLimit: 5
                },
                gridLines: {
                    color: "rgba(0, 0, 0, .125)",
                }
            }],
        },
        legend: {
            display: true
        }
    }
});