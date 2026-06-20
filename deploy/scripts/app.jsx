/* ============================================================
   app.jsx — compose & mount
   ============================================================ */

function App() {
  const { Header, Hero, StatStrip, Problem, Bridge, Results, Formula, Process, ColumnTeaser, FinalCta, SiteFooter, MobileBar } = window;

  /* 다른 페이지에서 ../index.html#cta 로 들어오면, React 렌더 완료 후
     해당 섹션으로 스크롤. (로드 시점엔 섹션이 아직 없어 브라우저 기본 점프가 실패하므로
     레이아웃이 안정될 때까지 몇 번 재시도) */
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
        <ColumnTeaser />
        <FinalCta />
      </main>
      <SiteFooter />
      <MobileBar />
    </React.Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
