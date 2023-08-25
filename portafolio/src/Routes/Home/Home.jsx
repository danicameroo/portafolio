import './Home.css'

const Home = () => {
    return(
        <div className="Home">
            <div className='homeContainer'>
                <div className='textHomeContainer'>
                    <h2 className='titleOneHomeContainer'>Daniela</h2>
                    <h2 className='titleTwoHomeContainer'>Camero</h2>
                    <p className='textHome'>Front End Developer</p>
                </div>
                <div className='buttonHomeContainer'>
                    <button className='buttonHome'>Curriculum</button>
                    <button className='buttonHome'>Portafolio</button>
                </div>
            </div>
        </div>
    )
}

export default Home