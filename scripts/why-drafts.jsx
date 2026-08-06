/* why-drafts.jsx — Why bluedot 섹션 초안 3안 */
const { Container, Reveal, Kicker, MeshBg, GlowBg, DotGridBg, Icon, useIsMobile } = window;

function PlatformIcon({ name, size = 16 }) {
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

const PLATFORMS = [
{ icon: 'instagram', label: 'Instagram', sub: '릴스', color: '#F0679A', tint: 'rgba(225,48,108,0.16)' },
{ icon: 'youtube', label: 'YouTube', sub: '쇼츠', color: '#FF4B4B', tint: 'rgba(255,0,0,0.15)' },
{ icon: 'tiktok', label: 'TikTok', sub: '숏폼', color: '#25F4EE', tint: 'rgba(37,244,238,0.14)' },
{ icon: 'facebook', label: '메타 광고', sub: '타겟팅', color: '#4E8CFF', tint: 'rgba(24,119,242,0.18)' },
{ icon: 'db', label: 'DB 마케팅', sub: '전환', color: '#7C97FF', tint: 'rgba(21,71,255,0.18)' }];

const STEPS = [
{ tag: '1개월차', title: '노출 확보', desc: '한 달 만에 50~100만 명이 보는\n계정으로 만듭니다', gain: '원장님을 아는 사람이 늘어납니다' },
{ tag: '2~3개월차', title: '팔로워 확보', desc: '팔로워 4,000~6,000명까지 모읍니다.\n어뷰징은 절대 쓰지 않습니다', gain: '진짜 잠재 고객이 쌓입니다' },
{ tag: '4~6개월차', title: '문의 늘리기', desc: '프로모션 기획과 전환형 콘텐츠,\nDB 마케팅·메타 광고를 시작합니다', gain: '문의가 늘고 매출이 증대됩니다' },
{ tag: '6개월차~', title: '콘텐츠 자산화', desc: '모든 작업이 축적되어\n문의가 들어오는 구조가 완성됩니다', gain: '광고를 멈춰도 문의가 이어집니다' }];

const css = document.createElement('style');
css.textContent = `
.pf{display:inline-flex;align-items:center;gap:10px;padding:11px 18px 11px 14px;border-radius:999px;border:1px solid rgba(255,255,255,.14);background:rgba(255,255,255,.045);white-space:nowrap;transition:border-color .22s var(--ease-out),background .22s var(--ease-out),transform .22s var(--ease-out)}
.pf:hover{border-color:rgba(124,151,255,.55);background:rgba(21,71,255,.14)}
.pf-float{animation:drift 5.4s ease-in-out infinite}
.rail{position:relative;height:1px;background:rgba(255,255,255,.16)}
.rail::after{content:"";position:absolute;inset:0;transform-origin:left;transform:scaleX(0);background:linear-gradient(90deg,rgba(124,151,255,.2),var(--bd-blue) 60%,#7C97FF);transition:transform 1.6s var(--ease-out) .15s}
.reveal--in .rail::after{transform:scaleX(1)}
.vrail{position:relative;width:1px;background:rgba(255,255,255,.14)}
.vrail::after{content:"";position:absolute;inset:0;transform-origin:top;transform:scaleY(0);background:linear-gradient(180deg,var(--bd-blue),rgba(124,151,255,.25));transition:transform 1.8s var(--ease-out) .15s}
.reveal--in .vrail::after{transform:scaleY(1)}
.node{width:13px;height:13px;border-radius:999px;background:var(--bd-blue);flex:none;animation:dotPulse 3.2s ease-in-out infinite}
.mq{display:flex;gap:14px;width:max-content;animation:marquee 26s linear infinite}
.mq-wrap{overflow:hidden;-webkit-mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent);mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)}
.step-card{border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.035);border-radius:16px;padding:24px;transition:border-color .24s var(--ease-out),background .24s var(--ease-out),transform .24s var(--ease-out)}
.step-card:hover{border-color:rgba(124,151,255,.45);background:rgba(21,71,255,.1);transform:translateY(-3px)}
`;
document.head.appendChild(css);

function Tag({ children, active }) {
  return (
    <span style={{
      display: 'inline-block', padding: '5px 12px', borderRadius: 999,
      fontFamily: 'var(--font-sans)', fontSize: 12.5, fontWeight: 700, letterSpacing: '-0.01em',
      color: active ? '#fff' : 'rgba(255,255,255,0.62)',
      background: active ? 'var(--bd-blue)' : 'rgba(255,255,255,0.08)',
      border: `1px solid ${active ? 'transparent' : 'rgba(255,255,255,0.12)'}`
    }}>{children}</span>);
}

function Chip({ p, float, i }) {
  return (
    <span className={`pf${float ? ' pf-float' : ''}`} style={{ animationDelay: `${i * 0.55}s` }}>
      <span style={{
        width: 30, height: 30, borderRadius: 999, flex: 'none',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        background: p.tint, color: p.color
      }}><PlatformIcon name={p.icon} size={16} /></span>
      <span style={{ fontSize: 14.5, fontWeight: 700, letterSpacing: '-0.01em' }}>{p.label}</span>
      <span style={{ fontSize: 12.5, fontWeight: 500, color: 'rgba(255,255,255,0.42)' }}>{p.sub}</span>
    </span>);
}

function Lede({ isMobile }) {
  return (
    <div style={{ maxWidth: 640, fontSize: isMobile ? 16 : 'clamp(16px,1.6vw,19px)', lineHeight: 1.75, fontWeight: 500 }}>
      <p style={{ color: 'rgba(255,255,255,0.66)' }}>인스타그램부터 유튜브, 틱톡, 메타 광고, DB마케팅까지</p>
      <p style={{ marginTop: 6, color: '#fff', fontWeight: 700 }}>대표님의 고민과 전문직 유형에 따라<br />최적의 전략을 제시합니다.</p>
    </div>);
}

function Headline({ isMobile }) {
  return (
    <h2 style={{
      marginTop: 26, fontWeight: 800, letterSpacing: '-0.046em', lineHeight: 1.32, color: '#fff', maxWidth: 900,
      fontSize: isMobile ? 'clamp(30px,8.8vw,48px)' : 'clamp(42px,5.4vw,60px)'
    }}>
      그 고민,<br />
      <span style={{ background: 'linear-gradient(transparent 86%, rgba(255,228,92,0.85) 86%)', padding: '0 0.04em' }}>이렇게 해결합니다</span>
      <span style={{ color: 'var(--bd-blue-300)' }}>.</span>
    </h2>);
}

/* ============ A안 — 가로 레일 타임라인 ============ */
function DraftA() {
  const isMobile = useIsMobile();
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--grad-depth,#0A0E1A)', padding: `${isMobile ? 96 : 160}px 0` }}>
      <MeshBg opacity={0.06} />
      <GlowBg color="rgba(21,71,255,0.22)" cx="88%" cy="-10%" size="60%" />
      <Container style={{ position: 'relative', zIndex: 1 }}>
        <Reveal><Kicker label="Why bluedot" light /></Reveal>
        <Reveal delay={80}><Headline isMobile={isMobile} /></Reveal>
        <Reveal delay={200} style={{ marginTop: isMobile ? 32 : 44 }}><Lede isMobile={isMobile} /></Reveal>

        <Reveal delay={320} style={{ marginTop: isMobile ? 30 : 40 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            {PLATFORMS.map((p, i) => <Chip key={p.label} p={p} i={i} float />)}
          </div>
        </Reveal>

        {/* timeline */}
        <Reveal delay={200} style={{ marginTop: isMobile ? 64 : 104 }}>
          {isMobile ?
          <div style={{ display: 'flex', gap: 20 }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 6 }}>
                <div className="vrail" style={{ flex: 1 }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 34, flex: 1 }}>
                {STEPS.map((s, i) =>
              <div key={s.tag} style={{ position: 'relative' }}>
                    <span className="node" style={{ position: 'absolute', left: -26, top: 6, animationDelay: `${i * 0.4}s` }} />
                    <Tag active={i === STEPS.length - 1}>{s.tag}</Tag>
                    <h3 style={{ marginTop: 12, fontSize: 19, fontWeight: 700, letterSpacing: '-0.03em' }}>{s.title}</h3>
                    <p style={{ marginTop: 8, fontSize: 14.5, lineHeight: 1.65, color: 'rgba(255,255,255,0.55)', whiteSpace: 'pre-line' }}>{s.desc}</p>
                    <p style={{ marginTop: 10, fontSize: 14, fontWeight: 700, color: 'var(--bd-blue-300,#7C97FF)' }}>→ {s.gain}</p>
                  </div>
              )}
              </div>
            </div> :

          <div>
              <div style={{ display: 'grid', gridTemplateColumns: `repeat(${STEPS.length},1fr)`, gap: 24 }}>
                {STEPS.map((s) => <div key={s.tag}><Tag active={false}>{s.tag}</Tag></div>)}
              </div>
              <div style={{ position: 'relative', margin: '22px 0 26px' }}>
                <div className="rail" />
                <div style={{ position: 'absolute', inset: 0, display: 'grid', gridTemplateColumns: `repeat(${STEPS.length},1fr)`, alignItems: 'center' }}>
                  {STEPS.map((s, i) => <span key={s.tag} className="node" style={{ animationDelay: `${i * 0.4}s`, transform: 'translateY(-6px)' }} />)}
                </div>
                <span style={{ position: 'absolute', right: -4, top: -7, color: 'var(--bd-blue-300,#7C97FF)' }}><Icon name="chevron-right" size={16} /></span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: `repeat(${STEPS.length},1fr)`, gap: 24 }}>
                {STEPS.map((s) =>
              <div key={s.tag}>
                    <h3 style={{ fontSize: 19, fontWeight: 700, letterSpacing: '-0.03em' }}>{s.title}</h3>
                    <p style={{ marginTop: 10, fontSize: 14.5, lineHeight: 1.65, color: 'rgba(255,255,255,0.55)', whiteSpace: 'pre-line' }}>{s.desc}</p>
                    <p style={{ marginTop: 14, fontSize: 14, fontWeight: 700, color: 'var(--bd-blue-300,#7C97FF)' }}>→ {s.gain}</p>
                  </div>
              )}
              </div>
            </div>}
        </Reveal>
      </Container>
    </section>);
}

/* ============ B안 — 로고 티커 + 계단형 카드 ============ */
function DraftB() {
  const isMobile = useIsMobile();
  const loop = [...PLATFORMS, ...PLATFORMS, ...PLATFORMS, ...PLATFORMS];
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: '#080B14', padding: `${isMobile ? 96 : 160}px 0` }}>
      <DotGridBg opacity={0.18} />
      <GlowBg color="rgba(21,71,255,0.2)" cx="12%" cy="0%" size="55%" />
      <Container style={{ position: 'relative', zIndex: 1 }}>
        <Reveal><Kicker label="Why bluedot" light /></Reveal>
        <Reveal delay={80}><Headline isMobile={isMobile} /></Reveal>
        <Reveal delay={200} style={{ marginTop: isMobile ? 32 : 44 }}><Lede isMobile={isMobile} /></Reveal>
      </Container>

      <Reveal delay={280} className="mq-wrap" style={{ marginTop: isMobile ? 34 : 48 }}>
        <div className="mq">{loop.map((p, i) => <Chip key={i} p={p} i={0} />)}</div>
      </Reveal>

      <Container style={{ position: 'relative', zIndex: 1 }}>
        <Reveal delay={160} style={{ marginTop: isMobile ? 60 : 96 }}>
          <div style={{
            display: 'grid', gap: isMobile ? 16 : 18,
            gridTemplateColumns: isMobile ? '1fr' : `repeat(${STEPS.length},1fr)`,
            alignItems: 'end'
          }}>
            {STEPS.map((s, i) =>
            <div key={s.tag} className="step-card" style={{
              marginBottom: isMobile ? 0 : i * 26,
              borderColor: i === STEPS.length - 1 ? 'rgba(124,151,255,0.5)' : undefined,
              background: i === STEPS.length - 1 ? 'rgba(21,71,255,0.12)' : undefined
            }}>
                <Tag active={i === STEPS.length - 1}>{s.tag}</Tag>
                <h3 style={{ marginTop: 14, fontSize: isMobile ? 19 : 18.5, fontWeight: 700, letterSpacing: '-0.03em' }}>{s.title}</h3>
                <p style={{ marginTop: 10, fontSize: 14.5, lineHeight: 1.65, color: 'rgba(255,255,255,0.55)', whiteSpace: 'pre-line' }}>{s.desc}</p>
                <div style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(255,255,255,0.09)', display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                  <span style={{ color: 'var(--bd-blue-300,#7C97FF)', display: 'inline-flex', flex: 'none', marginTop: 2 }}><Icon name="check" size={15} /></span>
                  <span style={{ fontSize: 13.5, fontWeight: 700, lineHeight: 1.5, wordBreak: 'keep-all', minWidth: 0, color: 'var(--bd-blue-300,#7C97FF)' }}>{s.gain}</span>
                </div>
              </div>
            )}
          </div>
        </Reveal>
      </Container>
    </section>);
}

/* ============ C안 — 좌측 고정 카피 + 우측 세로 타임라인 ============ */
function DraftC() {
  const isMobile = useIsMobile();
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--grad-depth,#0A0E1A)', padding: `${isMobile ? 96 : 160}px 0` }}>
      <MeshBg opacity={0.05} />
      <GlowBg color="rgba(21,71,255,0.24)" cx="20%" cy="110%" size="65%" />
      <Container style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '0.92fr 1fr', gap: isMobile ? 56 : 72, alignItems: 'start' }}>
          <div style={isMobile ? undefined : { position: 'sticky', top: 96 }}>
            <Reveal><Kicker label="Why bluedot" light /></Reveal>
            <Reveal delay={80}><Headline isMobile={isMobile} /></Reveal>
            <Reveal delay={200} style={{ marginTop: 32 }}><Lede isMobile={isMobile} /></Reveal>
            <Reveal delay={300} style={{ marginTop: 28 }}>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : '1fr 1fr', gap: 10 }}>
                {PLATFORMS.map((p, i) =>
                <span key={p.label} className="pf pf-float" style={{ animationDelay: `${i * 0.6}s`, justifyContent: 'flex-start' }}>
                    <span style={{
                    width: 30, height: 30, borderRadius: 999, flex: 'none',
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    background: p.tint, color: p.color
                  }}><PlatformIcon name={p.icon} size={16} /></span>
                    <span style={{ fontSize: 14, fontWeight: 700, letterSpacing: '-0.01em' }}>{p.label}</span>
                  </span>
                )}
              </div>
            </Reveal>
          </div>

          <Reveal delay={160}>
            <div style={{ display: 'flex', gap: 22 }}>
              <div style={{ display: 'flex', flexDirection: 'column', paddingTop: 8 }}>
                <div className="vrail" style={{ flex: 1 }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? 30 : 40, flex: 1, minWidth: 0 }}>
                {STEPS.map((s, i) =>
                <div key={s.tag} style={{ position: 'relative' }}>
                    <span className="node" style={{ position: 'absolute', left: -28, top: 7, animationDelay: `${i * 0.4}s` }} />
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, flexWrap: 'wrap' }}>
                      <Tag active={i === STEPS.length - 1}>{s.tag}</Tag>
                      <h3 style={{ fontSize: isMobile ? 19 : 21, fontWeight: 700, letterSpacing: '-0.03em' }}>{s.title}</h3>
                    </div>
                    <p style={{ marginTop: 10, fontSize: 15, lineHeight: 1.7, color: 'rgba(255,255,255,0.55)', whiteSpace: 'pre-line' }}>{s.desc}</p>
                    <p style={{ marginTop: 10, fontSize: 14, fontWeight: 700, color: 'var(--bd-blue-300,#7C97FF)' }}>→ {s.gain}</p>
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>);
}

function Label({ n, title, note }) {
  return (
    <div className="draft-label">
      <span>{n}</span><b>{title}</b>
      <span style={{ letterSpacing: 0, textTransform: 'none', fontFamily: 'var(--font-sans)', color: 'rgba(255,255,255,0.45)', fontSize: 13 }}>{note}</span>
    </div>);
}

function App() {
  return (
    <div>
      <Label n="A안" title="가로 레일 타임라인" note="한 줄 선 위에 시간 흐름 · 모바일은 세로 전환" />
      <DraftA />
      <Label n="B안" title="로고 티커 + 계단형 카드" note="플랫폼 로고가 흐르고, 카드가 우상향으로 상승" />
      <DraftB />
      <Label n="C안" title="좌측 고정 카피 + 세로 타임라인" note="카피는 고정, 오른쪽 타임라인만 스크롤" />
      <DraftC />
    </div>);
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
