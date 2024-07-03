let candlestick_chart_data = {
    chart: {
        type: 'candlestick'
    },
    title: {
        text: '' // Hide chart title
    },
    plotOptions: {
        candlestick: {
            color: 'red', // Color for stock price decrease
            upColor: 'green', // Color for stock price increase
            align: 'center',
            verticalAlign: 'bottom'
        }
    },
    tooltip: {
        enabled: false // Disable tooltip
    },
    legend: {
        enabled: false
    },
    series: [{
        data: [
            [100, 120, 70, 80] // [open, high, low, close]
        ]
    }],
    xAxis: {
        visible: false
    },
    yAxis: {
        visible: true,
        title: {
            text: '' // Hide y-axis title
        },
        tickPositions: [75, 80, 100, 105]
    }
}

let main_graph_price_data = {
    chart: {
        height: 250,
        width: 1190
    },
    title: {
        text: 'Price',
        align: 'center'
    },
    yAxis: {
        title: {
            text: 'Stock Price (EUR)'
        }
    },
    xAxis: {
        accessibility: {
            rangeDescription: 'Range: 2010 to 2020'
        }
    },
    legend: {
        enabled: false,
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },
    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2010
        }
    },
    series: [{
        name: 'Stock Price',
        data: [
            1.05, 1.10, 1.15, 1.20, 1.25, 1.30,
            1.35, 1.40, 1.45, 1.50, 1.55
        ]
    }],
    rangeSelector: {
        buttons: [{
            type: 'day',
            count: 1,
            text: '1d'
        }, {
            type: 'week',
            count: 1,
            text: '1w'
        }, {
            type: 'month',
            count: 1,
            text: '1m'
        }, {
            type: 'month',
            count: 3,
            text: '3m'
        }, {
            type: 'year',
            count: 1,
            text: '1y'
        }, {
            type: 'all',
            text: 'All'
        }],
        selected: 2, // Set the default selected button index (0-based)
        inputEnabled: false // Disable the input box to manually input dates
    },
    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }
}

let statistics_data = {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Price/Earnings To Price/Sales'
    },
    xAxis: {
        categories: ['Q3 "23', 'Q4 "23', 'Q1 "24', 'Q2 "24']
    },
    yAxis: {
        title: {
            text: 'Values'
        }
    },
    series: [{
        name: 'Price To Earnings',
        data: [25, 30, 28, 32] // Dummy data for Price To Earnings
    }, {
        name: 'Price To Sales',
        data: [10, 12, 11, 13] // Dummy data for Price To Sales
    }]
}
Highcharts.chart('dividends-graph', statistics_data);
Highcharts.chart('main-graph', main_graph_price_data);
Highcharts.chart('statistics-graph', statistics_data);
Highcharts.chart('high-low', candlestick_chart_data);

function updateSeriesData(chart, newData, targetDiv) {
    chart.setTitle({ text: document.getElementById(targetDiv).innerText });
    chart.series[0].setData(newData);
}

function updatePlotOptions(chart, options) {
    chart.update({
        plotOptions: options
    });
    chart.redraw();
}

document.getElementById('main-graph-btn-1').addEventListener('click', function () {
    var mainGraphChart = Highcharts.charts.find(function (chart) {
        return chart.renderTo.id === 'main-graph';
    });
    if (mainGraphChart) {
        updateSeriesData(mainGraphChart, [
            1.05, 1.10, 1.15, 1.20, 1.25, 1.30,
            1.35, 1.40, 1.45, 1.50, 1.55
        ], 'main-graph-btn-1');
    }
});

document.getElementById('main-graph-btn-2').addEventListener('click', function () {
    var mainGraphChart = Highcharts.charts.find(function (chart) {
        return chart.renderTo.id === 'main-graph';
    });

    if (mainGraphChart) {
        updateSeriesData(mainGraphChart, [132, 32342, 78903, 67674, 85905, 66909, 87879], 'main-graph-btn-2');
    }
});

document.getElementById('main-graph-btn-3').addEventListener('click', function () {
    var mainGraphChart = Highcharts.charts.find(function (chart) {
        return chart.renderTo.id === 'main-graph';
    });

    if (mainGraphChart) {
        updateSeriesData(mainGraphChart, [1332, 324342, 78203, 676744, 853905, 662909, 78379], 'main-graph-btn-3');
    }
});




function updatePlotOptions(containerId, newOptions) {
    const chart = Highcharts.charts.find(chart => chart.renderTo.id === containerId);
    if (chart) {
        chart.update(newOptions);
    } else {
        console.error(`No chart found with id ${containerId}`);
    }
}

document.getElementById('main-graph-btn-4').addEventListener('click', function () {
    updatePlotOptions('main-graph', {
        series: {
            type: 'line'
        }
    });
});

document.getElementById('main-graph-btn-5').addEventListener('click', function () {
    updatePlotOptions('main-graph', {
        type: 'candlestick',
    });
});

hide_watermark();
function hide_watermark() {
    const watermark = document.getElementsByClassName('highcharts-credits');
    for (let i = 0; i < watermark.length; i++) {
        watermark[i].style.display = 'none';
    }
}

smooth_scroll();
function smooth_scroll() {
    document.querySelectorAll('button[data-scroll]').forEach(button => {
        button.addEventListener('click', function () {
            const targetId = this.getAttribute('data-scroll');
            document.querySelector(targetId).scrollIntoView({
                alignToTop: true,
                behavior: 'smooth',
                block: 'center',
                inline: 'start' 
            });
        });
    });
}
