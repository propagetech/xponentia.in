const fs = require('fs');
const path = require('path');
const htmlMinifier = require('html-minifier-terser');
const CleanCSS = require('clean-css');
const { minify: terserMinify } = require('terser');

// HTML minification options
const htmlMinifyOptions = {
  collapseWhitespace: true,
  removeComments: false, // Keep comments for important ones
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  useShortDoctype: true,
  minifyCSS: false, // We'll minify CSS separately
  minifyJS: false, // We'll minify JS separately
  removeEmptyAttributes: true,
  removeOptionalTags: false, // Keep for compatibility
  removeAttributeQuotes: false, // Keep quotes for safety
  caseSensitive: false,
  keepClosingSlash: false,
  sortAttributes: false,
  sortClassName: false
};

// CSS minification options
const cssMinifyOptions = {
  level: 2,
  format: false,
  inline: false
};

// JavaScript minification options
const jsMinifyOptions = {
  compress: {
    drop_console: false, // Keep console statements for debugging
    passes: 2
  },
  format: {
    comments: false
  },
  mangle: false // Keep variable names for easier debugging if needed
};

async function minifyHTML(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const minified = await htmlMinifier.minify(content, htmlMinifyOptions);
    fs.writeFileSync(filePath, minified, 'utf8');
    console.log(`✓ Minified: ${filePath}`);
  } catch (error) {
    console.error(`✗ Error minifying ${filePath}:`, error.message);
  }
}

function minifyCSS(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const minified = new CleanCSS(cssMinifyOptions).minify(content);
    if (minified.errors.length > 0) {
      console.warn(`Warnings for ${filePath}:`, minified.errors);
    }
    fs.writeFileSync(filePath, minified.styles, 'utf8');
    console.log(`✓ Minified: ${filePath}`);
  } catch (error) {
    console.error(`✗ Error minifying ${filePath}:`, error.message);
  }
}

async function minifyJS(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const minified = await terserMinify(content, jsMinifyOptions);
    if (minified.error) {
      throw minified.error;
    }
    fs.writeFileSync(filePath, minified.code, 'utf8');
    console.log(`✓ Minified: ${filePath}`);
  } catch (error) {
    console.error(`✗ Error minifying ${filePath}:`, error.message);
  }
}

async function main() {
  console.log('Starting minification process...\n');

  // HTML files to minify (excluding demo files)
  const htmlFiles = [
    'index.html',
    'about.html',
    'contact.html',
    'founders.html',
    'portfolio.html',
    'regulatory.html',
    'security-compliance.html',
    'team.html',
    'value-creation.html'
  ];

  // Minify HTML files
  console.log('Minifying HTML files...');
  for (const file of htmlFiles) {
    const filePath = path.join(__dirname, file);
    if (fs.existsSync(filePath)) {
      await minifyHTML(filePath);
    } else {
      console.warn(`⚠ File not found: ${file}`);
    }
  }

  // Minify CSS
  console.log('\nMinifying CSS...');
  const cssPath = path.join(__dirname, 'css', 'style.css');
  if (fs.existsSync(cssPath)) {
    minifyCSS(cssPath);
  } else {
    console.warn(`⚠ CSS file not found: css/style.css`);
  }

  // Minify JavaScript
  console.log('\nMinifying JavaScript...');
  const jsPath = path.join(__dirname, 'js', 'main.js');
  if (fs.existsSync(jsPath)) {
    await minifyJS(jsPath);
  } else {
    console.warn(`⚠ JavaScript file not found: js/main.js`);
  }

  console.log('\n✓ Minification complete!');
}

main().catch(console.error);
