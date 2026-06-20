/* ============================================================
   col-studio.jsx — Direction 1 "스튜디오"
   메인 랜딩과 완전히 같은 톤: paper 배경, 화이트 카드(1px 헤어라인 +
   16px radius + soft shadow), Kicker 라벨, 블루 액센트, mono 메타.
   ============================================================ */

function ColStudio() {
  const { COLS, Slot, catTint } = window.ColShared;
  const PAD = 60;
  const feat = COLS[0];
  const side = [COLS[1], COLS[2]];
  const grid = [COLS[3], COLS[4], COLS[5]];

  const Kicker = ({ label }) => (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
      <span style={{ width: 22, height: 1, background: 'var(--bd-line-strong)' }}></span>
      <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 500, letterSpacing: '0.26em', textTransform: 'uppercase', color: 'var(--bd-gray-500)', fontSize: 12 }}>{label}</span>
    </span>
  );

  const CatChip = ({ cat, type, small }) => {
    const t = catTint(cat);
    return (
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', height: small ? 24 : 26, padding: '0 10px', borderRadius: 6, background: t.bg, color: t.fg, fontSize: small ? 11.5 : 12.5, fontWeight: 700, letterSpacing: '-0.01em' }}>{cat}</span>
        <span style={{ fontSize: small ? 11.5 : 12.5, fontWeight: 600, color: 'var(--bd-gray-400)' }}>{type}</span>
      </span>
    );
  };

  const Meta = ({ c, more }) => (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, marginTop: 'auto', paddingTop: 16 }}>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12.5, color: 'var(--bd-gray-400)', letterSpacing: '-0.01em' }}>{c.date} · {c.read}분</span>
      {more && <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 13, fontWeight: 600, color: 'var(--bd-blue)' }}>더 읽기
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12,5 19,12 12,19" /></svg></span>}
    </div>
  );

  const card = { background: '#fff', border: '1px solid var(--bd-line)', borderRadius: 'var(--r-md)', boxShadow: 'var(--shadow-soft, 0 1px 2px rgba(10,14,26,0.05), 0 8px 28px rgba(10,19,48,0.07))', display: 'flex', flexDirection: 'column', overflow: 'hidden' };

  return (
    <div style={{ width: '100%', height: '100%', background: 'var(--bd-paper)', color: 'var(--bd-ink)', fontFamily: 'var(--font-sans)' }}>
      {/* sticky-look nav strip */}
      <div style={{ height: 64, borderBottom: '1px solid var(--bd-line)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: `0 ${PAD}px`, background: 'rgba(250,250,250,0.95)' }}>
        <window.BdLogo size={24} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 26, fontSize: 13.5, fontWeight: 500, color: 'var(--bd-gray-600)' }}>
          <span>성과 사례</span><span>3단계 공식</span><span>프로세스</span>
          <span style={{ color: 'var(--bd-ink)', fontWeight: 700 }}>칼럼</span>
          <span style={{ background: '#0F1F3D', color: '#fff', borderRadius: 6, padding: '8px 16px', fontSize: 13, fontWeight: 600 }}>빠른 상담</span>
        </div>
      </div>

      {/* header */}
      <div style={{ padding: `${PAD}px ${PAD}px 0` }}>
        <Kicker label="Column" />
        <h1 style={{ margin: '20px 0 0', fontSize: 46, fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.15 }}>전문직 마케팅 인사이트</h1>
        <p style={{ margin: '18px 0 0', fontSize: 18, lineHeight: 1.6, fontWeight: 500, color: 'var(--fg-2)', maxWidth: 560 }}>
          조회수를 넘어 ‘문의’로 이어지는 숏폼 전략을, 실제 현장의 데이터와 함께 기록합니다.
        </p>

        {/* filter chips */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 36 }}>
          {window.ColShared.CATS.map((cat, i) => (
            <span key={cat} style={{
              display: 'inline-flex', alignItems: 'center', height: 38, padding: '0 18px', borderRadius: 999,
              fontSize: 13.5, fontWeight: 600, letterSpacing: '-0.01em',
              background: i === 0 ? '#0F1F3D' : '#fff', color: i === 0 ? '#fff' : 'var(--bd-gray-600)',
              border: i === 0 ? '1px solid #0F1F3D' : '1px solid var(--bd-line)'
            }}>{cat}</span>
          ))}
        </div>
      </div>

      {/* featured + side */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.55fr 1fr', gap: 24, padding: `40px ${PAD}px 0`, alignItems: 'stretch' }}>
        {/* featured */}
        <article style={{ ...card }}>
          <Slot id="s-feat" placeholder="대표 칼럼 썸네일 (16:9)" style={{ aspectRatio: '16 / 9' }} />
          <div style={{ padding: 28, display: 'flex', flexDirection: 'column', flex: 1 }}>
            <CatChip cat={feat.cat} type={feat.type} />
            <h2 style={{ margin: '16px 0 0', fontSize: 27, fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.32 }}>{feat.title}</h2>
            <p style={{ margin: '12px 0 0', fontSize: 15.5, lineHeight: 1.65, color: 'var(--fg-2)' }}>{feat.excerpt}</p>
            <Meta c={feat} more />
          </div>
        </article>

        {/* side stack */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {side.map((c, i) => (
            <article key={c.id} style={{ ...card, flexDirection: 'row', flex: 1 }}>
              <Slot id={`s-side${i}`} placeholder="썸네일" style={{ width: 132, flex: 'none' }} />
              <div style={{ padding: 20, display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
                <CatChip cat={c.cat} type={c.type} small />
                <h3 style={{ margin: '12px 0 0', fontSize: 17, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.38 }}>{c.title}</h3>
                <Meta c={c} />
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* divider label */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: `48px ${PAD}px 0` }}>
        <span style={{ fontSize: 15, fontWeight: 700, letterSpacing: '-0.01em', color: 'var(--bd-ink)' }}>최신 칼럼</span>
        <span style={{ flex: 1, height: 1, background: 'var(--bd-line)' }}></span>
      </div>

      {/* grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, padding: `24px ${PAD}px ${PAD}px` }}>
        {grid.map((c, i) => (
          <article key={c.id} style={{ ...card }}>
            <Slot id={`s-grid${i}`} placeholder="썸네일 (16:9)" style={{ aspectRatio: '16 / 9' }} />
            <div style={{ padding: 22, display: 'flex', flexDirection: 'column', flex: 1 }}>
              <CatChip cat={c.cat} type={c.type} small />
              <h3 style={{ margin: '14px 0 0', fontSize: 17.5, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.4 }}>{c.title}</h3>
              <p style={{ margin: '10px 0 0', fontSize: 14, lineHeight: 1.6, color: 'var(--fg-2)' }}>{c.excerpt}</p>
              <Meta c={c} />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

window.ColStudio = ColStudio;
