import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Routes/Home/Home'
import NavBar from './Routes/NavBar/NavBar';

const App = () => {
  return (
    <Router>
      <NavBar />
        <Routes>
          <Route path={'/'} element={<Home />} />
        </Routes>
    </Router>
  );
};

export default App;