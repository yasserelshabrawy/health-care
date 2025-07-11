# Health-Care Dashboard Notes

🧠 Fake API via json-server
- Port: 3001
- .env → REACT_APP_API_BASE_URL=http://localhost:3001

📁 db.json contains:
- /agents
- /stats

🧩 Components:
- LoadingSpinner (reusable)
- Dashboard: gets props from App (stats, agents)
- StatsOverview, TopAgentsTable ← stateless

📦 Services:
- src/services/statsService.js → getStats()
- src/services/agentsService.js → getTopAgents()

⚙️ Layout:
- Sidebar + Header
- Renders <Outlet />
