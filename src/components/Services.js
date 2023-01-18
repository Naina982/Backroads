import { services } from '../data'
import Title from './Title'
const Services = () => {
  return (
    <div>
       <section className="section services" id="services">
       <Title title='our' subTitle='services'/>
      
      <div className="section-center services-center">
        {services.map((link)=>{
            const {id, icon, title,text}=link;
            return(
                <article className="service" key={id}>
                <span className="service-icon"><i className={icon}></i></span>
                <div className="service-info">
                  <h4 className="service-title">{title}</h4>
                  <p className="service-text">{text}
                  </p>
                </div>
              </article>

            )
        })}
      

      </div>
    </section>
    </div>
  )
}

export default Services
