import { useInView } from 'react-intersection-observer';
import DesarrolloWeb from '../../images/DesarrolloWeb.png'
import line from '../../images/lineaStudy.png'
import './Studies.css'

const Studies = () => {
    const [ref, inView] = useInView({
        triggerOnce: false,
    });


    const isInView = inView || false;

    const  Studies = [
        {
            title: "Desarrollo Web",
            subtitle: "2021",
            img: DesarrolloWeb
        },
        {
            title: "JavaScript",
            subtitle: "2022",
            img: DesarrolloWeb
        },
        {
            title: "React JS",
            subtitle: "2022",
            img: DesarrolloWeb
        },
        {
            title: "BackEnd",
            subtitle: "2023",
            img: DesarrolloWeb
        },
    ]

    return(
        <div className='Studies'>
            <div className={`containerBigTitle ${isInView ? 'active' : ''}`} ref={ref}>
                <div className='image-transition'></div>
                <h1 className='titleBigStudies'>ESTUDIOS</h1>
                <div className='image-transitionTwo'></div>
            </div>
            <div className='StudiesContainer'>
                {Studies.map((item)=>(
                    <div>
                        <p className='StudiesTitle'>{item.title}</p>
                        <p className='StudiesSubtitle'>{item.subtitle}</p>
                        <div className='imgSkillContainer'>
                            <img className='imgSkill' src={item.img} alt="" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Studies