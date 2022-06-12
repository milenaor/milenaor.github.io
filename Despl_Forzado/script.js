// Include AMCharts 3.10.0
var chart;

var chartData = [
  {
    "presidente": "Julio Cesar Turbay Ayala",
    "victimas": 2224
  },
  {
    "presidente": "Belisario Betancur Cuartas",
    "victimas": 19819
  },
  {
    "presidente": "Virgilio Barco Vargas",
    "victimas": 87203
  },
  {
    "presidente": "César Gaviria Trujillo",
    "victimas": 133900
  },
  {
    "presidente": "Ernesto Samper Pizano",
    "victimas": 548686
  },
  {
    "presidente": "Andrés Pastrana Arango",
    "victimas": 1827331
  },
  {
    "presidente": "Álvaro Uribe Velez -I",
    "victimas": 1630614
  },
  {
    "presidente": "Álvaro Uribe Velez -II",
    "victimas": 1364398
  },
  {
    "presidente": "Juan Manuel Santos",
    "victimas": 969576
  }
];


AmCharts.ready(function () {
  // SERIAL CHART
  chart = new AmCharts.AmSerialChart();
  chart.dataProvider = chartData;
  chart.categoryField = "presidente";
  chart.startDuration = 2;

  // AXES
  // category
  var categoryAxis = chart.categoryAxis;
  categoryAxis.labelRotation = 360;
  categoryAxis.gridPosition = "start";

  // value
  // in case you don't want to change default settings of value axis,
  // you don't need to create it, as one value axis is created automatically.

  // GRAPH
  var graph = new AmCharts.AmGraph();
  graph.valueField = "victimas";
  graph.balloonText = "[[category]]: <b>[[value]]</b>";
  graph.type = "column";
  graph.lineAlpha = 0;
  graph.fillAlphas = 0.8;
  chart.addGraph(graph);

  // CURSOR
  var chartCursor = new AmCharts.ChartCursor();
  chartCursor.cursorAlpha = 0;
  chartCursor.zoomable = false;
  chartCursor.categoryBalloonEnabled = false;
  chart.addChartCursor(chartCursor);

  chart.creditsPosition = "top-right";

  chart.write("chartdiv");
});