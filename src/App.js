import './App.css';
import { Route, Routes } from 'react-router-dom'
import MainPage from "./pages/MainPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<MainPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
