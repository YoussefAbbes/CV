const { chromium } = require(process.env.PLAYWRIGHT || 'playwright');
(async () => {
  const b = await chromium.launch(); const p = await b.newPage();
  await p.goto('file://' + __dirname + '/cv.html', { waitUntil: 'networkidle' });
  await p.evaluate(() => document.fonts.ready);
  const over = await p.evaluate(() => [...document.querySelectorAll('.page')].map(pg => { const r = pg.getBoundingClientRect(); const last = [...pg.querySelectorAll('*')].filter(e=>!e.classList.contains('folio') && !e.closest('footer')).reduce((m,e)=>Math.max(m,e.getBoundingClientRect().bottom),0); return Math.round(r.bottom - last); }));
  console.log('space left at bottom of each page (px):', over);
  await p.pdf({ path: __dirname + '/Cv_Youssef_Abbes.pdf', format: 'A4', printBackground: true, preferCSSPageSize: true });
  await b.close();
})();
