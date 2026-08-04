import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';

const links = [
  { to: '/users', label: 'Users' },
  { to: '/teams', label: 'Teams' },
  { to: '/activities', label: 'Activities' },
  { to: '/leaderboard', label: 'Leaderboard' },
  { to: '/workouts', label: 'Workouts' },
];

function App() {
  const codespaceName = import.meta.env.VITE_CODESPACE_NAME;

  return (
    <main className="container py-4">
      <header className="mb-4">
        <p className="text-uppercase text-primary fw-semibold mb-2">OctoFit Tracker</p>
        <h1 className="display-6 fw-bold">Modern multi-tier fitness insights</h1>
        <p className="lead text-muted">
          Configure VITE_CODESPACE_NAME in .env.local to target your Codespaces backend URL.
          Without it, the app falls back to local development requests.
        </p>
        <div className="mt-3">
          {codespaceName ? (
            <p className="text-success mb-0">Using Codespaces API URL for {codespaceName}</p>
          ) : (
            <p className="text-secondary mb-0">VITE_CODESPACE_NAME is not set; using local fallback URLs.</p>
          )}
        </div>
      </header>

      <nav className="nav nav-pills flex-wrap gap-2 mb-4">
        {links.map((link) => (
          <NavLink key={link.to} to={link.to} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            {link.label}
          </NavLink>
        ))}
      </nav>

      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/users" element={<Users />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/workouts" element={<Workouts />} />
      </Routes>
    </main>
  );
}

export default App;
