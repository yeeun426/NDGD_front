import './App.css';
import { Route, Routes } from 'react-router-dom'
import MainPage from "./pages/MainPage";
import Procedure from './pages/Procedure';
import Calculator from './pages/Calculator';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<MainPage />}></Route>
        <Route path="/procedure" element={<Procedure />}></Route>
        <Route path="/calc" element={<Calculator />}></Route>
      </Routes>
    </div>
  );
}

export default App;
