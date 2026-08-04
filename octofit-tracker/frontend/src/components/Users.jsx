import { useEffect, useState } from 'react';
// -8000.app.github.dev/api/users

function getApiBaseUrl() {
  const codespaceName = import.meta.env.VITE_CODESPACE_NAME;
  if (codespaceName) {
    return `https://${codespaceName}-8000.app.github.dev/api`;
  }
  return '/api';
}

function normalizeUsers(response) {
  if (Array.isArray(response)) {
    return response;
  }
  if (response && Array.isArray(response.results)) {
    return response.results;
  }
  return [];
}

export default function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadUsers() {
      try {
        const response = await fetch(`${getApiBaseUrl()}/users/`);
        if (!response.ok) {
          throw new Error('Unable to load users');
        }
        const data = await response.json();
        setUsers(normalizeUsers(data));
      } catch (err) {
        setError(err.message || 'Unexpected error');
      }
    }

    loadUsers();
  }, []);

  return (
    <section>
      <h2 className="h4 fw-semibold">Users</h2>
      {error ? <p className="text-danger">{error}</p> : null}
      <ul className="list-group mt-3">
        {users.map((user) => (
          <li key={user.id ?? user._id ?? user.name} className="list-group-item">
            <strong>{user.name}</strong> — {user.role ?? 'member'}
          </li>
        ))}
      </ul>
    </section>
  );
}
