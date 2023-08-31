import skillHTML from '../../images/lineaHTML.png'
import skillREACT from '../../images/lineaREACT.png'
import skillJS from '../../images/lineaJS.png'
import skillIDIOMA from '../../images/lineaIDIOMA.png'
import iconHTML from '../../images/html.png'
import iconCSS from '../../images/css.png'
import iconREACT from '../../images/react js.png'
import iconJS from '../../images/js.png'
import iconIDIOMA from '../../images/idioma.png'
import circulo from '../../images/circuloEX.png'
import './Skills.css'

const Skills = () => {
    const Skills = [
        {
            title: "HTML",
            img: skillHTML,
            icon: iconHTML,
            aparece: "Nota: 10/10"
        }, 
        {
            title: "CSS",
            img: skillHTML,
            icon: iconCSS,
            aparece: "Nota: 9/10"
        },
        { 
            title: "React JS",
            img: skillREACT,
            icon: iconREACT,
            aparece: "Nota: 9/10"
        }, 
        {
            title: "JavaScript",
            img: skillJS,
            icon: iconJS,
            aparece: "Nota: 7/10"
        }, 
        {
            title: "Ingles",
            img: skillIDIOMA,
            icon: iconIDIOMA,
            aparece: "Nota: B1"
        }
    ]

    return(
        <div className='Skill'>
            <h1 className='titleBigSkills'>SKILLS</h1>
            <div>
                {Skills.map((item)=>(
                    <div className='SkillContainer'>
                        <img className='iconSkills' src={item.icon} alt="" />    
                        <p className='SkillTitle'>{item.title}</p>
                        <div className='barraContainer image-container'>
                            <div class="image-overlay">
                                <p>{item.aparece}</p>
                            </div>
                            <img className='barraSkill' src={item.img} alt="" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills