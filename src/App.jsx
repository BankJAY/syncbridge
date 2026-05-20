import './App.css'

const workflows = [
  {
    title: 'Meeting to execution',
    copy:
      'Convert weekly syncs, stakeholder calls, and ops standups into aligned action plans with owners, priorities, and deadlines.',
  },
  {
    title: 'Cross-team alignment',
    copy:
      'Keep product, engineering, design, operations, and leadership synced around one living project workspace.',
  },
  {
    title: 'Launch coordination',
    copy:
      'Track blockers, approvals, deliverables, and dependencies before releases go live.',
  },
]

const teamLanes = [
  { name: 'Product', status: 'Strategy synced', tone: 'blue' },
  { name: 'Engineering', status: 'Sprint locked', tone: 'cyan' },
  { name: 'Design', status: 'Assets ready', tone: 'violet' },
  { name: 'Operations', status: 'Rollout checklist active', tone: 'green' },
  { name: 'Stakeholders', status: 'Review summary sent', tone: 'amber' },
]

const outputs = [
  'Executive summaries for stakeholders',
  'Action items with owners and deadlines',
  'Cross-functional roadmap snapshots',
  'Blocker and risk escalation views',
  'Launch readiness and dependency tracking',
  'Project memory across multiple teams',
]

const timeline = [
  {
    step: '01',
    title: 'Collect input',
    copy: 'Meeting notes, chat threads, status reports, product docs, and stakeholder requests enter one workspace.',
  },
  {
    step: '02',
    title: 'Structure context',
    copy: 'SyncBridge groups information by workstream, people involved, project phase, and urgency.',
  },
  {
    step: '03',
    title: 'Generate coordination outputs',
    copy: 'MiMo drafts summaries, extracts decisions, highlights blockers, and assembles next-step plans.',
  },
  {
    step: '04',
    title: 'Drive execution',
    copy: 'Teams work from a shared board with clear owners, deadlines, and launch readiness indicators.',
  },
]

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand-block">
          <span className="brand-mark">SB</span>
          <div>
            <p className="brand-name">SyncBridge</p>
            <p className="brand-tag">AI coordination workspace for multi-team projects</p>
          </div>
        </div>

        <nav className="topnav">
          <a href="#workspace">Workspace</a>
          <a href="#workflow">Workflow</a>
          <a href="#outputs">Outputs</a>
        </nav>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">Built for teams, launches, and project coordination</p>
            <h1>Turn scattered team communication into one aligned execution system.</h1>
            <p className="hero-text">
              SyncBridge helps cross-functional teams convert meetings, updates, documents,
              and stakeholder requests into coordinated action plans. Instead of losing
              context across chat, docs, and status calls, every team works from one shared
              operational view.
            </p>

            <div className="hero-actions">
              <a className="primary-btn" href="#workspace">
                Explore workspace
              </a>
              <a className="secondary-btn" href="#workflow">
                See coordination flow
              </a>
            </div>

            <div className="signal-row">
              <div>
                <strong>5 teams</strong>
                <span>aligned in one workspace</span>
              </div>
              <div>
                <strong>1 shared source</strong>
                <span>for blockers, decisions, and owners</span>
              </div>
              <div>
                <strong>MiMo-native fit</strong>
                <span>for summaries, planning, and coordination</span>
              </div>
            </div>
          </div>

          <div className="hero-panel" id="workspace">
            <div className="panel-window">
              <div className="panel-header">
                <span className="panel-kicker">Program workspace</span>
                <span className="panel-status">Launch readiness 84%</span>
              </div>

              <div className="workspace-grid">
                <div className="workspace-card focus-card">
                  <p className="card-label">Today&apos;s cross-team summary</p>
                  <h3>Release coordination for MiMo integration sprint</h3>
                  <ul>
                    <li>Engineering waiting on API QA signoff</li>
                    <li>Design delivered handoff for admin dashboard</li>
                    <li>Ops needs deployment checklist approval</li>
                  </ul>
                </div>

                <div className="workspace-card metric-card">
                  <p className="card-label">Decision stream</p>
                  <div className="metric-line">
                    <span>Approved</span>
                    <strong>12</strong>
                  </div>
                  <div className="metric-line">
                    <span>Blocked</span>
                    <strong>3</strong>
                  </div>
                  <div className="metric-line">
                    <span>Waiting review</span>
                    <strong>5</strong>
                  </div>
                </div>

                <div className="workspace-card lane-card">
                  <p className="card-label">Team lanes</p>
                  <div className="lane-list">
                    {teamLanes.map((lane) => (
                      <div className={`lane lane-${lane.tone}`} key={lane.name}>
                        <span>{lane.name}</span>
                        <strong>{lane.status}</strong>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="workspace-card action-card">
                  <p className="card-label">Auto-generated next actions</p>
                  <ol>
                    <li>Finalize launch dependency review with engineering and ops</li>
                    <li>Send stakeholder summary with blockers and ETA changes</li>
                    <li>Lock release checklist and assign final approvals</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="feature-strip">
          {workflows.map((item) => (
            <article className="feature-card" key={item.title}>
              <p className="feature-title">{item.title}</p>
              <p>{item.copy}</p>
            </article>
          ))}
        </section>

        <section className="architecture-section" id="workflow">
          <div className="section-heading">
            <p className="eyebrow">Why this product exists</p>
            <h2>Projects break when teams share updates but not context.</h2>
          </div>

          <div className="architecture-grid">
            <div className="architecture-card">
              <p className="card-label">Problem</p>
              <p>
                Product, engineering, design, operations, and leadership often work from
                different notes, different priorities, and different timelines. Important
                decisions get buried in calls and chats.
              </p>
            </div>
            <div className="architecture-card">
              <p className="card-label">Solution</p>
              <p>
                SyncBridge acts like an AI coordination layer that transforms fragmented team
                communication into structured execution views: who owns what, what is blocked,
                what changed, and what happens next.
              </p>
            </div>
            <div className="architecture-card accent-card">
              <p className="card-label">Why MiMo fits</p>
              <p>
                MiMo can power summarization, action extraction, roadmap drafting, stakeholder
                update generation, and cross-team planning. This makes it well suited for a
                workflow product centered on coordination and clarity.
              </p>
            </div>
          </div>
        </section>

        <section className="timeline-section">
          <div className="section-heading narrow">
            <p className="eyebrow">Coordination workflow</p>
            <h2>From incoming project noise to structured team execution.</h2>
          </div>

          <div className="timeline-grid">
            {timeline.map((item) => (
              <article className="timeline-card" key={item.step}>
                <span className="timeline-step">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="outputs-section" id="outputs">
          <div className="outputs-copy">
            <p className="eyebrow">Core outputs</p>
            <h2>Built to support real team operations, not just chat prompts.</h2>
            <p>
              The MVP focuses on a polished product concept: landing page, shared workspace
              preview, coordination workflow, output framing, and submission-ready positioning.
            </p>
          </div>

          <div className="outputs-list">
            {outputs.map((item) => (
              <div className="output-item" key={item}>
                <span className="output-dot" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bottom-banner">
          <div>
            <p className="eyebrow">Submission positioning</p>
            <h2>SyncBridge is a planning-first AI coordination system for multi-team work.</h2>
          </div>
          <p>
            The current MVP is designed as a polished static frontend concept that demonstrates
            how MiMo could support cross-functional project alignment, execution planning, and
            stakeholder communication at scale.
          </p>
        </section>
      </main>
    </div>
  )
}

export default App
