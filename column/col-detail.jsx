/* ============================================================
   col-detail.jsx — 개별 칼럼(상세) 페이지
   메인/목록과 동일한 Container(1020) · 반응형. 본문은 680px 리딩 컬럼.
   shared.jsx + cols-shared.jsx + sections-c.jsx(SiteFooter) 의존.
   ============================================================ */

/* ============================================================
   본문 데이터는 articles.jsx(window.ARTICLES)에서 ?id 로 조회합니다.
   글 작성/수정은 articles.jsx 에서만 하면 됩니다. (스타일은 자동)
   ============================================================ */
const _urlId = Number(new URLSearchParams(location.search).get('id'));
if (_urlId) localStorage.setItem('bd_col_last_id', _urlId);
const CUR_ID = _urlId || Number(localStorage.getItem('bd_col_last_id')) || 1;
const ARTICLE = (window.ARTICLES && (window.ARTICLES[CUR_ID] || window.ARTICLES[1])) || { title: '', deck: '', blocks: [] };

/* 본문 끝 추천 글 3편 (목록 데이터에서 — 현재 글 제외) */
function relatedFrom(COLS) {
  return COLS.filter((c) => c.id !== CUR_ID).slice(0, 3);
}

function ColDetailHeader() {
  const isMobile = window.useIsMobile();
  const navItems = ['성과 사례', '3단계 공식', '프로세스', 'FAQ'];
  const navIds = ['results', 'formula', 'process', 'faq'];
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(250,250,250,0.95)', backdropFilter: 'saturate(180%) blur(14px)', WebkitBackdropFilter: 'saturate(180%) blur(14px)', borderBottom: '1px solid #E6E7EB' }}>
      <div style={{ maxWidth: 1020, margin: '0 auto', padding: `0 ${isMobile ? 20 : 32}px`, height: isMobile ? 56 : 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="../index.html" className="link-ul"><window.BdLogo size={isMobile ? 21 : 24} /></a>
        <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? 0 : 4 }}>
          <a href="column.html" style={{ marginRight: isMobile ? 16 : 22, fontSize: 15, fontWeight: 600, color: 'var(--bd-ink)', padding: '0 6px', textDecoration: 'none' }}>칼럼</a>
          <a href="../index.html#cta" style={{ marginLeft: isMobile ? 8 : 18, background: '#0F1F3D', color: '#fff', borderRadius: 6, padding: isMobile ? '8px 14px' : '9px 18px', fontSize: isMobile ? 13 : 13.5, fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 7, lineHeight: 1, transition: 'background 0.14s' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#1a3360'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = '#0F1F3D'; }}>
            빠른 상담
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12,5 19,12 12,19" /></svg>
          </a>
        </div>
      </div>
    </header>
  );
}

function ColumnDetail() {
  const { Container, Reveal, Slot } = window;
  const { COLS } = window.ColShared;
  const isMobile = window.useIsMobile();
  const READ = 680;

  /* 본문 단락 — 브랜드 보이스(합쇼체·숫자 중심) */
  const P = ({ children }) => <p style={{ margin: '0 0 36px', fontSize: isMobile ? 16.5 : 18, lineHeight: 1.78, color: 'var(--bd-gray-700)' }}>{children}</p>;
  const H2 = ({ children, mt }) => <h2 style={{ margin: `${mt ?? (isMobile ? 100 : 148)}px 0 20px`, fontSize: isMobile ? 24 : 28, fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.3, color: 'var(--bd-ink)' }}>{children}</h2>;
  const Mark = ({ children }) => <span style={{ background: 'linear-gradient(transparent 56%, var(--bd-highlight) 56%)', padding: '0 0.04em', fontWeight: 700, color: 'var(--bd-ink)' }}>{children}</span>;
  const Blue = ({ children }) => <span style={{ color: 'var(--bd-blue)', fontWeight: 700 }}>{children}</span>;
  const B = ({ children }) => <strong style={{ fontWeight: 700, color: 'var(--bd-ink)' }}>{children}</strong>;

  /* 인라인 강조 통일 규칙:
     **노란 형광펜** (섹션 핵심 한 줄) · [[파란 굵게]] (키워드·수치·플랫폼) · __잉크 굵게__ (보조 강조) */
  const renderInline = (text) => String(text).split(/(\*\*[^*]+\*\*|\[\[[^\]]+\]\]|__[^_]+__)/g).map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) return <Mark key={i}>{part.slice(2, -2)}</Mark>;
    if (part.startsWith('[[') && part.endsWith(']]')) return <Blue key={i}>{part.slice(2, -2)}</Blue>;
    if (part.startsWith('__') && part.endsWith('__')) return <B key={i}>{part.slice(2, -2)}</B>;
    return <React.Fragment key={i}>{part.split('\n').map((ln, j) => <React.Fragment key={j}>{j > 0 ? <br /> : null}{ln}</React.Fragment>)}</React.Fragment>;
  });

  /* 블록 1개 → 고정 스타일 렌더 */
  const Block = ({ b }) => {
    if (b.t === 'h2') return <H2 mt={b.mt}>{b.text}</H2>;
    if (b.t === 'p') return <P>{renderInline(b.text)}</P>;
    if (b.t === 'list') return (
      <ul style={{ margin: '0 0 22px', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {b.items.map((it, i) => (
          <li key={i} style={{ position: 'relative', paddingLeft: 22, fontSize: isMobile ? 16.5 : 18, lineHeight: 1.78, color: 'var(--bd-gray-700)' }}>
            <span style={{ position: 'absolute', left: 2, top: isMobile ? 11 : 13, width: 6, height: 6, borderRadius: 999, background: 'var(--bd-blue)' }}></span>
            {renderInline(it)}
          </li>
        ))}
      </ul>
    );
    if (b.t === 'platform') {
      const logo = b.app === 'youtube'
        ? <svg width="30" height="30" viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="5" width="20" height="14" rx="4" fill="#FF0000"></rect><path d="M10 8.6l5.2 3.4-5.2 3.4z" fill="#fff"></path></svg>
        : <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="2.6" y="2.6" width="18.8" height="18.8" rx="5.6" stroke="#E1306C" strokeWidth="1.8"></rect><circle cx="12" cy="12" r="4.1" stroke="#E1306C" strokeWidth="1.8"></circle><circle cx="17.2" cy="6.8" r="1.15" fill="#E1306C"></circle></svg>;
      return (
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: `${isMobile ? 52 : 64}px 0 14px` }}>
          <span style={{ display: 'inline-flex', flexShrink: 0 }}>{logo}</span>
          <span style={{ fontSize: isMobile ? 18 : 20, fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.35, color: 'var(--bd-ink)' }}>{b.text}</span>
        </div>
      );
    }
    if (b.t === 'cards') return (
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : `repeat(${Math.min(b.items.length, 3)}, 1fr)`, gap: isMobile ? 12 : 16, margin: `${isMobile ? 18 : 22}px 0 28px` }}>
        {b.items.map((it, i) => (
          <div key={i} style={{ padding: isMobile ? '18px 18px' : '22px 20px', background: '#fff', border: '1px solid var(--bd-line)', borderRadius: 'var(--r-md)', display: 'flex', flexDirection: 'column', gap: 9 }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 700, letterSpacing: '0.04em', color: 'var(--bd-blue)' }}>{String(i + 1).padStart(2, '0')}</span>
            <h3 style={{ margin: 0, fontSize: isMobile ? 16.5 : 17, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.4, color: 'var(--bd-ink)' }}>{it.title}</h3>
            <div style={{ fontSize: 14, fontWeight: 600, letterSpacing: '-0.01em', lineHeight: 1.5, color: 'var(--bd-gray-700)' }}>{it.ex}</div>
            <p style={{ margin: '2px 0 0', fontSize: 14, lineHeight: 1.62, color: 'var(--bd-gray-500)' }}>{it.desc}</p>
          </div>
        ))}
      </div>
    );
    if (b.t === 'pbox') return (
      <div style={{ margin: '0 0 22px', padding: isMobile ? '16px 18px' : '20px 26px', background: '#fff', border: '1px solid var(--bd-line)', borderRadius: 'var(--r-md)', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {b.items.map((text, i) => (
          <p key={i} style={{ margin: 0, fontSize: isMobile ? 15.5 : 16.5, lineHeight: 1.72, color: 'var(--bd-gray-700)' }}>{renderInline(text)}</p>
        ))}
      </div>
    );
    if (b.t === 'pgrid') return (
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 10 : 12, margin: '0 0 22px' }}>
        {b.items.map((text, i) => (
          <div key={i} style={{ padding: isMobile ? '14px 16px' : '16px 20px', background: '#fff', border: '1px solid var(--bd-line)', borderRadius: 'var(--r-md)', fontSize: isMobile ? 15.5 : 16.5, lineHeight: 1.72, color: 'var(--bd-gray-700)' }}>
            {renderInline(text)}
          </div>
        ))}
      </div>
    );
    if (b.t === 'note') return (
      <div style={{ margin: `${isMobile ? 18 : 22}px 0 28px`, padding: isMobile ? '18px 18px' : '20px 24px', background: 'var(--bd-gray-100)', border: '1px solid var(--bd-line)', borderRadius: 'var(--r-md)' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, flexWrap: 'wrap' }}>
          <h3 style={{ margin: 0, fontSize: isMobile ? 16 : 17, fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--bd-ink)' }}>{b.title}</h3>
          <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--bd-gray-600)' }}>{b.ex}</span>
        </div>
        <p style={{ margin: '8px 0 0', fontSize: 14.5, lineHeight: 1.62, color: 'var(--bd-gray-600)' }}>{renderInline(b.desc)}</p>
      </div>
    );
    if (b.t === 'quote') return (
      <blockquote style={{ margin: `${isMobile ? 32 : 44}px 0`, padding: `4px 0 4px ${isMobile ? 20 : 28}px`, borderLeft: '3px solid var(--bd-blue)' }}>
        <p style={{ margin: 0, fontSize: isMobile ? 20 : 24, fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.45, color: 'var(--bd-ink)' }}>{b.text}</p>
      </blockquote>
    );
    if (b.t === 'stat') return (
      <div style={{ margin: `${isMobile ? 32 : 40}px 0`, padding: isMobile ? '24px 22px' : '32px 36px', background: '#fff', border: '1px solid var(--bd-line)', borderRadius: 'var(--r-md)', boxShadow: 'var(--shadow-soft, 0 1px 2px rgba(10,14,26,0.05), 0 8px 28px rgba(10,19,48,0.07))', display: b.arrow ? 'flex' : 'grid', gridTemplateColumns: b.arrow ? undefined : `repeat(${b.items.length}, 1fr)`, alignItems: 'center', justifyContent: b.arrow ? 'space-between' : undefined, gap: b.arrow ? 0 : (isMobile ? 16 : 32) }}>
        {b.items.map(([n, l], i) => (
          <React.Fragment key={l}>
            {b.arrow && i > 0 && <span style={{ fontSize: isMobile ? 22 : 28, color: 'var(--bd-gray-300)', fontWeight: 300, flexShrink: 0 }}>→</span>}
            <div style={{ minWidth: 0 }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: isMobile ? 22 : 32, letterSpacing: '-0.03em', color: 'var(--bd-blue)', lineHeight: 1 }}>{n}</div>
              <div style={{ marginTop: 8, fontSize: isMobile ? 12 : 13.5, color: 'var(--bd-gray-600)', fontWeight: 500, lineHeight: 1.4 }}>{l}</div>
            </div>
          </React.Fragment>
        ))}
      </div>
    );
    if (b.t === 'reels') return (
      <figure style={{ margin: `${isMobile ? 8 : 16}px 0 28px` }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: isMobile ? 12 : 16 }}>
          {b.images.map((src, i) => (
            <div key={i} style={{ position: 'relative', width: isMobile ? '46%' : 232, aspectRatio: '9 / 16', borderRadius: 10, overflow: 'hidden', border: '1px solid var(--bd-line)', background: 'var(--bd-gray-100)' }}>
              <img src={src} alt={`릴스 ${i + 1}`} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          ))}
        </div>
        {b.caption && <figcaption style={{ marginTop: 14, textAlign: 'center', fontSize: 13, color: 'var(--bd-gray-500)', fontWeight: 500 }}>{b.caption}</figcaption>}
      </figure>
    );
    if (b.t === 'image') return (
      <figure style={{ margin: `${isMobile ? 16 : 24}px 0 28px` }}>
        <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 9', borderRadius: 12, overflow: 'hidden', border: '1px solid var(--bd-line)', background: 'var(--bd-gray-100)' }}>
          <img src={b.src} alt={b.caption || ''} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        {b.caption && <figcaption style={{ marginTop: 14, textAlign: 'center', fontSize: 15, color: '#1547ff', fontWeight: 600 }}>{b.caption}</figcaption>}
      </figure>
    );
    if (b.t === 'slot') return (
      <figure style={{ margin: `${isMobile ? 16 : 24}px 0 28px` }}>
        <Slot id={b.id} placeholder={b.placeholder || '이미지 (16:9)'} radius={isMobile ? 10 : 12} style={{ aspectRatio: '16 / 9', width: '100%', border: '1px solid var(--bd-line)' }} />
        {b.caption && <figcaption style={{ marginTop: 14, textAlign: 'center', fontSize: 13, color: 'var(--bd-gray-500)', fontWeight: 500 }}>{b.caption}</figcaption>}
      </figure>
    );
    if (b.t === 'next') {
      const nx = (window.ARTICLES && window.ARTICLES[b.id]) || {};
      return (
        <a href={`column-detail.html?id=${b.id}`} className="col-next-cta link-ul" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, margin: `${isMobile ? 44 : 60}px 0 0`, padding: isMobile ? '18px 20px' : '22px 26px', background: '#fff', border: '1px solid var(--bd-line)', borderRadius: 'var(--r-md)', textDecoration: 'none', position: 'relative', overflow: 'hidden' }}>
          <div style={{ minWidth: 0, position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 7, fontFamily: 'var(--font-mono)', fontSize: 11.5, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--bd-blue)', fontWeight: 600 }}>
              <span className="col-next-dot"></span>다음 편
            </div>
            <div style={{ marginTop: 7, fontSize: isMobile ? 16 : 18, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.36, color: 'var(--bd-ink)' }}>{nx.title}</div>
          </div>
          <span className="col-next-arrow" style={{ display: 'inline-flex', flexShrink: 0, position: 'relative', zIndex: 1 }}><window.Icon name="arrow-right" size={20} color="var(--bd-blue)" /></span>
        </a>
      );
    }
    if (b.t === 'cta') return (
      <div style={{ margin: `${isMobile ? 36 : 44}px 0 0`, display: 'flex' }}>
        <a href="../index.html#cta" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, height: 46, padding: '0 22px', borderRadius: 999, background: 'var(--bd-blue)', color: '#fff', fontSize: 14.5, fontWeight: 600, letterSpacing: '-0.01em', textDecoration: 'none' }}>
          무료 상담 신청
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12,5 19,12 12,19" /></svg>
        </a>
      </div>
    );
    if (b.t === 'footnote') return (
      <p style={{ margin: '-8px 0 28px', paddingLeft: isMobile ? 18 : 28, fontSize: isMobile ? 13.5 : 14, lineHeight: 1.65, color: '#C03434', fontWeight: 500 }}>
        {String(b.text).split('\n').map((ln, i) => <React.Fragment key={i}>{i > 0 ? <br /> : null}{ln}</React.Fragment>)}
      </p>
    );
    if (b.t === 'platform-grid') return <PlatformGrid />;
    return null;
  };

  /* ── 칼럼 1편 전용: 마케팅 채널 그리드 ── */
  const PlatformGrid = () => {
    const PLATFORMS = [
      {
        name: '네이버 플레이스', cat: '검색 · 지도', color: '#03C75A',
        logo: <svg width="16" height="16" viewBox="0 0 18 18" fill="white"><path d="M2 2h3v14H2V2z M13 2h3v14h-3V2z M5 2h3l5 14h-3L5 2z"/></svg>,
      },
      {
        name: '블로그', cat: '검색', color: '#03C75A',
        logo: <svg width="16" height="16" viewBox="0 0 18 18" fill="none"><rect x="3" y="4" width="12" height="2" rx="1" fill="white"/><rect x="3" y="8" width="9" height="2" rx="1" fill="white"/><rect x="3" y="12" width="10.5" height="2" rx="1" fill="white"/></svg>,
      },
      {
        name: '네이버 카페', cat: '커뮤니티', color: '#03C75A',
        logo: <svg width="16" height="16" viewBox="0 0 18 18" fill="none" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M9 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8z"/><path d="M2 16c0-3 3-5 7-5s7 2 7 5"/></svg>,
      },
      {
        name: '유튜브', cat: '롱폼 & 숏폼', color: '#FF0000',
        logo: <svg width="16" height="16" viewBox="0 0 18 18" fill="white"><path d="M6.5 5l7 4-7 4V5z"/></svg>,
      },
      {
        name: '인스타그램', cat: '소셜 · 숏폼', color: '#C13584',
        logo: <svg width="16" height="16" viewBox="0 0 18 18" fill="none"><rect x="2" y="2" width="14" height="14" rx="4" stroke="white" strokeWidth="1.8"/><circle cx="9" cy="9" r="3" stroke="white" strokeWidth="1.8"/><circle cx="13.5" cy="4.5" r="1.1" fill="white"/></svg>,
      },
      {
        name: '스레드', cat: '소셜 · 텍스트', color: '#1A1A1A',
        logo: <svg width="16" height="16" viewBox="0 0 18 18" fill="none"><path d="M12 7.8C11.4 5.9 10.1 5 8.8 5 7 5 5.8 6.5 5.8 9s1.2 4 3 4c1 0 1.8-.5 2.2-1.4" stroke="white" strokeWidth="1.55" strokeLinecap="round"/><circle cx="8.9" cy="9" r="1.4" fill="white"/><line x1="12" y1="7.3" x2="12" y2="12" stroke="white" strokeWidth="1.55" strokeLinecap="round"/></svg>,
      },
      {
        name: '전문직 플랫폼', cat: '로톡 · 강남언니', color: '#1A4DB8',
        logo: <svg width="16" height="16" viewBox="0 0 18 18" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><line x1="9" y1="2" x2="9" y2="16"/><line x1="3" y1="5" x2="15" y2="5"/><path d="M3 5v4a3 3 0 0 0 6 0V5"/><path d="M9 5v4a3 3 0 0 0 6 0V5"/><line x1="6" y1="16" x2="12" y2="16"/></svg>,
      },
      {
        name: '옥외 · 간판', cat: '오프라인', color: '#6B7280',
        logo: <svg width="16" height="16" viewBox="0 0 18 18" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="14" height="8" rx="2"/><line x1="9" y1="11" x2="9" y2="15"/><line x1="6" y1="15" x2="12" y2="15"/></svg>,
      },
    ];
    return (
      <div style={{ width: '100%', background: '#fff', border: '1px solid var(--bd-line)', borderRadius: isMobile ? 10 : 16, padding: isMobile ? '20px 18px 22px' : '26px 28px 28px' }}>
        <div style={{ marginBottom: isMobile ? 14 : 16, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--bd-gray-400)', fontWeight: 600 }}>마케팅 채널</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: isMobile ? 8 : 10 }}>
          {PLATFORMS.map(p => (
            <div key={p.name} style={{ display: 'flex', alignItems: 'center', gap: 9, padding: isMobile ? '9px 12px' : '10px 14px', border: '1px solid var(--bd-line)', borderRadius: 10, background: 'var(--bd-paper)' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 28, height: 28, borderRadius: 7, background: p.color, flexShrink: 0 }}>
                {p.logo}
              </span>
              <div>
                <div style={{ fontSize: isMobile ? 13 : 13.5, fontWeight: 700, color: 'var(--bd-ink)', lineHeight: 1.25 }}>{p.name}</div>
                <div style={{ fontSize: 11, color: 'var(--bd-gray-400)', fontWeight: 500, lineHeight: 1.3, marginTop: 2 }}>{p.cat}</div>
              </div>
            </div>
          ))}
        </div>
        <p style={{ margin: `${isMobile ? 14 : 18}px 0 0`, paddingTop: isMobile ? 14 : 16, borderTop: '1px solid var(--bd-line)', fontSize: 15, color: '#1547ff', lineHeight: 1.6, fontWeight: 500 }}>채널마다 역할이 다릅니다. 나에게 맞는 곳부터 시작해야 합니다.</p>
      </div>
    );
  };

  return (
    <React.Fragment>
      <style>{`
        @keyframes colNextDot { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.35; transform: scale(0.7); } }
        @keyframes colNextNudge { 0%, 100% { transform: translateX(0); } 50% { transform: translateX(5px); } }
        @keyframes colNextSheen { 0% { transform: translateX(-120%); } 100% { transform: translateX(220%); } }
        .col-next-dot { width: 7px; height: 7px; border-radius: 999px; background: var(--bd-blue); display: inline-block; animation: colNextDot 1.6s cubic-bezier(0.2,0.8,0.2,1) infinite; }
        .col-next-cta { box-shadow: 0 1px 2px rgba(10,14,26,0.04), 0 10px 30px rgba(21,71,255,0.10); transition: box-shadow .22s cubic-bezier(0.2,0.8,0.2,1), border-color .22s cubic-bezier(0.2,0.8,0.2,1), transform .22s cubic-bezier(0.2,0.8,0.2,1); }
        .col-next-cta::after { content: ''; position: absolute; top: 0; bottom: 0; left: 0; width: 32%; background: linear-gradient(100deg, transparent, rgba(21,71,255,0.10), transparent); transform: translateX(-120%); animation: colNextSheen 3.4s cubic-bezier(0.2,0.8,0.2,1) infinite; pointer-events: none; z-index: 0; }
        .col-next-arrow { animation: colNextNudge 1.6s cubic-bezier(0.2,0.8,0.2,1) infinite; }
        .col-next-cta:hover { border-color: var(--bd-blue); box-shadow: 0 1px 2px rgba(10,14,26,0.04), 0 16px 40px rgba(21,71,255,0.16); transform: translateY(-2px); }
        @media (prefers-reduced-motion: reduce) {
          .col-next-dot, .col-next-arrow, .col-next-cta::after { animation: none; }
        }
      `}</style>
      <ColDetailHeader />

      <article>
        {/* ── 글 머리 ── */}
        <div style={{ background: 'var(--bd-paper)', padding: `${isMobile ? 36 : 56}px 0 ${isMobile ? 28 : 36}px` }}>
          <Container>
            <div style={{ maxWidth: READ }}>
              <a href="column.html" className="link-ul" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13.5, fontWeight: 600, color: 'var(--bd-gray-500)', textDecoration: 'none' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12,19 5,12 12,5" /></svg>
                칼럼 목록
              </a>
              <div style={{ marginTop: 24, fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--bd-blue)', fontWeight: 600 }}>{ARTICLE.cat} · {ARTICLE.type}</div>
              <h1 style={{ margin: '16px 0 0', fontSize: isMobile ? 30 : 44, fontWeight: 800, letterSpacing: '-0.045em', lineHeight: 1.22, color: 'var(--bd-ink)' }}>{ARTICLE.title}</h1>
              <p style={{ margin: '20px 0 0', fontSize: isMobile ? 17 : 19, lineHeight: 1.66, color: 'var(--fg-2)', fontWeight: 500 }}>{ARTICLE.deck}</p>
              <div style={{ marginTop: 26, paddingTop: 22, borderTop: '1px solid var(--bd-line)', display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--bd-gray-500)' }}>
                <span>{ARTICLE.author}</span>
                <span style={{ width: 3, height: 3, borderRadius: 999, background: 'var(--bd-gray-300)' }}></span>
                <span>{ARTICLE.date}</span>
                <span style={{ width: 3, height: 3, borderRadius: 999, background: 'var(--bd-gray-300)' }}></span>
                <span>읽는 데 {ARTICLE.read}분</span>
              </div>
            </div>
          </Container>
        </div>

        {/* ── 본문 ── */}
        <div style={{ background: 'var(--bd-paper)', padding: `${isMobile ? 40 : 56}px 0 ${isMobile ? 72 : 104}px` }}>
          <Container>
            <div style={{ maxWidth: READ }}>
              {ARTICLE.blocks.map((b, i) => <Block key={i} b={b} />)}
              <div style={{ marginTop: isMobile ? 48 : 64, paddingTop: isMobile ? 28 : 36, borderTop: '1px solid var(--bd-line)', display: 'flex', justifyContent: 'center' }}>
                <a href="column.html" className="link-ul" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, height: 46, padding: '0 22px', borderRadius: 999, border: '1px solid var(--bd-line)', background: '#fff', color: 'var(--bd-ink)', fontSize: 14.5, fontWeight: 600, textDecoration: 'none' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12,19 5,12 12,5" /></svg>
                  칼럼 목록으로
                </a>
              </div>
            </div>
          </Container>
        </div>
      </article>

      {window.SiteFooter ? <window.SiteFooter /> : null}
    </React.Fragment>
  );
}

window.ColumnDetail = ColumnDetail;
