import { Link } from "react-router-dom";
import "./NavBar.css"

const NavBar = () => {    
    return(
        <div className="positionNav">
            <div className='MenuNav'>    
                <ul className='categoriesNav' >
                    <Link className='linkNav' to='/'><li className='listaNav'>HOME</li></Link>
                    <Link className='linkNav' to='/products/Todos'><li className='listaNav'>ABOUT US</li></Link>
                    <Link className='linkNav' to='/categoria/Romance'><li className='listaNav'>CURRICULUM</li></Link>
                    <Link className='linkNav' to='/categoria/Romance'><li className='listaNav'>PORTAFOLIO</li></Link>
                </ul>
            </div>
        </div>
    );

};

export default NavBar