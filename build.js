/**
 * build.js — BlueDot Studio 빌드 스크립트
 * JSX → JS 컴파일 + HTML에서 Babel 제거
 */

const fs   = require('fs');
const path = require('path');
const vm = require('vm');
const babel = require('@babel/core');

const GA_MEASUREMENT_ID = 'G-3F7KXYZ11T';
const GA_TAG = `<script async src="https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${GA_MEASUREMENT_ID}');
</script>`;

const SITE_URL = 'https://www.bluedotmarketing.co.kr';
const ENTITY_GRAPH = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: '블루닷스튜디오',
      alternateName: 'BlueDot Studio',
      legalName: '블루닷스튜디오',
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/og-image.png`,
      image: `${SITE_URL}/og-image.png`,
      taxID: '601-38-81089',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '법원로 114 엠스테이트 B동 1014호',
        addressLocality: '송파구',
        addressRegion: '서울특별시',
        addressCountry: 'KR'
      }
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE_URL}/#professional-service`,
      name: '블루닷스튜디오',
      alternateName: 'BlueDot Studio',
      url: `${SITE_URL}/`,
      parentOrganization: { '@id': `${SITE_URL}/#organization` },
      description: '병원·법률·세무 등 전문직을 위한 숏폼 마케팅 에이전시. 기획부터 촬영, 편집, 업로드까지 상담 전환을 만드는 콘텐츠를 설계합니다.',
      serviceType: ['전문직 숏폼 마케팅', '숏폼 콘텐츠 기획', '릴스·유튜브 쇼츠 제작'],
      areaServed: { '@type': 'Country', name: '대한민국' },
      address: {
        '@type': 'PostalAddress',
        streetAddress: '법원로 114 엠스테이트 B동 1014호',
        addressLocality: '송파구',
        addressRegion: '서울특별시',
        addressCountry: 'KR'
      }
    },
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#editor`,
      name: '블루닷 에디터',
      jobTitle: '전문직 숏폼 마케팅 콘텐츠 에디터',
      worksFor: { '@id': `${SITE_URL}/#organization` },
      knowsAbout: ['전문직 마케팅', '숏폼 마케팅', '릴스 마케팅', '유튜브 쇼츠']
    }
  ]
};
const ENTITY_SCHEMA_TAG = `<script type="application/ld+json" data-entity-schema>${JSON.stringify(ENTITY_GRAPH)}</script>`;

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
  },
  {
    id: 4,
    filename: 'shortform-marketing-fit-guide.html',
    title: '전문직 숏폼 마케팅이 필요한지 판단하는 3가지 기준 | BlueDot Studio',
    description: '전문직에게 숏폼 마케팅이 필요한지 판단하는 3가지 기준을 정리합니다. 고객의 이동 범위, 시각적 설득력, 검색 의도를 기준으로 확인하세요.',
    datePublished: '2026-09-11',
    referenceUrl: `${SITE_URL}/column/shortform-marketing-needed.html`,
    faq: [
      { question: '전문직은 모두 숏폼 마케팅을 해야 하나요?', answer: '아닙니다. 전국 단위 고객을 만날 수 있는지, 시각적 변화나 설명 가능한 전문성이 있는지, 빠른 인지도 확보가 필요한지를 먼저 판단해야 합니다.' },
      { question: '숏폼보다 먼저 해야 할 마케팅은 무엇인가요?', answer: '가까운 지역 고객이 핵심인 업종은 네이버 플레이스, 지역 검색, 재방문 관리가 우선일 수 있습니다. 숏폼은 이 기반 위에서 확장 수단으로 쓰는 것이 좋습니다.' },
      { question: '숏폼 마케팅 성과는 무엇으로 판단하나요?', answer: '조회수만 보지 않고 저장, 프로필 방문, 검색 유입, 상담 문의처럼 사업 목표와 연결되는 행동을 함께 확인해야 합니다.' }
    ]
  },
  {
    id: 5,
    filename: 'reels-views-guide.html',
    title: '릴스 조회수를 만드는 3가지 원칙 | 100만 조회수 사례 분석 | BlueDot Studio',
    description: '한의원 릴스 2개로 100만 조회수를 만든 사례를 바탕으로 첫 3초, 고객의 언어, 비판매형 콘텐츠라는 3가지 원칙을 정리합니다.',
    datePublished: '2026-09-11',
    referenceUrl: `${SITE_URL}/column/reels-million-views.html`,
    faq: [
      { question: '릴스 조회수를 높이려면 첫 3초가 왜 중요한가요?', answer: '숏폼은 스크롤을 멈추게 해야 다음 내용을 볼 기회가 생깁니다. 비교, 질문, 오해 바로잡기처럼 즉시 이해되는 시작점이 필요합니다.' },
      { question: '전문가 콘텐츠에서 고객의 언어가 중요한 이유는 무엇인가요?', answer: '시청자는 전문 용어보다 자신의 고민을 먼저 인식합니다. 일상 언어로 문제를 꺼낸 뒤 전문성을 설명해야 이해와 시청 지속을 함께 만들 수 있습니다.' },
      { question: '조회수가 높으면 문의도 늘어나나요?', answer: '항상 그렇지는 않습니다. 조회수는 관심 확보 지표이고, 문의는 신뢰와 전환 경로가 함께 갖춰질 때 발생합니다.' }
    ]
  },
  {
    id: 6,
    filename: 'shortform-inquiry-guide.html',
    title: '숏폼 조회수를 문의로 전환하는 2가지 조건 | BlueDot Studio',
    description: '숏폼 조회수를 실제 문의로 전환하려면 업종에 맞는 플랫폼 선택과 문의 장벽 제거가 필요합니다. 전문직 사례를 기준으로 설명합니다.',
    datePublished: '2026-09-11',
    referenceUrl: `${SITE_URL}/column/shortform-inquiry-conversion.html`,
    faq: [
      { question: '조회수가 높아도 문의가 없는 이유는 무엇인가요?', answer: '콘텐츠를 본 사람이 자신에게 필요한 서비스인지 판단하지 못하거나, 가격·거리·상담 부담 같은 장벽을 느끼면 문의로 이어지지 않을 수 있습니다.' },
      { question: '전문직은 인스타그램 릴스와 유튜브 쇼츠 중 무엇을 선택해야 하나요?', answer: '대중적 관심과 시각적 설득이 중요한 업종은 인스타그램 릴스가 적합할 수 있고, 특정 문제를 검색하는 고객이 핵심인 업종은 유튜브 쇼츠가 더 적합할 수 있습니다.' },
      { question: '문의 장벽은 어떻게 낮출 수 있나요?', answer: '상담 절차, 예상 비용 범위, 위치, 초기 상담의 목적을 콘텐츠와 랜딩 페이지에서 분명히 안내해 망설임을 줄여야 합니다.' }
    ]
  }
];

const SEO_STATIC_STYLE = `<style data-seo-static-style>
  .seo-static { max-width: 760px; margin: 0 auto; padding: 56px 24px 80px; color: #111827; background: #fff; font-family: system-ui, sans-serif; line-height: 1.75; }
  .seo-static__nav { display: flex; gap: 16px; flex-wrap: wrap; margin-bottom: 36px; font-size: 14px; }
  .seo-static h1 { font-size: clamp(30px, 5vw, 48px); line-height: 1.22; margin: 0 0 18px; }
  .seo-static h2 { font-size: 24px; line-height: 1.35; margin: 46px 0 14px; }
  .seo-static h3 { font-size: 18px; margin: 22px 0 6px; }
  .seo-static p, .seo-static li { margin: 0 0 14px; }
  .seo-static ul { padding-left: 20px; }
  .seo-static a { color: #1547ff; text-decoration: underline; }
  .seo-static__meta { color: #667085; font-size: 14px; }
  .seo-static__deck { font-size: 19px; color: #344054; }
  .seo-static__card { border: 1px solid #e5e7eb; border-radius: 14px; padding: 20px; margin: 20px 0; }
  .seo-static__cta { display: inline-block; margin-top: 24px; padding: 13px 20px; border-radius: 8px; background: #1547ff; color: #fff !important; font-weight: 700; text-decoration: none !important; }
  .seo-static__list { list-style: none; padding: 0; }
  .seo-static__list li { border: 1px solid #e5e7eb; border-radius: 14px; padding: 20px; margin: 14px 0; }
</style>`;

function escapeHtml(value = '') {
  return String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
}

function formatInline(value = '') {
  return escapeHtml(value)
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\[\[(.*?)\]\]/g, '<strong>$1</strong>')
    .replace(/__(.*?)__/g, '<strong>$1</strong>')
    .replace(/\n/g, '<br />');
}

function loadArticleContent() {
  const sandbox = { window: {} };
  vm.runInNewContext(fs.readFileSync('column/articles.js', 'utf8'), sandbox, { filename: 'column/articles.js' });
  return sandbox.window.ARTICLES || {};
}

function articlePath(id) {
  const page = ARTICLE_PAGES.find(item => item.id === Number(id));
  return page ? page.filename : 'column.html';
}

function renderStaticBlock(block) {
  if (block.t === 'h2') return `<h2>${formatInline(block.text)}</h2>`;
  if (block.t === 'p') return `<p>${formatInline(block.text)}</p>`;
  if (block.t === 'quote') return `<blockquote><p>${formatInline(block.text)}</p></blockquote>`;
  if (block.t === 'footnote') return `<p class="seo-static__meta">${formatInline(block.text)}</p>`;
  if (block.t === 'list' || block.t === 'pbox') return `<ul>${(block.items || []).map(item => `<li>${formatInline(typeof item === 'string' ? item : item.text || '')}</li>`).join('')}</ul>`;
  if (block.t === 'cards') return `<section>${(block.items || []).map(item => `<div class="seo-static__card"><h3>${formatInline(item.title)}</h3><p>${formatInline(item.ex || '')}</p><p>${formatInline(item.desc || '')}</p></div>`).join('')}</section>`;
  if (block.t === 'casecard') return `<section class="seo-static__card"><h2>${formatInline(block.client || '사례')}</h2><p>${formatInline(`${block.before?.join(' ') || ''} → ${block.after?.join(' ') || ''}`)}</p><p>${formatInline((block.chips || []).join(' · '))}</p></section>`;
  if (block.t === 'platform') return `<h3>${formatInline(block.text)}</h3>`;
  if (block.t === 'reference') return `<p><a href="${escapeHtml(block.href)}">${formatInline(block.text)}</a></p>`;
  if (block.t === 'next') return `<p><a href="${articlePath(block.id)}">다음 글 읽기</a></p>`;
  if (block.t === 'cta') return `<p><a class="seo-static__cta" href="/#contact">무료 상담 신청</a></p>`;
  if (block.t === 'stat') return `<p><strong>${formatInline(block.value || block.text || '')}</strong></p>`;
  return '';
}

function staticArticleMarkup(page, articles) {
  const article = articles[page.id] || {};
  const fallbackTitle = page.title.replace(/ \| BlueDot Studio/g, '').replace(/ \| 전문직 숏폼 마케팅/g, '');
  return `<div id="root"><!-- SEO_STATIC_START -->
  <main class="seo-static" data-seo-static="article">
    <nav class="seo-static__nav" aria-label="칼럼 탐색"><a href="/">블루닷스튜디오</a><a href="column.html">칼럼 목록</a></nav>
    <article>
      <p class="seo-static__meta">${escapeHtml(article.cat || '칼럼')} · ${escapeHtml(article.date || page.datePublished)} · ${escapeHtml(article.author || '블루닷 에디터')}</p>
      <h1>${formatInline(article.title || fallbackTitle)}</h1>
      <p class="seo-static__deck">${formatInline(article.deck || page.description)}</p>
      ${(article.blocks || []).map(renderStaticBlock).join('\n')}
      <p><a href="column.html">모든 칼럼 보기</a></p>
    </article>
  </main>
  <!-- SEO_STATIC_END --></div>`;
}

function staticListingMarkup() {
  return `<div id="root"><!-- SEO_STATIC_START -->
  <main class="seo-static" data-seo-static="listing">
    <nav class="seo-static__nav" aria-label="사이트 탐색"><a href="/">블루닷스튜디오</a></nav>
    <h1>전문직 숏폼 마케팅 칼럼</h1>
    <p class="seo-static__deck">전문직을 위한 숏폼 마케팅 인사이트, 실제 사례, 조회수와 상담 전환 전략을 정리합니다.</p>
    <ul class="seo-static__list">${ARTICLE_PAGES.map(page => `<li><h2><a href="${page.filename}">${escapeHtml(page.title.replace(/ \| BlueDot Studio/g, ''))}</a></h2><p>${escapeHtml(page.description)}</p></li>`).join('')}</ul>
  </main>
  <!-- SEO_STATIC_END --></div>`;
}

function staticHomeMarkup() {
  return `<div id="root"><!-- SEO_STATIC_START -->
  <main class="seo-static" data-seo-static="home">
    <h1>전문직 숏폼 마케팅 | BlueDot Studio</h1>
    <p class="seo-static__deck">병원·법률·세무 등 전문직을 위한 숏폼 마케팅 에이전시입니다. 기획부터 촬영·편집·업로드까지 상담 전환을 만드는 콘텐츠를 설계합니다.</p>
    <nav aria-label="주요 콘텐츠"><h2>전문직 마케팅 칼럼</h2><ul>${ARTICLE_PAGES.map(page => `<li><a href="/column/${page.filename}">${escapeHtml(page.title.replace(/ \| BlueDot Studio/g, ''))}</a></li>`).join('')}</ul><p><a href="/column/column.html">모든 칼럼 보기</a></p></nav>
  </main>
  <!-- SEO_STATIC_END --></div>`;
}

function replaceRootWithStatic(html, markup) {
  if (html.includes('<!-- SEO_STATIC_START -->')) {
    return html.replace(/<div id="root">\s*<!--[\s\S]*?SEO_STATIC_END -->\s*<\/div>/, markup);
  }
  return html.replace('<div id="root"><div id="root-loading"></div></div>', markup);
}

function ensureStaticStyle(html) {
  return html.includes('data-seo-static-style') ? html : html.replace('</head>', `${SEO_STATIC_STYLE}\n</head>`);
}

function articleSeo(page) {
  const url = `${SITE_URL}/column/${page.filename}`;
  const headline = page.title.replace(' | BlueDot Studio', '').replace(' | 전문직 숏폼 마케팅', '');
  const article = {
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    headline,
    description: page.description,
    image: `${SITE_URL}/og-image.png`,
    datePublished: page.datePublished,
    dateModified: page.datePublished,
    author: { '@id': `${SITE_URL}/#editor` },
    publisher: { '@id': `${SITE_URL}/#organization` },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    about: [
      { '@id': `${SITE_URL}/#professional-service` },
      { '@type': 'Thing', name: '전문직 숏폼 마케팅' }
    ],
    inLanguage: 'ko-KR'
  };
  if (page.referenceUrl) article.isBasedOn = page.referenceUrl;
  const graph = [article];
  if (page.faq?.length) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      mainEntity: page.faq.map(({ question, answer }) => ({
        '@type': 'Question',
        name: question,
        acceptedAnswer: { '@type': 'Answer', text: answer }
      }))
    });
  }
  const schema = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph });
  return `<meta name="description" content="${page.description}" />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="${url}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${url}" />
<meta property="og:title" content="${page.title}" />
<meta property="og:description" content="${page.description}" />
<meta property="og:image" content="${SITE_URL}/og-image.png" />
<meta property="og:locale" content="ko_KR" />
<meta property="article:published_time" content="${page.datePublished}" />
<script type="application/ld+json">${schema}</script>`;
}

function generateStaticArticlePages() {
  const template = fs.readFileSync('column/column-detail.html', 'utf8');
  const articles = loadArticleContent();
  for (const page of ARTICLE_PAGES) {
    let html = template
      .replace(/<title>[\s\S]*?<\/title>/, `<title>${page.title}</title>`)
      .replace('<meta name="robots" content="noindex, nofollow" />\n', '')
      .replace('</head>', `${articleSeo(page)}\n</head>`)
      .replace('<script src="articles.js"></script>', `<script>window.__COLUMN_ARTICLE_ID__ = ${page.id};</script>\n<script src="articles.js"></script>`);
    html = ensureStaticStyle(replaceRootWithStatic(html, staticArticleMarkup(page, articles)));
    fs.writeFileSync(path.join('column', page.filename), html, 'utf8');
    console.log('  ✓', `column/${page.filename}`);
  }
}

function generateStaticDiscoveryPages() {
  let columnHtml = fs.readFileSync('column/column.html', 'utf8');
  columnHtml = ensureStaticStyle(replaceRootWithStatic(columnHtml, staticListingMarkup()));
  fs.writeFileSync('column/column.html', columnHtml, 'utf8');

  let homeHtml = fs.readFileSync('index.html', 'utf8');
  homeHtml = ensureStaticStyle(replaceRootWithStatic(homeHtml, staticHomeMarkup()));
  fs.writeFileSync('index.html', homeHtml, 'utf8');
  console.log('  ✓ 정적 칼럼 목록·홈 내부 링크 생성');
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
  if (!html.includes('data-entity-schema')) {
    html = html.replace('</head>', `${ENTITY_SCHEMA_TAG}\n</head>`);
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
generateStaticDiscoveryPages();
generateStaticArticlePages();

console.log('\n✅ 빌드 완료!\n');
