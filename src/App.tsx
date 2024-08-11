import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Template from './pages/Template';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Template />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
