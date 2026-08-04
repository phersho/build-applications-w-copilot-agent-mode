import { useEffect, useState } from 'react';

function getApiBaseUrl() {
  const codespaceName = import.meta.env.VITE_CODESPACE_NAME;
  if (codespaceName) {
    return `https://${codespaceName}-8000.app.github.dev/api`;
  }
  return '/api';
}

function normalizeWorkouts(response) {
  if (Array.isArray(response)) {
    return response;
  }
  if (response && Array.isArray(response.results)) {
    return response.results;
  }
  return [];
}

export default function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadWorkouts() {
      try {
        const response = await fetch(`${getApiBaseUrl()}/workouts/`);
        if (!response.ok) {
          throw new Error('Unable to load workouts');
        }
        const data = await response.json();
        setWorkouts(normalizeWorkouts(data));
      } catch (err) {
        setError(err.message || 'Unexpected error');
      }
    }

    loadWorkouts();
  }, []);

  return (
    <section>
      <h2 className="h4 fw-semibold">Workouts</h2>
      {error ? <p className="text-danger">{error}</p> : null}
      <ul className="list-group mt-3">
        {workouts.map((workout) => (
          <li key={workout.id ?? workout._id ?? workout.title} className="list-group-item">
            <strong>{workout.title}</strong> — {workout.difficulty ?? 'moderate'}
          </li>
        ))}
      </ul>
    </section>
  );
}
