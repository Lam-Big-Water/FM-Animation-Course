import {Routes, Route, Link} from 'react-router-dom';
import Fundamentals from './components/Fundamentals';
import './App.scss';

const App = () => {
  return (
    <div>
      <h1>FM-Animation</h1>
      <nav>
        <Link to='/fundamental'>Fundamental</Link>
      </nav>
      <Routes>
        <Route path='/fundamental' element={<Fundamentals />}/>
      </Routes>
    </div>
  )
}

export default App