function start(){
    functionDistance();
    functionSpeed();
    functionAcceleration();
	functionGravity();
}

window.onload = start(); 

function functionDistance(){
    
    //Dit is de code voor de afstand
    var distanceChart = document.getElementById('distance').getContext('2d');

    Chart.defaults.global.defaultFontSize = 16;
    Chart.defaults.global.defaultFontColor = '#fff';

    var massPopChart = new Chart(distanceChart, {
      type:'horizontalBar',
      data:{
        labels:['Shuttle'],
        datasets:[{
          label:'KM',
          data:[
            120//dit is de huidige afstand van de shuttle.
          ],
          backgroundColor:[
            '#FFFFFF'
          ],
        }]
      },
      options:{
        title:{
          display:true,
		  text:'Kilometers (x1000)'
        },
        scales:{
          xAxes: [{
            display: true,
            ticks: {
                beginAtZero: true,
                steps: 100,
                stepValue: 5,
                max: 400
            }
        }]
        },
        legend:{
          display:false,
          position:'right',
          labels:{
            fontColor:'#000'
          }
        },
        tooltips:{
          enabled:true
        }
      }
    });
    
    
}

function functionSpeed(){
    
    //Dit is de code voor de snelheid
    
    var speedChart = document.getElementById('speed').getContext('2d');

    Chart.defaults.global.defaultFontSize = 16;
    Chart.defaults.global.defaultFontColor = '#fff';

    var massPopChart = new Chart(speedChart, {
      type:'doughnut',
      data:{
        labels:['Current-speed', 'Untill max-speed'],
        datasets:[{
          label:'km/h',
          data:[
            13678,//Dit side snelheid die je kan aanpassen
            6322//hoeveelheid voordat de max-snelheid in km/h bereikt is
          ],
          backgroundColor:[
            '#FFF',
            '#000'
          ],
        }]
      },
      options:{
		   title:{
          display:true,
		  text:'Speed in Km/h (max 20000)'
        },
        legend:{
          display:true,
          position:'right',
          labels:{
            fontColor:'#FFF'
          }
        },
        rotation: 1 * Math.PI,
        circumference: 1 * Math.PI
      }
    });
    
}

function functionAcceleration(){
    
    //Dit is de code voor de acceleratie
    var accelerationChart = document.getElementById('acceleration').getContext('2d');

    Chart.defaults.global.defaultFontSize = 16;
    Chart.defaults.global.defaultFontColor = '#fff';

    var massPopChart = new Chart(accelerationChart, {
      type:'line',
      data:{
        labels:[0,100,200,300,400,500,600,700,800],
        datasets:[{
          label:'',
          data:[
              
            // momenten van m/s over een span van 800 seconden
            10,
            37,
            39,
            0,
			6,
			16,
			15,
			0,
			5,
          ],
          borderWidth:1,
          borderColor:'#fff',
          backgroundColor:[
			'rgba(224, 224, 224,0.5)',
			'rgba(224, 224, 224,0.5)',
			'rgba(224, 224, 224,0.5)',
			'rgba(224, 224, 224,0.5)',
			'rgba(224, 224, 224,0.5)',
			'rgba(224, 224, 224,0.5)',
			'rgba(224, 224, 224,0.5)',
			'rgba(224, 224, 224,0.5)',
			'rgba(224, 224, 224,0.5)',
          ]
        }]
      },
      options:{
        title:{
          display:true,
		  text: 'Meters/second',
        },
        scales:{
          yAxes: [{
            display: true,
            ticks: {
                beginAtZero: true,
                steps: 5,
                max: 40
            }
          }]
        },
        legend:{
          display:false
        },
        tooltips:{
          enabled:true
        }
      }
    });   
}


function functionGravity(){
    
    //Dit is de code voor de zwaartekracht
    
    var gravityChart = document.getElementById('gravity').getContext('2d');

    Chart.defaults.global.defaultFontSize = 16;
    Chart.defaults.global.defaultFontColor = '#fff';

    var massPopChart = new Chart(gravityChart, {
      type:'bar',
      data:{
        labels:['Aarde', 'Shuttle', 'Mars'],
        datasets:[{
          label:'Newton',
          data:[
            9.807,
            7.567,//Waarde van de shuttle. Je kan het veranderen
            3.711
          ],
          backgroundColor:[
            '#00bcd4',
            '#FFF',
            '#ffca7e'
          ]
        }]
      },
      options:{
        title:{
          display:true,
          text:'Zwaartekracht in Newton'
        },
        scales:{
          yAxes: [{
            display: true,
            ticks: {
                beginAtZero: true
            }
        }]
        },
        legend:{
          display:false
        },
        tooltips:{
          enabled:true
        }
      }
    });
}