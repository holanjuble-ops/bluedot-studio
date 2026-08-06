/* ============================================================
   sections-d.jsx — ColumnTeaser
   메인 페이지 FAQ 다음 · 무료상담 폼 직전에 들어가는 칼럼 티저.
   상세 페이지의 "다른 칼럼" 리스트처럼 이미지 없이 간소화한 텍스트 행.
   ============================================================ */

function ColumnTeaser() {
  const isMobile = window.useIsMobile();
  const { Container, Reveal, Kicker } = window;

  const items = [
    { tag: '시작 가이드', title: '나도 숏폼이 필요할까?', href: 'column/column-detail.html?id=1' },
    { tag: '대표 사례', title: '릴스 2개로 100만 조회수, 그 안에 숨은 공식', href: 'column/column-detail.html?id=2' },
    { tag: '시작 가이드', title: '‘문의로 이어지는 숏폼’은 이게 다릅니다', href: 'column/column-detail.html?id=3' }
  ];

  return (
    <section id="column" style={{ position: 'relative', overflow: 'hidden', background: '#FFFFFF', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: `${isMobile ? 88 : 128}px 0` }}>
      <Container style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 720, marginBottom: isMobile ? 28 : 40 }}>
          <Reveal><Kicker label="Column" /></Reveal>
          <Reveal delay={80}>
            <h2 style={{ marginTop: 16, fontWeight: 700, letterSpacing: '-0.035em', lineHeight: 1.22, color: 'var(--text-1)', fontSize: isMobile ? '28px' : '36px' }}>
              아직 저희에게 <span style={{ background: 'linear-gradient(transparent 84%, var(--bd-highlight) 84%)', padding: '0 0.04em' }}>확신</span>이 없으신가요?
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p style={{ marginTop: 16, lineHeight: 1.7, color: 'var(--text-2)', fontWeight: 500, fontSize: isMobile ? '15.5px' : '17px' }}>
              그렇다면 먼저 이 글들을 읽어보세요.
            </p>
          </Reveal>
        </div>

        <Reveal delay={160}>
          <div style={{ borderTop: '1px solid var(--border)' }}>
            {items.map((c, i) => (
              <a key={i} href={c.href} className="link-ul" style={{ display: 'flex', alignItems: isMobile ? 'flex-start' : 'center', gap: isMobile ? 14 : 24, padding: `${isMobile ? 18 : 22}px 4px`, borderBottom: '1px solid var(--border)', textDecoration: 'none' }}>
                <div style={{ flex: 'none', fontFamily: 'var(--font-mono)', fontWeight: 400, color: 'var(--blue-500)', opacity: 0.38, letterSpacing: '-0.02em', lineHeight: isMobile ? 1.4 : 1, marginTop: 0, fontSize: isMobile ? 15 : 18, width: isMobile ? 24 : 34, fontVariantNumeric: 'tabular-nums' }}>{String(i + 1).padStart(2, '0')}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3 style={{ margin: 0, fontSize: isMobile ? 16.5 : 18, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.4, color: 'var(--text-1)' }}>{c.title}</h3>
                </div>
                <window.Icon name="arrow-right" size={18} color="var(--text-3)" />
              </a>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

Object.assign(window, { ColumnTeaser });
