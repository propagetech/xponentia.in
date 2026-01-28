---
name: SEBI Compliance Implementation
overview: Implement cybersecurity fixes from audit report and complete IAAP digital accessibility audit with certification for SEBI compliance. Address security headers, CSP implementation, and ensure WCAG 2.1 AA compliance.
todos:
  - id: security-headers
    content: Implement security headers in _headers file (CSP, X-Frame-Options, HSTS, etc.)
    status: pending
  - id: csp-meta-tags
    content: Add CSP meta tags to all HTML files with proper resource allowances
    status: pending
  - id: review-audit-report
    content: Review cybersecurity audit report PDF and document specific open points
    status: pending
  - id: fix-security-issues
    content: Implement fixes for all security audit open points
    status: pending
  - id: accessibility-audit
    content: Conduct comprehensive WCAG 2.1 AA accessibility audit
    status: pending
  - id: fix-accessibility-issues
    content: Fix all identified accessibility issues (focus, contrast, keyboard nav, etc.)
    status: pending
  - id: iaap-certification
    content: Obtain IAAP certification from certified auditor
    status: pending
  - id: security-testing
    content: Test security headers and verify fixes work correctly
    status: pending
  - id: accessibility-testing
    content: Test accessibility with automated tools and screen readers
    status: pending
  - id: update-documentation
    content: Update security-compliance.html and create compliance reports
    status: pending
---

# SEBI Compliance Implementation Plan

## Overview

This plan addresses two critical SEBI regulatory requirements:

1. **Cybersecurity & Cyber Resilience Framework (CSCRF)** - Fix open points from security audit
2. **IAAP Digital Accessibility Audit** - Complete accessibility audit and certification per SEBI Circular dated 31st July 2025

## Current State Analysis

### Security Status

- **Issue Found**: Security headers are documented as "remediated" in `security-compliance.html` but are NOT actually implemented
- `_headers` file only contains cache headers, missing all security headers
- No Content Security Policy (CSP) meta tags in HTML files
- Security-compliance page claims fixes but implementation is missing

### Accessibility Status

- Good foundation: semantic HTML, ARIA labels, keyboard navigation, skip links
- Needs formal IAAP audit and certification
- Must comply with WCAG 2.1 Level AA, GIGW, IS 17802, and RPwD Act 2016

## Implementation Tasks

### Phase 1: Cybersecurity Fixes (Priority: Critical)

#### 1.1 Implement Security Headers in `_headers` file

**File**: `_headers`

- Add Content-Security-Policy (CSP) header
- Add X-Frame-Options: DENY
- Add X-Content-Type-Options: nosniff
- Add Referrer-Policy: no-referrer-when-downgrade
- Add Strict-Transport-Security (HSTS) header
- Add Permissions-Policy header
- Ensure headers are properly formatted for Netlify/deployment platform

#### 1.2 Add CSP Meta Tags to HTML Files

**Files**: All HTML files (`index.html`, `about.html`, `contact.html`, `team.html`, `portfolio.html`, `founders.html`, `value-creation.html`, `regulatory.html`, `security-compliance.html`)

- Add CSP meta tag in `<head>` section
- Allow necessary resources:
- Self-hosted assets (CSS, JS, images)
- Google Fonts (fonts.googleapis.com, fonts.gstatic.com)
- Use restrictive CSP while maintaining functionality
- Test that all features work with CSP enabled

#### 1.3 Review and Fix Audit Report Findings

**Action Required**: Review the cybersecurity audit report PDF to identify specific open points

- Document each finding with severity and remediation steps
- Implement fixes for each open point
- Update `security-compliance.html` with actual implementation status
- Verify fixes with security testing tools

### Phase 2: IAAP Digital Accessibility Compliance (Priority: Critical)

#### 2.1 Comprehensive Accessibility Audit

**Approach**: Internal certification with fixes

- Conduct thorough WCAG 2.1 Level AA audit
- Check compliance with GIGW guidelines
- Verify IS 17802 compliance
- Test with screen readers (NVDA/JAWS)
- Test keyboard-only navigation
- Verify color contrast ratios (≥4.5:1 for text)
- Check all images have descriptive alt text

#### 2.2 Fix Accessibility Issues

**Areas to Address**:

- **Focus Management**: Ensure visible focus indicators on all interactive elements
- **Modal Accessibility**: Verify focus trap works correctly (already implemented but needs verification)
- **Form Accessibility**: If forms exist, ensure proper labels and error messages
- **Color Contrast**: Verify all text meets WCAG 2.1 AA standards (4.5:1 ratio)
- **Keyboard Navigation**: Test all interactive elements are keyboard accessible
- **Screen Reader Support**: Verify ARIA labels and roles are correct
- **Document Structure**: Ensure proper heading hierarchy (h1 → h2 → h3)

#### 2.3 Enhance Accessibility Features

**Enhancements**:

- Add accessibility statement page (if not exists)
- Ensure grievance redressal mechanism is accessible
- Add "Skip to main content" link (already exists, verify it works)
- Verify reduced motion support (`prefers-reduced-motion`)
- Ensure all PDFs (if any) are tagged and accessible
- Add language attributes where needed

#### 2.4 Create Accessibility Compliance Documentation

**Files to Create/Update**:

- Accessibility audit report document
- IAAP certification documentation
- Compliance checklist
- Update `security-compliance.html` with actual audit results

### Phase 3: Testing & Verification

#### 3.1 Security Testing

- Verify all security headers are present using securityheaders.com
- Test CSP doesn't break functionality
- Verify clickjacking protection works
- Test with security scanning tools

#### 3.2 Accessibility Testing

- Automated testing: WAVE, axe DevTools, Lighthouse
- Manual testing: Keyboard navigation, screen reader testing
- User testing: Test with persons with disabilities (if possible)
- Verify WCAG 2.1 Level AA compliance

#### 3.3 Cross-Browser Testing

- Test security headers across browsers
- Test accessibility features across browsers
- Verify responsive design still works

### Phase 4: Documentation & Reporting

#### 4.1 Update Compliance Documentation

- Update `security-compliance.html` with actual implementation status
- Document all security fixes applied
- Document accessibility audit findings and remediation

#### 4.2 Create Compliance Reports

- Security remediation report
- IAAP accessibility audit report
- Compliance status summary for SEBI submission

## Files to Modify

### Security Headers

- `_headers` - Add security headers
- All HTML files - Add CSP meta tags

### Accessibility

- All HTML files - Verify and enhance accessibility attributes
- `css/style.css` - Ensure focus indicators and contrast meet standards
- `js/main.js` - Verify accessibility features work correctly
- `security-compliance.html` - Update with actual compliance status

### Documentation

- Create accessibility audit report
- Update security-compliance page with real status
- Create compliance summary document

## Dependencies & Prerequisites

1. **Audit Report Review**: Need access to cybersecurity audit report PDF to identify specific open points
2. **IAAP Certification**: Need IAAP-certified auditor to issue certification (or engage external consultant)
3. **Testing Tools**: 

- Security: securityheaders.com, OWASP ZAP
- Accessibility: WAVE, axe DevTools, Lighthouse, screen readers

## Timeline Estimate

- **Phase 1 (Security)**: 2-3 days
- **Phase 2 (Accessibility)**: 3-4 days  
- **Phase 3 (Testing)**: 1-2 days
- **Phase 4 (Documentation)**: 1 day

**Total**: 7-10 days (within 1-2 week urgent timeline)

## Risk Mitigation

1. **Security Headers**: Test CSP carefully to avoid breaking Google Fonts or other resources
2. **Accessibility**: Some fixes may require design changes - coordinate with stakeholders
3. **Certification**: Ensure IAAP-certified auditor is available for certification issuance
4. **Testing**: Allocate sufficient time for thorough testing across devices and browsers

## Success Criteria

- All security headers implemented and verified
- All audit report open points remediated
- WCAG 2.1 Level AA compliance achieved
- IAAP certification obtained
- Documentation complete for SEBI submission
- Website functionality remains intact
- All tests pass (security and accessibility)