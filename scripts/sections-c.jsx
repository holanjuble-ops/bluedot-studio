/* ============================================================
   sections-c.jsx — Process, FAQ, Final CTA (form), Footer, MobileBar
   ============================================================ */

/* ---------------- Process ---------------- */
const PROCESS = [
{ n: '01', icon: 'pen-tool', t: '기획', d: ['업종, 타겟, 경쟁사를 분석해', '조회수와 문의를 만드는 콘텐츠를 설계합니다.'], note: '* 직역별 광고심의 기준을 준수합니다.' },
{ n: '02', icon: 'video', t: '방문 촬영', d: ['사무실·병원으로 직접 방문해 촬영합니다.', '(1~2시간 소요)'] },
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
{ q: '전문성이 훼손될까 걱정돼요.', a: ['전문성과 친근함의 균형을 맞춰 제작합니다.', '또한 직역별 광고 심의를 준수하여 법적 리스크를 최소화합니다.'] },
{ q: '성과는 언제부터 나오나요?', a: ['보통 1~3개월 정도 소요됩니다.', '', '콘텐츠가 쌓이고 채널이 성장하면서, 꾸준히 문의가 들어오는 구조가 만들어집니다.'] }];


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

/* ── Formspree endpoint ──────────────────────────────────────
   1. formspree.io 에 가입 → New Form 생성 → 이메일을 tjdcks4053@naver.com 으로 설정
   2. 발급된 Form ID(예: xpzgkrda)를 아래에 붙여넣기
   ─────────────────────────────────────────────────────────── */
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xgobrodo';

function FinalCta() {
  const isMobile = window.useIsMobile();
  const { Container, Reveal, Button, Dot } = window;
  const [form, setForm] = React.useState({ name: '', phone: '', company: '', worry: '', time: '' });
  const [errs, setErrs] = React.useState({});
  const [done, setDone] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);
  const [submitErr, setSubmitErr] = React.useState('');
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const setPhone = (e) => {
    const digits = e.target.value.replace(/\D/g, '').slice(0, 11);
    let formatted = digits;
    if (digits.length > 3 && digits.length <= 7) formatted = digits.slice(0,3) + '-' + digits.slice(3);
    else if (digits.length > 7) formatted = digits.slice(0,3) + '-' + digits.slice(3,7) + '-' + digits.slice(7);
    setForm((f) => ({ ...f, phone: formatted }));
  };

  const submit = async (e) => {
    e.preventDefault();
    const next = {};
    if (!form.name.trim()) next.name = true;
    if (!form.phone.trim()) next.phone = true;
    if (!form.company.trim()) next.company = true;
    setErrs(next);
    if (Object.keys(next).length > 0) return;

    setSubmitting(true);
    setSubmitErr('');
    try {
      const data = new FormData();
      data.append('성함', form.name);
      data.append('연락처', form.phone);
      data.append('회사명', form.company);
      data.append('현재고민', form.worry);
      data.append('연락가능시간', form.time);

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: data
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok) {
        setDone(true);
      } else {
        const detail = (json.errors || []).map(e => e.message).join(' / ') || `오류 ${res.status}`;
        setSubmitErr(`제출 실패: ${detail}`);
      }
    } catch(err) {
      setSubmitErr('네트워크 오류입니다. 연결을 확인해주세요.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="cta" style={{ position: 'relative', overflow: 'hidden', background: 'var(--grad-depth)', color: '#fff', padding: `${isMobile ? 104 : 168}px 0` }}>
      <window.GridBg opacity={1} color="rgba(255,255,255,0.10)" gap={64} />
      <window.GlowBg color="rgba(21,71,255,0.26)" cx="80%" cy="115%" size="62%" />
      <Container style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1.05fr', gap: isMobile ? 40 : 64, alignItems: 'start' }}>
          {/* copy */}
          <div style={{ marginTop: isMobile ? 0 : -44 }}>
            <Reveal>
              <window.Kicker label="무료 상담" light mono={false} />
            </Reveal>
            <Reveal delay={80}>
              <h2 style={{ marginTop: 24, fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.22, color: '#fff', fontSize: isMobile ? '32px' : 'clamp(40px, 3.4vw, 52px)' }}>
                지금 바로<br />무료상담 받아보세요
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p style={{ marginTop: 26, lineHeight: 1.8, maxWidth: 420, fontSize: "16px", fontWeight: "600", color: "rgba(255, 255, 255, 0.804)" }}>
                <span style={{ color: '#F4D35E', fontWeight: 700 }}>억지 영업은 하지 않습니다.</span><br />현재 상황을 함께 살펴보고,<br />가장 효과적인 방향을 제안해드립니다.
              </p>
            </Reveal>
          </div>

          {/* form card */}
          <Reveal delay={160}>
            <div style={{ background: '#fff', borderRadius: 'var(--r-lg)', padding: isMobile ? '26px 22px' : '34px 40px', boxShadow: 'var(--shadow-xl)', position: 'relative', minHeight: 200 }}>
              {!done ?
              <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 15 }} noValidate>
                  <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 15 }}>
                    <Field label="성함">
                      <input className={`bd-field ${errs.name ? 'bd-field--err' : ''}`} placeholder="홍길동" value={form.name} onChange={set('name')} />
                    </Field>
                    <Field label="연락처">
                      <input className={`bd-field ${errs.phone ? 'bd-field--err' : ''}`} placeholder="010-0000-0000" inputMode="tel" value={form.phone} onChange={setPhone} />
                    </Field>
                  </div>
                  <Field label="회사명(또는 병원명)">
                    <input className={`bd-field ${errs.company ? 'bd-field--err' : ''}`} placeholder="예) OO치과, OO법률사무소, OO세무회계" value={form.company} onChange={set('company')} />
                  </Field>
                  <Field label="현재 고민">
                    <textarea className="bd-field" placeholder="예) 조회수는 나오는데 문의가 없어요" value={form.worry} onChange={set('worry')}></textarea>
                  </Field>
                  <Field label="연락 가능한 시간">
                    <input className="bd-field" placeholder="예) 평일 오후 2시 이후" value={form.time} onChange={set('time')} />
                  </Field>

                  <button type="submit" disabled={submitting} style={{
                  height: 56, marginTop: 4, border: 'none', borderRadius: 'var(--r-pill)', cursor: submitting ? 'not-allowed' : 'pointer',
                  background: submitting ? 'var(--bd-gray-300)' : 'var(--bd-blue)', color: '#fff', fontSize: 15.5, fontWeight: 700, letterSpacing: '-0.01em',
                  transition: 'background 0.2s var(--ease-out)'
                }}
                onMouseEnter={(e) => { if (!submitting) e.currentTarget.style.background = 'var(--bd-blue-700)'; }}
                onMouseLeave={(e) => { if (!submitting) e.currentTarget.style.background = 'var(--bd-blue)'; }}>
                    {submitting ? '제운 중…' : '무료상담 신청하기'}
                  </button>
                  {submitErr && <p style={{ margin: 0, textAlign: 'center', fontSize: 13, color: 'var(--bd-danger)', fontWeight: 500 }}>{submitErr}</p>}
                  <p style={{ margin: 0, textAlign: 'center', fontSize: 11.5, color: 'var(--bd-gray-400)', lineHeight: 1.5 }}>
                    개인정보는 상담 목적으로만 활용되며 외부 제공되지 않습니다.
                  </p>
                </form> :

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '36px 8px', gap: 16, minHeight: 360 }}>
                  <div style={{ width: 64, height: 64, borderRadius: 999, background: 'var(--bd-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <window.Icon name="check" size={32} color="var(--bd-blue)" strokeWidth={2} />
                  </div>
                  <h3 style={{ fontSize: 19, fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--bd-ink)' }}>신청이 완료되었습니다</h3>
                  <p style={{ fontSize: 14.5, lineHeight: 1.6, color: 'var(--fg-2)', maxWidth: 320 }}>
                    {form.name ? `${form.name}님, ` : ''}영업일 기준 24시간 내에 남겨주신 연락처로 연락드리겠습니다.
                  </p>
                  <button onClick={() => {setDone(false);setForm({ name: '', phone: '', worry: '', time: '' });}} style={{
                  marginTop: 4, background: 'none', border: 'none', cursor: 'pointer',
                  fontSize: 14, fontWeight: 600, color: 'var(--bd-blue)'
                }}>다시 작성하기</button>
                </div>
              }
            </div>
          </Reveal>
        </div>
      </Container>
    </section>);

}

/* ---------------- Footer ---------------- */
function SiteFooter() {
  const isMobile = window.useIsMobile();
  const { Container } = window;
  return (
    <footer style={{ background: '#1A1C22', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: isMobile ? 56 : 80, paddingBottom: isMobile ? 96 : 80 }}>
      <Container>
        {/* 브랜드 블록 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, paddingBottom: isMobile ? 36 : 48 }}>
          <window.BdLogo light size={26} />
          <p style={{ margin: 0, fontSize: 13.5, color: 'rgba(255,255,255,0.38)', fontWeight: 500, lineHeight: 1.6, letterSpacing: '-0.005em' }}>
            전문직 숏폼 마케팅 에이전시.
          </p>
          <a href="http://pf.kakao.com/_IgEXX/chat" target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 9,
              width: 'fit-content',
              padding: '11px 20px', borderRadius: 8,
              background: '#FEE500', border: 'none',
              fontSize: 14, fontWeight: 700, color: '#191919', textDecoration: 'none',
              transition: 'opacity 0.14s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.88'; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
          >
            <window.Icon name="message-circle" size={16} color="currentColor" />
            카카오톡 상담
          </a>
        </div>

        {/* 하단 바: 사업자정보 + 저작권 */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 18,
          display: 'flex', flexWrap: 'wrap', alignItems: 'center',
          justifyContent: 'space-between', gap: 8
        }}>
          <span style={{ fontSize: 11.5, color: 'rgba(255,255,255,0.28)', fontWeight: 400, letterSpacing: '0.01em' }}>
            상호명: 블루닷스튜디오 · 사업자등록번호: 601-38-81089 · 주소: 경기도 성남시 단대동 100
          </span>
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
      <button onClick={() => window.scrollToId('cta')} style={{
        width: '100%', height: 52, border: 'none', borderRadius: 'var(--r-pill)', cursor: 'pointer',
        background: 'var(--bd-blue)', color: '#fff', fontSize: 16, fontWeight: 700, letterSpacing: '-0.01em'
      }}>
        무료 상담 신청 →
      </button>
    </div>);

}

Object.assign(window, { Process, Faq, FinalCta, SiteFooter, MobileBar });