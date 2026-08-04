import { useEffect, useState } from 'react';

function getApiBaseUrl() {
  const codespaceName = import.meta.env.VITE_CODESPACE_NAME;
  if (codespaceName) {
    return `https://${codespaceName}-8000.app.github.dev/api`;
  }
  return '/api';
}

function normalizeActivities(response) {
  if (Array.isArray(response)) {
    return response;
  }
  if (response && Array.isArray(response.results)) {
    return response.results;
  }
  return [];
}

export default function Activities() {
  const [activities, setActivities] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadActivities() {
      try {
        const response = await fetch(`${getApiBaseUrl()}/activities/`);
        if (!response.ok) {
          throw new Error('Unable to load activities');
        }
        const data = await response.json();
        setActivities(normalizeActivities(data));
      } catch (err) {
        setError(err.message || 'Unexpected error');
      }
    }

    loadActivities();
  }, []);

  return (
    <section>
      <h2 className="h4 fw-semibold">Activities</h2>
      {error ? <p className="text-danger">{error}</p> : null}
      <ul className="list-group mt-3">
        {activities.map((activity) => (
          <li key={activity.id ?? activity._id ?? activity.date} className="list-group-item">
            <strong>{activity.type}</strong> — {activity.duration} min on {activity.date}
          </li>
        ))}
      </ul>
    </section>
  );
}
