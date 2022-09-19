import './App.css'
import Navbar from './components/Navbar/Navbar';
import { useSelector } from 'react-redux';
import Home from './components/Pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Search from './components/Pages/Search';



function App() {
  const { MovieDetail} = useSelector(state => state.infoMovies)
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
