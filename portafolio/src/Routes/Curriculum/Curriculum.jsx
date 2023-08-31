import Experiences from "../../Components/Experiences/Experiences"
import Skills from "../../Components/Skills/Skills"
import Studies from "../../Components/Studies/Studies"
import Work from "../../Components/Work/Work"
import Iconos from "../../Components/iconos/iconos"
import './Curriculum.css'

const Curriculum = () => {
    return(
        <div className="Curriculum">
            <div className="containerUno">
                <Skills />
                <Experiences />
                <Work />
            </div>
            <div>
                <Studies />
            </div>
            <Iconos />
        </div>
    )
}

export default Curriculum