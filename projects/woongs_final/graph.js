google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Year', '졸업자(명)', '취업자(명)'],
    ['2010', 25276, 11304],
    ['2013', 21689, 11413],
    ['2014', 25202, 10896],
    ['2015', 26139, 13685],
    ['2016', 25975, 14569],
    ['2017', 24203, 14688],
    ['2018', 22709, 13014],
    ['2019', 20920, 12178]
  ]);

  var options = {
    chart: {
      title: '디자인학과 졸업자 및 취업자 현황e',
      subtitle: 'Sales, Expenses, and Profit: 2014-2017',
    },
    bars: 'vertical',
    vAxis: {format: 'decimal'},
    height: 400,
    colors: ['#1b9e77', '#d95f02', '#7570b3', '#1b9e77', '#d95f02', '#7570b3', '#1b9e77', '#d95f02']
  };

  var chart = new google.charts.Bar(document.getElementById('chart_div004'));

  chart.draw(data, google.charts.Bar.convertOptions(options));

  var btns = document.getElementById('btn-group');

  btns.onclick = function (e) {

    if (e.target.tagName === 'BUTTON') {
      options.vAxis.format = e.target.id === 'none' ? '' : e.target.id;
      chart.draw(data, google.charts.Bar.convertOptions(options));
    }
  }
}
