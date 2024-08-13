import {Routes, Route, Link} from 'react-router-dom';
import Fundamentals from './components/Fundamentals-01';
import Transition from './components/Transition-02';
import KeyFrames from './components/KeyFrames-03';
import KeyFramesPractice from './components/KeyFramesPractice-03';
import Choreography from './components/Choreography-04';
import States from './components/States-05';
import './App.scss';

const App = () => {
  return (
    <div>
      <h1>FM-Animation</h1>
        <ul>
          <li><Link to='/fundamental'>Fundamental</Link></li>
          <li><Link to='/transition'>Transition</Link></li>
          <li><Link to='/keyframes'>KeyFrames</Link></li>
          <li><Link to='/keyframesPractice'>keyframesPractice</Link></li>
          <li><Link to='/choreography'>Choreography</Link></li>
          <li><Link to='/states'>States</Link></li>

        </ul>
      <Routes>
        <Route path='/fundamental' element={<Fundamentals />}/>
        <Route path='/transition' element={<Transition />}/>
        <Route path='/keyframes' element={<KeyFrames />}/>
        <Route path='/keyframesPractice' element={<KeyFramesPractice />}/>
        <Route path='/choreography' element={<Choreography />}/>
        <Route path='/states' element={<States />}/>

      </Routes>
    </div>
  )
}

export default App