import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import LoginPage from './routes/LoginPage';
import ScrollToTop from './components/ScrollToTop';
import MainHomePage from './routes/HomePage'
import GamePage from './routes/GamePage'
import PeoplePage from './routes/PeoplePage'


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path='/Home' element={<MainHomePage/>}/>
        <Route path='/Game' element={<GamePage/>}/>
        <Route path='/People' element={<PeoplePage/>}/>
      </Routes>
    </Router>
  );
}

export default App;


