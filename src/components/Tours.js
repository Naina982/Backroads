import React from 'react'
import { tours } from '../data'
import Title from './Title'

const Tours = () => {
  return (
    <div>
      <section className="section" id="tours">
        <Title title='Featured' subTitle='tours'/>

      <div className="section-center featured-center">
        {tours.map((tour)=>{
            const {id,image,date,icon,title,info,location,duration,cost}=tour
            return(
                <article className="tour-card" key={id}>
          <div className="tour-img-container">
            <img src={image} className="tour-img" alt="" />
            <p className="tour-date">{date}</p>
          </div>
          <div className="tour-info">
            <div className="tour-title">
              <h4>{title}</h4>
            </div>
            <p>{info}
            </p>
            <div className="tour-footer">
              <p>
                <span><i className={icon}></i></span>{location}
              </p>
              <p>{duration}  Days</p>
              <p>from ${cost}</p>
            </div>
          </div>
        </article>

            )
        })}
       

      </div>
    </section>
    </div>
  )
}

export default Tours
