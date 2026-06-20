/* ============================================================
   col-page.jsx — 실제 칼럼 목록 페이지 (④ 조합안)
   메인 페이지와 동일한 Container(maxWidth 1020 · 패딩 32/20)와
   useIsMobile(<860) 반응형 규칙을 그대로 사용한다.
   shared.jsx(Container, useIsMobile, BdLogo, Kicker, Reveal, Icon)
   + cols-shared.jsx(COLS, CATS, Slot) + sections-c.jsx(SiteFooter) 의존.
   ============================================================ */

const STARTER_PAGE = [
  { no: '01', id: 1, tag: '시작 가이드', title: '나도 숏폼이 필요할까?', desc: '제발, 이런 분들만 숏폼을 하세요.' },
  { no: '02', id: 2, tag: '대표 사례', title: '릴스 2개로 95만 조회수, 그 안에 숨은 공식', desc: '딱 3가지만 바꿨습니다.' },
  { no: '03', id: 3, tag: '시작 가이드', title: '‘문의로 이어지는 숏폼’은 이게 다릅니다', desc: '문의를 만드는 2가지 차이.' }
];

/* 메인과 동일 규격의 sticky 헤더 (칼럼 활성) */
function ColPageHeader() {
  const isMobile = window.useIsMobile();
  const navItems = ['성과 사례', '3단계 공식', '프로세스', 'FAQ'];
  const navIds = ['results', 'formula', 'process', 'faq'];
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(250,250,250,0.95)',
      backdropFilter: 'saturate(180%) blur(14px)', WebkitBackdropFilter: 'saturate(180%) blur(14px)',
      borderBottom: '1px solid #E6E7EB'
    }}>
      <div style={{ maxWidth: 1020, margin: '0 auto', padding: `0 ${isMobile ? 20 : 32}px`, height: isMobile ? 56 : 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="../index.html" className="link-ul"><window.BdLogo size={isMobile ? 21 : 24} /></a>
        <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? 0 : 4 }}>
          <span style={{ marginRight: isMobile ? 16 : 22, fontSize: 15, fontWeight: 600, color: 'var(--bd-ink)', padding: '0 6px' }}>칼럼</span>
          <a href="../index.html#cta" style={{
            marginLeft: isMobile ? 8 : 18, background: '#0F1F3D', color: '#fff', border: 'none', borderRadius: 6,
            padding: isMobile ? '8px 14px' : '9px 18px', fontSize: isMobile ? 13 : 13.5, fontWeight: 600,
            textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 7, lineHeight: 1, transition: 'background 0.14s'
          }}
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

function ColumnPage() {
  const { Container, Reveal, Kicker, Slot } = window;
  const { COLS } = window.ColShared;
  const isMobile = window.useIsMobile();
  const [activeCat, setActiveCat] = React.useState('전체');
  const FILTER_CATS = ['전체', '시작 가이드', '대표 사례'];
  const filteredCols = (activeCat === '전체' ? COLS : COLS.filter(c => c.cat === activeCat || c.type === activeCat)).slice().reverse();

  return (
    <React.Fragment>
      <ColPageHeader />

      {/* ── 제목 섹션 ── */}
      <section style={{ background: 'var(--bd-paper)', padding: `${isMobile ? 52 : 76}px 0 ${isMobile ? 44 : 56}px` }}>
        <Container>
          <Reveal><Kicker label="Column" /></Reveal>
          <Reveal delay={80}>
            <h1 style={{ margin: '20px 0 0', fontSize: isMobile ? 32 : 46, fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.16 }}>전문직 마케팅 인사이트</h1>
          </Reveal>
          <Reveal delay={140}>
            <p style={{ margin: '18px 0 0', fontSize: isMobile ? 16 : 18, lineHeight: 1.6, fontWeight: 500, color: 'var(--fg-2)', maxWidth: 560 }}>
              조회수를 넘어 ‘문의’로 이어지는 숏폼 전략을 기록합니다.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* ── 처음 오신 분들께 (배경 톤 구분 밴드) ── */}
      <section style={{ background: 'var(--bd-blue-50)', borderTop: '1px solid #DDE3FF', borderBottom: '1px solid #DDE3FF', padding: `${isMobile ? 48 : 64}px 0` }}>
        <Container>
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'flex-start' : 'flex-end', justifyContent: 'space-between', gap: isMobile ? 14 : 16, marginBottom: isMobile ? 24 : 28 }}>
            <div>
              <Reveal><Kicker label="Start here" /></Reveal>
              <Reveal delay={80}><h2 style={{ margin: '14px 0 0', fontSize: isMobile ? 24 : 28, fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.2 }}>처음 오신 분들께</h2></Reveal>
            </div>
            <p style={{ margin: 0, fontSize: 14.5, color: 'var(--bd-gray-600)', fontWeight: 500, lineHeight: 1.5, textAlign: isMobile ? 'left' : 'right', maxWidth: 300 }}>
              이 3편만 읽어도, 마케팅의 큰 그림이 그려집니다.
            </p>
          </div>

          <Reveal delay={120}>
            <div style={{ borderTop: '1px solid #DDE3FF' }}>
              {STARTER_PAGE.map((s, i) => (
                <a key={s.no} href={`column-detail.html?id=${s.id}`} className="link-ul" style={{ display: 'flex', alignItems: 'center', gap: isMobile ? 14 : 24, padding: `${isMobile ? 20 : 26}px 4px`, borderBottom: '1px solid #DDE3FF', textDecoration: 'none' }}>
                  <div style={{ flex: 'none', fontFamily: 'var(--font-mono)', fontWeight: 400, color: 'var(--bd-blue)', opacity: 0.38, letterSpacing: '-0.02em', lineHeight: 1, fontSize: isMobile ? 17 : 22, width: isMobile ? 26 : 38, fontVariantNumeric: 'tabular-nums' }}>{s.no}</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h3 style={{ margin: 0, fontSize: isMobile ? 16.5 : 20, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.38, color: 'var(--bd-ink)' }}>{s.title}</h3>
                    <p style={{ margin: '5px 0 0', fontSize: isMobile ? 13.5 : 14.5, color: 'var(--bd-gray-500)', fontWeight: 500, lineHeight: 1.5 }}>{s.desc}</p>
                  </div>
                  <window.Icon name="arrow-right" size={18} color="var(--bd-blue)" />
                </a>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── 전체 칼럼 리스트 (카테고리 필터 + 인덱스 리스트) ── */}
      <section style={{ background: 'var(--bd-paper)', padding: `${isMobile ? 52 : 72}px 0 ${isMobile ? 88 : 112}px` }}>
        <Container>
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'flex-start' : 'center', justifyContent: 'space-between', gap: isMobile ? 16 : 16 }}>
            <h2 style={{ margin: 0, fontSize: isMobile ? 20 : 22, fontWeight: 700, letterSpacing: '-0.02em' }}>전체 칼럼</h2>
            <div className="no-bar" style={{ display: 'flex', flexWrap: isMobile ? 'nowrap' : 'wrap', gap: 8, overflowX: isMobile ? 'auto' : 'visible', maxWidth: '100%', paddingBottom: isMobile ? 2 : 0 }}>
              {FILTER_CATS.map((cat) => (
                <span key={cat} onClick={() => setActiveCat(cat)} style={{
                  display: 'inline-flex', alignItems: 'center', height: 36, padding: '0 16px', borderRadius: 999, flex: 'none',
                  fontSize: 13, fontWeight: 600, letterSpacing: '-0.01em', cursor: 'pointer',
                  background: activeCat === cat ? '#0F1F3D' : '#fff',
                  color: activeCat === cat ? '#fff' : 'var(--bd-gray-600)',
                  border: activeCat === cat ? '1px solid #0F1F3D' : '1px solid var(--bd-line)'
                }}>{cat}</span>
              ))}
            </div>
          </div>

          <div style={{ marginTop: isMobile ? 24 : 28, borderTop: '1px solid var(--bd-line)' }}>
            {filteredCols.map((c, i) => (
              <Reveal key={c.id} delay={Math.min(i, 4) * 60}>
                {isMobile ? (
                  <a href={`column-detail.html?id=${c.id}`} className="link-ul" style={{ display: 'block', padding: '26px 0', borderBottom: '1px solid var(--bd-line)', textDecoration: 'none', color: 'inherit' }}>
                    <div style={{ position: 'relative' }}>
                      <Slot id={`cp-list${i}`} placeholder="썸네일 (16:9)" radius={10} style={{ aspectRatio: '16 / 9', width: '100%' }} />
                      <span style={{ position: 'absolute', top: 10, left: 10, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', height: 28, padding: '0 11px', borderRadius: 999, background: 'rgba(10,14,26,0.7)', color: '#fff', fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 600 }}>{String(c.id).padStart(2, '0')}</span>
                    </div>
                    <div style={{ marginTop: 16 }}>
                      <h3 style={{ margin: 0, fontSize: 21, fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.34 }}>{c.title}</h3>
                      <p style={{ margin: '8px 0 0', fontSize: 14.5, lineHeight: 1.6, color: 'var(--fg-2)' }}>{c.excerpt}</p>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--bd-gray-400)', marginTop: 12 }}>{c.date} · 읽는데 {c.read}분</div>
                    </div>
                  </a>
                ) : (
                  <a href={`column-detail.html?id=${c.id}`} className="link-ul" style={{ display: 'grid', gridTemplateColumns: '72px 1fr 200px', gap: 28, alignItems: 'center', padding: '30px 0', borderBottom: '1px solid var(--bd-line)', textDecoration: 'none', color: 'inherit' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 32, fontWeight: 500, color: 'var(--bd-gray-200)', lineHeight: 1, letterSpacing: '-0.03em' }}>{String(c.id).padStart(2, '0')}</div>
                    <div>
                      <h3 style={{ margin: 0, fontSize: 26, fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.32 }}>{c.title}</h3>
                      <p style={{ margin: '10px 0 0', fontSize: 15.5, lineHeight: 1.6, color: 'var(--fg-2)', maxWidth: 560 }}>{c.excerpt}</p>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12.5, color: 'var(--bd-gray-400)', marginTop: 14 }}>{c.date} · 읽는데 {c.read}분</div>
                    </div>
                    <Slot id={`cp-list${i}`} placeholder="썸네일" style={{ aspectRatio: '16 / 9', width: 200 }} />
                  </a>
                )}
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {window.SiteFooter ? <window.SiteFooter /> : null}
    </React.Fragment>
  );
}

window.ColumnPage = ColumnPage;
