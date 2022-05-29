import Home from './pages/Home/Home';
import Single from './pages/single/Single';
import TopBar from './components/topbar/TopBar';
import Write from './pages/write/Write';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <TopBar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/write" element={<Write />} />
          <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </Router>
  );
}

export default App;
