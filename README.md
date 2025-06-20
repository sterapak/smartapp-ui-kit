# SmartApp UI Kit

**SmartApp UI Kit** is a reusable AI-first dashboard template built with React, Tailwind CSS, and Framer Motion.

## 🚀 Features
- Modern dashboard layout…

---

## 🧪 Testing

### Unit & Integration Tests

- **Framework:** Jest + React Testing Library
- **Location:** Test files are placed next to their implementation files (e.g., `MyComponent.jsx` and `MyComponent.test.jsx`).
- **Coverage:** The suite covers components, store logic, and API clients.

**To run all unit tests with coverage:**
```bash
npm test
```
or
```bash
npm run test
```
- A coverage summary will be shown in the terminal.
- Detailed HTML coverage reports are generated in the `coverage/` directory.

---

### End-to-End (E2E) Tests

- **Framework:** Cypress
- **Location:** E2E tests are in `cypress/e2e/`.
- **What's covered:** Key user flows, navigation, and responsive layout.

**To run E2E tests interactively:**
```bash
npm run cypress:open
```
- This opens the Cypress UI for running and debugging tests.

**To run E2E tests headlessly:**
```bash
npm run cypress:run
```

**Before running E2E tests, make sure your dev server is running:**
```bash
npm run dev
```
> **Note:** You must keep the app running in a separate terminal window while running Cypress tests (including headless mode). Cypress does not start the app server for you.

---

### Notes

- Some E2E tests are skipped if the corresponding feature is not yet implemented.
- Unit tests are colocated with source files for easy maintenance.
- Cypress baseUrl is set to `http://localhost:5173` (update in `cypress.config.js` if needed).
