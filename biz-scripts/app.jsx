/* ============================================================
   biz-scripts/app.jsx — 사업자 마케팅 페이지 compose & mount
   (전문직 페이지와 동일 구조, 칼럼 섹션 제외)
   ============================================================ */

function App() {
  const { Header, Hero, StatStrip, Problem, Bridge, Results, Formula, Process, FinalCta, StickyKakao, SiteFooter, MobileBar } = window;

  React.useEffect(() => {
    const id = location.hash ? location.hash.slice(1) : '';
    if (!id) return;
    let n = 0;
    const tick = () => {
      const el = document.getElementById(id);
      if (el && window.scrollToId) window.scrollToId(id);
      n += 1;
      if (n < 5) setTimeout(tick, 260);
    };
    const t = setTimeout(tick, 240);
    return () => clearTimeout(t);
  }, []);

  return (
    <React.Fragment>
      <Header />
      <main>
        <Hero />
        <StatStrip />
        <Problem />
        <Bridge />
        <Results />
        <Formula />
        <Process />
        <FinalCta />
      </main>
      <SiteFooter />
      <MobileBar />
      <StickyKakao />
    </React.Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
