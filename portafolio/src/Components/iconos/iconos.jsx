import iconoWhatsapp from '../../images/whatsapp.png'
import iconoLinkedin from '../../images/linkedin.png'
import iconoCall from '../../images/phone-call.png'
import iconoGit from '../../images/github.png'
import './iconos.css'
import { Link } from 'react-router-dom'

const Iconos = () => {
    return(
        <div className='IconsStatics'>
            <div className='iconosHome'>
                <Link to="https://api.whatsapp.com/send/?phone=584244981397&text&type=phone_number&app_absent=0" target="_blank"><img className='iconosImg' src={iconoWhatsapp} alt="" /></Link>
                <Link to="tel:+584244981396" target="_blank"><img className='iconosImg' src={iconoCall} alt="" /></Link>
                <Link to="https://www.linkedin.com/in/daniela-camero-516328210/" target="_blank"><img className='iconosImg' src={iconoLinkedin} alt="" /></Link>
                <Link to="https://github.com/danicameroo" target="_blank"><img className='iconosImg' src={iconoGit} alt="" /></Link>
            </div>
        </div>
    )
}

export default Iconos