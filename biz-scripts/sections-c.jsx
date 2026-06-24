/* ============================================================
   sections-c.jsx — Process, FAQ, Final CTA (form), Footer, MobileBar
   ============================================================ */

/* ---------------- Process ---------------- */
const PROCESS = [
{ n: '01', icon: 'pen-tool', t: '기획', d: ['업종, 상권, 경쟁 매장을 분석해', '조회수와 방문을 만드는 콘텐츠를 설계합니다.'], note: '* 업종 트렌드와 상권을 분석해 기획합니다.' },
{ n: '02', icon: 'video', t: '촬영', d: ['대본과 촬영 가이드를 보내드립니다.', '직접 촬영해서 저희에게 보내주세요.'] },
{ n: '03', icon: 'scissors', t: '편집', d: ['후킹 3초·자막·BGM까지', '알고리즘에 최적화된 영상으로 완성합니다.'] },
{ n: '04', icon: 'upload', t: '업로드', d: ['완성된 영상과 캡션을 전달드립니다.', '검수 후 업로드만 해주시면 됩니다.'] }];


function Process() {
  const isMobile = window.useIsMobile();
  const { Container, Reveal, Dot } = window;
  return (
    <section id="process" style={{ position: 'relative', overflow: 'hidden', background: 'var(--bd-paper)', borderTop: '1px solid var(--bd-line)', padding: `${isMobile ? 104 : 168}px 0` }}>
      <window.DiagBg opacity={0.6} color="rgba(10,19,48,0.05)" gap={16} />
      <Container style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 760, marginBottom: isMobile ? 44 : 64 }}>
          <Reveal>
            <window.Kicker label="Process" />
          </Reveal>
          <Reveal delay={80}>
            <h2 style={{ marginTop: 16, fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.18, color: 'var(--bd-ink)', fontSize: isMobile ? '34px' : 'clamp(40px, 3.4vw, 52px)' }}>
              <span style={{ background: 'linear-gradient(transparent 86%, var(--bd-highlight) 86%)', padding: '0 0.02em' }}>하루 20분</span>만 투자하세요.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p style={{ marginTop: 18, lineHeight: 1.6, color: 'var(--fg-2)', fontWeight: 500, fontSize: isMobile ? '18px' : 'clamp(18px, 1.5vw, 20px)' }}>
              복잡한 과정은 모두 저희가 진행합니다.
            </p>
          </Reveal>
        </div>

        <div style={{
          display: 'flex', flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'stretch', gap: 0
        }}>
          {PROCESS.map((s, i) =>
          <React.Fragment key={s.n}>
              <Reveal delay={i * 90} style={{ flex: 1 }}>
                <div style={{
                background: '#fff', border: '1px solid var(--bd-line)', borderRadius: 'var(--r-lg)',
                padding: isMobile ? '26px 24px' : '32px 28px', height: '100%',
                boxShadow: 'var(--shadow-soft-lg)'
              }}>
                  <div style={{
                  width: 48, height: 48, borderRadius: 'var(--r-sm)', background: 'var(--bd-blue-50)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                    <window.Icon name={s.icon} size={24} color="var(--bd-blue)" />
                  </div>
                  <div style={{ marginTop: 22, display: 'flex', alignItems: 'baseline', gap: 10 }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'var(--bd-blue)', fontSize: "14px" }}>{s.n}</span>
                    <h3 style={{ fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--bd-ink)', fontSize: "17px" }}>{s.t}</h3>
                  </div>
                  <p style={{ marginTop: 12, lineHeight: 1.65, color: 'var(--fg-2)', fontSize: "15px" }}>{s.d.map((line, j) => <React.Fragment key={j}>{j > 0 && <br />}{line}</React.Fragment>)}</p>
                  {s.note &&
                <p style={{
                  marginTop: 10, lineHeight: 1.5, fontWeight: 600,
                  letterSpacing: '-0.01em', wordBreak: 'keep-all', color: "rgb(189, 34, 34)", fontSize: "14px"
                }}>{s.note}</p>}
                </div>
              </Reveal>
              {i < PROCESS.length - 1 &&
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: isMobile ? '8px 0' : '0 6px', color: 'var(--bd-line-strong)'
            }}>
                  <window.Icon name={isMobile ? 'chevron-down' : 'chevron-right'} size={22} color="var(--bd-line-strong)" />
                </div>
            }
            </React.Fragment>
          )}
        </div>
      </Container>
    </section>);

}

/* ---------------- FAQ ---------------- */
const FAQS = [
{ q: '카메라가 어색해도 괜찮나요?', a: ['네, 괜찮습니다.', '', '촬영 전 가이드를 제공하며, 대본을 보고 한 문장씩 편하게 촬영합니다.', '말주변이 없어도 걱정하지 않으셔도 됩니다.'] },
{ q: '우리 가게랑 안 어울릴까 걱정돼요.', a: ['매장의 분위기와 톤에 맞춰 제작합니다.', '과한 연출 대신, 손님이 실제로 반응하는 콘텐츠를 만듭니다.'] },
{ q: '성과는 언제부터 나오나요?', a: ['보통 1~3개월 정도 소요됩니다.', '', '콘텐츠가 쌓이고 채널이 성장하면서, 꾸준히 매출로 이어지는 구조가 만들어집니다.'] }];


function FaqItem({ item, open, onToggle }) {
  return (
    <div className="faq-item">
      <button className="faq-q" onClick={onToggle} aria-expanded={open}>
        <span style={{ fontWeight: 600, letterSpacing: '-0.01em', color: open ? 'var(--bd-blue)' : 'var(--bd-ink)', transition: 'color 0.2s var(--ease-out)', fontSize: "18px" }}>
          {item.q}
        </span>
        <span className={`faq-icon ${open ? 'open' : ''}`}>
          <window.Icon name="plus" size={24} color={open ? 'var(--bd-blue)' : 'var(--bd-gray-500)'} />
        </span>
      </button>
      <div className={`faq-a-wrap ${open ? 'open' : ''}`}>
        <div className="faq-a-inner">
          <p style={{ padding: '0 4px 28px', lineHeight: 1.75, color: 'var(--fg-2)', maxWidth: 720, fontWeight: 400, fontSize: "15px" }}>
            {item.a.map((line, k) => <React.Fragment key={k}>{k > 0 && <br />}{line}</React.Fragment>)}
          </p>
        </div>
      </div>
    </div>);

}

function Faq() {
  const isMobile = window.useIsMobile();
  const { Section, Container, Reveal, Dot } = window;
  const [open, setOpen] = React.useState(0);
  return (
    <Section bg="white" id="faq">
      <Container>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '0.8fr 1.2fr', gap: isMobile ? 36 : 64, alignItems: 'start' }}>
          <div>
            <Reveal>
              <window.Kicker label="FAQ" />
            </Reveal>
            <Reveal delay={80}>
              <h2 style={{ marginTop: 16, fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.18, color: 'var(--bd-ink)', fontSize: isMobile ? '32px' : 'clamp(40px, 3.4vw, 52px)' }}>
                자주 묻는 질문
              </h2>
            </Reveal>
          </div>
          <Reveal delay={120} style={{ marginTop: isMobile ? 0 : 37 }}>
            <div style={{ borderTop: '1px solid var(--bd-line)' }}>
              {FAQS.map((f, i) =>
              <FaqItem key={i} item={f} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
              )}
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>);

}

/* ---------------- Final CTA + form ---------------- */
function Field({ label, required = true, children }) {
  return (
    <label style={{ display: 'block' }}>
      <span style={{ display: 'block', fontWeight: 600, color: 'var(--bd-ink-soft)', marginBottom: 8, fontSize: '15px' }}>
        {label}{required && <span style={{ color: '#E53535', marginLeft: 3, fontWeight: 700 }}>*</span>}
      </span>
      {children}
    </label>);

}

/* ── KakaoTalk 상담 채널 ──────────────────────────────────────
   아래 URL을 실제 카카오톡 채널 채팅 주소로 교체하세요.
   (카카오 채널 관리자센터 → 채널 URL → "채팅" 링크)
   ─────────────────────────────────────────────────────────── */
const KAKAO_URL = 'http://pf.kakao.com/_IgEXX/chat';

function FinalCta() {
  const isMobile = window.useIsMobile();
  const { Container, Reveal } = window;
  return (
    <section id="cta" style={{ position: 'relative', overflow: 'hidden', background: 'var(--grad-depth)', color: '#fff', padding: `${isMobile ? 104 : 168}px 0` }}>
      <window.GridBg opacity={1} color="rgba(255,255,255,0.10)" gap={64} />
      <window.GlowBg color="rgba(21,71,255,0.26)" cx="80%" cy="115%" size="62%" />
      <Container style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 36 : 64, alignItems: 'center' }}>
          {/* copy */}
          <div>
            <Reveal>
              <window.Kicker label="무료 상담" light mono={false} />
            </Reveal>
            <Reveal delay={80}>
              <h2 style={{ marginTop: 24, fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.22, color: '#fff', fontSize: isMobile ? '32px' : 'clamp(40px, 3.4vw, 52px)' }}>
                지금 바로<br />무료상담 받아보세요
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p style={{ marginTop: 26, lineHeight: 1.8, maxWidth: 420, fontSize: '16px', color: 'rgba(255, 255, 255, 0.804)', fontWeight: '400' }}>
                <span style={{ color: '#F4D35E', fontWeight: 700 }}>억지 영업은 하지 않습니다.</span><br />현재 상황을 함께 살펴보고,<br />가장 효과적인 방향을 제안해드립니다.
              </p>
            </Reveal>
          </div>

          {/* kakao CTA card */}
          <Reveal delay={160}>
            <div style={{ background: '#fff', borderRadius: 'var(--r-lg)', padding: isMobile ? '28px 24px' : '36px 36px', boxShadow: 'var(--shadow-xl)', display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div>
                <h3 style={{ fontSize: isMobile ? 20 : 22, fontWeight: 700, letterSpacing: '-0.025em', color: 'var(--bd-ink)', lineHeight: 1.35 }}>카카오톡으로 바로 상담</h3>
                <p style={{ marginTop: 10, fontSize: 14.5, lineHeight: 1.65, color: 'var(--fg-2)', fontWeight: 500 }}>
                  버튼을 누르면 채팅창이 열립니다.
                </p>
              </div>
              <a href={KAKAO_URL} target="_blank" rel="noopener noreferrer" style={{
                width: '100%', height: 54, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                border: 'none', borderRadius: 'var(--r-pill)', textDecoration: 'none',
                background: 'var(--bd-blue)', color: '#fff', fontSize: 15.5, fontWeight: 700, letterSpacing: '-0.01em',
                transition: 'background 0.2s var(--ease-out)'
              }}
              onMouseEnter={(e) => {e.currentTarget.style.background = 'var(--bd-blue-700)';}}
              onMouseLeave={(e) => {e.currentTarget.style.background = 'var(--bd-blue)';}}>
                <window.Icon name="message-circle" size={20} color="#fff" />
                카카오톡 상담하기
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>);

}

/* ---------------- Sticky KakaoTalk 버튼 (데스크탑) ---------------- */
function StickyKakao() {
  const isMobile = window.useIsMobile();
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    const onS = () => setShow(window.scrollY > 480);
    onS();
    window.addEventListener('scroll', onS, { passive: true });
    return () => window.removeEventListener('scroll', onS);
  }, []);
  if (isMobile) return null;
  return (
    <a href={KAKAO_URL} target="_blank" rel="noopener noreferrer" style={{
      position: 'fixed', right: 28, bottom: 28, zIndex: 60,
      display: 'inline-flex', alignItems: 'center', gap: 10,
      height: 56, padding: '0 24px', borderRadius: 'var(--r-pill)',
      background: 'var(--bd-blue)', color: '#fff', textDecoration: 'none',
      fontSize: 15.5, fontWeight: 700, letterSpacing: '-0.01em',
      boxShadow: 'var(--shadow-xl)',
      transform: show ? 'translateY(0)' : 'translateY(160%)',
      opacity: show ? 1 : 0,
      transition: 'transform 0.32s var(--ease-out), opacity 0.32s var(--ease-out), background 0.2s var(--ease-out)'
    }}
    onMouseEnter={(e) => {e.currentTarget.style.background = 'var(--bd-blue-700)';}}
    onMouseLeave={(e) => {e.currentTarget.style.background = 'var(--bd-blue)';}}>
      <window.Icon name="message-circle" size={20} color="#fff" />
      카카오톡 상담하기
    </a>);

}

/* ---------------- Footer ---------------- */
function SiteFooter() {
  const isMobile = window.useIsMobile();
  const { Container } = window;
  const inCol = typeof location !== 'undefined' && /\/column\//.test(location.pathname);
  const ctaHref = inCol ? '../index.html#cta' : '#cta';
  return (
    <footer style={{ background: '#1A1C22', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: isMobile ? 56 : 80, paddingBottom: isMobile ? 96 : 80 }}>
      <Container>
        {/* 상단: 3단 (브랜드 | 서비스 소개 | 사업자 정보) */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr 1fr', gap: isMobile ? 36 : 40, paddingBottom: isMobile ? 36 : 48, alignItems: 'start' }}>
          {/* 브랜드 블록 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <window.BdLogo light size={26} />
          <p style={{ margin: 0, fontSize: 13.5, color: 'rgba(255,255,255,0.38)', fontWeight: 500, lineHeight: 1.6, letterSpacing: '-0.005em' }}>
            사업자 숏폼 마케팅 에이전시.
          </p>
          </div>

          {/* 서비스 소개 */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left', gap: 12 }}>
            <p style={{ margin: 0, marginBottom: 4, fontSize: 13.5, fontWeight: 700, letterSpacing: '-0.005em', color: 'rgba(255,255,255,0.92)' }}>서비스 소개</p>
            {[{ label: '전문직 마케팅', href: 'pro.html' }, { label: '사업자 마케팅', href: 'business.html' }].map((l) =>
            <a key={l.href} href={(inCol ? '../' : '') + l.href} style={{
              fontSize: 14, fontWeight: 500, color: 'rgba(255,255,255,0.7)', textDecoration: 'none',
              letterSpacing: '-0.005em', transition: 'color 0.14s'
            }}
            onMouseEnter={(e) => {e.currentTarget.style.color = '#fff';}}
            onMouseLeave={(e) => {e.currentTarget.style.color = 'rgba(255,255,255,0.7)';}}>{l.label}</a>
            )}
          </div>

          {/* 사업자 정보 */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left', gap: 8 }}>
            <p style={{ margin: 0, marginBottom: 4, fontSize: 13.5, fontWeight: 700, letterSpacing: '-0.005em', color: 'rgba(255,255,255,0.92)' }}>사업자 정보</p>
            <span style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.5)', fontWeight: 500, letterSpacing: '-0.005em' }}>상호명: 블루닷스튜디오</span>
            <span style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.5)', fontWeight: 500, letterSpacing: '-0.005em' }}>사업자등록번호: 601-38-81089</span>
            <span style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.5)', fontWeight: 500, letterSpacing: '-0.005em' }}>주소: 경기도 성남시 단대동 100</span>
          </div>
        </div>

        {/* 하단 바: 저작권 (좌측) */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 18,
          display: 'flex', alignItems: 'center'
        }}>
          <span style={{ fontSize: 11.5, color: 'rgba(255,255,255,0.2)', fontFamily: 'var(--font-mono)', letterSpacing: '0.01em' }}>
            © 2026 Bluedot Studio. All rights reserved.
          </span>
        </div>
      </Container>
    </footer>);

}

/* ---------------- Mobile sticky CTA bar ---------------- */
function MobileBar() {
  const isMobile = window.useIsMobile();
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    const onS = () => setShow(window.scrollY > 480);
    onS();
    window.addEventListener('scroll', onS, { passive: true });
    return () => window.removeEventListener('scroll', onS);
  }, []);
  if (!isMobile) return null;
  return (
    <div style={{
      position: 'fixed', left: 0, right: 0, bottom: 0, zIndex: 60,
      padding: '12px 16px calc(12px + env(safe-area-inset-bottom))',
      background: 'rgba(255,255,255,0.94)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
      borderTop: '1px solid var(--bd-line)',
      transform: show ? 'translateY(0)' : 'translateY(120%)',
      transition: 'transform 0.3s var(--ease-out)'
    }}>
      <a href={KAKAO_URL} target="_blank" rel="noopener noreferrer" style={{
        width: '100%', height: 52, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        border: 'none', borderRadius: 'var(--r-pill)', textDecoration: 'none',
        background: 'var(--bd-blue)', color: '#fff', fontSize: 16, fontWeight: 700, letterSpacing: '-0.01em'
      }}>
        카카오톡 상담하기 →
      </a>
    </div>);

}

Object.assign(window, { Process, Faq, FinalCta, StickyKakao, SiteFooter, MobileBar });