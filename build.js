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

const ARTICLE_PAGES = [
  {
    id: 1,
    filename: 'shortform-marketing-needed.html',
    title: '나도 숏폼이 필요할까? | 전문직 숏폼 마케팅 | BlueDot Studio',
    description: '숏폼 마케팅이 필요한 업종과 그렇지 않은 업종을 정리합니다. 병원·치과·세무사·변호사 등 전문직을 위한 숏폼 활용 기준을 확인하세요.',
    datePublished: '2026-04-21'
  },
  {
    id: 2,
    filename: 'reels-million-views.html',
    title: '릴스 2개로 100만 조회수, 그 안에 숨은 공식 | BlueDot Studio',
    description: '릴스 2개로 100만 조회수를 만든 한의원 사례를 바탕으로, 첫 3초 후킹과 고객의 언어, 비판매형 콘텐츠의 공식을 소개합니다.',
    datePublished: '2026-05-13'
  },
  {
    id: 3,
    filename: 'shortform-inquiry-conversion.html',
    title: '문의로 이어지는 숏폼은 이게 다릅니다 | BlueDot Studio',
    description: '조회수에서 실제 문의로 이어지는 숏폼의 차이를 소개합니다. 업종별 플랫폼 선택과 문의 장벽을 낮추는 방법을 확인하세요.',
    datePublished: '2026-06-01'
  }
];

function articleSeo(page) {
  const url = `https://www.bluedotmarketing.co.kr/column/${page.filename}`;
  const schema = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: page.title.replace(' | BlueDot Studio', '').replace(' | 전문직 숏폼 마케팅', ''),
    description: page.description,
    datePublished: page.datePublished,
    dateModified: page.datePublished,
    author: { '@type': 'Organization', name: 'BlueDot Studio' },
    publisher: { '@type': 'Organization', name: 'BlueDot Studio', url: 'https://www.bluedotmarketing.co.kr/' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    inLanguage: 'ko-KR'
  });
  return `<meta name="description" content="${page.description}" />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="${url}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${url}" />
<meta property="og:title" content="${page.title}" />
<meta property="og:description" content="${page.description}" />
<meta property="og:image" content="https://www.bluedotmarketing.co.kr/og-image.png" />
<meta property="og:locale" content="ko_KR" />
<meta property="article:published_time" content="${page.datePublished}" />
<script type="application/ld+json">${schema}</script>`;
}

function generateStaticArticlePages() {
  const template = fs.readFileSync('column/column-detail.html', 'utf8');
  for (const page of ARTICLE_PAGES) {
    let html = template
      .replace(/<title>[\s\S]*?<\/title>/, `<title>${page.title}</title>`)
      .replace('<meta name="robots" content="noindex, nofollow" />\n', '')
      .replace('</head>', `${articleSeo(page)}\n</head>`)
      .replace('<script src="articles.js"></script>', `<script>window.__COLUMN_ARTICLE_ID__ = ${page.id};</script>\n<script src="articles.js"></script>`);
    fs.writeFileSync(path.join('column', page.filename), html, 'utf8');
    console.log('  ✓', `column/${page.filename}`);
  }
}

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
generateStaticArticlePages();

console.log('\n✅ 빌드 완료!\n');
