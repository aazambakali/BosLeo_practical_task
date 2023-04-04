
// var options = {
// 	series: [{
// 	name: 'series1',
// 	data: [31, 40, 28, 51, 42, 109, 100]
//   }],
// 	chart: {
// 	height: 250,
// 	type: 'area'
//   },
//   dataLabels: {
// 	enabled: false
//   },
//   stroke: {
// 	curve: 'smooth'	
//   },
//   xaxis: {
// 	type: 'datetime',
// 	categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
//   },
//   tooltip: {
// 	x: {
// 	  format: 'dd/MM/yy HH:mm'
// 	},
//   },
//   };

//   var chart = new ApexCharts(document.querySelector("#chart"), options);
//   chart.render();


  


  var options = {
	series: [{
	  name: "Desktops",
	  data: [50, 41, 35, 51, 49, 62, 69, 91, 78]
  }],
	chart: {
	height: 320,
	type: 'area',
	zoom: {
	  enabled: false
	}
  },
  dataLabels: {
	enabled: false
  },
  colors: ["#4755A8"],
  stroke: {
	curve: 'smooth'	
  },
  title: {
	text: 'Average watch time',
	align: 'left'
  },
  grid: {
	row: {
	  colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
	  opacity: 0.5
	},
  },
  xaxis: {
	categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
	title: {
		text: 'Month'
	  }
  },
  yaxis: {
	title: {
		text: 'Watch time'
	  }
  }
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();