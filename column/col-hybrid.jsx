/* ============================================================
   col-hybrid.jsx — Direction 4 "조합 (추천)"
   ① 헤더(내비 · Kicker · 큰 제목) →
   "처음 오신 분들께" 1×3 카드뉴스 (배경 톤으로 섹션 구분) →
   글 리스트(② 인덱스 리스트 + 카테고리 필터).
   ============================================================ */

/* 처음 오신 분들께 — 신규 방문자용 추천 3편 (카드뉴스) */
const STARTER = [
  { no: '01', tag: '시작 가이드', title: '왜 전문직에게 ‘숏폼’인가', desc: '블로그·광고보다 숏폼이 전문직 마케팅에 효과적인 이유부터.' },
  { no: '02', tag: '시작 가이드', title: '블루닷은 이렇게 일합니다', desc: '기획 · 방문 촬영 · 편집 · 업로드, 4단계 프로세스 한눈에.' },
  { no: '03', tag: '대표 사례', title: '2개월 만에 95만 조회수, 실제 사례', desc: '한의원 릴스가 만든 성과를 처음부터 끝까지 분석했습니다.' }
];

function ColHybrid() {
  const { COLS, CATS, Slot } = window.ColShared;
  const PAD = 60;

  const Kicker = ({ label, light }) => (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
      <span style={{ width: 22, height: 1, background: light ? 'rgba(21,71,255,0.35)' : 'var(--bd-line-strong)' }}></span>
      <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 500, letterSpacing: '0.26em', textTransform: 'uppercase', color: light ? 'var(--bd-blue)' : 'var(--bd-gray-500)', fontSize: 12 }}>{label}</span>
    </span>
  );

  return (
    <div style={{ width: '100%', height: '100%', background: 'var(--bd-paper)', color: 'var(--bd-ink)', fontFamily: 'var(--font-sans)' }}>
      {/* ── nav strip ── */}
      <div style={{ height: 64, borderBottom: '1px solid var(--bd-line)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: `0 ${PAD}px`, background: 'rgba(250,250,250,0.95)' }}>
        <window.BdLogo size={24} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 26, fontSize: 13.5, fontWeight: 500, color: 'var(--bd-gray-600)' }}>
          <span>성과 사례</span><span>3단계 공식</span><span>프로세스</span>
          <span style={{ color: 'var(--bd-ink)', fontWeight: 700 }}>칼럼</span>
          <span style={{ background: '#0F1F3D', color: '#fff', borderRadius: 6, padding: '8px 16px', fontSize: 13, fontWeight: 600 }}>빠른 상담</span>
        </div>
      </div>

      {/* ── 제목 + 항목 섹션 (필터 없음) ── */}
      <div style={{ padding: `${PAD}px ${PAD}px 56px` }}>
        <Kicker label="Column" />
        <h1 style={{ margin: '20px 0 0', fontSize: 46, fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.15 }}>전문직 마케팅 인사이트</h1>
        <p style={{ margin: '18px 0 0', fontSize: 18, lineHeight: 1.6, fontWeight: 500, color: 'var(--fg-2)', maxWidth: 560 }}>
          조회수를 넘어 ‘문의’로 이어지는 숏폼 전략을, 실제 현장의 데이터와 함께 기록합니다.
        </p>
      </div>

      {/* ── 처음 오신 분들께 (배경 톤 구분 밴드 · 1×3 카드뉴스) ── */}
      <div style={{ background: 'var(--bd-blue-50)', borderTop: '1px solid #DDE3FF', borderBottom: '1px solid #DDE3FF', padding: `52px ${PAD}px 56px` }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 16, marginBottom: 28 }}>
          <div>
            <Kicker label="Start here" light />
            <h2 style={{ margin: '14px 0 0', fontSize: 28, fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.2 }}>처음 오신 분들께</h2>
          </div>
          <p style={{ margin: 0, fontSize: 14.5, color: 'var(--bd-gray-600)', fontWeight: 500, lineHeight: 1.5, textAlign: 'right', maxWidth: 300 }}>
            이 3편만 읽어도 블루닷의 방식이 그려집니다.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {STARTER.map((s, i) => (
            <article key={s.no} style={{ background: '#fff', border: '1px solid #DDE3FF', borderRadius: 'var(--r-md)', overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: '0 1px 2px rgba(10,14,26,0.04), 0 10px 30px rgba(21,71,255,0.06)' }}>
              <div style={{ position: 'relative' }}>
                <Slot id={`hs-${i}`} placeholder="카드 이미지 (16:9)" style={{ aspectRatio: '16 / 9', width: '100%' }} />
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
            </article>
          ))}
        </div>
      </div>

      {/* ── 글 리스트 섹션 (카테고리 필터 + ② 인덱스 리스트) ── */}
      <div style={{ padding: `56px ${PAD}px ${PAD}px` }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
          <h2 style={{ margin: 0, fontSize: 22, fontWeight: 700, letterSpacing: '-0.02em' }}>전체 칼럼</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {CATS.map((cat, i) => (
              <span key={cat} style={{
                display: 'inline-flex', alignItems: 'center', height: 36, padding: '0 16px', borderRadius: 999,
                fontSize: 13, fontWeight: 600, letterSpacing: '-0.01em',
                background: i === 0 ? '#0F1F3D' : '#fff', color: i === 0 ? '#fff' : 'var(--bd-gray-600)',
                border: i === 0 ? '1px solid #0F1F3D' : '1px solid var(--bd-line)'
              }}>{cat}</span>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 28, borderTop: '1px solid var(--bd-line)' }}>
          {COLS.map((c, i) => (
            <div key={c.id} style={{ display: 'grid', gridTemplateColumns: '72px 1fr 200px', gap: 28, alignItems: 'center', padding: '30px 0', borderBottom: '1px solid var(--bd-line)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 32, fontWeight: 500, color: 'var(--bd-gray-200)', lineHeight: 1, letterSpacing: '-0.03em' }}>{String(i + 1).padStart(2, '0')}</div>
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--bd-gray-500)', fontWeight: 600 }}>{c.cat} · {c.type}</div>
                <h3 style={{ margin: '12px 0 0', fontSize: 26, fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.32 }}>{c.title}</h3>
                <p style={{ margin: '10px 0 0', fontSize: 15.5, lineHeight: 1.6, color: 'var(--fg-2)', maxWidth: 560 }}>{c.excerpt}</p>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12.5, color: 'var(--bd-gray-400)', marginTop: 14 }}>{c.date} · {c.read}분</div>
              </div>
              <Slot id={`h-list${i}`} placeholder="썸네일" style={{ aspectRatio: '4 / 3', width: 200 }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

window.ColHybrid = ColHybrid;
