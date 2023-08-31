import img360 from '../../images/portafolio360.png'
import imgMada from '../../images/portafolioMada.png'
import { Link } from 'react-router-dom'
import './Portafolio.css'
import Iconos from '../../Components/iconos/iconos'

const Portafolio = () => {
    const protafolio = [
        {
            title: "Pagina Web",
            subtitle: "360 Luxury",
            img: img360,
            link: "https://danicameroo.github.io/360luxury/"
        },
        {
            title: "Catalogo",
            subtitle: "Madagaskar",
            img: imgMada,
            link: "https://danicameroo.github.io/CatalogoMadagaskar/"
        }
    ]
    return(
        <div className="portafolio">
            <h1 className='titleBigPortafolio'>PORTAFOLIO</h1>
            <div className='contPortafolio'>
                {protafolio.map((item) => (
                    <div className='containerPortafolio'>
                        <img className='imgPortafolio' src={item.img} alt="" />
                        <p className='titlePortafolio'>{item.title}</p>
                        <p className='subtitlePortafolio'>{item.subtitle}</p>
                        <div className='buttonContainerPortafolio'>
                            <Link to={item.link}  target="_blank"><button className='buttonPortafolio'>Ir a la pagina</button></Link>
                        </div>
                    </div>
                ))}
            </div>
            <Iconos />
        </div>
    )
}

export default Portafolio