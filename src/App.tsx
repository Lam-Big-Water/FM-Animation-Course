import {Routes, Route, Link} from 'react-router-dom';
import Fundamentals from './components/Fundamentals-01';
import Transition from './components/Transition-02';
import KeyFrames from './components/KeyFrames-03';
import './App.scss';

const App = () => {
  return (
    <div>
      <h1>FM-Animation</h1>
        <ul>
          <li><Link to='/fundamental'>Fundamental</Link></li>
          <li><Link to='/transition'>Transition</Link></li>
          <li><Link to='/keyframes'>KeyFrames</Link></li>
        </ul>
      <Routes>
        <Route path='/fundamental' element={<Fundamentals />}/>
        <Route path='/transition' element={<Transition />}/>
        <Route path='/keyframes' element={<KeyFrames />}/>
      </Routes>
    </div>
  )
}

export default App