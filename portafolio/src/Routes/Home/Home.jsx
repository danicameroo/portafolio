import { Link } from 'react-router-dom'
import './Home.css'
import Iconos from '../../Components/iconos/iconos'

const Home = () => {
    return(
        <div className="Home">
            <div className='homeContainer'>
                <div className='textHomeContainer'>
                    <p className='titleOneHomeContainer'>DANIELA</p>
                    <p className='titleTwoHomeContainer'>CAMERO</p>
                    <p className='textHome'>Front End Developer</p>
                </div>
                <div className='buttonHomeContainer'>
                    <Link to='/curriculum'><button className='buttonHome'>Curriculum</button></Link>
                    <Link to='/portafolio'><button className='buttonHome'>Portafolio</button></Link>
                </div>
            </div>
            <Iconos />
        </div>
    )
}

export default Home