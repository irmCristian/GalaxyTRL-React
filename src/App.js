import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Training from './routes/Training';
import Home from './routes/Home'
import Pricing from './routes/Pricing'
import Contact from './routes/Contact'


function App() {
  return (
    <BrowserRouter >
      <div className='app'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/training' element={<Training />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
