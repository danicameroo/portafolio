import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Routes/Home/Home'
import NavBar from './Routes/NavBar/NavBar';
import Curriculum from './Routes/Curriculum/Curriculum';
import Portafolio from './Routes/Portafolio/Portafolio';

const App = () => {
  return (
    <Router>
      <NavBar />
        <Routes>
          <Route path={'/portafolio'} element={<Home />} />
          <Route path={'/curriculum'} element={<Curriculum />} />
          <Route path={'/paginas'} element={<Portafolio />} />
        </Routes>
    </Router>
  );
};

export default App;