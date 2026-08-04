import { useEffect, useState } from 'react';
// -8000.app.github.dev/api/leaderboard

function getApiBaseUrl() {
  const codespaceName = import.meta.env.VITE_CODESPACE_NAME;
  if (codespaceName) {
    return `https://${codespaceName}-8000.app.github.dev/api`;
  }
  return '/api';
}

function normalizeLeaderboard(response) {
  if (Array.isArray(response)) {
    return response;
  }
  if (response && Array.isArray(response.results)) {
    return response.results;
  }
  return [];
}

export default function Leaderboard() {
  const [leaders, setLeaders] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadLeaderboard() {
      try {
        const response = await fetch(`${getApiBaseUrl()}/leaderboard/`);
        if (!response.ok) {
          throw new Error('Unable to load leaderboard');
        }
        const data = await response.json();
        setLeaders(normalizeLeaderboard(data));
      } catch (err) {
        setError(err.message || 'Unexpected error');
      }
    }

    loadLeaderboard();
  }, []);

  return (
    <section>
      <h2 className="h4 fw-semibold">Leaderboard</h2>
      {error ? <p className="text-danger">{error}</p> : null}
      <ul className="list-group mt-3">
        {leaders.map((entry) => (
          <li key={entry.rank ?? entry.name} className="list-group-item">
            <strong>#{entry.rank}</strong> {entry.name} — {entry.score} pts
          </li>
        ))}
      </ul>
    </section>
  );
}
