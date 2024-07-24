import {Routes, Route, Link} from 'react-router-dom';
import Fundamentals from './components/Fundamentals';
import Transition from './components/Transition';
import './App.scss';

const App = () => {
  return (
    <div>
      <h1>FM-Animation</h1>
      <nav>
        <Link to='/fundamental'>Fundamental</Link>
        <Link to='/transition'>Transition</Link>
      </nav>
      <Routes>
        <Route path='/fundamental' element={<Fundamentals />}/>
        <Route path='/transition' element={<Transition />}/>
      </Routes>
    </div>
  )
}

export default App