var chart    = document.getElementById('chart').getContext('2d'),
    gradient = chart.createLinearGradient(0, 0, 0, 450);

gradient.addColorStop(0, 'rgba(0, 199, 214, 0.32)');
gradient.addColorStop(0.3, 'rgba(0, 199, 214, 0.1)');
gradient.addColorStop(1, 'rgba(0, 199, 214, 0)');


var data  = {
    labels: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October', 'November','December' ],
    datasets: [{
			label: 'Applications',
			backgroundColor: gradient,
			pointBackgroundColor: '#00c7d6',
			borderWidth: 1,
			borderColor: '#0e1a2f',
			data: [60, 45, 80, 30, 35, 55,25,80,40,50,80,50]
    }]
};

var options = {
	responsive: true,
	maintainAspectRatio: true,
	animation: {
		easing: 'easeInOutQuad',
		duration: 520
	},
	scales: {
		yAxes: [{
      ticks: {
        fontColor: '#5e6a81'
      },
			gridLines: {
				color: 'rgba(200, 200, 200, 0.08)',
				lineWidth: 1
			}
		}],
    xAxes:[{
      ticks: {
        fontColor: '#5e6a81'
      }
    }]
	},
	elements: {
		line: {
			tension: 0.4
		}
	},
	legend: {
		display: false
	},
	point: {
		backgroundColor: '#00c7d6'
	},
	tooltips: {
		titleFontFamily: 'Poppins',
		backgroundColor: 'rgba(0,0,0,0.4)',
		titleFontColor: 'white',
		caretSize: 5,
		cornerRadius: 2,
		xPadding: 10,
		yPadding: 10
	}
};

var chartInstance = new Chart(chart, {
    type: 'line',
    data: data,
		options: options
});

document.querySelector('.open-right-area').addEventListener('click', function () {
    document.querySelector('.app-right').classList.add('show');
});

document.querySelector('.close-right').addEventListener('click', function () {
    document.querySelector('.app-right').classList.remove('show');
});

document.querySelector('.menu-button').addEventListener('click', function () {
    document.querySelector('.app-left').classList.add('show');
});

document.querySelector('.close-menu').addEventListener('click', function () {
    document.querySelector('.app-left').classList.remove('show');
});

document.getElementById('Pat1').addEventListener('click', function () {
  document.getElementById('PPW').style.backgroundImage = "url('1.png')";
  x=document.getElementsByClassName("profile-text");  // Find the elements
    for(var i = 0; i < x.length; i++){
    x[i].innerText="Oprah Winfrey";    // Change the content
    }
    document.getElementById('BP_circle').style.strokeDasharray = "70,100";
    document.getElementById('TEMP_circle').style.strokeDasharray = "70,100";
    document.getElementById('BPM_circle').style.strokeDasharray = "70,100";
    bp=document.getElementsByClassName("profile-text");  // Find the elements
    for(var i = 0; i < x.length; i++){
    bp[i].innerText="Oprah Winfrey";    // Change the content
    }
    temp=document.getElementsByClassName("profile-text");  // Find the elements
    for(var i = 0; i < x.length; i++){
    temp[i].innerText="Oprah Winfrey";    // Change the content
    }
    bpm=document.getElementsByClassName("percentage");  // Find the elements
    for(var i = 0; i < x.length; i++){
    bpm[i].innerText="Oprah Winfrey";    // Change the content
    }
    document.getElementById('BP_circle_info').style.animation = "circle-chart-fill 2s reverse";
    document.getElementById('BPM_circle_info').innerHTML = "70";
    document.getElementById('TEMP_circle_info').innerText = "110/70";
    document.getElementById('BP_circle_info').innerHTML = "110/70";

});

document.getElementById('Pat2').addEventListener('click', function () {
  document.getElementById('PPW').style.backgroundImage = "url('2.png')";
  x=document.getElementsByClassName("profile-text");  // Find the elements
    for(var i = 0; i < x.length; i++){
    x[i].innerText="Elon Musk";    // Change the content
    }
});
document.getElementById('Pat3').addEventListener('click', function () {
  document.getElementById('PPW').style.backgroundImage = "url('3.png')";
});
document.getElementById('Pat4').addEventListener('click', function () {
  document.getElementById('PPW').style.backgroundImage = "url('4.png')";
});