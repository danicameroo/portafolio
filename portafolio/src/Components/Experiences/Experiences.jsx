import { useEffect, useRef } from 'react';
import skillHTML from '../../images/barraSkills.png'
import { useInView } from 'react-intersection-observer';
import './Experiences.css'

const Experiences = () => {
    const [ref, inView] = useInView({
        triggerOnce: false,
    });


    const isInView = inView || false;

    const Experiences = [
        {
            title: "360 Luxury",
            subtitle: "Pagina Web",
            img: skillHTML,
            fecha: "2023"
        }, 
        {
            title: "Madagaskar",
            subtitle: "Catalogo",
            img: skillHTML,
            fecha: "2023"
        },
        { 
            title: "Jabones Kirei",
            subtitle: "Catalogo",
            img: skillHTML,
            fecha: "2021"
        }
    ]

    const containerRefs = useRef([]);

    useEffect(() => {
        containerRefs.current.forEach((container, index) => {
            container.style.animationDelay = `${index * 0.2}s`;
            container.style.opacity = 1;
        });
    }, []);

    return(
        <div className={`Experiences ${isInView ? 'active' : ''}`} ref={ref}>
            <h1 className='titleBigExperiences'>EXPERIENCES</h1>
                {Experiences.map((item, index)=>(
                    <div
                    className='ExperiencesContainer'
                    ref={(el) => (containerRefs.current[index] = el)}
                    key={index}
                    >
                        <div className='circleFechaExperiences'>
                            <p className='fechas'>{item.fecha}</p>
                        </div>
                        <div className='textoExperiences'>
                            <p className='titleExperiences'>{item.title}</p>
                            <p className='subtitleExperiences'>{item.subtitle}</p>
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default Experiences