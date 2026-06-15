/**
 * Renders the Axivore Angebot one-pager (German) to a print-ready A4 PDF.
 * Logo is inlined as base64 so the PDF is fully self-contained.
 *
 * Run: node sales/build-pdf.js
 */

const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const DIR = __dirname;
const TEMPLATE = path.join(DIR, 'angebot-template.html');
const LOGO_B64 = path.join(DIR, '.logo-b64.txt');
const OUT_PDF = path.join(DIR, 'Axivore-Pakete.pdf');
const OUT_HTML = path.join(DIR, '.angebot-rendered.html');

async function run() {
  const logo = fs.readFileSync(LOGO_B64, 'utf8').trim();
  const html = fs.readFileSync(TEMPLATE, 'utf8').replace('{{LOGO}}', logo);
  fs.writeFileSync(OUT_HTML, html);

  const browser = await chromium.launch();
  try {
    const page = await browser.newPage();
    await page.goto('file://' + OUT_HTML, { waitUntil: 'networkidle' });
    await page.pdf({
      path: OUT_PDF,
      format: 'A4',
      printBackground: true,
      margin: { top: '0', bottom: '0', left: '0', right: '0' },
    });
    console.log('PDF erstellt:', OUT_PDF, '(' + Math.round(fs.statSync(OUT_PDF).size / 1024) + ' KB)');
  } finally {
    await browser.close();
    fs.unlinkSync(OUT_HTML);
  }
}

run().catch(err => { console.error(err); process.exit(1); });
