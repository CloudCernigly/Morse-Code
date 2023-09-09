import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Messages from './pages/Messages';
import './components/style.css';
import TapMode from './pages/TapMode';


const App = () => {

  return (
  <>
      <Routes>

        <Route path={"/"} element={<Home/>}/>
        <Route path={"/tap-mode"} element={<TapMode/>}/>
        <Route path={"/messages"} element={<Messages/>}/>



      </Routes>
      </>
  );
};

export default App;