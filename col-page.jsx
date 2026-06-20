/* ============================================================
   col-page.jsx — 실제 칼럼 목록 페이지 (④ 조합안)
   메인 페이지와 동일한 Container(maxWidth 1020 · 패딩 32/20)와
   useIsMobile(<860) 반응형 규칙을 그대로 사용한다.
   shared.jsx(Container, useIsMobile, BdLogo, Kicker, Reveal, Icon)
   + cols-shared.jsx(COLS, CATS, Slot) + sections-c.jsx(SiteFooter) 의존.
   ============================================================ */

const STARTER_PAGE = [
{ no: '01', tag: '시작 가이드', title: '왜 전문직에게 ‘숏폼’인가', desc: '블로그·광고보다 숏폼이 전문직 마케팅에 효과적인 이유부터.' },
{ no: '02', tag: '시작 가이드', title: '블루닷은 이렇게 일합니다', desc: '기획 · 방문 촬영 · 편집 · 업로드, 4단계 프로세스 한눈에.' },
{ no: '03', tag: '대표 사례', title: '2개월 만에 95만 조회수, 실제 사례', desc: '한의원 릴스가 만든 성과를 처음부터 끝까지 분석했습니다.' }];


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
          <span style={{ marginRight: isMobile ? 16 : 22, fontWeight: 600, color: 'var(--bd-ink)', padding: '0 6px', fontSize: "15px" }}>칼럼</span>
          <a href="../index.html#cta" style={{
            marginLeft: isMobile ? 8 : 18, background: '#0F1F3D', color: '#fff', border: 'none', borderRadius: 6,
            padding: isMobile ? '8px 14px' : '9px 18px', fontSize: isMobile ? 13 : 13.5, fontWeight: 600,
            textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 7, lineHeight: 1, transition: 'background 0.14s'
          }}
          onMouseEnter={(e) => {e.currentTarget.style.background = '#1a3360';}}
          onMouseLeave={(e) => {e.currentTarget.style.background = '#0F1F3D';}}>
            빠른 상담
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12,5 19,12 12,19" /></svg>
          </a>
        </div>
      </div>
    </header>);

}

function ColumnPage() {
  const { Container, Reveal, Kicker, Slot } = window;
  const { COLS, CATS } = window.ColShared;
  const isMobile = window.useIsMobile();

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

          {isMobile &&
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 6, marginBottom: 12, fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--bd-gray-400)', letterSpacing: '0.04em' }}>
              옆으로 넘겨보세요
              <window.Icon name="chevrons-right" size={14} color="var(--bd-gray-400)" />
            </div>
          }
          <div className={isMobile ? 'no-bar' : ''} style={isMobile ?
          { display: 'flex', gap: 14, overflowX: 'auto', scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch', margin: '0 -20px', padding: '0 20px 4px' } :
          { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {STARTER_PAGE.map((s, i) =>
            <Reveal key={s.no} delay={i * 90} style={isMobile ? { flex: 'none', width: '80%', scrollSnapAlign: 'start' } : undefined}>
                <a href="column-detail.html" className="link-ul" style={{ background: '#fff', border: '1px solid #DDE3FF', borderRadius: 'var(--r-md)', overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%', boxShadow: '0 1px 2px rgba(10,14,26,0.04), 0 10px 30px rgba(21,71,255,0.06)', textDecoration: 'none', color: 'inherit' }}>
                  <div style={{ position: 'relative' }}>
                    <Slot id={`cp-hs-${i}`} placeholder="카드 이미지 (16:9)" style={{ aspectRatio: '16 / 9', width: '100%' }} />
                    <span style={{ position: 'absolute', top: 12, left: 12, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 34, height: 34, borderRadius: 999, background: 'var(--bd-blue)', color: '#fff', fontFamily: 'var(--font-mono)', fontSize: 14, fontWeight: 600 }}>{s.no}</span>
                  </div>
                  <div style={{ padding: 22, display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--bd-blue)', fontWeight: 600 }}>{s.tag}</span>
                    <h3 style={{ margin: '12px 0 0', fontSize: 18.5, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.38 }}>{s.title}</h3>
                    <p style={{ margin: '10px 0 0', fontSize: 14, lineHeight: 1.6, color: 'var(--fg-2)' }}>{s.desc}</p>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, marginTop: 16, fontSize: 13, fontWeight: 600, color: 'var(--bd-blue)' }}>읽어보기
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12,5 19,12 12,19" /></svg>
                    </span>
                  </div>
                </a>
              </Reveal>
            )}
          </div>
        </Container>
      </section>

      {/* ── 전체 칼럼 리스트 (카테고리 필터 + 인덱스 리스트) ── */}
      <section style={{ background: 'var(--bd-paper)', padding: `${isMobile ? 52 : 72}px 0 ${isMobile ? 88 : 112}px` }}>
        <Container>
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'flex-start' : 'center', justifyContent: 'space-between', gap: isMobile ? 16 : 16 }}>
            <h2 style={{ margin: 0, fontSize: isMobile ? 20 : 22, fontWeight: 700, letterSpacing: '-0.02em' }}>전체 칼럼</h2>
            <div className="no-bar" style={{ display: 'flex', flexWrap: isMobile ? 'nowrap' : 'wrap', gap: 8, overflowX: isMobile ? 'auto' : 'visible', maxWidth: '100%', paddingBottom: isMobile ? 2 : 0 }}>
              {CATS.map((cat, i) =>
              <span key={cat} style={{
                display: 'inline-flex', alignItems: 'center', height: 36, padding: '0 16px', borderRadius: 999, flex: 'none',
                fontSize: 13, fontWeight: 600, letterSpacing: '-0.01em',
                background: i === 0 ? '#0F1F3D' : '#fff', color: i === 0 ? '#fff' : 'var(--bd-gray-600)',
                border: i === 0 ? '1px solid #0F1F3D' : '1px solid var(--bd-line)', cursor: 'pointer'
              }}>{cat}</span>
              )}
            </div>
          </div>

          <div style={{ marginTop: isMobile ? 24 : 28, borderTop: '1px solid var(--bd-line)' }}>
            {COLS.map((c, i) =>
            <Reveal key={c.id} delay={Math.min(i, 4) * 60}>
                {isMobile ?
              <a href="column-detail.html" className="link-ul" style={{ display: 'block', padding: '26px 0', borderBottom: '1px solid var(--bd-line)', textDecoration: 'none', color: 'inherit' }}>
                    <div style={{ position: 'relative' }}>
                      <Slot id={`cp-list${i}`} placeholder="썸네일 (16:9)" radius={10} style={{ aspectRatio: '16 / 9', width: '100%' }} />
                      <span style={{ position: 'absolute', top: 10, left: 10, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', height: 28, padding: '0 11px', borderRadius: 999, background: 'rgba(10,14,26,0.7)', color: '#fff', fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 600 }}>{String(COLS.length - i).padStart(2, '0')}</span>
                    </div>
                    <div style={{ marginTop: 16 }}>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--bd-gray-500)', fontWeight: 600 }}>{c.cat} · {c.type}</div>
                      <h3 style={{ margin: '10px 0 0', fontSize: 21, fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.34 }}>{c.title}</h3>
                      <p style={{ margin: '8px 0 0', fontSize: 14.5, lineHeight: 1.6, color: 'var(--fg-2)' }}>{c.excerpt}</p>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--bd-gray-400)', marginTop: 12 }}>{c.date} · {c.read}분</div>
                    </div>
                  </a> :

              <a href="column-detail.html" className="link-ul" style={{ display: 'grid', gridTemplateColumns: '72px 1fr 200px', gap: 28, alignItems: 'center', padding: '30px 0', borderBottom: '1px solid var(--bd-line)', textDecoration: 'none', color: 'inherit' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 32, fontWeight: 500, color: 'var(--bd-gray-200)', lineHeight: 1, letterSpacing: '-0.03em' }}>{String(COLS.length - i).padStart(2, '0')}</div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--bd-gray-500)', fontWeight: 600 }}>{c.cat} · {c.type}</div>
                      <h3 style={{ margin: '12px 0 0', fontSize: 26, fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.32 }}>{c.title}</h3>
                      <p style={{ margin: '10px 0 0', fontSize: 15.5, lineHeight: 1.6, color: 'var(--fg-2)', maxWidth: 560 }}>{c.excerpt}</p>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12.5, color: 'var(--bd-gray-400)', marginTop: 14 }}>{c.date} · {c.read}분</div>
                    </div>
                    <Slot id={`cp-list${i}`} placeholder="썸네일" style={{ aspectRatio: '16 / 9', width: 200 }} />
                  </a>
              }
              </Reveal>
            )}
          </div>
        </Container>
      </section>

      {window.SiteFooter ? <window.SiteFooter /> : null}
    </React.Fragment>);

}

window.ColumnPage = ColumnPage;