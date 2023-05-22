import React from 'react'
import './portfolio.css'
import IMG1 from '../../assests/portfolio1.jpg'
import IMG2 from '../../assests/portfolio2.jpg'
import IMG3 from '../../assests/portfolio3.jpg'
import IMG4 from '../../assests/portfolio4.jpg'
import IMG5 from '../../assests/portfolio5.png'
import IMG6 from '../../assests/portfolio6.jpg'

const data=[
  {
    id:1,
    image:IMG1,
    title:'Title 1',
    github:'https://github.com',
    demo:'https://dribbble.com/Alien_pixels'
  },
  {
    id:2,
    image:IMG2,
    title:'Title 2',
    github:'https://github.com',
    demo:'https://dribbble.com/Alien_pixels'
  },
  {
    id:3,
    image:IMG3,
    title:'Title 3',
    github:'https://github.com',
    demo:'https://dribbble.com/Alien_pixels'
  },
  {
    id:4,
    image:IMG4,
    title:'Title 4',
    github:'https://github.com',
    demo:'https://dribbble.com/Alien_pixels'
  },
  {
    id:5,
    image:IMG1,
    title:'Title 5',
    github:'https://github.com',
    demo:'https://dribbble.com/Alien_pixels'
  },
  {
    id:6,
    image:IMG6,
    title:'Title 6',
    github:'https://github.com',
    demo:'https://dribbble.com/Alien_pixels'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
      {
        data.map(({id,image,title,github,demo})=>{
          return(
            <article key={id} className="portfolio_item">
                <div className="portfolio_item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
                  <a href={github} target='_blank' className='btn'>GitHub</a>
                  <a href={demo} target='_blank' className='btn btn-primary'>Live Demo</a>
                </div>
              </article>
          )
        })
      }
      </div>
    </section>
  )
}

export default Portfolio