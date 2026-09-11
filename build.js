/**
 * build.js — BlueDot Studio 빌드 스크립트
 * JSX → JS 컴파일 + HTML에서 Babel 제거
 */

const fs   = require('fs');
const path = require('path');
const babel = require('@babel/core');

const GA_MEASUREMENT_ID = 'G-3F7KXYZ11T';
const GA_TAG = `<script async src="https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${GA_MEASUREMENT_ID}');
</script>`;

const JSX_FILES = [
  'scripts/shared.jsx',
  'scripts/sections-a.jsx',
  'scripts/sections-b.jsx',
  'scripts/sections-c.jsx',
  'scripts/sections-d.jsx',
  'scripts/app.jsx',
  'biz-scripts/sections-a.jsx',
  'biz-scripts/sections-b.jsx',
  'biz-scripts/sections-c.jsx',
  'biz-scripts/app.jsx',
  'column/cols-shared.jsx',
  'column/articles.jsx',
  'column/col-detail.jsx',
  'column/col-page.jsx',
];

const HTML_FILES = [
  'index.html',
  'pro.html',
  'business.html',
  'column/column.html',
  'column/column-detail.html',
];

console.log('\n[1/2] JSX 컴파일 중...');
for (const jsxPath of JSX_FILES) {
  if (!fs.existsSync(jsxPath)) { console.warn('  ⚠ 없음:', jsxPath); continue; }
  const src = fs.readFileSync(jsxPath, 'utf8');
  const result = babel.transformSync(src, { presets: ['@babel/preset-react'], filename: jsxPath });
  const jsPath = jsxPath.replace(/\.jsx$/, '.js');
  fs.writeFileSync(jsPath, result.code, 'utf8');
  console.log('  ✓', jsxPath, '→', jsPath);
}

console.log('\n[2/2] HTML 패치 중...');
for (const htmlPath of HTML_FILES) {
  if (!fs.existsSync(htmlPath)) { console.warn('  ⚠ 없음:', htmlPath); continue; }
  let html = fs.readFileSync(htmlPath, 'utf8');
  if (!html.includes(`gtag/js?id=${GA_MEASUREMENT_ID}`)) {
    html = html.replace('<head>', `<head>\n${GA_TAG}`);
  }
  html = html.replace(/<script[^>]+unpkg\.com\/@babel\/standalone[^>]*><\/script>\s*/g, '');
  html = html.replace(/type="text\/babel"\s+src="([^"]+)\.jsx"/g, 'src="$1.js"');
  html = html.replace(/src="([^"]+)\.jsx"\s+type="text\/babel"/g, 'src="$1.js"');
  html = html.replace(/<script\s+type="text\/babel"\s+data-presets="react">/g, '<script>');
  html = html.replace(/<script\s+type="text\/babel">/g, '<script>');
  fs.writeFileSync(htmlPath, html, 'utf8');
  console.log('  ✓', htmlPath);
}

// 홈의 실제 HTML은 pro.html에서 관리한다. 빌드 시 같은 결과물을 index.html에도
// 생성해 /가 대표 URL로 직접 응답하게 한다.
fs.copyFileSync('pro.html', 'index.html');
console.log('  ✓ pro.html → index.html (대표 URL용)');

console.log('\n✅ 빌드 완료!\n');
