# Copilot Instructions for RegistroPonto

## Project Overview
- **Framework:** React (with Vite for build tooling)
- **Styling:** Tailwind CSS
- **Component Structure:** All main UI logic is in `src/components/`. The app is composed of modular, reusable components (e.g., `Button.jsx`, `Card.jsx`, `Timer.jsx`).
- **Entry Point:** `src/App.jsx` is the root component, bootstrapped by `src/main.jsx`.
- **Assets:** Static assets are in `src/assets/` and `public/`.

## Key Patterns & Conventions
- **Component Naming:** Use PascalCase for React components. Place each component in its own file under `src/components/`.
- **State Management:** State is managed locally within components. No global state library is used.
- **Props:** Data flows top-down via props. Example: `RegisterOfPontos` receives props from `App.jsx`.
- **Styling:** Use Tailwind utility classes directly in JSX. Avoid custom CSS unless necessary (see `App.css`, `index.css`).
- **Timer Logic:** Timer-related components (`Timer.jsx`, `TimerIncrement.jsx`, `WorkingTimer.jsx`) encapsulate their own timing logic and UI.
- **Backup/Legacy:** `src/assets/bkp/` may contain backup or legacy code. Do not reference in new features.

## Developer Workflows
- **Start Dev Server:**
  ```sh
  npm run dev
  ```
- **Build for Production:**
  ```sh
  npm run build
  ```
- **Preview Production Build:**
  ```sh
  npm run preview
  ```
- **Linting:**
  ```sh
  npm run lint
  ```
- **No tests are defined** by default. Add tests as needed.

## Integration & External Dependencies
- **Vite Plugins:** Uses `@vitejs/plugin-react` for React Fast Refresh.
- **No backend/API integration** is present. All logic is client-side.

## Examples
- **Component Import:**
  ```js
  import Button from './components/Button';
  ```
- **Tailwind Usage:**
  ```jsx
  <div className="p-4 bg-gray-100 rounded-lg">...</div>
  ```

## Recommendations for AI Agents
- Follow the existing component structure and naming conventions.
- Prefer functional components and hooks (no class components).
- Keep logic modular and colocated with UI when possible.
- Reference `src/components/` for reusable patterns.
- Do not introduce global state unless justified by scale.

---
If you are unsure about a pattern or workflow, check `README.md` or existing components for examples. Ask for clarification if project-specific conventions are unclear.
