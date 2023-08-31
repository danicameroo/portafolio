import { Link } from "react-router-dom";
import "./NavBar.css"

const NavBar = () => {    
    return(
        <div className="positionNav">
            <div className='MenuNav'>    
                <ul className='categoriesNav' >
                    <Link className='linkNav' to='/portafolio'><li className='listaNav'>HOME</li></Link>
                    <Link className='linkNav' to='/curriculum'><li className='listaNav'>CURRICULUM</li></Link>
                    <Link className='linkNav' to='/paginas'><li className='listaNav'>PORTAFOLIO</li></Link>
                </ul>
            </div>
        </div>
    );

};

export default NavBar