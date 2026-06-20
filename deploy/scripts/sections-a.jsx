/* ============================================================
   sections-a.jsx — Header, Hero, Problem (typing)
   ============================================================ */

const { Logo, Button, Eyebrow, Dot } = window;

/* ---------------- Header (sticky) ---------------- */
function Header() {
  const isMobile = window.useIsMobile();
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onS = () => setScrolled(window.scrollY > 8);
    onS();
    window.addEventListener('scroll', onS, { passive: true });
    return () => window.removeEventListener('scroll', onS);
  }, []);

  const navItems = ['성과 사례', '3단계 공식', '프로세스', 'FAQ'];
  const navIds = ['results', 'formula', 'process', 'faq'];

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(250,250,250,0.95)',
      backdropFilter: 'saturate(180%) blur(14px)',
      WebkitBackdropFilter: 'saturate(180%) blur(14px)',
      borderBottom: '1px solid #E6E7EB',
      transition: 'border-color 0.2s var(--ease-out)'
    }}>
      <div style={{
        maxWidth: 1020, margin: '0 auto', padding: `0 ${isMobile ? 20 : 32}px`,
        height: isMobile ? 56 : 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between'
      }}>
        <a href="#top" className="link-ul" onClick={(e) => {e.preventDefault();window.scrollTo({ top: 0, behavior: 'smooth' });}}>
          <window.BdLogo size={isMobile ? 21 : 24} />
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? 0 : 4 }}>
          <a href="column/column.html"
          style={{ marginRight: isMobile ? 16 : 22, fontSize: 15, fontWeight: 600, color: 'var(--fg-2)', letterSpacing: '0.005em', padding: '0 6px', textDecoration: 'none', transition: 'color 0.14s' }}
          onMouseEnter={(e) => {e.currentTarget.style.color = 'var(--bd-ink)';}}
          onMouseLeave={(e) => {e.currentTarget.style.color = 'var(--fg-2)';}}>
            칼럼</a>
          <button
            onClick={() => window.scrollToId('cta')}
            style={{
              marginLeft: isMobile ? 0 : 18,
              background: '#0F1F3D', color: '#fff',
              border: 'none', borderRadius: 6,
              padding: isMobile ? '8px 14px' : '9px 18px',
              fontSize: isMobile ? 13 : 13.5,
              fontFamily: 'var(--font-sans)', fontWeight: 600,
              letterSpacing: '-0.005em', cursor: 'pointer',
              display: 'inline-flex', alignItems: 'center', gap: 7,
              transition: 'background 0.14s', lineHeight: 1
            }}
            onMouseEnter={(e) => {e.currentTarget.style.background = '#1a3360';}}
            onMouseLeave={(e) => {e.currentTarget.style.background = '#0F1F3D';}}>
            
            빠른 상담
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12,5 19,12 12,19" />
            </svg>
          </button>
        </div>
      </div>
    </header>);

}

/* ---------------- Hero ---------------- */
function ReelFrame({ width, caption }) {
  return (
    <div style={{
      position: 'relative', width, aspectRatio: '9 / 16',
      borderRadius: 'var(--r-md)', overflow: 'hidden',
      background: 'linear-gradient(180deg, #16224A 0%, #0A1330 100%)',
      border: '1px solid rgba(255,255,255,0.10)',
      boxShadow: 'var(--shadow-soft-lg)'
    }}>
      {/* drop a real studio clip / reel thumbnail here */}
      <image-slot id="hero-reel" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      shape="rect" fit="cover" placeholder="스튜디오 촬영 컷을 올려보세요"></image-slot>
      <div className="reel-sheen"></div>
      {/* top chrome */}
      <div style={{
        position: 'absolute', top: 14, left: 14, right: 14, display: 'flex',
        alignItems: 'center', justifyContent: 'space-between', pointerEvents: 'none',
        fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600, color: '#fff', letterSpacing: '0.04em'
      }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          <span className="rec-dot" style={{ width: 8, height: 8, borderRadius: 999, background: '#FF4D4D' }}></span>
          REC
        </span>
        <span style={{ opacity: 0.8 }}>09:16</span>
      </div>
      {/* equalizer */}
      <div className="eq" style={{
        position: 'absolute', bottom: 18, left: 16, display: 'flex', alignItems: 'flex-end',
        gap: 4, height: 34, pointerEvents: 'none'
      }}>
        {[0, 1, 2, 3, 4].map((i) =>
        <span key={i} style={{ animationDelay: `${i * 0.13}s`, height: '40%' }}></span>
        )}
      </div>
      <div style={{
        position: 'absolute', bottom: 16, right: 16, pointerEvents: 'none',
        fontFamily: 'var(--font-mono)', fontSize: 11, color: 'rgba(255,255,255,0.75)'
      }}>{caption}</div>
    </div>);

}

function Hero() {
  const isMobile = window.useIsMobile();
  const videoRef = React.useRef(null);
  React.useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true; // muted is required for autoplay
    const p = v.play();
    if (p && p.catch) p.catch(() => {}); // ignore autoplay-policy rejections
  }, []);
  return (
    <section id="top" style={{
      position: 'relative', overflow: 'hidden', color: '#fff',
      minHeight: isMobile ? '72vh' : '78vh',
      display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'stretch',
      background: 'var(--grad-depth)',
      paddingTop: isMobile ? 100 : 116, paddingBottom: isMobile ? 92 : 108
    }}>
      {/* full-bleed background video — drop an mp4 named hero-bg.mp4 into the
                        project root (optional hero-poster.jpg shows on the first frame / fallback).
                        With no file present the navy depth gradient below shows through. */}
      <video ref={videoRef} autoPlay muted loop playsInline preload="auto"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}>
        <source src="https://res.cloudinary.com/dkvhm32nn/video/upload/v1781437857/0614_1_uqvmpm.mp4" type="video/mp4" />
      </video>
      {/* cinematic dark overlay keeps white copy legible over any clip */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'rgba(0,0,0,0.48)' }}></div>
      {/* diagonal navy panel anchors the left-aligned copy (reference look) */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'linear-gradient(100deg, rgba(4,9,24,0.92) 0%, rgba(5,11,30,0.74) 40%, rgba(3,7,18,0.28) 74%, rgba(3,7,18,0.5) 100%)' }}></div>
      {/* slow studio light sweep — rings removed for cleaner premium look */}
      <div className="hero-sweep"></div>
      <window.GlowBg color="rgba(21,71,255,0.18)" cx="18%" cy="118%" size="60%" />

      {/* content */}
      <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: 1020, margin: '0 auto', marginTop: isMobile ? -90 : -140, padding: `0 ${isMobile ? 20 : 32}px` }}>
        <window.Reveal>
          <window.Kicker label="전문직 숏폼 마케팅" light mono={false} lineWidth={40} style={{ letterSpacing: '0.28em' }} />
        </window.Reveal>

        <window.Reveal delay={120}>
          <h1 style={{
            marginTop: 30,
            fontSize: isMobile ? 'clamp(34px, 9vw, 50px)' : 'clamp(52px, 6.4vw, 72px)',
            lineHeight: 1.28, letterSpacing: '-0.046em', maxWidth: 960
          }}>
            <span style={{ fontWeight: 700, display: 'block' }}>우리가 하면</span>
            <span style={{ fontWeight: 900, display: 'block', whiteSpace: 'nowrap' }}>
              매출이{' '}
              <span style={{
                background: '#F4D35E',
                color: 'var(--bd-ink)',
                padding: '0.02em 0.18em',
                borderRadius: 7,
                WebkitBoxDecorationBreak: 'clone',
                boxDecorationBreak: 'clone'
              }}>확실히</span>
              {' '}오릅니다<span style={{ color: "rgb(110, 139, 255)" }}>.</span>
            </span>
          </h1>
        </window.Reveal>

        <window.Reveal delay={220}>
          <p style={{
            marginTop: 26, fontSize: 'clamp(18px, 1.9vw, 22px)', lineHeight: 1.6,
            color: 'rgba(255,255,255,0.74)', fontWeight: 500, maxWidth: 520, letterSpacing: '-0.01em',
            display: 'none'
          }}>
            근거 없는 자신감이 아닙니다.
          </p>
        </window.Reveal>
      </div>

      {/* sub-copy + scroll arrow — bob together */}
      <window.Reveal delay={340} style={{ position: 'absolute', left: '50%', bottom: isMobile ? 36 : 44, transform: 'translateX(-50%)', zIndex: 3 }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, animation: 'bd-scrollbob 1.8s var(--ease-in-out) infinite' }}>
          <p style={{ ...{ margin: 0, letterSpacing: '-0.01em', whiteSpace: 'nowrap', textAlign: 'center', fontWeight: "600", color: "rgba(255, 255, 255, 0.898)" }, fontSize: isMobile ? '17px' : '19px' }}>이렇게 자신하는 이유가 뭘까요?

          </p>
          <button className="hero-scroll-bare" aria-label="다음 섹션으로 이동"
          style={{ animation: 'none' }}
          onClick={() => window.scrollToId('stats')}>
            <window.Icon name="chevron-down" size={20} color="currentColor" />
          </button>
        </div>
      </window.Reveal>
    </section>);

}

/* ---------------- Stat strip (below hero) ---------------- */
function StatStrip() {
  const isMobile = window.useIsMobile();
  const { Container, Reveal } = window;
  const stats = [['1억+', '누적 조회수'], ['10만+', '누적 팔로워'], ['2.4x', '문의 전환율']];
  const renderN = (n) => {
    const m = n.match(/^(.*?)([+x])$/);
    if (!m) return n;
    return <>{m[1]}<span style={{ fontSize: '0.52em', fontWeight: 600, verticalAlign: 'middle' }}>{m[2]}</span></>;
  };
  return (
    <section id="stats" style={{ background: '#02040B', borderTop: '1px solid rgba(255,255,255,0.06)', padding: isMobile ? '32px 0' : '44px 0' }}>
      <Container>
        <Reveal>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'stretch' }}>
            {stats.map(([n, l], i) =>
            <div key={l} style={{
              flex: 1, maxWidth: 240, textAlign: 'center',
              padding: isMobile ? '0 6px' : '0 24px',
              borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.14)' : 'none'
            }}>
                <div style={{
                fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'rgba(255,255,255,0.92)',
                fontSize: isMobile ? 'clamp(22px, 6vw, 28px)' : 'clamp(28px, 2.8vw, 36px)',
                lineHeight: 1, letterSpacing: '-0.03em'
              }}>{renderN(n)}</div>
                <div style={{
                marginTop: isMobile ? 8 : 11, fontSize: isMobile ? 11.5 : 13,
                fontWeight: 500, color: 'rgba(255,255,255,0.55)', letterSpacing: '0.01em'
              }}>{l}</div>
              </div>
            )}
          </div>
        </Reveal>
      </Container>
    </section>);

}

/* ---------------- Problem (typing) ---------------- */
function Problem() {
  const isMobile = window.useIsMobile();
  const { Section, Container, Reveal } = window;
  const phrases = [
  '마케팅 고민이 많아요..',
  '뭘 올려야 할지 모르겠어요..',
  '콘텐츠가 내 전문성을 담지 못해요..',
  '조회수는 나오는데, 문의가 없어요..'];

  return (
    <Section bg="white" id="problem" pad={isMobile ? 76 : 112} style={{ position: 'relative', overflow: 'hidden' }}>
      <window.GridBg opacity={0.7} gap={60} />
      <Container style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center' }}>
          <Reveal>
            <span style={{ display: 'inline-flex', justifyContent: 'center' }}>
              <window.Kicker label="The Problem" />
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 style={{
              marginTop: 14, fontWeight: 600,
              letterSpacing: '-0.025em', color: 'var(--bd-ink-soft)', lineHeight: 1.4, fontSize: "21px"
            }}>혹시 이런 고민이 있으신가요?

            </h2>
          </Reveal>

          <Reveal delay={160}>
            <div style={{
              marginTop: isMobile ? 30 : 44, minHeight: isMobile ? 104 : 132,
              display: 'flex', alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{
                display: 'flex', alignItems: 'flex-start', gap: isMobile ? 8 : 16,
                fontWeight: 700, letterSpacing: '-0.04em', color: 'var(--bd-blue)',
                fontSize: 'clamp(24px, 3.6vw, 38px)', lineHeight: 1.22,
                textAlign: 'left', wordBreak: 'keep-all'
              }}>
                <span style={{ color: 'var(--bd-line-strong)', fontWeight: 600 }}>[</span>
                <span style={{ flex: 1, minWidth: 0 }}><window.Typewriter phrases={phrases} /></span>
                <span style={{ color: 'var(--bd-line-strong)', fontWeight: 600 }}>]</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={220}>
            <p style={{
              marginTop: isMobile ? 32 : 44,
              color: 'var(--fg-2)', fontWeight: 500, lineHeight: 1.55, fontSize: "16px"
            }}>
              이 중 하나라도 해당된다면,<br />잘 찾아오셨습니다.
            </p>
          </Reveal>
        </div>
      </Container>
    </Section>);

}

Object.assign(window, { Header, Hero, StatStrip, Problem });