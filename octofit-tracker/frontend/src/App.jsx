import './App.css'

function App() {
  return (
    <main className="container py-5">
      <section className="row align-items-center g-4">
        <div className="col-lg-7">
          <p className="text-uppercase text-primary fw-semibold mb-2">OctoFit Tracker</p>
          <h1 className="display-5 fw-bold mb-3">A modern multi-tier fitness platform</h1>
          <p className="lead text-muted mb-4">
            Track workouts, build teams, and stay motivated with a polished React and Express experience.
          </p>
          <div className="d-flex gap-3">
            <a className="btn btn-primary btn-lg" href="https://vite.dev/" target="_blank" rel="noreferrer">
              Explore the stack
            </a>
            <a className="btn btn-outline-secondary btn-lg" href="https://react.dev/" target="_blank" rel="noreferrer">
              Learn React 19
            </a>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="card shadow-sm border-0">
            <div className="card-body p-4">
              <h2 className="h4 fw-semibold">What is ready</h2>
              <ul className="list-group list-group-flush mt-3">
                <li className="list-group-item px-0">React 19 + Vite frontend</li>
                <li className="list-group-item px-0">Express + TypeScript backend</li>
                <li className="list-group-item px-0">MongoDB connection via Mongoose</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
