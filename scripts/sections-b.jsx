/* ============================================================
   sections-b.jsx — Why (bridge), Results, Formula
   ============================================================ */

/* ---------------- Bridge: 왜 블루닷인가 ---------------- */
const BD_PLATFORMS = [
{ icon: 'instagram', label: 'Instagram', sub: '릴스', color: '#F0679A', tint: 'rgba(225,48,108,0.16)' },
{ icon: 'youtube', label: 'YouTube', sub: '쇼츠', color: '#FF4B4B', tint: 'rgba(255,0,0,0.15)' },
{ icon: 'tiktok', label: 'TikTok', sub: '숏폼', color: '#25F4EE', tint: 'rgba(37,244,238,0.14)' },
{ icon: 'facebook', label: '메타 광고', sub: 'CPA', color: '#4E8CFF', tint: 'rgba(24,119,242,0.18)' },
{ icon: 'db', label: 'DB 마케팅', sub: '문의', color: '#7C97FF', tint: 'rgba(21,71,255,0.18)' }];

const BD_STEPS = [
{ tag: '1개월차', title: '노출 확보', desc: '숏폼을 통해 대표님을\n더 많은 사람들에게 알립니다.', gain: '많은 고객사들이 첫 달부터 50~100만 조회수를 달성했습니다.' },
{ tag: '2~3개월차', title: '잠재고객 확보', desc: '관심 있는 잠재고객을 모읍니다.\n어뷰징은 절대 쓰지 않습니다.', gain: '평균 5,000명의 팔로워를 확보합니다.' },
{ tag: '4~6개월차', title: '문의 만들기', desc: '콘텐츠와 광고로\n실제 문의를 늘립니다.', gain: '문의량이 평균 2.4배 증가했습니다.' },
{ tag: '6개월차~', title: '콘텐츠 자산화', desc: '콘텐츠가 계속 문의를 만드는\n구조를 만듭니다.', gain: '문의가 계속 이어지는 구조가 완성됩니다.' }];

function Proof({ gain }) {
  return (
    <p style={{ margin: 0, marginTop: 12, fontSize: 14, fontWeight: 700, lineHeight: 1.55, wordBreak: 'keep-all', color: 'var(--bd-blue-300)' }}>→ {gain}</p>);

}

let _bridgeCssInjected = false;
function injectBridgeCss() {
  if (_bridgeCssInjected) return;
  const s = document.createElement('style');
  s.textContent = `
    @keyframes bdDrift { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
    .bd-pf { display:inline-flex; align-items:center; gap:10px; padding:12px 20px 12px 15px; border-radius:999px;
      border:1px solid rgba(255,255,255,0.08); background:#101627; white-space:nowrap;
      animation: bdDrift 5.4s ease-in-out infinite;
      transition: border-color .2s var(--ease-out), background .2s var(--ease-out); }
    .bd-pf:hover { border-color: rgba(255,255,255,0.22); background:#131B33; }
    .bd-ul { background:linear-gradient(transparent 86%, #FFE45C 86%); padding:0 0.02em; }
    .bd-step { position:relative; padding:clamp(16px, 3vw, 24px) clamp(16px, 3.2vw, 26px); border-radius:14px; height:100%;
      display:flex; flex-direction:column; align-items:flex-start;
      border:1px solid rgba(255,255,255,0.08); background:#101627; }
    .bd-step { transition: border-color .5s var(--ease-out), background .5s var(--ease-out), box-shadow .5s var(--ease-out), transform .5s var(--ease-out); }
    .bd-step.is-on { background:#131B33; border-color:rgba(59,130,246,0.35);
      box-shadow:0 0 40px rgba(59,130,246,0.12); transform:translateY(-2px); }
    .bd-tag { transition: background .5s var(--ease-out), color .5s var(--ease-out), border-color .5s var(--ease-out); }
    .bd-step:hover { border-color:rgba(59,130,246,0.35); background:#131B33; }
    @media (prefers-reduced-motion: reduce) { .bd-pf { animation: none; } }
  `;
  document.head.appendChild(s);
  _bridgeCssInjected = true;
}


function PlatformIcon({ name, size = '58%' }) {
  const c = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' };
  if (name === 'instagram') return (
    <svg {...c}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" /></svg>);
  if (name === 'youtube') return (
    <svg {...c}><rect x="2.5" y="5.5" width="19" height="13" rx="4" /><path d="M10.4 9.4 15 12l-4.6 2.6z" fill="currentColor" stroke="none" /></svg>);
  if (name === 'tiktok') return (
    <svg {...c}><path d="M14 3.2c.5 2.4 2 3.9 4.4 4.1v2.9c-1.6.1-3.1-.4-4.4-1.3v5.7c0 3.2-2.4 5.4-5.3 5.4A5.2 5.2 0 0 1 3.6 14.7c0-3 2.5-5.2 5.4-5.2.4 0 .7 0 1.1.1v3a2.4 2.4 0 0 0-1.1-.2 2.3 2.3 0 0 0 .1 4.6c1.3 0 2.4-1 2.4-2.5V3.2z" fill="currentColor" stroke="none" /></svg>);
  if (name === 'facebook') return (
    <svg {...c}><path d="M13.6 21v-7.4h2.5l.5-2.9h-3V8.8c0-.8.3-1.5 1.6-1.5h1.5V4.7A17 17 0 0 0 14.6 4c-2.3 0-3.9 1.4-3.9 4v2.7H8v2.9h2.7V21z" fill="currentColor" stroke="none" /></svg>);
  return (
    <svg {...c}><ellipse cx="12" cy="5.8" rx="7.2" ry="2.8" /><path d="M4.8 5.8v12.4c0 1.5 3.2 2.8 7.2 2.8s7.2-1.3 7.2-2.8V5.8" /><path d="M4.8 12c0 1.5 3.2 2.8 7.2 2.8s7.2-1.3 7.2-2.8" /></svg>);
}

function StepTag({ children, active }) {
  return (
    <span className="bd-tag" style={{
      display: 'inline-block', padding: '5px 12px', borderRadius: 999,
      fontFamily: 'var(--font-sans)', fontSize: 12.5, fontWeight: 700, letterSpacing: '-0.01em',
      color: active ? '#FFFFFF' : '#A8B2C7',
      background: active ? '#3B82F6' : 'rgba(255,255,255,0.06)',
      border: `1px solid ${active ? 'transparent' : 'rgba(255,255,255,0.08)'}`
    }}>{children}</span>);

}

function PlatformChip({ p, i }) {
  return (
    <span className="bd-pf" style={{
      animationDelay: `${i * 0.55}s`,
      padding: 'clamp(8px, 1.8vw, 12px) clamp(10px, 2.2vw, 20px)',
      gap: 'clamp(6px, 1.4vw, 10px)', justifyContent: 'center', minWidth: 0, overflow: 'hidden'
    }}>
      <span style={{
        width: 'clamp(22px, 5vw, 30px)', height: 'clamp(22px, 5vw, 30px)', borderRadius: 999, flex: 'none',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        background: p.tint, color: p.color
      }}><PlatformIcon name={p.icon} /></span>
      <span style={{
        fontSize: 'clamp(11.5px, 2.1vw, 14.5px)', fontWeight: 700, letterSpacing: '-0.02em', color: '#FFFFFF',
        whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'
      }}>{p.label}</span>
      <span style={{
        fontSize: 'clamp(10px, 1.7vw, 12.5px)', fontWeight: 500, color: '#6B7689', whiteSpace: 'nowrap'
      }}>{p.sub}</span>
    </span>);

}

function useScrollProgress(ref) {
  const [p, setP] = React.useState(0);
  React.useEffect(() => {
    let raf = 0;
    const measure = () => {
      const el = ref.current;
      if (!el) return;
      const vh = window.innerHeight;
      const total = el.offsetHeight - vh;
      const top = el.getBoundingClientRect().top;
      setP(total > 0 ? Math.min(1, Math.max(0, -top / total)) : 0);
    };
    const onScroll = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(measure); };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    measure();
    return () => { cancelAnimationFrame(raf); window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); };
  }, [ref]);
  return p;
}

function StepBody({ s, i, isMobile }) {
  const ref = React.useRef(null);
  const [on, setOn] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); obs.disconnect(); } },
    { rootMargin: '0px 0px -28% 0px', threshold: 0.35 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={`bd-step${on ? ' is-on' : ''}`} style={{ transitionDelay: `${on ? i * 90 : 0}ms` }}>
      <StepTag active={on}>{s.tag}</StepTag>
      <h3 style={{
        margin: 0, marginTop: 14, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.25,
        fontSize: 'clamp(18px, 2.4vw, 19px)', color: '#FFFFFF'
      }}>{s.title}</h3>
      <p style={{
        margin: 0, marginTop: 10, fontSize: 'clamp(12.5px, 2vw, 14.5px)', lineHeight: 1.7,
        color: '#A8B2C7', wordBreak: 'keep-all'
      }}>{String(s.desc).replace(/\n/g, ' ')}</p>
      <p style={{
        margin: 0, marginTop: 14, fontSize: 'clamp(12.5px, 2vw, 14px)', fontWeight: 700, lineHeight: 1.7,
        wordBreak: 'keep-all', color: '#7CA8FF'
      }}>→ {s.gain}</p>
    </div>);

}

function FlowArrow({ isMobile, down }) {
  return (
    <span aria-hidden="true" style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none',
      color: '#6B7689', fontSize: 18, lineHeight: 1,
      width: isMobile || down ? '100%' : 18, height: isMobile || down ? 26 : 'auto',
      transform: isMobile || down ? 'rotate(90deg)' : 'none'
    }}>→</span>);

}

function ServiceIntro({ isMobile }) {
  const { Reveal } = window;
  return (
    <React.Fragment>
      <Reveal>
        <window.Kicker label="Our Service" light />
      </Reveal>

      <Reveal delay={80}>
        <h2 style={{
          marginTop: 24, fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.25,
          color: '#FFFFFF', maxWidth: 900,
          fontSize: isMobile ? '46px' : 'clamp(48px, 4.2vw, 64px)'
        }}>
          그 고민,<br />
          <span className="bd-ul">이렇게 해결합니다</span>
          <span style={{ color: '#3B82F6' }}>.</span>
        </h2>
      </Reveal>

      <Reveal delay={220} style={{ marginTop: 44 }}>
        <div style={{
          display: 'grid', gap: 'clamp(8px, 1.4vw, 12px)',
          gridTemplateColumns: 'repeat(3, max-content)', justifyContent: 'start'
        }}>
          {BD_PLATFORMS.map((p, i) => <PlatformChip key={p.label} p={p} i={i} />)}
        </div>
      </Reveal>

      <div style={{
        marginTop: 44, maxWidth: 660,
        fontSize: isMobile ? 15.5 : 'clamp(15px, 1.35vw, 17px)', lineHeight: 1.7, fontWeight: 500
      }}>
        <Reveal delay={340}>
          <p style={{ margin: 0, color: '#A8B2C7' }}>인스타그램부터 유튜브, 틱톡, 메타 광고, DB마케팅까지</p>
        </Reveal>
        <Reveal delay={440}>
          <p style={{ margin: 0, marginTop: 6, color: '#FFFFFF', fontWeight: 700 }}>
            업종과 상황에 맞게 가장 효과적인 방법만 제안합니다.
          </p>
        </Reveal>
      </div>
    </React.Fragment>);

}

function Bridge() {
  const isMobile = window.useIsMobile();
  const { Container, Reveal } = window;
  React.useEffect(injectBridgeCss, []);
  const n = BD_STEPS.length;

  return (
    <section style={{ position: 'relative', background: '#080B14', color: '#FFFFFF', padding: '120px 0' }}>
      <div aria-hidden="true" style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 520, opacity: 0.15, pointerEvents: 'none',
        background: 'linear-gradient(180deg, #16224A 0%, rgba(8,11,20,0) 100%)'
      }} />
      <Container style={{ position: 'relative', zIndex: 1 }}>
        <ServiceIntro isMobile={isMobile} />

        <Reveal delay={120} style={{ marginTop: 96 }}>
          {isMobile ?
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {BD_STEPS.map((s, i) =>
            <React.Fragment key={s.tag}>
              {i > 0 && <FlowArrow down />}
              <StepBody s={s} i={i} />
            </React.Fragment>
            )}
          </div> :

          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) clamp(10px, 1.6vw, 18px) minmax(0,1fr) clamp(10px, 1.6vw, 18px) minmax(0,1fr) clamp(10px, 1.6vw, 18px) minmax(0,1fr)', columnGap: 'clamp(6px, 1vw, 10px)', alignItems: 'stretch' }}>
            <StepBody s={BD_STEPS[0]} i={0} />
            <FlowArrow />
            <StepBody s={BD_STEPS[1]} i={1} />
            <FlowArrow />
            <StepBody s={BD_STEPS[2]} i={2} />
            <FlowArrow />
            <StepBody s={BD_STEPS[3]} i={3} />
          </div>}
        </Reveal>
      </Container>
    </section>);

}


/* ---------------- Results ---------------- */
const RESULT_CASES = [
{
  code: 'CASE 01', client: '성수 노무사', vertical: '노무',
  slots: ['case-sungsu-b', 'case-sungsu-a1', 'case-sungsu-a2'],
  images: ['images/case-sungsu-before.png', 'images/case-sungsu-after1.png', 'images/case-sungsu-after2.png'],
  before: ['평균 조회수', '5,000회'],
  after: ['평균 조회수', '7.5만'],
  chips: ['팔로워 +1,800명', '문의 3배 증가']
},
{
  code: 'CASE 02', client: '강남 다이어트 한의원', vertical: '한의원',
  slots: ['case-gangnam-b', 'case-gangnam-a1', 'case-gangnam-a2'],
  images: ['images/case-gangnam-before.png', 'images/case-gangnam-after1.png', 'images/case-gangnam-after2.png'],
  before: ['평균 조회수', '6,000회'],
  after: ['영상 2개로', '100만+'],
  chips: ['팔로워 +1,000명', '예약 문의 급증']
}];


// inject keyframe once
let _afterPopInjected = false;
function injectAfterPop() {
  if (_afterPopInjected) return;
  const s = document.createElement('style');
  s.textContent = `
    @keyframes afterPop {
      from { opacity: 0.15; transform: scale(0.82) translateY(8px); }
      to   { opacity: 1;    transform: scale(1)    translateY(0); }
    }
    @keyframes afterDotPulse {
      0%, 100% { box-shadow: 0 0 0 0   rgba(21,71,255,0.45); }
      60%       { box-shadow: 0 0 0 5px rgba(21,71,255,0); }
    }
    @keyframes chipRing {
      0%   { transform: translateX(0)    scale(1);    box-shadow: 0 0 0 0   rgba(27,139,79,0.22); }
      2%   { transform: translateX(-2px) scale(1.02); }
      4%   { transform: translateX(2px)  scale(1.02); box-shadow: 0 0 0 5px rgba(27,139,79,0.10); }
      6%   { transform: translateX(-1px) scale(1.01); }
      8%   { transform: translateX(1px)  scale(1.01); box-shadow: 0 0 0 9px rgba(27,139,79,0.03); }
      10%  { transform: translateX(0)    scale(1);    box-shadow: 0 0 0 0   rgba(27,139,79,0); }
      100% { transform: translateX(0)    scale(1);    box-shadow: 0 0 0 0   rgba(27,139,79,0); }
    }
  `;
  document.head.appendChild(s);
  _afterPopInjected = true;
}

function CaseCard({ c, delay }) {
  const { Tag, Reveal } = window;
  const afterRef = React.useRef(null);
  const [popped, setPopped] = React.useState(false);

  React.useEffect(() => {
    injectAfterPop();
    const el = afterRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setPopped(true); obs.disconnect(); }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <Reveal delay={delay}>
      <article style={{
        background: '#fff', border: '1px solid var(--bd-line)', borderRadius: 'var(--r-lg)',
        overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column',
        boxShadow: 'var(--shadow-soft-lg)',
        transition: 'transform 0.4s var(--ease-out), box-shadow 0.4s var(--ease-out)'
      }}
      onMouseEnter={(e) => {e.currentTarget.style.transform = 'translateY(-6px)';e.currentTarget.style.boxShadow = 'var(--shadow-xl)';}}
      onMouseLeave={(e) => {e.currentTarget.style.transform = 'none';e.currentTarget.style.boxShadow = 'var(--shadow-soft-lg)';}}>
        {/* ── thumbnail strip: BEFORE × 1 + AFTER × 2 ── */}
        <div style={{ padding: '12px 12px 14px', background: '#e4e5e9' }}>
          {/* BEFORE / AFTER labels row */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 8, marginBottom: 8 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', color: '#9AA1B2' }}>
              <span style={{ width: 8, height: 8, borderRadius: 999, background: '#9AA1B2', flexShrink: 0 }}></span>BEFORE
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', color: 'var(--bd-blue)' }}>
              <span style={{ width: 8, height: 8, borderRadius: 999, background: 'var(--bd-blue)', flexShrink: 0, animation: 'afterDotPulse 2.2s ease-in-out infinite' }}></span>AFTER
            </div>
          </div>
          {/* 3-col 9:14 thumbnails */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 5 }}>
            {c.slots.map((sid, i) => (
              <div key={sid} style={{ position: 'relative', aspectRatio: '9 / 14', borderRadius: 10, overflow: 'hidden', border: '1px solid var(--bd-line)', background: 'var(--bd-gray-50)' }}>
                <img src={c.images[i]} alt={`${c.client} ${i === 0 ? 'BEFORE' : 'AFTER ' + i}`}
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        </div>

        <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 20, flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
            <h3 style={{ fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--bd-ink)', fontSize: "18px" }}>{c.client}</h3>
            <Tag>{c.vertical}</Tag>
          </div>

          {/* before -> after: gradient block */}
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 40px 1fr', alignItems: 'center',
            borderRadius: 'var(--r-sm)', overflow: 'hidden',
            border: '1px solid var(--bd-line)',
            background: 'linear-gradient(to right, #F0F1F4 0%, #dce9fb 100%)'
          }}>
            <div style={{ padding: '16px 18px' }}>
              <div style={{ fontSize: 12, color: '#9AA1B2', fontWeight: 500 }}>{c.before[0]}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 16, fontWeight: 600, color: '#9AA1B2', marginTop: 6, letterSpacing: '-0.02em' }}>{c.before[1]}</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <window.Icon name="arrow-right" size={18} color="var(--bd-blue)" />
            </div>
            <div ref={afterRef} style={{ padding: '16px 18px' }}>
              <div style={{ fontSize: 12, color: 'var(--bd-blue)', fontWeight: 700 }}>{c.after[0]}</div>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: 18, fontWeight: 700, color: 'var(--bd-blue)',
                marginTop: 6, letterSpacing: '-0.02em',
                animation: popped ? 'afterPop 0.55s cubic-bezier(0.2,0.8,0.2,1) both' : 'none'
              }}>{c.after[1].includes('+') ? (
                <>{c.after[1].split('+')[0]}<span style={{ fontSize: '0.6em', fontWeight: 600, verticalAlign: 'middle' }}>+</span>{c.after[1].split('+')[1]}</>
              ) : c.after[1]}</div>
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 'auto' }}>
            {c.chips.map((ch, ci) =>
            <span key={ch} style={{
              display: 'inline-flex', alignItems: 'center', gap: 6, height: 30, padding: '0 12px',
              borderRadius: 999, background: '#fff', border: '1px solid var(--bd-line-strong)',
              fontSize: 12.5, fontWeight: 600, color: 'var(--bd-ink)'
            }}>
                <span style={{ color: 'var(--bd-success)', fontFamily: 'var(--font-mono)' }}>▲</span>{ch}
              </span>
            )}
          </div>
        </div>
      </article>
    </Reveal>);

}

function Results() {
  const isMobile = window.useIsMobile();
  const { Section, Container, Reveal, Dot } = window;
  return (
    <Section bg="paper" id="results">
      <Container>
        <div style={{ maxWidth: 720, marginBottom: isMobile ? 40 : 56 }}>
          <Reveal>
            <window.Kicker label="Results" />
          </Reveal>
          <Reveal delay={80}>
            <h2 style={{ marginTop: 16, fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.16, color: 'var(--bd-ink)', fontSize: isMobile ? '34px' : 'clamp(40px, 3.4vw, 52px)' }}>
              우리는 결과로 말합니다.
            </h2>
          </Reveal>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 20 : 24 }}>
          {RESULT_CASES.map((c, i) => <CaseCard key={c.code} c={c} delay={i * 110} />)}
        </div>

        {/* self channel */}
        <Reveal delay={120}>
          <div style={{
            marginTop: isMobile ? 20 : 28, position: 'relative', overflow: 'hidden',
            background: 'var(--grad-depth)', color: '#fff',
            borderRadius: 'var(--r-lg)', padding: isMobile ? '32px 24px' : '52px 56px',
            boxShadow: 'var(--shadow-xl)',
            display: 'flex', flexDirection: 'column',
            alignItems: 'stretch', gap: isMobile ? 28 : 38
          }}>
            <window.DotGridBg opacity={0.6} gap={26} r={1.2} />
            <div style={{ maxWidth: 640, position: 'relative', zIndex: 1 }}>
              <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', display: 'none', alignItems: 'center', gap: 10 }}>
                <window.Dot color="rgba(255,255,255,0.9)" /> Own channel
              </span>
              <window.Kicker label="Own channel" light />
              <h3 style={{ marginTop: 18, fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.3, fontSize: isMobile ? '24px' : 'clamp(27px, 2.5vw, 34px)', color: "rgb(255, 255, 255)" }}>
                남의 채널만 키우지 않습니다.
              </h3>
              <p style={{ marginTop: 16, fontSize: isMobile ? '15px' : 'clamp(16px, 1.4vw, 18px)', lineHeight: 1.7, color: 'rgba(255,255,255,0.6)', fontWeight: 500 }}>
                우리 채널도 직접 키우고 있습니다.<br />검증되지 않은 전략은 권하지 않습니다.
              </p>
            </div>
            <div style={{
              position: 'relative', zIndex: 1, width: '100%',
              display: 'flex', flexDirection: isMobile ? 'column' : 'row',
              gap: isMobile ? 12 : 16
            }}>
              {[
              { name: 'chanseong_.park', sub: '박찬성', slot: 'ch-chanseong', image: 'images/profile-chanseong.jpg', posts: '8', followers: '1.2만', following: '41' },
              { name: 'ryeong.__.e', sub: '매일 성장하는 남자', slot: 'ch-dongsaeng', image: 'images/profile-dongsaeng.jpg', posts: '12', followers: '1.1만', following: '33' }].
              map((p) =>
              <div key={p.slot} style={{
                flex: 1, minWidth: 0, background: '#fff', borderRadius: 'var(--r-md)',
                padding: isMobile ? '20px 18px' : '26px 26px', boxShadow: 'var(--shadow-2)',
                display: 'flex', alignItems: 'center', gap: isMobile ? 16 : 20
              }}>
                  <div style={{
                  flex: 'none', width: isMobile ? 66 : 82, height: isMobile ? 66 : 82, borderRadius: 'var(--r-pill)', overflow: 'hidden',
                  border: '1px solid var(--bd-gray-100)', background: 'var(--bd-gray-50)'
                }}>
                    <img src={p.image} alt={p.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: isMobile ? 18 : 21, fontWeight: 800, color: 'var(--bd-ink)', letterSpacing: '-0.02em', lineHeight: 1.1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.name}</div>
                    <div style={{ fontSize: isMobile ? 13 : 14.5, color: 'var(--bd-gray-500)', marginTop: 4, fontWeight: 600 }}>{p.sub}</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? 12 : 16, marginTop: 14 }}>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: 5 }}>
                        <span style={{ fontSize: isMobile ? 12.5 : 13.5, color: 'var(--bd-gray-500)', fontWeight: 600 }}>게시물</span>
                        <span style={{ fontSize: isMobile ? 14 : 15.5, color: 'var(--bd-ink)', fontWeight: 800, fontFamily: 'var(--font-mono)' }}>{p.posts}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: 5, border: '1.5px solid #F87171', borderRadius: 'var(--r-sm)', padding: isMobile ? '4px 8px' : '5px 10px' }}>
                        <span style={{ fontSize: isMobile ? 12.5 : 13.5, color: 'var(--bd-ink)', fontWeight: 700 }}>팔로워</span>
                        <span style={{ fontSize: isMobile ? 14 : 15.5, color: 'var(--bd-ink)', fontWeight: 800, fontFamily: 'var(--font-mono)' }}>{p.followers}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: 5 }}>
                        <span style={{ fontSize: isMobile ? 12.5 : 13.5, color: 'var(--bd-gray-500)', fontWeight: 600 }}>팔로우</span>
                        <span style={{ fontSize: isMobile ? 14 : 15.5, color: 'var(--bd-ink)', fontWeight: 800, fontFamily: 'var(--font-mono)' }}>{p.following}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>);

}

/* ---------------- Formula: 3단계 공식 ---------------- */
/* renders a string with **word** markers as a yellow highlighter swipe */
function renderHL(text, blue) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((p, i) => {
    if (p.startsWith('**') && p.endsWith('**')) {
      const word = p.slice(2, -2);
      if (blue) {
        return <span key={i} style={{ color: 'var(--bd-blue)', fontWeight: 800 }}>{word}</span>;
      }
      return (
        <span key={i} style={{
          background: 'linear-gradient(transparent 56%, rgba(255,228,92,0.9) 56%)',
          padding: '0 0.05em', fontWeight: 700, color: 'var(--bd-ink)'
        }}>{word}</span>);

    }
    return <React.Fragment key={i}>{p}</React.Fragment>;
  });
}

const FORMULA = [
{ n: '01', icon: 'fingerprint', t: '**양산**하지 않습니다.', body: ['피부과와 변호사가 같은 콘텐츠를 만들 수 없습니다.', '업종과 타겟에 맞춰, **최적의 플랫폼과 전략**을 설계합니다.'] },
{ n: '02', icon: 'target', t: '조회수가 **‘문의’**로 이어지게.', body: ['단순히 웃고 넘기는 영상은 의미가 없습니다.', '조회수가 **‘문의로 이어지는 5가지 공식’**을 활용합니다.'] },
{ n: '03', icon: 'gauge', t: '**빠르게** 성과를 증명합니다.', body: ['오래 기다리실 필요 없습니다.', '**‘검증된 숏폼 프로세스’**를 통해 성과를 앞당깁니다.'] }];


function Formula() {
  const isMobile = window.useIsMobile();
  const { Section, Container, Reveal, Dot } = window;
  return (
    <Section bg="white" id="formula" style={{ position: 'relative', overflow: 'hidden' }}>
      <window.DotGridBg opacity={0.5} color="rgba(10,19,48,0.06)" gap={28} r={1.1} />
      <Container style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 720, marginBottom: isMobile ? 40 : 64 }}>
          <Reveal>
            <window.Kicker label="The Formula" />
          </Reveal>
          <Reveal delay={80}>
            <h2 style={{ marginTop: 16, fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.16, color: 'var(--bd-ink)', fontSize: isMobile ? '34px' : 'clamp(40px, 3.4vw, 52px)' }}>블루닷만의 3단계 공식

            </h2>
          </Reveal>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: isMobile ? 0 : 0, borderTop: '1px solid var(--bd-line)' }}>
          {FORMULA.map((f, i) =>
          <Reveal key={f.n} delay={i * 110}>
              <div style={{
              padding: isMobile ? '32px 0' : '40px 32px 40px 0',
              borderRight: !isMobile && i < 2 ? '1px solid var(--bd-line)' : 'none',
              borderBottom: isMobile && i < 2 ? '1px solid var(--bd-line)' : 'none',
              paddingLeft: !isMobile && i > 0 ? 32 : 0, height: '100%'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 16, fontWeight: 600, color: 'var(--bd-blue)', letterSpacing: '0.04em' }}>{f.n}</span>
                  <window.Icon name={f.icon} size={30} color="var(--bd-ink)" strokeWidth={1.5} />
                </div>
                <h3 style={{ marginTop: 24, fontWeight: 700, letterSpacing: '-0.025em', color: 'var(--bd-ink)', lineHeight: 1.32, fontSize: "21px" }}>{renderHL(f.t, true)}</h3>
                <div style={{ marginTop: 18, display: 'flex', flexDirection: 'column', gap: "5px", fontSize: "15px" }}>
                  {f.body.map((b, j) =>
                <p key={j} style={{ lineHeight: 1.68, color: j === 1 ? 'var(--bd-ink-soft)' : 'var(--fg-2)', fontWeight: j === 1 ? 600 : 400, fontSize: "16px" }}>{renderHL(b)}</p>
                )}
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </Container>
    </Section>);

}

Object.assign(window, { Bridge, Results, Formula });