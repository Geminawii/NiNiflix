import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProfilePage from './pages/ProfilePage';
import Home from './pages/Homepage';


export default function App() {
  return (
    <Router>
      <main className="bg-black text-white min-h-screen">
        <Routes>
          <Route path="/" element={<ProfilePage />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </main>
    </Router>
  );
}