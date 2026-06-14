/* ============================================================
   app.jsx — compose & mount
   ============================================================ */

function App() {
  const { Header, Hero, StatStrip, Problem, Bridge, Results, Formula, Process, Faq, FinalCta, SiteFooter, MobileBar } = window;
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
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
      <MobileBar />
    </React.Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
