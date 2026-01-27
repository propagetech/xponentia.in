# Xponentia Website

A static website for Xponentia Capital Partners LLP built with vanilla HTML, CSS, and JavaScript. Optimized for Lighthouse 100, SEO, accessibility, and semantic HTML.

## Features

- ✅ Lighthouse 100 Score (Performance, Accessibility, Best Practices, SEO)
- ✅ SEO Optimized (Meta tags, Schema.org structured data, sitemap.xml)
- ✅ Accessibility Compliant (WCAG 2.1 AA)
- ✅ Semantic HTML5 elements
- ✅ Responsive design (Mobile-first)
- ✅ Vanilla JavaScript (No frameworks or libraries)
- ✅ Static website (No backend dependencies)

## Project Structure

```
xponentia.in/
├── index.html              # Home page
├── about.html              # About Us page
├── founders.html           # Founders page
├── team.html               # Team page
├── value-creation.html     # Value Creation Strategy page
├── portfolio.html          # Portfolio page
├── regulatory.html         # Regulatory page
├── contact.html            # Contact Us page
├── css/
│   └── style.css          # Main stylesheet
├── js/
│   └── main.js            # Core functionality
├── images/                 # Image assets
├── sitemap.xml            # SEO sitemap
└── robots.txt             # Search engine directives
```

## Setup Instructions

### Local Development

Simply open `index.html` in a web browser or use a local server:

```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js (with http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

### Deployment

This is a static website and can be deployed to any static hosting service:

- **Netlify**: Drag and drop the folder or connect to Git
- **Vercel**: `vercel deploy`
- **GitHub Pages**: Push to repository and enable Pages
- **AWS S3**: Upload files to S3 bucket with static website hosting
- **Any web server**: Upload files via FTP/SFTP

## Typography

- **Headings**: Playfair Display (serif)
- **Body**: Quicksand (sans-serif)

Fonts are loaded from Google Fonts with `display=swap` for optimal performance.

## Browser Support

Modern browsers (last 2 versions):
- Chrome
- Firefox
- Safari
- Edge

## Performance Optimizations

- Image lazy loading
- CSS optimized for performance
- Efficient font loading
- Semantic HTML structure

## Accessibility Features

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- Skip to main content link
- Screen reader support
- Color contrast compliance (WCAG 2.1 AA)

## SEO Features

- Meta descriptions for all pages
- Open Graph tags
- Twitter Card tags
- Schema.org structured data:
  - Organization schema (homepage)
  - BreadcrumbList schema (all pages)
  - ContactPage schema (contact page)
- XML sitemap
- robots.txt
- Canonical URLs

## Contact Information

- **Address**: 201B, 2nd Floor, Sarjan Plaza, Dr Annie Besant Road, Worli, Mumbai - 400018
- **Email**: shilpa@xponentia.in | compliance@xponentia.in

## Notes

- This is a purely static website with no backend dependencies
- Contact is handled via email links only (no contact forms)
- All images should be placed in the `images/` directory
- Logo image should be named `xponentia-logo.png` and placed in `images/` directory

## License

© 2025. Xponentia. All Rights Reserved.
