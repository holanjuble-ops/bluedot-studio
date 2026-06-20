/**
 * build.js — BlueDot Studio 빌드 스크립트
 * JSX → JS 컴파일 + HTML에서 Babel 제거
 */

const fs   = require('fs');
const path = require('path');
const babel = require('@babel/core');

const JSX_FILES = [
  'scripts/shared.jsx',
  'scripts/sections-a.jsx',
  'scripts/sections-b.jsx',
  'scripts/sections-c.jsx',
  'scripts/sections-d.jsx',
  'scripts/app.jsx',
  'column/cols-shared.jsx',
  'column/articles.jsx',
  'column/col-detail.jsx',
  'column/col-page.jsx',
];

const HTML_FILES = [
  'index.html',
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
  html = html.replace(/<script[^>]+unpkg\.com\/@babel\/standalone[^>]*><\/script>\s*/g, '');
  html = html.replace(/type="text\/babel"\s+src="([^"]+)\.jsx"/g, 'src="$1.js"');
  html = html.replace(/src="([^"]+)\.jsx"\s+type="text\/babel"/g, 'src="$1.js"');
  html = html.replace(/<script\s+type="text\/babel"\s+data-presets="react">/g, '<script>');
  html = html.replace(/<script\s+type="text\/babel">/g, '<script>');
  fs.writeFileSync(htmlPath, html, 'utf8');
  console.log('  ✓', htmlPath);
}

console.log('\n✅ 빌드 완료!\n');
