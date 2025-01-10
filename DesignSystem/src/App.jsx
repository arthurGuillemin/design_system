import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/Pages/Home/Home';
import LoginPage from './Pages/Login/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />

      </Routes>
    </Router>
  );
}

export default App;
