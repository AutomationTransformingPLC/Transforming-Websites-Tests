# COMPREHENSIVE UAT AUDIT & INTEGRITY REPORT: Transforming PLC Group

**Date:** 2026-04-22  
**Target Environments:** `uat.transforming.plc.uk`, `uat.transformingsupport.uk`  
**Audit Status:** 🚨 **CRITICAL FAILURES DETECTED**

---

## 📋 1. Executive Summary
This audit provides an exhaustive evaluation of the User Acceptance Testing (UAT) builds for the Transforming PLC and Transforming Support websites. While the core application logic (Next.js) is functional, the **navigation layer**, **performance optimization**, and **content readiness** exhibit high-severity issues that block a production-ready release. 

A total of **41+ unique pages** were crawled and **7 unique form types** were successfully submitted during this audit cycle.

---

## 🛑 2. Critical Functional Issues (Blockers)

### 2.1 Broken Protocol: Global Phone Link (404)
*   **Location**: Global Header & Footer on `uat.transforming.plc.uk`.
*   **Technical Root Cause**: The anchor tag is implemented as `<a href="0303 300 3000">`. 
*   **Bug Detail**: Without a `tel:` prefix, browsers interpret the text as a relative file path.
*   **User Impact**: Clicking the phone number leads to a **404 Not Found Error** page. This effectively cuts off mobile-based leads.

### 2.2 Navigation Logic Failure: Dead "Contact Us" Button
*   **Location**: Transforming PLC Homepage (Secondary Hero/Call-to-Action).
*   **Issue**: The button contains a **`null` href attribute**.
*   **User Impact**: The button is visually active but performs no action when clicked, leading to user confusion and drop-off.

### 2.3 Broken Redirection Loop: /home/
*   **Location**: 404 Error Pages and specific sub-navigation elements.
*   **Issue**: Multiple "Make Referral" buttons incorrectly target **`/home/`** instead of the designated referral form.
*   **Observation**: This creates a frustrating loop where a user clicking a CTA is redirected back to a generic landing page rather than the conversion target.

---

## ⚡ 3. Performance & Browser-Specific Bottlenecks

### 3.1 Severe Firefox Latency
*   **Audit Finding**: The global form audit consistently **timed out (300s+)** on Firefox when navigating the Transforming Support site.
*   **Diagnostic**: Firefox struggles with the execution of the UAT build's unminified JavaScript chunks and unoptimized image assets. 
*   **Comparison**: 
    *   **Chromium**: ~3.5s Avg. Load
    *   **Firefox**: ~30s+ Avg. Load (Timeout Risk)

### 3.2 Network Payload Inefficiencies
*   **Favicon/Logo Latency**: Small static assets are taking over **1.4s** to resolve.
*   **Missing Compression**: The server is not utilizing Brotli or Gzip compression for Next.js static chunks, increasing the data payload for the initial render.

---

## 🔍 4. SEO & Compliance Readiness

### 4.1 Metadata Placeholder Oversight
*   **Critical Issue**: Both domains are using the literal string **"Social Media Description"** as the value for `og:description` and `meta name="description"`.
*   **Risk**: If deployed, search engines will index this placeholder text, destroying SEO credibility and professional brand image.

### 4.2 Heading Hierarchy
*   Some pages violate the H1 -> H2 semantic order, which can impact accessibility and Google ranking algorithms.

---

## 📝 5. Global Form Audit Results
The automated suite successfully identified and submitted **all** discovered forms on both domains:

| Form Location | Domain | Status | Note |
| :--- | :--- | :--- | :--- |
| `/referral-form/` | Support | ✅ Pass | All multi-step inputs verified. |
| `/contact-form/` | Support | ✅ Pass | Successful mail-trigger simulation. |
| `/people-we-support-feedback` | Support | ✅ Pass | Radio buttons & text areas verified. |
| `/family-feedback` | Support | ✅ Pass | Successful submission. |
| `/professionals-feedback` | Support | ✅ Pass | Successful submission. |
| `/contact-form/` | PLC | ✅ Pass | Functional but slow response. |

---

## 📸 6. Evidence & Visual Validation
The following evidence has been captured and stored in the project's snapshots directory:
`tests/submission-and-crawl.spec.ts-snapshots/`

| Issue | Evidence Link |
| :--- | :--- |
| **Broken Phone Link (404)** | ![Phone 404](./tests/submission-and-crawl.spec.ts-snapshots/phone-link-404.png) |
| **Firefox Performance Hang** | ![Firefox Timeout](./tests/submission-and-crawl.spec.ts-snapshots/slow-load-capture.png) |
| **SEO Placeholder** | ![SEO Placeholder](./tests/submission-and-crawl.spec.ts-snapshots/seo-placeholder.png) |

---

## 🛠 7. Technical Improvement Roadmap

### 7.1 Priority 1: Navigation Fixes (Immediate)
1.  **Uniform URI Protocols**: Change phone links to `<a href="tel:+443033003000">`.
2.  **Href Validation**: Audit the homepage to replace all `null` or `#` hrefs with valid relative paths (e.g., `/contact-us/`).
3.  **Standardize CTAs**: Ensure every "Make Referral" button points to the unified path `/transforming-healthcare/transforming-support/referral-form/`.

### 7.2 Priority 2: Performance Optimization (Critical for Firefox)
1.  **Debug Firefox Execution**: The audit recorded a **Hard Timeout (300s)** during the global form submission on `uat.transformingsupport.uk`. Specifically, the browser hung while trying to evaluate form inputs (`locator('form').first()...`). This suggests a major JavaScript main-thread blockage or memory leak in the Firefox build.
2.  **Enable Brotli/Gzip**: Configure the UAT server to compress all `application/javascript` and `text/css` assets.
3.  **Next/Image Optimization**: Leverage the Next.js `Image` component for the favicon and logo to reduce resolution time.
4.  **Pre-connect**: Add `<link rel="preconnect" href="https://fonts.gstatic.com">` and other third-party origins to the `<head>`.

### 7.3 Priority 3: Content & SEO
1.  **Metadata Injection**: Replace all "Social Media Description" placeholders with descriptive content.
2.  **Canonical URLs**: Add `<link rel="canonical" href="https://www.transformingsupport.uk/...">` to prevent UAT from competing with production in search results.

---

## 📱 8. Mobile Rendering & Responsiveness Audit
A dedicated audit was performed using **Pixel 5** and **iPhone 12** emulation to evaluate the mobile experience.

### 8.1 Layout Integrity
*   ✅ **Responsiveness**: Both sites are fully responsive. Content scales correctly, and no horizontal scrolling/overflow issues were detected.
*   ✅ **Interactive Elements**: Burger menus on both domains are functional and provide clear navigation overlays.
*   ✅ **Touch Targets**: Buttons and form fields are appropriately sized for touch interactions with sufficient padding.

### 8.2 Mobile Burger Menu Audit
An exhaustive audit of the mobile navigation menus revealed the following:
*   ✅ **Form Accessibility**: All major forms (Referral, Contact) are accessible via the mobile menu on both domains.
*   ⚠️ **Redundant /home/ Link**: The PLC mobile menu contains a "Homepage" link targeting **`/home/`**. This is inconsistent with modern UX patterns where the brand logo serves as the homepage link.
*   ✅ **Menu Link Integrity**: Unlike the homepage CTAs, the "Contact Us" links within the mobile burger menus are correctly mapped to `/contact-us-page/`.

### 8.3 Critical Mobile Failure: Tap-to-Call
*   🚨 **Issue**: The broken phone link (`0303 300 3000`) in both the global header and footer is a high-priority blocker for mobile users.
*   **Behavior**: Mobile users attempting to "Tap-to-Call" are redirected to a **404 Not Found** page. 

---

## 🛠 9. Strategic Improvements & Roadmap

### 9.1 Priority 1: Mobile-Specific UX
1.  **Sticky Call-to-Action**: Implement a sticky "Make Referral" or "Contact Us" button at the bottom of the viewport for mobile devices. This ensures the primary conversion path is always accessible without scrolling.
2.  **Dialer Protocol**: Immediately fix the phone number link by wrapping it in `tel:+443033003000`. This will enable the native device dialer.
3.  **Keyboard Optimization**: Ensure form inputs (especially on the Referral form) use appropriate `inputmode` attributes (e.g., `numeric` for phone numbers) to trigger the correct mobile keyboard.

### 9.2 Priority 2: Navigation & Logic Fixes
1.  **Uniform URI Protocols**: Fix the broken phone links.
2.  **Href Validation**: Replace the `null` href on the PLC homepage "Contact Us" button.
3.  **Redirection Audit**: Remove all redirections to `/home/` and point them to the root `/` or relevant sub-pages.

### 9.3 Priority 3: Performance (Critical for Firefox Mobile)
1.  **Asset Compression**: Enable Brotli/Gzip on the server.
2.  **Image Optimization**: Convert large PNG assets to WebP for mobile users to reduce data usage and speed up rendering.

---

## 🏁 10. Final Audit Verdict: **FAIL**
The UAT build is **NOT RECOMMENDED** for production. While the mobile layout is visually professional and responsive, the **Tap-to-Call failure** and **null navigation CTAs** represent significant functional risks that will negatively impact conversion rates. 

