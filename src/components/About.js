import React from 'react'
import { Radar } from 'react-chartjs-2'

const About = props => {

  const data = {
    labels: [ 'Ruby', 'Rails', 'React', 'Redux', 'Javascript', 'CSS', 'HTML'],
    datasets: [{
      label: '',
      backgroundColor: 'rgba(179,181,198,0.2)',
      borderColor: 'rgba(179,181,198,1)',
      pointBackgroundColor: 'rgba(179,181,198,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(179,181,198,1)',
      data: [75, 80, 80, 70, 65, 80, 95]
    }]
  }

  const data2 = {
    labels: [ 'Photoshop', 'Illustrator', 'Premiere', 'Design'],
    datasets: [{
      label: '',
      backgroundColor: 'rgba(179,181,198,0.2)',
      borderColor: 'rgba(179,181,198,1)',
      pointBackgroundColor: 'rgba(179,181,198,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(179,181,198,1)',
      data: [80, 60, 65, 75]
    }]
  }

  const style = {
  	radarWrapper: {
  	  width: '30vw',
  	  height: '30vh',
  	  display: '-webkit-inline-box',
  	  marginTop: '0',
  	  position: 'relative'
  	},
  	h2: {
      textAlign: 'center',
      width: '100%',
      position: 'absolute',
      marginLeft: '-.5rem'
  	},
  }

  const options = {
  	legend: {
  	  display: false,
  	  labels: {
  	    color: 'red'
  	  }
  	},
  	maintainAspectRatio: true,
  	scale: {
  	  display: true,
   	  ticks: {
		beginAtZero: true,
		max: 100,
        display: false
      },
      pointLabels: {
      	fontColor: 'white',
      	fontSize: 15
      },
      gridLines: {
      	color: 'grey'
      },   
    },
    tooltips: {
      	callbacks: {
      	  label: function(tooltipItem, data) {
      		return data['datasets'][0]['data'][tooltipItem['index']] + '%';
    	  }
      	}
      }
  }
 
  return (
  	<React.Fragment>
  	  <div className="container">
  	    <section id="about">
		  <h1>About Angelo</h1>
		  <div className="about-img"></div>
		  <p>Hello! I am a former touring drummer who has peformed in 10+ countries who fell in love with code and now does it full time. I am passionate about music, books, understanding people, technology, stories, tennis, games, traveling, and helping others.</p>
		  <div style={style.radarWrapper}>
		    <h2 style={style.h2}>Code</h2>
		    <Radar height={40} width={40} data={data} options={options} />
		  </div>
		  <div className="radar-wrapper" style={style.radarWrapper}>
		    <h2 style={style.h2}>Design</h2>
		    <Radar height={40} width={40} data={data2} options={options} />
		  </div>
		</section>
	  </div>
	</React.Fragment>
  )
}

export default About