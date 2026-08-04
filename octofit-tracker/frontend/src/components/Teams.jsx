import { useEffect, useState } from 'react';
// -8000.app.github.dev/api/teams

function getApiBaseUrl() {
  const codespaceName = import.meta.env.VITE_CODESPACE_NAME;
  if (codespaceName) {
    return `https://${codespaceName}-8000.app.github.dev/api`;
  }
  return '/api';
}

function normalizeTeams(response) {
  if (Array.isArray(response)) {
    return response;
  }
  if (response && Array.isArray(response.results)) {
    return response.results;
  }
  return [];
}

export default function Teams() {
  const [teams, setTeams] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadTeams() {
      try {
        const response = await fetch(`${getApiBaseUrl()}/teams/`);
        if (!response.ok) {
          throw new Error('Unable to load teams');
        }
        const data = await response.json();
        setTeams(normalizeTeams(data));
      } catch (err) {
        setError(err.message || 'Unexpected error');
      }
    }

    loadTeams();
  }, []);

  return (
    <section>
      <h2 className="h4 fw-semibold">Teams</h2>
      {error ? <p className="text-danger">{error}</p> : null}
      <ul className="list-group mt-3">
        {teams.map((team) => (
          <li key={team.id ?? team._id ?? team.name} className="list-group-item">
            <strong>{team.name}</strong> — {team.goal ?? `${team.members ?? 0} members`}
          </li>
        ))}
      </ul>
    </section>
  );
}
