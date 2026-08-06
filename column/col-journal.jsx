/* ============================================================
   col-journal.jsx — Direction 3 "다크 갤러리 / 저널"
   네이비 딥 배경 · 갤러리형 피처(이미지 위 타이틀 오버레이) ·
   고스트 칩 필터 · 번호가 매겨진 타이포 인덱스(화이트 10% 헤어라인).
   메인의 다크 섹션 톤을 칼럼 전체로 확장한 고급 에디토리얼.
   ============================================================ */

function ColJournal() {
  const { COLS, CATS, Slot } = window.ColShared;
  const PAD = 60;
  const feat = COLS[0];
  const list = COLS.slice(1);
  const depth = 'radial-gradient(130% 120% at 50% 0%, #0B1B42 0%, #060C20 55%, #03060F 100%)';

  return (
    <div style={{ width: '100%', height: '100%', background: depth, color: '#fff', fontFamily: 'var(--font-sans)' }}>
      {/* header */}
      <div style={{ padding: `${PAD}px ${PAD}px 0` }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
          <span style={{ width: 24, height: 1, background: 'rgba(255,255,255,0.26)' }}></span>
          <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 500, letterSpacing: '0.26em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.52)', fontSize: 12 }}>Column</span>
        </span>
        <h1 style={{ margin: '22px 0 0', fontSize: 50, fontWeight: 800, letterSpacing: '-0.045em', lineHeight: 1.12 }}>
          인사이트 저널<span style={{ color: 'var(--bd-blue-300)' }}>.</span>
        </h1>
        <p style={{ margin: '18px 0 0', fontSize: 18, lineHeight: 1.65, color: 'rgba(255,255,255,0.6)', fontWeight: 500, maxWidth: 560 }}>
          전문직 숏폼 마케팅의 데이터와 전략을 기록합니다. 화려한 수식어 대신, 검증된 과정을.
        </p>

        {/* ghost chips */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 34 }}>
          {CATS.map((cat, i) => (
            <span key={cat} style={{
              display: 'inline-flex', alignItems: 'center', height: 38, padding: '0 18px', borderRadius: 999,
              fontSize: 13.5, fontWeight: 600, letterSpacing: '-0.01em',
              background: i === 0 ? '#fff' : 'rgba(255,255,255,0.04)', color: i === 0 ? 'var(--bd-ink)' : 'rgba(255,255,255,0.66)',
              border: i === 0 ? '1px solid #fff' : '1px solid rgba(255,255,255,0.16)'
            }}>{cat}</span>
          ))}
        </div>
      </div>

      {/* featured — gallery card with overlaid title */}
      <div style={{ padding: `40px ${PAD}px 0` }}>
        <div style={{ position: 'relative', borderRadius: 'var(--r-lg)', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.10)', boxShadow: '0 24px 64px rgba(3,7,18,0.5)' }}>
          <Slot id="j-feat" placeholder="대표 칼럼 이미지 (16:9)" style={{ aspectRatio: '16 / 9', width: '100%', background: '#0A1330' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(3,6,15,0.92) 0%, rgba(3,6,15,0.45) 45%, rgba(3,6,15,0) 75%)', pointerEvents: 'none' }}></div>
          <div style={{ position: 'absolute', top: 24, left: 24 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', height: 28, padding: '0 12px', borderRadius: 999, background: 'var(--bd-blue)', color: '#fff', fontSize: 12, fontWeight: 700, letterSpacing: '0.02em' }}>FEATURED · {feat.cat}</span>
          </div>
          <div style={{ position: 'absolute', left: 36, right: 36, bottom: 34 }}>
            <h2 style={{ margin: 0, fontSize: 38, fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.22, maxWidth: 760, color: '#fff' }}>{feat.title}</h2>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'rgba(255,255,255,0.6)', marginTop: 16 }}>{feat.date} · {feat.read}분</div>
          </div>
        </div>
      </div>

      {/* numbered index */}
      <div style={{ padding: `52px ${PAD}px ${PAD}px` }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', fontWeight: 500, marginBottom: 10 }}>Latest</div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          {list.map((c, i) => (
            <div key={c.id} style={{ display: 'grid', gridTemplateColumns: '64px 1fr 168px', gap: 26, alignItems: 'center', padding: '26px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 22, fontWeight: 500, color: 'var(--bd-blue-300)', letterSpacing: '0.02em' }}>{String(i + 2).padStart(2, '0')}</div>
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.42)', fontWeight: 600 }}>{c.cat} · {c.type}</div>
                <h3 style={{ margin: '11px 0 0', fontSize: 24, fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.32, color: '#fff' }}>{c.title}</h3>
                <p style={{ margin: '9px 0 0', fontSize: 14.5, lineHeight: 1.6, color: 'rgba(255,255,255,0.5)', maxWidth: 540 }}>{c.excerpt}</p>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12.5, color: 'rgba(255,255,255,0.38)', marginTop: 13 }}>{c.date} · {c.read}분</div>
              </div>
              <Slot id={`j-list${i}`} placeholder="썸네일" radius={10} style={{ aspectRatio: '4 / 3', width: 168, border: '1px solid rgba(255,255,255,0.1)', background: '#0A1330' }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

window.ColJournal = ColJournal;
