/* ============================================================
   shared.jsx — hooks, primitives, helpers shared across sections
   Exposes on window: useIsMobile, Reveal, Section, Container,
   Typewriter, Icon, scrollToId
   ============================================================ */

const { useState, useEffect, useLayoutEffect, useRef, useCallback } = React;

/* ---- viewport ---- */
function useIsMobile(bp = 860) {
  const [m, setM] = useState(typeof window !== 'undefined' && window.innerWidth < bp);
  useEffect(() => {
    const onR = () => setM(window.innerWidth < bp);
    window.addEventListener('resize', onR);
    return () => window.removeEventListener('resize', onR);
  }, [bp]);
  return m;
}

/* ---- Lucide icon (renders <i> then upgrades to svg) ---- */
function Icon({ name, size = 24, color = 'currentColor', strokeWidth = 1.5, style }) {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current && window.lucide) {
      ref.current.innerHTML = '';
      const i = document.createElement('i');
      i.setAttribute('data-lucide', name);
      ref.current.appendChild(i);
      window.lucide.createIcons({
        attrs: { width: size, height: size, stroke: color, 'stroke-width': strokeWidth },
        nameAttr: 'data-lucide',
        icons: window.lucide.icons
      });
    }
  }, [name, size, color, strokeWidth]);
  return <span ref={ref} style={{ display: 'inline-flex', lineHeight: 0, ...style }} />;
}

/* ---- scroll reveal wrapper ----
   A global DOM scanner toggles `.reveal--in`; this avoids per-component
   effect/IntersectionObserver timing issues in some preview frames. */
function bdScanReveals() {
  const vh = window.innerHeight || document.documentElement.clientHeight;
  document.querySelectorAll('.reveal:not(.reveal--in)').forEach((el) => {
    const r = el.getBoundingClientRect();
    if (r.top < vh * 0.92 && r.bottom > -40) el.classList.add('reveal--in');
  });
}
if (!window.__bdRevealInit) {
  window.__bdRevealInit = true;
  let raf = 0;
  const ping = () => {cancelAnimationFrame(raf);raf = requestAnimationFrame(bdScanReveals);};
  window.addEventListener('scroll', ping, { passive: true });
  window.addEventListener('resize', ping);
  setInterval(bdScanReveals, 300);
}

function Reveal({ children, delay = 0, as = 'div', className = '', style, ...rest }) {
  const ref = useRef(null);
  useLayoutEffect(() => {
    bdScanReveals();
    const t = setTimeout(bdScanReveals, 80);
    return () => clearTimeout(t);
  });
  const Tag = as;
  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={{ animationDelay: `${delay}ms`, transitionDelay: `${delay}ms`, ...style }}
      {...rest}>
      
      {children}
    </Tag>);

}

/* ---- section + container shells ---- */
function Section({ children, bg = 'paper', id, pad, style }) {
  const isMobile = useIsMobile();
  const palettes = {
    white: { background: '#FFFFFF', color: 'var(--bd-ink)' },
    paper: { background: 'var(--bd-paper)', color: 'var(--bd-ink)' },
    ink: { background: 'var(--bd-navy)', color: '#FFFFFF' }
  };
  const vpad = pad != null ? pad : isMobile ? 104 : 168;
  return (
    <section id={id} style={{ padding: `${vpad}px 0`, ...palettes[bg], ...style }}>
      {children}
    </section>);

}

function Container({ children, narrow = false, style }) {
  const isMobile = useIsMobile();
  return (
    <div style={{
      maxWidth: narrow ? 760 : 1020,
      margin: '0 auto',
      padding: `0 ${isMobile ? 20 : 32}px`,
      ...style
    }}>
      {children}
    </div>);

}

/* ---- typewriter (type → hold → backspace → next, loop) ---- */
function Typewriter({ phrases, typeMs = 75, deleteMs = 38, holdMs = 2000, gapMs = 420, onIndexChange }) {
  const [text, setText] = useState('');
  const [bump, setBump] = useState(false);
  const state = useRef({ p: 0, i: 0, mode: 'type', timer: null });

  useEffect(() => {
    const s = state.current;
    const tick = () => {
      const cur = phrases[s.p];
      if (s.mode === 'type') {
        s.i += 1;
        setText(cur.slice(0, s.i));
        if (s.i >= cur.length) {
          s.mode = 'hold';
          setBump(true);
          s.timer = setTimeout(() => {setBump(false);s.mode = 'delete';tick();}, holdMs);
          return;
        }
        s.timer = setTimeout(tick, typeMs);
      } else if (s.mode === 'delete') {
        s.i -= 1;
        setText(cur.slice(0, Math.max(0, s.i)));
        if (s.i <= 0) {
          s.mode = 'type';
          s.p = (s.p + 1) % phrases.length;
          if (onIndexChange) onIndexChange(s.p);
          s.timer = setTimeout(tick, gapMs);
          return;
        }
        s.timer = setTimeout(tick, deleteMs);
      }
    };
    s.timer = setTimeout(tick, 600);
    return () => clearTimeout(s.timer);
    // eslint-disable-next-line
  }, []);

  return (
    <span style={{
      display: 'inline-block',
      transition: 'transform 0.32s var(--ease-out)',
      transform: bump ? 'scale(1.035)' : 'scale(1)',
      transformOrigin: 'left center'
    }}>
      {text}
      <span className="bd-caret" style={{ fontWeight: 400, color: 'var(--bd-blue-300)' }}>|</span>
    </span>);

}

/* ============================================================
   Background pattern family — each section gets its own texture so
   the page reads as a sequence of distinct surfaces rather than one
   repeated detail. All are static SVG, pointer-events:none, behind
   content. Keep opacities low so they stay "texture", not "noise".
   ============================================================ */

let __bdPatId = 0;
const nextPatId = (p) => `${p}-${__bdPatId += 1}`;

/* MeshBg: flowing wave lines — for narrative dark fields */
function MeshBg({ opacity = 0.06, color = '#7C97FF', style }) {
  const rows = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <svg aria-hidden="true" viewBox="0 0 1200 720" preserveAspectRatio="xMidYMid slice"
    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity, pointerEvents: 'none', ...style }}>
      <g fill="none" stroke={color} strokeWidth="1">
        {rows.map((i) =>
        <path key={i} d={`M-120 ${60 + i * 82} C 260 ${10 + i * 82}, 620 ${150 + i * 82}, 940 ${70 + i * 82} S 1400 ${20 + i * 82}, 1400 ${70 + i * 82}`} />
        )}
      </g>
    </svg>);

}

/* RingsBg: concentric rings radiating from a point — echoes the B● dot
   ripple. Use as the hero signature texture. */
function RingsBg({ opacity = 0.5, color = 'rgba(124,151,255,0.45)', cx = 920, cy = 180, style }) {
  const rings = [70, 150, 240, 340, 450, 570, 700];
  return (
    <svg aria-hidden="true" viewBox="0 0 1200 720" preserveAspectRatio="xMidYMid slice"
    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity, pointerEvents: 'none', ...style }}>
      <g fill="none" stroke={color} strokeWidth="1">
        {rings.map((r, i) => <circle key={r} cx={cx} cy={cy} r={r} strokeOpacity={1 - i * 0.1} />)}
      </g>
    </svg>);

}

/* DotGridBg: even dot lattice — quiet, technical. */
function DotGridBg({ opacity = 0.5, color = 'rgba(124,151,255,0.5)', gap = 30, r = 1.3, style }) {
  const id = useRef(nextPatId('dg')).current;
  return (
    <svg aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity, pointerEvents: 'none', ...style }}>
      <defs>
        <pattern id={id} width={gap} height={gap} patternUnits="userSpaceOnUse">
          <circle cx={gap / 2} cy={gap / 2} r={r} fill={color} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>);

}

/* GridBg: hairline grid — for light surfaces. Fades out via a radial mask
   so it never reads as a hard sheet. */
function GridBg({ opacity = 1, color = 'var(--bd-line)', gap = 56, style, fade = 'closest-side' }) {
  const pid = useRef(nextPatId('gl')).current;
  const mid = useRef(nextPatId('gm')).current;
  return (
    <svg aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity, pointerEvents: 'none', ...style }}>
      <defs>
        <pattern id={pid} width={gap} height={gap} patternUnits="userSpaceOnUse">
          <path d={`M ${gap} 0 L 0 0 0 ${gap}`} fill="none" stroke={color} strokeWidth="1" />
        </pattern>
        <radialGradient id={mid} cx="50%" cy="50%" r="65%">
          <stop offset="0%" stopColor="#fff" stopOpacity="1" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <mask id={mid + 'm'}>
          <rect width="100%" height="100%" fill={`url(#${mid})`} />
        </mask>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${pid})`} mask={`url(#${mid + 'm'})`} />
    </svg>);

}

/* DiagBg: fine diagonal hairlines — for a paper section break. */
function DiagBg({ opacity = 1, color = 'var(--bd-line)', gap = 18, style }) {
  const id = useRef(nextPatId('dl')).current;
  return (
    <svg aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity, pointerEvents: 'none', ...style }}>
      <defs>
        <pattern id={id} width={gap} height={gap} patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2={gap} stroke={color} strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>);

}

/* GlowBg: a single soft radial bloom — adds depth to dark fields without lines. */
function GlowBg({ color = 'rgba(21,71,255,0.30)', cx = '20%', cy = '110%', size = '70%', style }) {
  return (
    <div aria-hidden="true" style={{
      position: 'absolute', inset: 0, pointerEvents: 'none',
      background: `radial-gradient(${size} ${size} at ${cx} ${cy}, ${color}, transparent 70%)`,
      ...style
    }} />);

}

/* ---- BdLogo: the B● mark + 블루닷스튜디오 wordmark ----
   Mark and wordmark are height-matched so the lockup reads as one unit:
   the "B" cap-height ≈ the Korean wordmark glyph height. */
function BdLogo({ size = 30, light = false, withWordmark = true, style }) {
  const ink = light ? '#fff' : 'var(--bd-ink)';
  const markFs = size * 1.0;
  const dotD = size * 0.27;   // 1.5× previous (was 0.18)
  const wordFs = size * 0.68;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: size * 0.28, ...style }}>
      <span style={{ display: 'inline-flex', alignItems: 'flex-end', lineHeight: 1, flex: 'none' }}>
        <span style={{
          fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: markFs,
          color: ink, letterSpacing: '-0.04em', lineHeight: 0.78
        }}>B</span>
        <span style={{
          width: dotD, height: dotD, borderRadius: 999,
          background: 'var(--bd-blue)', marginLeft: size * 0.04, marginBottom: size * 0.06, flex: 'none'
        }}></span>
      </span>
      {withWordmark &&
      <span style={{
        fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: wordFs,
        letterSpacing: '0.04em', color: ink, whiteSpace: 'nowrap', lineHeight: 1
      }}>블루닷스튜디오</span>
      }
    </div>);

}

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 64;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}

/* ---- Kicker: refined editorial label (hairline + letterspaced caps) ----
   Replaces the dot-eyebrow. Mono for latin labels reads as quiet,
   precise, high-end; sans for Korean labels. */
function Kicker({ label, light = false, mono = true, lineWidth = 22, style }) {
  const txt = light ? 'rgba(255,255,255,0.52)' : 'var(--bd-gray-500)';
  const rule = light ? 'rgba(255,255,255,0.26)' : 'var(--bd-line-strong)';
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 12, ...style }}>
      <span style={{ width: lineWidth, height: 1, background: rule, flex: 'none' }} />
      <span style={{
        fontFamily: mono ? 'var(--font-mono)' : 'var(--font-sans)',
        fontWeight: mono ? 500 : 600,
        letterSpacing: mono ? '0.26em' : '0.16em',
        textTransform: 'uppercase', color: txt, whiteSpace: 'nowrap', fontSize: "12px"
      }}>{label}</span>
    </span>);

}

Object.assign(window, {
  useIsMobile, Icon, Reveal, Section, Container, Typewriter, Kicker, scrollToId,
  MeshBg, RingsBg, DotGridBg, GridBg, DiagBg, GlowBg, BdLogo
});