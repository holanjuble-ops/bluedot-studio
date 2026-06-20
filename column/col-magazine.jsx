/* ============================================================
   col-magazine.jsx — Direction 2 "매거진 / 에디토리얼"
   화이트 배경 · 큰 에디토리얼 타이포 · 넉넉한 여백 · 테두리 없는
   인덱스 리스트(헤어라인 구분선) · 큰 피처 이미지 · mono 메타.
   ============================================================ */

function ColMagazine() {
  const { COLS, CATS, Slot } = window.ColShared;
  const PAD = 64;
  const feat = COLS[0];
  const list = COLS.slice(1);

  return (
    <div style={{ width: '100%', height: '100%', background: '#fff', color: 'var(--bd-ink)', fontFamily: 'var(--font-sans)' }}>
      {/* masthead */}
      <div style={{ padding: `${PAD}px ${PAD}px 0` }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24 }}>
          <h1 style={{ margin: 0, fontSize: 80, fontWeight: 800, letterSpacing: '-0.05em', lineHeight: 0.92 }}>
            칼럼<span style={{ color: 'var(--bd-blue)' }}>.</span>
          </h1>
          <div style={{ textAlign: 'right', paddingBottom: 8 }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--bd-gray-500)', fontWeight: 500 }}>BlueDot Journal</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.1em', color: 'var(--bd-gray-400)', marginTop: 6 }}>VOL.01 · 2026</div>
          </div>
        </div>
        <p style={{ margin: '22px 0 0', fontSize: 19, lineHeight: 1.6, color: 'var(--fg-2)', fontWeight: 500, maxWidth: 600 }}>
          전문직 숏폼 마케팅의 현장 기록. 조회수가 ‘문의’가 되는 과정을 깊이 들여다봅니다.
        </p>

        {/* category nav — underlined text links */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 26, marginTop: 34, paddingBottom: 22, borderBottom: '2px solid var(--bd-ink)' }}>
          {CATS.map((cat, i) => (
            <span key={cat} style={{ fontSize: 15, fontWeight: i === 0 ? 700 : 500, letterSpacing: '-0.01em', color: i === 0 ? 'var(--bd-ink)' : 'var(--bd-gray-500)', borderBottom: i === 0 ? '2px solid var(--bd-blue)' : '2px solid transparent', paddingBottom: 3 }}>{cat}</span>
          ))}
        </div>
      </div>

      {/* featured story */}
      <div style={{ padding: `44px ${PAD}px 0` }}>
        <Slot id="m-feat" placeholder="대표 칼럼 이미지 (16:9)" style={{ aspectRatio: '16 / 9', width: '100%' }} />
        <div style={{ display: 'grid', gridTemplateColumns: '88px 1fr', gap: 28, marginTop: 28 }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 52, fontWeight: 500, color: 'var(--bd-gray-200)', lineHeight: 1, letterSpacing: '-0.04em' }}>01</div>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--bd-blue)', fontWeight: 600 }}>FEATURED · {feat.cat}</div>
            <h2 style={{ margin: '16px 0 0', fontSize: 44, fontWeight: 800, letterSpacing: '-0.045em', lineHeight: 1.18, maxWidth: 880 }}>{feat.title}</h2>
            <p style={{ margin: '18px 0 0', fontSize: 18, lineHeight: 1.7, color: 'var(--fg-2)', maxWidth: 720 }}>{feat.excerpt}</p>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--bd-gray-400)', marginTop: 20 }}>{feat.date} · 읽는 데 {feat.read}분</div>
          </div>
        </div>
      </div>

      {/* index list */}
      <div style={{ padding: `52px ${PAD}px ${PAD}px`, marginTop: 8 }}>
        <div style={{ borderTop: '1px solid var(--bd-line)' }}>
          {list.map((c, i) => (
            <div key={c.id} style={{ display: 'grid', gridTemplateColumns: '88px 1fr 200px', gap: 28, alignItems: 'center', padding: '30px 0', borderBottom: '1px solid var(--bd-line)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 34, fontWeight: 500, color: 'var(--bd-gray-200)', lineHeight: 1, letterSpacing: '-0.03em' }}>{String(i + 2).padStart(2, '0')}</div>
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--bd-gray-500)', fontWeight: 600 }}>{c.cat} · {c.type}</div>
                <h3 style={{ margin: '12px 0 0', fontSize: 27, fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.32 }}>{c.title}</h3>
                <p style={{ margin: '10px 0 0', fontSize: 15.5, lineHeight: 1.6, color: 'var(--fg-2)', maxWidth: 560 }}>{c.excerpt}</p>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12.5, color: 'var(--bd-gray-400)', marginTop: 14 }}>{c.date} · {c.read}분</div>
              </div>
              <Slot id={`m-list${i}`} placeholder="썸네일" style={{ aspectRatio: '4 / 3', width: 200 }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

window.ColMagazine = ColMagazine;
