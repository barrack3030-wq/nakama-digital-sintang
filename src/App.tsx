import { Routes, Route, Navigate } from 'react-router-dom';
import SintangLanding from './pages/SintangLanding';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SintangLanding />} />
      <Route path="/jasa-pembuatan-website-sintang/" element={<SintangLanding />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}