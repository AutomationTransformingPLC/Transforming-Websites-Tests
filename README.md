# UAT Website Integrity Testing Suite

Comprehensive testing suite for `uat.transforming.plc.uk` and `uat.transformingsupport.uk` using Playwright.

## 🚀 Workflow

### 1. Installation
Install all necessary dependencies:
```bash
npm install
```

### 2. Run Tests
*   **Master Audit (All Devices)**: Run everything (Desktop + Mobile) at once:
    ```bash
    npx playwright test
    ```
*   **Global Form & Redirection Audit**: Deep crawl and form validation:
    ```bash
    npx playwright test tests/global-audit.spec.ts
    ```
*   **Mobile Audit**: Run tests specifically for mobile projects:
    ```bash
    npx playwright test --project="Mobile Chrome" --project="Mobile Safari"
    ```
*   **Generate Report**: View the technical HTML results:
    ```bash
    npx playwright show-report
    ```
*   **UI Mode**: Interactive dashboard for debugging:
    ```bash
    npm run test:ui
    ```

### 3. View Results
After running tests, view the detailed HTML report:
```bash
npx playwright show-report
```

## 🛠 Maintenance
*   **Update Visuals**: If you change the website design, update the baseline screenshots:
    ```bash
    npx playwright test --update-snapshots
    ```
*   **Performance**: If pages become naturally slower, adjust thresholds in `tests/submission-and-crawl.spec.ts`.
