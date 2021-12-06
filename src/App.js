import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Question1 from './components/Question1';
import Question2 from './components/Question2';
import Question3 from './components/Question3';

function App() {
  return (
    <div>
      <BrowserRouter>
        <nav className='navBar'>
          <Link to='q1'>question 1</Link>
          <Link to='q2'>question 2</Link>
          <Link to='q3'>question 3</Link>
        </nav>
        <div className='content'>
          <Routes>
            <Route path='q1' element={<Question1 />} />
            <Route path='q2' element={<Question2 />} />
            <Route path='q3' element={<Question3 />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
