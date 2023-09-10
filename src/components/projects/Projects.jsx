import React from 'react'
import './projects.css'
import img1 from '../../images/weatherapp.png'
import img2 from '../../images/recipedia.png'
import img3 from '../../images/planner.png'
import img4 from '../../images/movieapp.png'
import img5 from '../../images/reelsoffortune.png'
import img6 from '../../images/passwordgenerator.png'





const portfolioData = [
{id: 1,
      image: img6,
      title: 'AI Image Generator',
      github: 'https://github.com/al946x/ai-image-generator',
      demo: 'https://al946x.github.io/ai-image-generator/'
    },
    {
      id: 2,
      image:   img1,
      title: 'Weather Forecast Dashboard',
      github: 'https://github.com/al946x/WeatherForecast_App',
      demo: 'https://al946x.github.io/WeatherForecast_App/'
    },
    {
      id: 3,
      image: img2,
      title: 'Recipedia',
      github: 'https://github.com/o1ujok3/Recipedia',
      demo: 'https://o1ujok3.github.io/Recipedia/'
    },
    {
      id: 4,
      image: img3,
      title: 'Work Day Scheduler',
      github: 'https://github.com/al946x/WorkDay_Scheduler',
      demo: 'https://al946x.github.io/WorkDay_Scheduler/'
    },
    {
      id: 5,
      image: img4,
      title: 'MovieScope',
      github: 'https://github.com/al946x/MovieSearch_App',
      demo: 'https://al946x.github.io/MovieSearch_App/'
    },
    {
      id: 6,
      image: img5,
      title: 'Reels of Fortune',
      github: 'https://github.com/al946x/reelsoffortune',
      demo: 'https://reelsoffortune.netlify.app/'
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