# Automated Website Integrity Testing

Comprehensive testing suite for `transforming.plc.uk` and `transformingsupport.uk` using Playwright.

## 🚀 Workflow

### 1. Installation
Install all necessary dependencies:
```bash
npm install
```

### 2. Run Tests
*   **Full Audit**: Run performance, visual, crawl, and submission tests:
    ```bash
    npm test tests/submission-and-crawl.spec.ts
    ```
*   **Integrity Check**: Basic link and page status check:
    ```bash
    npm test tests/website-integrity.spec.ts
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
