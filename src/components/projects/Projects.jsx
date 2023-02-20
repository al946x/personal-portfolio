import React from 'react'
import './projects.css'
import {weatherapp} from '../../images/weatherapp.png'
import {recipedia} from '../../images/recipedia.png'
import {planner} from '../../images/planner.png'
import {movieapp} from '../../images/movieapp.png'



const portfolioData = [
    {
      id: 1,
      image:   {weatherapp},
      title: 'Weather Forecast Dashboard',
      github: 'https://github.com/al946x/WeatherForecast_App',
      demo: 'https://al946x.github.io/WeatherForecast_App/'
    },
    {
      id: 2,
      image: recipedia,
      title: 'Recipedia',
      github: 'https://github.com/o1ujok3/Recipedia',
      demo: 'https://o1ujok3.github.io/Recipedia/'
    },
    {
      id: 3,
      image: planner,
      title: 'Work Day Scheduler',
      github: 'https://github.com/al946x/WorkDay_Scheduler',
      demo: 'https://al946x.github.io/WorkDay_Scheduler/'
    },
    {
      id: 4,
      image: movieapp,
      title: 'MovieScope',
      github: 'https://github.com/al946x/MovieSearch_App',
      demo: 'https://al946x.github.io/MovieSearch_App/'
    },
    {
      id: 5,
    //   image: 
      title: 'Reels of Fortune',
      github: 'https://github.com/al946x/reelsoffortune',
      demo: ''
    },
    {
      id: 6,
    //   image: 
      title: 'xxxx',
      github: '',
      demo: ''
    },
  ]

const Projects = () => {
    return (
    <section id ='portfolio'>
      <h2> Portfolio</h2>
      <div className="portfolio-container">
        {
          portfolioData.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className="portfolio-item">
                <div className="portfolio-item-image">
                  <img src={image} className="image" alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio-item-cta">
                  <a href={github} className="btn" target="_blank" rel="noopener noreferrer">Github</a>
                  <a href={demo} className=" btn-primary" target="_blank" rel="noopener noreferrer">Application</a>
                </div>
              </article>
            )
          })
        }

      </div>
    </section>
    )
  
}
export default Projects;