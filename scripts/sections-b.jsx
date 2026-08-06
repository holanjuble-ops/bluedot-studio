/* ============================================================
   sections-b.jsx — Why (bridge), Results, Formula
   ============================================================ */

/* ---------------- Bridge: 왜 블루닷인가 ---------------- */
const BD_PLATFORMS = [
{ icon: 'instagram', label: 'Instagram', sub: '릴스', color: '#FFFFFF', tint: 'transparent', solid: true, radius: '28%' },
{ icon: 'youtube', label: 'YouTube', sub: '쇼츠', color: '#FF0000', tint: 'rgba(255,0,0,0.15)' },
{ icon: 'tiktok', label: 'TikTok', sub: '숏폼', color: '#FFFFFF', tint: 'var(--text-1)', solid: true, radius: '28%' },
{ icon: 'facebook', label: '메타 광고', sub: 'CPA', color: '#1877F2', tint: 'rgba(24,119,242,0.18)' },
{ icon: 'db', label: 'DB 마케팅', sub: '문의', color: '#7C97FF', tint: 'rgba(59,118,232,0.18)' }];

const BD_STEPS = [
{ tag: '1개월차', title: '노출 확보', desc: '숏폼을 통해 대표님을\n더 많은 사람들에게 알립니다.', gain: '(고객사 평균)\n첫 달부터 100만 조회수 달성' },
{ tag: '2~3개월차', title: '잠재고객 확보', desc: '잠재고객을 모읍니다.\n어뷰징은 절대 쓰지 않습니다.', gain: '(고객사 평균)\n팔로워 5,000명 확보' },
{ tag: '4~6개월차', title: '문의 만들기', desc: '콘텐츠와 광고로\n실제 문의를 늘립니다.', gain: '(고객사 평균)\n문의량 2.4배 증가' },
{ tag: '6개월차~', title: '콘텐츠 자산화', desc: '콘텐츠가 계속 문의를 만드는\n구조를 만듭니다.', gain: '문의가 계속 이어지는 구조 완성' }];

function Proof({ gain }) {
  return (
    <p style={{ margin: 0, marginTop: 12, fontSize: 14, fontWeight: 700, lineHeight: 1.55, wordBreak: 'keep-all', color: 'var(--blue-500)' }}>→ {gain}</p>);

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
    .bd-step.is-on { background:#131B33; border-color:rgba(59,118,232,0.35);
      box-shadow:0 0 40px rgba(59,118,232,0.12); transform:translateY(-2px); }
    .bd-tag { transition: background .5s var(--ease-out), color .5s var(--ease-out), border-color .5s var(--ease-out); }
    .bd-step:hover { border-color:rgba(59,118,232,0.35); background:#131B33; }
    .bd-tlv { position:relative; }
    .bd-tlh { position:relative; display:grid; grid-template-columns:repeat(4, minmax(0,1fr)); column-gap:clamp(20px,2.6vw,36px); }
    .bd-track { position:absolute; background:rgba(255,255,255,0.10); }
    .bd-fill { position:absolute; background:#5B84D8; }
    .bd-tlv .bd-track { left:11px; top:11px; bottom:11px; width:1px; }
    .bd-tlv .bd-fill  { left:11px; top:11px; width:1px; }
    .bd-tlh .bd-track { top:11px; left:11px; right:11px; height:1px; }
    .bd-tlh .bd-fill  { top:11px; left:11px; height:1px; }
    .bd-tl-item { position:relative; display:grid; grid-template-columns:22px minmax(0,1fr); column-gap:clamp(18px,3vw,34px); }
    .bd-tlh-item { position:relative; }
    .bd-node { position:relative; display:block; width:22px; height:22px; border-radius:999px; flex:none;
      border:1.5px solid rgba(255,255,255,0.22); background:#080B14; box-sizing:border-box; margin-top:22px;
      transition: border-color .35s var(--ease-out), box-shadow .35s var(--ease-out), background .35s var(--ease-out); }
    .bd-tlh-item .bd-node { margin-top:0; }
    .bd-node.is-lit { border-color:#6E93DE; background:#101B36; box-shadow:0 0 0 6px rgba(110,147,222,0.16); }
    .bd-node.is-lit::after { content:''; position:absolute; inset:5.5px; border-radius:999px; background:#6E93DE; }
    .bd-tl-body { padding:14px 0 clamp(44px,6vw,72px); }
    .bd-tlh-body { padding-top:26px; }
    .bd-body-anim { transform:none; }
    .bd-body-anim.is-lit { transform:none; }
    @media (prefers-reduced-motion: reduce) { .bd-pf { animation: none; } .bd-body-anim { transform:none; } }
  `;
  document.head.appendChild(s);
  _bridgeCssInjected = true;
}


function PlatformIcon({ name, size = '58%' }) {
  const c = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' };
  const f = { width: size, height: size, viewBox: '0 0 24 24', fill: 'currentColor' };
  if (name === 'instagram') return (
    <svg viewBox="0 0 24 24" width="100%" height="100%"><defs><radialGradient id="bdIg" cx="0.3" cy="1.05" r="1.25"><stop offset="0" stopColor="#FFD776" /><stop offset="0.25" stopColor="#F3A345" /><stop offset="0.45" stopColor="#EF5F57" /><stop offset="0.62" stopColor="#D92E7F" /><stop offset="0.82" stopColor="#A32EBC" /><stop offset="1" stopColor="#5E5DE0" /></radialGradient></defs><rect width="24" height="24" rx="6.6" fill="url(#bdIg)" /><g transform="translate(12 12) scale(0.6) translate(-12 -12)" fill="#fff"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S1.037 3.351.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.9.423.423.683.82.9 1.382.166.422.36 1.057.415 2.227.055 1.265.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.902 1.382-.419.423-.824.683-1.38.9-.42.166-1.065.36-2.235.415-1.273.055-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.17-.061-1.815-.256-2.235-.421-.569-.224-.96-.479-1.379-.902-.421-.419-.69-.824-.9-1.38-.174-.42-.366-1.065-.421-2.235-.043-1.258-.063-1.649-.063-4.844 0-3.196.02-3.586.063-4.859.055-1.17.247-1.814.421-2.234.21-.57.479-.96.9-1.381.419-.421.81-.69 1.379-.9.42-.174 1.051-.369 2.221-.428 1.275-.043 1.65-.063 4.859-.063zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm7.846-10.405a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" /></g></svg>);
  if (name === 'youtube') return (
    <svg {...f}><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>);
  if (name === 'tiktok') return (
    <svg {...f}><g transform="translate(-0.8 -0.8)" fill="#25F4EE"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" /></g><g transform="translate(0.8 0.8)" fill="#FE2C55"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" /></g><path fill="#fff" d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" /></svg>);
  if (name === 'facebook') return (
    <svg {...f}><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 011.141.195v3.325a8.623 8.623 0 00-.653-.036 26.805 26.805 0 00-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 00-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647z" /></svg>);
  return (
    <svg {...c}><ellipse cx="12" cy="5.8" rx="7.2" ry="2.8" /><path d="M4.8 5.8v12.4c0 1.5 3.2 2.8 7.2 2.8s7.2-1.3 7.2-2.8V5.8" /><path d="M4.8 12c0 1.5 3.2 2.8 7.2 2.8s7.2-1.3 7.2-2.8" /></svg>);
}

function StepTag({ children, active }) {
  return (
    <span className="bd-tag" style={{
      display: 'inline-block', padding: '5px 12px', borderRadius: 999,
      fontFamily: 'var(--font-sans)', fontSize: 12.5, fontWeight: 700, letterSpacing: '-0.01em',
      color: active ? '#FFFFFF' : '#A8B2C7',
      background: active ? 'var(--blue-500)' : 'rgba(255,255,255,0.06)',
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
        width: 'clamp(22px, 5vw, 30px)', height: 'clamp(22px, 5vw, 30px)', borderRadius: p.radius || 999, flex: 'none',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
        background: p.tint, color: p.color
      }}><PlatformIcon name={p.icon} size={p.icon === 'instagram' ? '86%' : p.solid ? '56%' : p.icon === 'db' ? '58%' : '62%'} /></span>
      <span style={{
        fontSize: 'clamp(11.5px, 2.1vw, 14.5px)', fontWeight: 700, letterSpacing: '-0.02em', color: '#FFFFFF',
        whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'
      }}>{p.label}</span>
      <span style={{
        fontSize: 'clamp(10px, 1.7vw, 12.5px)', fontWeight: 500, color: 'var(--text-3)', whiteSpace: 'nowrap'
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
        color: 'var(--text-2)', wordBreak: 'keep-all'
      }}>{String(s.desc).replace(/\n/g, ' ')}</p>
      <p style={{
        margin: 0, marginTop: 14, fontSize: 'clamp(12.5px, 2vw, 14px)', fontWeight: 700, lineHeight: 1.7,
        wordBreak: 'keep-all', color: 'var(--blue-500)'
      }}>→ {s.gain}</p>
    </div>);

}

/* 성과 문장의 핵심 구절만 브랜드 옐로로 강조 (면적 5% 이하) */
const BD_HL_PHRASES = ['100만 조회수', '팔로워 5,000명', '문의량 2.4배', '문의가 계속 이어지는 구조'];
function brk(t, key) {
  return String(t).split('\n').map((l, k) =>
  <React.Fragment key={key + '-' + k}>{k > 0 && <br />}{l}</React.Fragment>);
}
function hlNums(text) {
  const lines = String(text).split('\n');
  return lines.map((l, k) =>
  <React.Fragment key={k}>
    {k > 0 && <br />}
    {lines.length > 1 && k === 0 ? l : <span style={{ color: '#FFE45C' }}>{l}</span>}
  </React.Fragment>);
}

function TimelineStep({ s, isMobile, grid, lit, nodeRef }) {
  const lines = (txt) => String(txt).split('\n').map((l, k) =>
    <React.Fragment key={k}>{k > 0 && <br />}{l}</React.Fragment>);
  return (
    <div className={isMobile ? 'bd-tl-item' : 'bd-tlh-item'}>
      <span ref={nodeRef} className={`bd-node${lit ? ' is-lit' : ''}`} />
      <div className={`${isMobile ? 'bd-tl-body' : 'bd-tlh-body'} bd-body-anim${lit ? ' is-lit' : ''}`} style={{ position: 'relative' }}>
        {grid &&
        <span aria-hidden="true" style={{
          position: 'absolute', top: isMobile ? 0 : 14, left: 0, right: 0, bottom: isMobile ? 24 : 0,
          pointerEvents: 'none', borderRadius: 12,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(closest-side, #fff, transparent)',
          WebkitMaskImage: 'radial-gradient(closest-side, #fff, transparent)'
        }} />}
        <span style={{ position: 'relative', display: 'block' }}>
        <p style={{ margin: 0, fontSize: 12, fontWeight: 700, letterSpacing: '0.06em', color: '#7C93B8' }}>{s.tag}</p>
        <h3 style={{
          margin: 0, marginTop: 10, fontWeight: 800, letterSpacing: '-0.025em', lineHeight: 1.3,
          fontSize: isMobile ? '19px' : '20px', color: '#FFFFFF', wordBreak: 'keep-all'
        }}>{s.title}</h3>
        <p style={{
          margin: 0, marginTop: 12, fontSize: isMobile ? 14.5 : 15.5,
          lineHeight: 1.7, color: '#7C879B', wordBreak: 'keep-all', maxWidth: 460
        }}>{lines(s.desc)}</p>
        <p style={{
          margin: 0, marginTop: 14, fontSize: isMobile ? 14 : 14.5, fontWeight: 700,
          lineHeight: 1.7, color: '#FFFFFF', wordBreak: 'keep-all', maxWidth: 460
        }}><span style={{ color: '#5B84D8' }}>→</span> {hlNums(s.gain)}</p>
        </span>
      </div>
    </div>);

}

/* rail fill driven by scroll position; dots light up as the fill passes them */
function Timeline({ isMobile }) {
  const wrap = React.useRef(null);
  const nodes = React.useRef([]);
  const [p, setP] = React.useState(0);
  const [lit, setLit] = React.useState([]);
  React.useEffect(() => {
    let raf = 0;
    const measure = () => {
      const el = wrap.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || 800;
      const anchor = vh * (isMobile ? 0.72 : 0.68);
      const span = isMobile ? r.height : r.height + vh * 0.55;
      const prog = Math.min(1, Math.max(0, (anchor - r.top) / span));
      setP((prev) => Math.abs(prev - prog) > 0.004 ? prog : prev);
      const total = isMobile ? el.offsetHeight - 22 : el.offsetWidth - 22;
      const px = prog * total;
      const next = nodes.current.map((n) => {
        if (!n) return false;
        const nr = n.getBoundingClientRect();
        const off = isMobile ? nr.top - r.top : nr.left - r.left;
        return prog > 0.03 && off <= px + 2;
      });
      setLit((prev) => next.length === prev.length && next.every((v, i) => v === prev[i]) ? prev : next);
      };
    const ping = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(measure); };
    window.addEventListener('scroll', ping, { passive: true });
    window.addEventListener('resize', ping);
    measure();
    const t = setTimeout(measure, 300);
    return () => { cancelAnimationFrame(raf); clearTimeout(t); window.removeEventListener('scroll', ping); window.removeEventListener('resize', ping); };
  }, [isMobile]);
  const fillStyle = isMobile ?
  { height: `calc((100% - 22px) * ${p})` } :
  { width: `calc((100% - 22px) * ${p})` };
  return (
    <div ref={wrap} className={isMobile ? 'bd-tlv' : 'bd-tlh'} style={{ width: '100%' }}>
      <span aria-hidden="true" className="bd-track" />
      <span aria-hidden="true" className="bd-fill" style={fillStyle} />
      {BD_STEPS.map((s, i) =>
      <TimelineStep key={s.tag} s={s} isMobile={isMobile} grid={true} lit={!!lit[i]}
      nodeRef={(el) => {nodes.current[i] = el;}} />
      )}
    </div>);

}

function FlowArrow({ isMobile, down }) {
  return (
    <span aria-hidden="true" style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none',
      color: 'var(--text-3)', fontSize: 18, lineHeight: 1,
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
          marginTop: 16, fontWeight: 700, letterSpacing: '-0.035em', lineHeight: 1.22,
          color: '#FFFFFF', maxWidth: 760,
          fontSize: isMobile ? '28px' : '36px'
        }}>
          그 고민,<br />
          <span className="bd-ul">이렇게 해결합니다</span>
          <span style={{ color: 'var(--blue-500)' }}>.</span>
        </h2>
      </Reveal>

      <div style={{
        marginTop: 28, maxWidth: 620,
        fontSize: isMobile ? 15.5 : 17, lineHeight: 1.7, fontWeight: 500
      }}>
        <Reveal>
          <p style={{ margin: 0, color: 'var(--text-2)' }}>인스타그램부터 유튜브, 틱톡, 메타 광고, DB마케팅까지</p>
        </Reveal>
        <Reveal>
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
    <section style={{ position: 'relative', background: '#080B14', color: '#FFFFFF', padding: isMobile ? '88px 0' : '128px 0' }}>
      <div aria-hidden="true" style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 520, opacity: 0.15, pointerEvents: 'none',
        background: 'linear-gradient(180deg, #16224A 0%, rgba(8,11,20,0) 100%)'
      }} />
      <Container style={{ position: 'relative', zIndex: 1 }}>
        <ServiceIntro isMobile={isMobile} />

        <Reveal style={{ marginTop: isMobile ? 44 : 60 }}>
          <Timeline isMobile={isMobile} />
        </Reveal>
      </Container>
    </section>);

}


/* ---------------- Results ---------------- */
/* 릴스 추가/교체: images/reel-01.png … 순서대로 올리고 아래 배열에만 줄을 추가하면 됩니다. */
const RESULT_REELS = [
{ img: 'reel-01', code: 'CASE 01', client: '성수 노무사' },
{ img: 'reel-02', code: 'CASE 01', client: '성수 노무사' },
{ img: 'reel-03', code: 'CASE 02', client: '강남 다이어트 한의원' },
{ img: 'reel-04', code: 'CASE 02', client: '강남 다이어트 한의원' }];

function Results() {
  const isMobile = window.useIsMobile();
  const { Section, Container, Reveal } = window;
  return (
    <Section bg="white" id="results">
      <Container>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '0.82fr 1.18fr', gap: isMobile ? 28 : 56, alignItems: 'start' }}>
          <div style={{ maxWidth: 420 }}>
            <Reveal>
              <window.Kicker label="Results" />
            </Reveal>
            <Reveal>
              <h2 style={{ marginTop: 16, fontWeight: 700, letterSpacing: '-0.035em', lineHeight: 1.22, color: 'var(--text-1)', fontSize: isMobile ? '28px' : '36px' }}>
                우리는 결과로 말합니다.
              </h2>
            </Reveal>
            <Reveal>
              <p style={{ marginTop: 16, fontSize: isMobile ? '15.5px' : '17px', lineHeight: 1.7, color: 'var(--text-2)', fontWeight: 500 }}>
                공개 가능한 사례만 담았습니다.<br />나머지는 상담에서 확인하실 수 있습니다.
              </p>
            </Reveal>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: isMobile ? 12 : 18 }}>
            {RESULT_REELS.map((r) =>
            <Reveal key={r.img}>
              <div style={{ position: 'relative', aspectRatio: '329 / 512', borderRadius: 10, overflow: 'hidden', border: '1px solid var(--border)', background: 'var(--bd-ink)', boxShadow: 'var(--shadow-soft-lg)' }}>
                <img src={`images/${r.img}.png`} alt={`${r.client} 릴스`}
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                <span aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 74, background: 'linear-gradient(180deg, rgba(10,14,26,0.62), rgba(10,14,26,0))', pointerEvents: 'none' }}></span>
                <div style={{ position: 'absolute', top: 10, left: 11, right: 11, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, color: '#fff' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 600, letterSpacing: '0.06em', flex: 'none' }}>
                    <span style={{ width: 5, height: 5, borderRadius: 999, background: 'var(--blue-500)', flex: 'none' }}></span>{r.code}
                  </span>
                  <span style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '-0.01em', opacity: 0.92, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{r.client}</span>
                </div>
              </div>
            </Reveal>
            )}
          </div>
        </div>

        {/* self channel */}
        <Reveal>
          <div style={{
            marginTop: isMobile ? 20 : 28, position: 'relative', overflow: 'hidden',
            background: 'var(--grad-depth)', color: '#fff',
            borderRadius: 'var(--r-lg)', padding: isMobile ? '28px 20px' : '44px 48px',
            boxShadow: 'var(--shadow-xl)',
            display: 'flex', flexDirection: 'column',
            alignItems: 'stretch', gap: isMobile ? 22 : 30
          }}>
            <window.DotGridBg opacity={0.6} gap={26} r={1.2} />
            <div style={{ maxWidth: 640, position: 'relative', zIndex: 1 }}>
              <window.Overline label="Own channel" light />
              <h3 style={{ marginTop: 16, fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.3, fontSize: isMobile ? '21px' : '24px', color: '#FFFFFF' }}>
                남의 채널만 키우지 않습니다.
              </h3>
              <p style={{ marginTop: 14, fontSize: isMobile ? '14.5px' : '15.5px', lineHeight: 1.7, color: 'rgba(255,255,255,0.6)', fontWeight: 500 }}>
                우리 채널도 직접 키우고 있습니다.<br />검증되지 않은 전략은 권하지 않습니다.
              </p>
            </div>
            <div style={{
              position: 'relative', zIndex: 1, width: '100%',
              display: 'flex', flexDirection: isMobile ? 'column' : 'row',
              gap: isMobile ? 12 : 16
            }}>
              {[
              { name: 'chanseong_.park', sub: '박찬성', image: 'images/profile-chanseong.jpg', posts: '8', followers: '1.2만', following: '41' },
              { name: 'ryeong.__.e', sub: '매일 성장하는 남자', image: 'images/profile-dongsaeng.jpg', posts: '12', followers: '1.1만', following: '33' }].
              map((p) =>
              <div key={p.name} style={{
                flex: 1, minWidth: 0, background: 'var(--bg-card)', borderRadius: 'var(--r-md)',
                padding: isMobile ? '18px 16px' : '24px 24px', boxShadow: 'var(--shadow-2)',
                display: 'flex', alignItems: 'center', gap: isMobile ? 13 : 16, overflow: 'hidden'
              }}>
                  <div style={{
                  flex: 'none', width: isMobile ? 54 : 66, height: isMobile ? 54 : 66, borderRadius: 'var(--r-pill)', overflow: 'hidden',
                  border: '1px solid var(--border)', background: 'var(--bg-alt)'
                }}>
                    <img src={p.image} alt={p.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: isMobile ? 16 : 18, fontWeight: 800, color: 'var(--text-1)', letterSpacing: '-0.02em', lineHeight: 1.1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.name}</div>
                    <div style={{ fontSize: isMobile ? 12.5 : 14, color: 'var(--text-2)', marginTop: 3, fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.sub}</div>
                    <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', columnGap: isMobile ? 9 : 11, rowGap: 7, marginTop: isMobile ? 10 : 12 }}>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, whiteSpace: 'nowrap' }}>
                        <span style={{ fontSize: isMobile ? 11.5 : 13.5, color: 'var(--text-2)', fontWeight: 600 }}>게시물</span>
                        <span style={{ fontSize: isMobile ? 13 : 15.5, color: 'var(--text-1)', fontWeight: 800, fontFamily: 'var(--font-mono)' }}>{p.posts}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, whiteSpace: 'nowrap', border: '1.5px solid #D93A3A', borderRadius: 'var(--r-sm)', padding: isMobile ? '3px 7px' : '5px 10px' }}>
                        <span style={{ fontSize: isMobile ? 11.5 : 13.5, color: 'var(--text-1)', fontWeight: 700 }}>팔로워</span>
                        <span style={{ fontSize: isMobile ? 13 : 15.5, color: 'var(--text-1)', fontWeight: 800, fontFamily: 'var(--font-mono)' }}>{p.followers}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, whiteSpace: 'nowrap' }}>
                        <span style={{ fontSize: isMobile ? 11.5 : 13.5, color: 'var(--text-2)', fontWeight: 600 }}>팔로우</span>
                        <span style={{ fontSize: isMobile ? 13 : 15.5, color: 'var(--text-1)', fontWeight: 800, fontFamily: 'var(--font-mono)' }}>{p.following}</span>
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
        return <span key={i} style={{ color: 'var(--blue-500)', fontWeight: 800 }}>{word}</span>;
      }
      return (
        <span key={i} style={{
          background: 'linear-gradient(transparent 56%, rgba(255,228,92,0.9) 56%)',
          padding: '0 0.05em', fontWeight: 700, color: 'var(--text-1)'
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
            <h2 style={{ marginTop: 16, fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.16, color: 'var(--text-1)', fontSize: isMobile ? '27px' : '36px' }}>블루닷만의 3단계 공식

            </h2>
          </Reveal>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: isMobile ? 0 : 0, borderTop: '1px solid var(--border)' }}>
          {FORMULA.map((f, i) =>
          <Reveal key={f.n} delay={i * 110}>
              <div style={{
              padding: isMobile ? '32px 0' : '40px 32px 40px 0',
              borderRight: !isMobile && i < 2 ? '1px solid var(--border)' : 'none',
              borderBottom: isMobile && i < 2 ? '1px solid var(--border)' : 'none',
              paddingLeft: !isMobile && i > 0 ? 32 : 0, height: '100%'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 16, fontWeight: 600, color: 'var(--blue-500)', letterSpacing: '0.04em' }}>{f.n}</span>
                  <window.Icon name={f.icon} size={30} color="var(--text-1)" strokeWidth={1.5} />
                </div>
                <h3 style={{ marginTop: 24, fontWeight: 700, letterSpacing: '-0.025em', color: 'var(--text-1)', lineHeight: 1.32, fontSize: "21px" }}>{renderHL(f.t, true)}</h3>
                <div style={{ marginTop: 18, display: 'flex', flexDirection: 'column', gap: "5px", fontSize: "15px" }}>
                  {f.body.map((b, j) =>
                <p key={j} style={{ lineHeight: 1.68, color: j === 1 ? 'var(--text-2)' : 'var(--text-2)', fontWeight: j === 1 ? 600 : 400, fontSize: "16px" }}>{renderHL(b)}</p>
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