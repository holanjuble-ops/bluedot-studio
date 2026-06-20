/* ============================================================
   sections-b.jsx — Why (bridge), Results, Formula
   ============================================================ */

/* ---------------- Bridge: 왜 블루닷인가 ---------------- */
function Bridge() {
  const isMobile = window.useIsMobile();
  const { Container, Reveal, Dot } = window;
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--grad-depth)', color: '#fff', padding: `${isMobile ? 104 : 176}px 0` }}>
      <window.MeshBg opacity={0.06} />
      <window.GlowBg color="rgba(21,71,255,0.22)" cx="88%" cy="-10%" size="60%" />
      <Container style={{ position: 'relative', zIndex: 1 }}>
        <Reveal>
          <window.Kicker label="Why bluedot" light />
        </Reveal>

        <Reveal delay={80}>
          <h2 style={{
            marginTop: 26, fontWeight: 800, letterSpacing: '-0.046em', lineHeight: 1.32,
            color: '#fff', maxWidth: 900,
            fontSize: isMobile ? 'clamp(30px, 8.8vw, 48px)' : 'clamp(42px, 5.4vw, 60px)'
          }}>
            그 고민,<br />
            <span style={{
              background: 'linear-gradient(transparent 86%, rgba(255,228,92,0.85) 86%)',
              padding: '0 0.04em', color: '#fff'
            }}>우리가 해결합니다</span>
            <span style={{ color: 'var(--bd-blue-300)' }}>.</span>
          </h2>
        </Reveal>

        <div style={{
          marginTop: isMobile ? 36 : 52, maxWidth: 620,
          fontSize: 'clamp(16px, 1.6vw, 19px)', lineHeight: 1.7, fontWeight: 500
        }}>
          <Reveal delay={120}>
            <p style={{ color: 'rgba(255,255,255,0.62)' }}>마케팅의 시작부터 끝까지.</p>
          </Reveal>
          <Reveal delay={260}>
            <p style={{ marginTop: 6, color: 'rgba(255,255,255,0.62)' }}>원장님의 전문성을 제대로 담고,

            </p>
          </Reveal>
          <Reveal delay={400}>
            <p style={{ marginTop: 6, color: '#fff', fontWeight: 700 }}>
              그 결과가 매출로 이어지도록 만듭니다.
            </p>
          </Reveal>
        </div>
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
  after: ['평균 조회수', '7.5만회'],
  chips: ['팔로워 +1,400명', '문의 3배 증가']
},
{
  code: 'CASE 02', client: '강남 다이어트 한의원', vertical: '한의원',
  slots: ['case-gangnam-b', 'case-gangnam-a1', 'case-gangnam-a2'],
  images: ['images/case-gangnam-before.png', 'images/case-gangnam-after1.png', 'images/case-gangnam-after2.png'],
  before: ['평균 조회수', '6,000회'],
  after: ['영상 2개로', '95만+회'],
  chips: ['팔로워 +3,000명', '예약 문의 급증']
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
          <Reveal delay={140}>
            <p style={{ marginTop: 18, lineHeight: 1.6, color: 'var(--fg-2)', fontWeight: 500, fontSize: isMobile ? '16px' : 'clamp(17px, 1.4vw, 19px)' }}>
              화려한 수식어 대신,<br />실제 클라이언트의 결과를 보여드립니다.
            </p>
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
              { name: '박성찬 | 전문직 마케팅', handle: '@chanseong_park', slot: 'ch-chanseong', image: 'images/profile-chanseong.jpg', stats: [['8', '게시물'], ['1.2만', '팔로워'], ['40', '팔로잉']] },
              { name: '매일 성장하는 남자 | 피트니스', handle: '@bluedot_bro', slot: 'ch-dongsaeng', image: 'images/profile-dongsaeng.jpg', stats: [['31', '게시물'], ['1.1만', '팔로워'], ['21', '팔로잉']] }].
              map((p) =>
              <div key={p.slot} style={{
                flex: 1, minWidth: 0, background: '#fff', borderRadius: 'var(--r-md)',
                padding: '18px 22px', boxShadow: 'var(--shadow-2)',
                display: 'flex', alignItems: 'center', gap: 28
              }}>
                  <div style={{
                  flex: 'none', width: 64, height: 64, borderRadius: 'var(--r-pill)', overflow: 'hidden',
                  border: '1px solid var(--bd-gray-100)', background: 'var(--bd-gray-50)'
                }}>
                    <img src={p.image} alt={p.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 14.5, fontWeight: 700, color: 'var(--bd-ink)', letterSpacing: '-0.01em', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.name}</div>
                    <div style={{
                    marginTop: 10, display: 'flex', gap: 22
                  }}>
                      {p.stats.map(([n, l]) =>
                    <div key={l} style={{ textAlign: 'left' }}>
                          <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 15, color: 'var(--bd-ink)', letterSpacing: '-0.02em', lineHeight: 1.1, whiteSpace: 'nowrap' }}>{n}</div>
                          <div style={{ fontSize: 10.5, color: 'var(--bd-gray-500)', marginTop: 3, fontWeight: 500, whiteSpace: 'nowrap' }}>{l}</div>
                        </div>
                    )}
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