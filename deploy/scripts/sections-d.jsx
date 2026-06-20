/* ============================================================
   sections-d.jsx — ColumnTeaser
   메인 페이지 FAQ 다음 · 무료상담 폼 직전에 들어가는 칼럼 티저.
   상세 페이지의 "다른 칼럼" 리스트처럼 이미지 없이 간소화한 텍스트 행.
   ============================================================ */

function ColumnTeaser() {
  const isMobile = window.useIsMobile();
  const { Container, Reveal, Kicker } = window;

  const items = [
    { tag: '시작 가이드', title: '나도 숏폼이 필요할까?', href: 'column/칼럼 상세.html?id=1' },
    { tag: '대표 사례', title: '릴스 2개로 95만 조회수, 그 안에 숨은 공식', href: 'column/칼럼 상세.html?id=2' },
    { tag: '시작 가이드', title: '‘문의로 이어지는 숏폼’은 이게 다릅니다', href: 'column/칼럼 상세.html?id=3' }
  ];

  return (
    <section id="column" style={{ background: '#fff', borderTop: '1px solid var(--bd-line)', borderBottom: '1px solid var(--bd-line)', padding: `${isMobile ? 104 : 168}px 0` }}>
      <Container>
        <div style={{ maxWidth: 720, marginBottom: isMobile ? 36 : 48 }}>
          <Reveal><Kicker label="Column" /></Reveal>
          <Reveal delay={80}>
            <h2 style={{ marginTop: 16, fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.18, color: 'var(--bd-ink)', fontSize: isMobile ? '32px' : 'clamp(40px, 3.4vw, 52px)' }}>
              아직 저희에게 <span style={{ background: 'linear-gradient(transparent 84%, var(--bd-highlight) 84%)', padding: '0 0.04em' }}>확신</span>이 없으신가요?
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p style={{ marginTop: 18, lineHeight: 1.6, color: 'var(--fg-2)', fontWeight: 500, fontSize: isMobile ? '16px' : 'clamp(17px, 1.4vw, 19px)' }}>
              그렇다면 먼저 이 글들을 읽어보세요.
            </p>
          </Reveal>
        </div>

        <Reveal delay={160}>
          <div style={{ borderTop: '1px solid var(--bd-line)' }}>
            {items.map((c, i) => (
              <a key={i} href={c.href} className="link-ul" style={{ display: 'flex', alignItems: isMobile ? 'flex-start' : 'center', gap: isMobile ? 14 : 24, padding: `${isMobile ? 20 : 26}px 4px`, borderBottom: '1px solid var(--bd-line)', textDecoration: 'none' }}>
                <div style={{ flex: 'none', fontFamily: 'var(--font-mono)', fontWeight: 400, color: 'var(--bd-blue)', opacity: 0.38, letterSpacing: '-0.02em', lineHeight: isMobile ? 1.4 : 1, marginTop: 0, fontSize: isMobile ? 17 : 22, width: isMobile ? 26 : 38, fontVariantNumeric: 'tabular-nums' }}>{String(i + 1).padStart(2, '0')}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3 style={{ margin: 0, fontSize: isMobile ? 17 : 21, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.4, color: 'var(--bd-ink)' }}>{c.title}</h3>
                </div>
                <window.Icon name="arrow-right" size={18} color="var(--bd-gray-400)" />
              </a>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

Object.assign(window, { ColumnTeaser });
