/* @ds-bundle: {"format":3,"namespace":"BlueDotStudioDesignSystem_9f5b7c","components":[],"sourceHashes":{"ui_kits/reels-showcase/CasePanel.jsx":"ac6a268b79cf","ui_kits/reels-showcase/FilterBar.jsx":"5ba05f3df192","ui_kits/reels-showcase/Rail.jsx":"83b7ae3ed3c4","ui_kits/reels-showcase/ReelCard.jsx":"98bfc815c96b","ui_kits/reels-showcase/ReelsViewer.jsx":"a1007f535a62","ui_kits/reels-showcase/data.jsx":"09d057532d48","ui_kits/website/CaseGrid.jsx":"178f605cb1fa","ui_kits/website/Footer.jsx":"accba05a3939","ui_kits/website/Hero.jsx":"d1adaf508ef1","ui_kits/website/Nav.jsx":"edec1748517b","ui_kits/website/Process.jsx":"12474ec8d056","ui_kits/website/Services.jsx":"039fc783c6df","ui_kits/website/ui.jsx":"cc43fde71ba7"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BlueDotStudioDesignSystem_9f5b7c = window.BlueDotStudioDesignSystem_9f5b7c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/reels-showcase/CasePanel.jsx
try { (() => {
const CasePanel = ({
  c,
  open,
  onClose
}) => {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'rgba(10,14,26,0.5)',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
      animation: 'fadeIn 200ms cubic-bezier(0.2,0.8,0.2,1)'
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: '#fff',
      width: 'min(560px, 100%)',
      borderRadius: '24px 24px 0 0',
      padding: '32px 32px 40px',
      boxShadow: '0 24px 64px rgba(10,14,26,0.2)',
      animation: 'slideUp 280ms cubic-bezier(0.2,0.8,0.2,1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 4,
      borderRadius: 999,
      background: 'var(--bd-gray-200)',
      margin: '0 auto 20px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--fg-2)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: 'var(--bd-blue)'
    }
  }), c.code, " \xB7 ", c.vertical), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '12px 0 8px',
      fontSize: 32,
      fontWeight: 700,
      letterSpacing: '-0.02em',
      lineHeight: 1.15
    }
  }, c.client), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      lineHeight: 1.6,
      color: 'var(--fg-2)',
      wordBreak: 'keep-all'
    }
  }, c.caption), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      padding: '20px 24px',
      background: 'var(--bd-ink)',
      borderRadius: 16,
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 16
    }
  }, [['조회수', c.kpi.views], ['저장', c.kpi.saves], ['공유', c.kpi.shares], ['상담 전환', c.kpi.conv]].map(([l, v]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 600,
      fontSize: 22,
      color: '#fff',
      letterSpacing: '-0.02em',
      fontVariantNumeric: 'tabular-nums'
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.55)',
      marginTop: 4
    }
  }, l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      flex: 1,
      height: 48,
      borderRadius: 999,
      border: 0,
      background: 'var(--bd-blue)',
      color: '#fff',
      fontSize: 15,
      fontWeight: 600,
      fontFamily: 'inherit',
      cursor: 'pointer'
    }
  }, "\uC720\uC0AC \uC0AC\uB840 \uC0C1\uB2F4 \u2192"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      width: 48,
      height: 48,
      borderRadius: 999,
      border: '1px solid var(--bd-line-strong)',
      background: '#fff',
      fontSize: 18,
      cursor: 'pointer',
      fontFamily: 'inherit'
    }
  }, "\xD7"))), /*#__PURE__*/React.createElement("style", null, `
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideUp { from { transform: translateY(40px); opacity: 0 } to { transform: translateY(0); opacity: 1 } }
      `));
};
window.CasePanel = CasePanel;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/reels-showcase/CasePanel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/reels-showcase/FilterBar.jsx
try { (() => {
const FilterBar = ({
  value,
  onChange
}) => {
  const OPTS = ['전체', '치과', '피부과', '법무', '세무', '한방'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      top: 20,
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 30,
      background: 'rgba(255,255,255,0.92)',
      backdropFilter: 'saturate(180%) blur(16px)',
      WebkitBackdropFilter: 'saturate(180%) blur(16px)',
      border: '1px solid var(--bd-line)',
      borderRadius: 999,
      padding: 4,
      display: 'flex',
      gap: 2,
      boxShadow: '0 8px 24px rgba(10,14,26,0.08)'
    }
  }, OPTS.map(o => {
    const active = o === value;
    return /*#__PURE__*/React.createElement("button", {
      key: o,
      onClick: () => onChange(o),
      style: {
        fontFamily: 'inherit',
        cursor: 'pointer',
        height: 36,
        padding: '0 16px',
        borderRadius: 999,
        border: 0,
        background: active ? 'var(--bd-ink)' : 'transparent',
        color: active ? '#fff' : 'var(--bd-ink)',
        fontSize: 13,
        fontWeight: 600,
        letterSpacing: '-0.005em',
        transition: 'all 200ms cubic-bezier(0.2,0.8,0.2,1)'
      }
    }, o);
  }));
};
window.FilterBar = FilterBar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/reels-showcase/FilterBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/reels-showcase/Rail.jsx
try { (() => {
const Rail = ({
  kpi,
  accent
}) => {
  const ICONS = [{
    lab: '좋아요',
    val: kpi.saves
  }, {
    lab: '댓글',
    val: '1.2k'
  }, {
    lab: '공유',
    val: kpi.shares
  }, {
    lab: '저장',
    val: kpi.saves
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 16,
      bottom: 80,
      zIndex: 2,
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      alignItems: 'center'
    }
  }, ICONS.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 4,
      color: accent
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 999,
      background: accent === '#fff' ? 'rgba(255,255,255,0.18)' : 'rgba(10,14,26,0.08)',
      border: accent === '#fff' ? '1px solid rgba(255,255,255,0.25)' : '1px solid rgba(10,14,26,0.12)',
      display: 'grid',
      placeItems: 'center',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 700
    }
  }, ['♡', '○', '↗', '⤓'][i])), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      fontWeight: 600
    }
  }, it.val))));
};
window.Rail = Rail;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/reels-showcase/Rail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/reels-showcase/ReelCard.jsx
try { (() => {
const ReelCard = ({
  c,
  onOpen
}) => {
  const ink = c.accent === '#fff';
  return /*#__PURE__*/React.createElement("article", {
    style: {
      position: 'relative',
      width: '100%',
      height: '100%',
      background: c.bg,
      color: c.accent,
      overflow: 'hidden',
      borderRadius: 16,
      scrollSnapAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 20,
      left: 20,
      right: 20,
      zIndex: 2,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 999,
      background: ink ? 'rgba(255,255,255,0.18)' : 'rgba(10,14,26,0.08)',
      border: ink ? '1px solid rgba(255,255,255,0.25)' : '1px solid rgba(10,14,26,0.1)',
      display: 'grid',
      placeItems: 'center',
      fontWeight: 700,
      fontSize: 12
    }
  }, c.client[0]), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '-0.01em'
    }
  }, c.client), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      opacity: 0.7,
      marginTop: 2
    }
  }, c.code, " \xB7 REELS ", c.reels))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      opacity: 0.8
    }
  }, c.duration)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '0 32px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      opacity: 0.7,
      marginBottom: 16
    }
  }, c.vertical), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 40,
      fontWeight: 800,
      letterSpacing: '-0.025em',
      lineHeight: 1.1,
      wordBreak: 'keep-all',
      maxWidth: 340
    }
  }, c.title), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      padding: '10px 16px',
      background: ink ? 'rgba(255,255,255,0.14)' : 'rgba(10,14,26,0.08)',
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      borderRadius: 999,
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '0.04em'
    }
  }, "\u25B6 ", c.kpi.views, " views")), /*#__PURE__*/React.createElement(Rail, {
    kpi: c.kpi,
    accent: c.accent
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 20,
      right: 80,
      bottom: 20,
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      lineHeight: 1.5,
      opacity: 0.85,
      marginBottom: 14,
      wordBreak: 'keep-all'
    }
  }, c.caption), /*#__PURE__*/React.createElement("button", {
    onClick: () => onOpen(c),
    style: {
      fontFamily: 'inherit',
      cursor: 'pointer',
      height: 36,
      padding: '0 14px',
      borderRadius: 999,
      border: 0,
      background: ink ? '#fff' : 'var(--bd-ink)',
      color: ink ? 'var(--bd-ink)' : '#fff',
      fontSize: 13,
      fontWeight: 600,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, "\uCF00\uC774\uC2A4 \uC790\uC138\uD788 \u2192")));
};
window.ReelCard = ReelCard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/reels-showcase/ReelCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/reels-showcase/ReelsViewer.jsx
try { (() => {
const ReelsViewer = () => {
  const [filter, setFilter] = React.useState('전체');
  const [openCase, setOpenCase] = React.useState(null);
  const filtered = filter === '전체' ? CASES : CASES.filter(c => c.vertical === filter);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bd-paper)',
      minHeight: '100vh'
    }
  }, /*#__PURE__*/React.createElement(FilterBar, {
    value: filter,
    onChange: setFilter
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100vh',
      overflowY: 'auto',
      scrollSnapType: 'y mandatory',
      scrollbarWidth: 'none'
    },
    className: "reels-scroll"
  }, filtered.map(c => /*#__PURE__*/React.createElement("section", {
    key: c.id,
    style: {
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      scrollSnapAlign: 'center',
      padding: '24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 'min(380px, 90vw)',
      aspectRatio: '9 / 16',
      maxHeight: 'calc(100vh - 48px)',
      boxShadow: '0 24px 64px rgba(10,14,26,0.18)'
    }
  }, /*#__PURE__*/React.createElement(ReelCard, {
    c: c,
    onOpen: setOpenCase
  }))))), /*#__PURE__*/React.createElement(CasePanel, {
    c: openCase,
    open: !!openCase,
    onClose: () => setOpenCase(null)
  }), /*#__PURE__*/React.createElement("style", null, `.reels-scroll::-webkit-scrollbar { display: none; }`));
};
window.ReelsViewer = ReelsViewer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/reels-showcase/ReelsViewer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/reels-showcase/data.jsx
try { (() => {
const CASES = [{
  id: 1,
  code: 'CASE 03',
  client: '강남 치과',
  vertical: '치과',
  title: '치아 미백, 3가지 오해',
  caption: '환자들이 가장 많이 묻는 미백 관련 질문 3개를 30초로 정리.',
  bg: 'linear-gradient(180deg, #1C2233 0%, #0A0E1A 100%)',
  accent: '#fff',
  duration: '0:24',
  kpi: {
    views: '1,240,000',
    saves: '8,420',
    shares: '1,802',
    conv: '+212%'
  },
  reels: 4,
  total: '380만 뷰'
}, {
  id: 2,
  code: 'CASE 04',
  client: '서초 법무법인',
  vertical: '법무',
  title: '계약서, 이 한 줄이 위험합니다',
  caption: '근로계약서·하도급계약서에서 자주 빠지는 독소 조항을 짚어줍니다.',
  bg: 'linear-gradient(180deg, #1547FF 0%, #0F36CC 100%)',
  accent: '#fff',
  duration: '0:38',
  kpi: {
    views: '482,000',
    saves: '6,140',
    shares: '2,210',
    conv: '+184%'
  },
  reels: 6,
  total: '482만 뷰'
}, {
  id: 3,
  code: 'CASE 05',
  client: '청담 피부과',
  vertical: '피부과',
  title: '시술 전후 24시간 가이드',
  caption: '레이저 시술 후 첫 24시간 관리법. 의사 직접 설명, 환자 동선 그대로.',
  bg: '#ECEEF2',
  accent: 'var(--bd-ink)',
  duration: '0:51',
  kpi: {
    views: '294,000',
    saves: '4,820',
    shares: '912',
    conv: '+156%'
  },
  reels: 4,
  total: '294만 뷰'
}, {
  id: 4,
  code: 'CASE 06',
  client: '판교 세무사',
  vertical: '세무',
  title: '종소세, 이번엔 다르게',
  caption: '5월 종합소득세 신고에서 놓치기 쉬운 공제 항목 4가지.',
  bg: 'linear-gradient(180deg, #21242E 0%, #0A0E1A 100%)',
  accent: '#fff',
  duration: '0:42',
  kpi: {
    views: '128,000',
    saves: '2,140',
    shares: '480',
    conv: '+98%'
  },
  reels: 3,
  total: '128만 뷰'
}, {
  id: 5,
  code: 'CASE 07',
  client: '잠실 한의원',
  vertical: '한방',
  title: '겨울철 면역, 한약 한 첩',
  caption: '체질별로 다르게 짓는 보약 처방. 원장 인터뷰 형식으로 진행.',
  bg: 'linear-gradient(180deg, #353945 0%, #1C2233 100%)',
  accent: '#fff',
  duration: '0:33',
  kpi: {
    views: '212,000',
    saves: '3,220',
    shares: '740',
    conv: '+124%'
  },
  reels: 5,
  total: '212만 뷰'
}];
window.CASES = CASES;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/reels-showcase/data.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CaseGrid.jsx
try { (() => {
const CASES = [{
  code: 'CASE 03',
  client: '강남 치과',
  vertical: '치과',
  reels: 4,
  views: '380만',
  conv: '+212%',
  bg: 'linear-gradient(180deg,#1C2233 0%,#0A0E1A 100%)',
  tag: '치아 미백·인비절라인 시리즈',
  accent: '#fff'
}, {
  code: 'CASE 04',
  client: '서초 법무법인',
  vertical: '법무',
  reels: 6,
  views: '482만',
  conv: '+184%',
  bg: 'linear-gradient(180deg,#1547FF 0%,#0F36CC 100%)',
  tag: '계약서 시리즈',
  accent: '#fff'
}, {
  code: 'CASE 05',
  client: '청담 피부과',
  vertical: '피부과',
  reels: 4,
  views: '294만',
  conv: '+156%',
  bg: '#ECEEF2',
  tag: '시술 전후 가이드',
  accent: 'var(--bd-ink)'
}, {
  code: 'CASE 06',
  client: '판교 세무사',
  vertical: '세무',
  reels: 3,
  views: '128만',
  conv: '+98%',
  bg: 'linear-gradient(180deg,#21242E 0%,#0A0E1A 100%)',
  tag: '종합소득세 시즌',
  accent: '#fff'
}];
const ReelCard = ({
  c
}) => {
  const ink = c.accent === '#fff';
  return /*#__PURE__*/React.createElement("article", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '9 / 16',
      borderRadius: 10,
      overflow: 'hidden',
      background: c.bg,
      color: c.accent,
      position: 'relative',
      boxShadow: '0 1px 2px rgba(10,14,26,0.04)',
      transition: 'transform 200ms cubic-bezier(0.2,0.8,0.2,1)'
    },
    onMouseEnter: e => e.currentTarget.style.transform = 'translateY(-4px)',
    onMouseLeave: e => e.currentTarget.style.transform = 'translateY(0)'
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12,
      right: 12,
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: '0.04em',
      opacity: 0.9
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: ink ? '#fff' : 'var(--bd-blue)'
    }
  }), c.code), /*#__PURE__*/React.createElement("span", null, "REELS \xB7 ", c.reels)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 16,
      left: 16,
      right: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 800,
      letterSpacing: '-0.02em',
      lineHeight: 1.15,
      wordBreak: 'keep-all'
    }
  }, c.client), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      opacity: ink ? 0.7 : 0.6
    }
  }, "\u25B6 ", c.views, " \xB7 ", c.tag))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(Tag, null, c.vertical), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--bd-success)'
    }
  }, "\uC0C1\uB2F4 ", c.conv)));
};
const CaseGrid = () => /*#__PURE__*/React.createElement("section", {
  style: {
    padding: '96px 32px',
    maxWidth: 1200,
    margin: '0 auto'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    alignItems: 'end',
    justifyContent: 'space-between',
    marginBottom: 48
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "\uD3EC\uD2B8\uD3F4\uB9AC\uC624 \xB7 Case studies"), /*#__PURE__*/React.createElement("h2", {
  style: {
    margin: '12px 0 0',
    fontSize: 48,
    fontWeight: 700,
    letterSpacing: '-0.02em',
    lineHeight: 1.1,
    color: 'var(--bd-ink)'
  }
}, "\uC22B\uC790\uB85C \uBCF4\uB294 \uACB0\uACFC")), /*#__PURE__*/React.createElement("a", {
  href: "#",
  style: {
    fontSize: 14,
    fontWeight: 600,
    color: 'var(--bd-ink)',
    textDecoration: 'none',
    display: 'inline-flex',
    gap: 6,
    alignItems: 'center',
    borderBottom: '1px solid var(--bd-ink)',
    paddingBottom: 2
  }
}, "\uC804\uCCB4 \uC0AC\uB840 \uBCF4\uAE30 \u2192")), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: 20
  }
}, CASES.map(c => /*#__PURE__*/React.createElement(ReelCard, {
  key: c.code,
  c: c
}))));
window.CaseGrid = CaseGrid;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CaseGrid.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
const Footer = () => /*#__PURE__*/React.createElement("footer", {
  style: {
    background: 'var(--bd-ink)',
    color: '#fff',
    padding: '80px 32px 40px'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 1200,
    margin: '0 auto'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'grid',
    gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
    gap: 40,
    marginBottom: 64
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
  light: true
}), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 20,
    fontSize: 14,
    lineHeight: 1.6,
    color: 'rgba(255,255,255,0.6)',
    maxWidth: 320,
    wordBreak: 'keep-all'
  }
}, "\uC804\uBB38\uC9C1\uB9CC\uC744 \uC704\uD55C \uC20F\uD3FC \uB9C8\uCF00\uD305 \uC2A4\uD29C\uB514\uC624.", /*#__PURE__*/React.createElement("br", null), "\uC11C\uC6B8 \uAC15\uB0A8\uAD6C \xB7 2022\uB144\uBD80\uD130")), [{
  h: '서비스',
  items: ['월간 운영', '단발 제작', '컨설팅', '광고 운영']
}, {
  h: '회사',
  items: ['소개', '팀', '채용', '블로그']
}, {
  h: '연락',
  items: ['hello@bluedot.studio', '+82 02-0000-0000', '서울 강남구 테헤란로']
}].map(col => /*#__PURE__*/React.createElement("div", {
  key: col.h
}, /*#__PURE__*/React.createElement("h5", {
  style: {
    margin: '0 0 16px',
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.5)'
  }
}, col.h), /*#__PURE__*/React.createElement("ul", {
  style: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: 10
  }
}, col.items.map(i => /*#__PURE__*/React.createElement("li", {
  key: i,
  style: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.85)'
  }
}, i)))))), /*#__PURE__*/React.createElement("div", {
  style: {
    borderTop: '1px solid rgba(255,255,255,0.1)',
    paddingTop: 24,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: 12,
    color: 'rgba(255,255,255,0.4)',
    fontFamily: 'var(--font-mono)'
  }
}, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 bluedot studio \xB7 \uC0AC\uC5C5\uC790\uB4F1\uB85D 000-00-00000"), /*#__PURE__*/React.createElement("span", null, "Made in Seoul"))));
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
const Hero = () => /*#__PURE__*/React.createElement("section", {
  style: {
    padding: '120px 32px 96px',
    maxWidth: 1200,
    margin: '0 auto'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    marginBottom: 28
  }
}, /*#__PURE__*/React.createElement(Eyebrow, null, "\uC804\uBB38\uC9C1 \uC20F\uD3FC \uB9C8\uCF00\uD305 \xB7 since 2022")), /*#__PURE__*/React.createElement("h1", {
  style: {
    margin: 0,
    fontWeight: 800,
    fontSize: 88,
    lineHeight: 1.05,
    letterSpacing: '-0.03em',
    color: 'var(--bd-ink)',
    maxWidth: 980,
    wordBreak: 'keep-all',
    textWrap: 'pretty'
  }
}, "\uC804\uBB38\uC9C1\uC744 \uC704\uD55C", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
  style: {
    background: 'linear-gradient(transparent 64%, var(--bd-highlight) 64%)',
    padding: '0 .08em'
  }
}, "\uB9B4\uC2A4 \uB9C8\uCF00\uD305"), /*#__PURE__*/React.createElement("span", {
  style: {
    color: 'var(--bd-blue)'
  }
}, ".")), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 28,
    marginBottom: 0,
    maxWidth: 580,
    fontSize: 19,
    lineHeight: 1.55,
    color: 'var(--fg-2)',
    wordBreak: 'keep-all'
  }
}, "\uAD11\uACE0\uBE44\uB97C \uD0DC\uC6B0\uC9C0 \uC54A\uACE0\uB3C4, \uB9E4\uC6D4 \uC7A0\uC7AC \uACE0\uAC1D\uC774 \uD398\uC774\uC9C0\uC5D0 \uB3C4\uB2EC\uD569\uB2C8\uB2E4.", /*#__PURE__*/React.createElement("br", null), "\uC6D4 4\uAC1C \uB9B4\uC2A4\uB85C \uD3C9\uADE0 38\uB9CC \uBDF0, \uC0C1\uB2F4 \uBB38\uC758 2.4\uBC30."), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    gap: 12,
    marginTop: 40
  }
}, /*#__PURE__*/React.createElement(Button, {
  size: "lg"
}, "\uBB34\uB8CC \uC0C1\uB2F4 \uC2E0\uCCAD \u2192"), /*#__PURE__*/React.createElement(Button, {
  size: "lg",
  variant: "outline"
}, "\uD3EC\uD2B8\uD3F4\uB9AC\uC624 \uBCF4\uAE30")), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 88,
    padding: '40px 48px',
    background: 'var(--bd-ink)',
    borderRadius: 24,
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: 32
  }
}, /*#__PURE__*/React.createElement(Stat, {
  light: true,
  value: "42",
  suffix: "+",
  label: "\uC804\uBB38\uC9C1 \uD074\uB77C\uC774\uC5B8\uD2B8"
}), /*#__PURE__*/React.createElement(Stat, {
  light: true,
  value: "380",
  suffix: "\uD3B8",
  label: "\uB204\uC801 \uB9B4\uC2A4"
}), /*#__PURE__*/React.createElement(Stat, {
  light: true,
  value: "4,820",
  suffix: "\uB9CC",
  label: "\uCD1D \uC870\uD68C\uC218"
}), /*#__PURE__*/React.createElement(Stat, {
  light: true,
  value: "2.4",
  suffix: "\xD7",
  label: "\uD3C9\uADE0 \uC0C1\uB2F4 \uC804\uD658"
})));
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Nav.jsx
try { (() => {
const Nav = () => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: scrolled ? 'rgba(255,255,255,0.9)' : 'transparent',
      backdropFilter: scrolled ? 'saturate(180%) blur(12px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'saturate(180%) blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--bd-line)' : '1px solid transparent',
      transition: 'all 200ms cubic-bezier(0.2,0.8,0.2,1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '0 32px',
      height: 64,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(Logo, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 32
    }
  }, ['서비스', '포트폴리오', '프로세스', '회사 소개'].map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: 'var(--fg-1)',
      textDecoration: 'none',
      letterSpacing: '-0.005em'
    }
  }, l)), /*#__PURE__*/React.createElement(Button, {
    size: "sm"
  }, "\uBB34\uB8CC \uC0C1\uB2F4 \u2192"))));
};
window.Nav = Nav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Process.jsx
try { (() => {
const STEPS = [{
  n: '01',
  t: '기획',
  d: '브랜드·타깃·경쟁 영상을 분석하고 월간 콘텐츠 시나리오를 설계합니다.'
}, {
  n: '02',
  t: '촬영',
  d: '전속 디렉터가 반일 단위로 방문 촬영. 의료기기 활용·가운 착장까지 조율합니다.'
}, {
  n: '03',
  t: '편집',
  d: '후킹 3초·자막·BGM·썸네일까지 인스타그램 알고리즘에 맞춰 최적화합니다.'
}, {
  n: '04',
  t: '발행',
  d: '발행 시간·해시태그·캡션 A/B로 첫 24시간 도달을 끌어올립니다.'
}, {
  n: '05',
  t: '측정',
  d: '도달·저장·공유·상담 전환을 주간 리포트로 제공. 다음 달 시나리오에 반영합니다.'
}];
const Process = () => /*#__PURE__*/React.createElement("section", {
  style: {
    background: 'var(--bd-paper)',
    padding: '96px 32px',
    borderTop: '1px solid var(--bd-line)'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 1200,
    margin: '0 auto'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    marginBottom: 56,
    maxWidth: 720
  }
}, /*#__PURE__*/React.createElement(Eyebrow, null, "\uD504\uB85C\uC138\uC2A4 \xB7 Process"), /*#__PURE__*/React.createElement("h2", {
  style: {
    margin: '12px 0 0',
    fontSize: 48,
    fontWeight: 700,
    letterSpacing: '-0.02em',
    lineHeight: 1.1,
    color: 'var(--bd-ink)'
  }
}, "\uD55C \uD3B8\uC758 \uB9B4\uC2A4\uAC00 \uBC1C\uD589\uB418\uAE30\uAE4C\uC9C0", /*#__PURE__*/React.createElement("br", null), "5\uB2E8\uACC4, \uD3C9\uADE0 12\uC77C")), /*#__PURE__*/React.createElement("ol", {
  style: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gap: 0,
    borderTop: '1px solid var(--bd-line)'
  }
}, STEPS.map((s, i) => /*#__PURE__*/React.createElement("li", {
  key: s.n,
  style: {
    padding: '24px 20px 24px 0',
    borderRight: i < STEPS.length - 1 ? '1px solid var(--bd-line)' : 0,
    paddingLeft: i === 0 ? 0 : 20,
    position: 'relative'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: 'var(--font-mono)',
    fontSize: 12,
    fontWeight: 600,
    color: 'var(--bd-blue)',
    letterSpacing: '0.04em'
  }
}, s.n), /*#__PURE__*/React.createElement("h4", {
  style: {
    margin: '10px 0 8px',
    fontSize: 20,
    fontWeight: 700,
    letterSpacing: '-0.01em',
    color: 'var(--bd-ink)'
  }
}, s.t), /*#__PURE__*/React.createElement("p", {
  style: {
    margin: 0,
    fontSize: 13,
    lineHeight: 1.55,
    color: 'var(--fg-2)',
    wordBreak: 'keep-all'
  }
}, s.d))))));
window.Process = Process;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Process.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Services.jsx
try { (() => {
const SERVICES = [{
  code: 'PACKAGE 01',
  title: '월간 운영 패키지',
  price: '월 280만원~',
  desc: '기획·촬영·편집·발행·리포트까지. 월 4편의 릴스를 안정적으로 운영합니다.',
  items: ['월 4편 릴스 제작', '월간 성과 리포트', '댓글 응대 가이드', '계정 분석 1회'],
  feature: true
}, {
  code: 'PACKAGE 02',
  title: '단발 제작',
  price: '편당 95만원~',
  desc: '브랜드 소개·이벤트·캠페인 등 일회성 콘텐츠 제작. 사전 미팅부터 발행까지.',
  items: ['기획·시나리오 1회', '1회 촬영 (반일)', '편집 2차 수정 포함', '썸네일·자막']
}, {
  code: 'PACKAGE 03',
  title: '컨설팅',
  price: '회당 60만원',
  desc: '이미 운영중인 계정의 콘텐츠·후킹·캡션을 진단합니다. 90분 워크숍 형식.',
  items: ['계정 진단 리포트', '주제·후킹 30개', '편집 톤 가이드', '60일 사후 Q&A']
}];
const ServiceCard = ({
  s
}) => {
  const ink = s.feature;
  return /*#__PURE__*/React.createElement("article", {
    style: {
      background: ink ? 'var(--bd-ink)' : '#fff',
      color: ink ? '#fff' : 'var(--bd-ink)',
      border: ink ? 0 : '1px solid var(--bd-line)',
      borderRadius: 16,
      padding: 32,
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      minHeight: 480
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    light: ink
  }, s.code), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '4px 0 8px',
      fontSize: 32,
      fontWeight: 700,
      letterSpacing: '-0.02em',
      lineHeight: 1.15
    }
  }, s.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 14,
      color: ink ? 'rgba(255,255,255,0.6)' : 'var(--fg-2)'
    }
  }, s.price)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      lineHeight: 1.6,
      color: ink ? 'rgba(255,255,255,0.75)' : 'var(--fg-2)',
      wordBreak: 'keep-all'
    }
  }, s.desc), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, s.items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontSize: 14,
      color: ink ? 'rgba(255,255,255,0.9)' : 'var(--fg-1)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: ink ? '#fff' : 'var(--bd-blue)'
    }
  }), it))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: ink ? 'onInk' : 'outline',
    size: "md"
  }, "\uC0C1\uB2F4 \uC2E0\uCCAD \u2192")));
};
const Services = () => /*#__PURE__*/React.createElement("section", {
  style: {
    padding: '96px 32px',
    maxWidth: 1200,
    margin: '0 auto'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    alignItems: 'end',
    justifyContent: 'space-between',
    marginBottom: 48
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "\uC11C\uBE44\uC2A4 \xB7 Services"), /*#__PURE__*/React.createElement("h2", {
  style: {
    margin: '12px 0 0',
    fontSize: 48,
    fontWeight: 700,
    letterSpacing: '-0.02em',
    lineHeight: 1.1,
    color: 'var(--bd-ink)'
  }
}, "\uC804\uBB38\uC9C1\uC5D0 \uB9DE\uCD98", /*#__PURE__*/React.createElement("br", null), "\uC138 \uAC00\uC9C0 \uC6B4\uC601 \uBC29\uC2DD")), /*#__PURE__*/React.createElement("p", {
  style: {
    margin: 0,
    maxWidth: 360,
    fontSize: 15,
    lineHeight: 1.6,
    color: 'var(--fg-2)',
    wordBreak: 'keep-all'
  }
}, "\uB300\uBD80\uBD84\uC758 \uD074\uB77C\uC774\uC5B8\uD2B8\uB294 \uC6D4\uAC04 \uC6B4\uC601\uC744 \uC120\uD0DD\uD569\uB2C8\uB2E4. \uB2E8\uBC1C\uC131 \uC81C\uC791\uACFC \uCEE8\uC124\uD305\uB3C4 \uAC00\uB2A5\uD569\uB2C8\uB2E4.")), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 16
  }
}, SERVICES.map(s => /*#__PURE__*/React.createElement(ServiceCard, {
  key: s.code,
  s: s
}))));
window.Services = Services;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Services.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ui.jsx
try { (() => {
// Shared low-level UI atoms for the bluedot website kit.

const Dot = ({
  size = 8,
  color
}) => /*#__PURE__*/React.createElement("span", {
  style: {
    display: 'inline-block',
    width: size,
    height: size,
    borderRadius: 999,
    background: color || 'var(--bd-blue)',
    verticalAlign: 'middle',
    transform: 'translateY(-1px)'
  }
});
const Eyebrow = ({
  children,
  light
}) => /*#__PURE__*/React.createElement("span", {
  style: {
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: light ? 'rgba(255,255,255,0.7)' : 'var(--fg-2)',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8
  }
}, /*#__PURE__*/React.createElement(Dot, {
  color: light ? '#fff' : 'var(--bd-blue)'
}), children);
const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  style
}) => {
  const base = {
    fontFamily: 'inherit',
    cursor: 'pointer',
    border: '1px solid transparent',
    borderRadius: 999,
    fontWeight: 600,
    letterSpacing: '-0.01em',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    transition: 'all 200ms cubic-bezier(0.2,0.8,0.2,1)',
    whiteSpace: 'nowrap'
  };
  const sizes = {
    sm: {
      height: 36,
      padding: '0 14px',
      fontSize: 13
    },
    md: {
      height: 44,
      padding: '0 18px',
      fontSize: 15
    },
    lg: {
      height: 52,
      padding: '0 24px',
      fontSize: 16
    }
  };
  const variants = {
    primary: {
      background: 'var(--bd-blue)',
      color: '#fff'
    },
    secondary: {
      background: 'var(--bd-ink)',
      color: '#fff'
    },
    outline: {
      background: 'transparent',
      color: 'var(--bd-ink)',
      borderColor: 'var(--bd-line-strong)'
    },
    onInk: {
      background: '#fff',
      color: 'var(--bd-ink)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--bd-ink)'
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      ...base,
      ...sizes[size],
      ...variants[variant],
      ...style
    }
  }, children);
};
const Tag = ({
  children,
  tone = 'line'
}) => {
  const styles = {
    line: {
      background: '#fff',
      border: '1px solid var(--bd-line-strong)',
      color: 'var(--fg-1)'
    },
    blue: {
      background: 'var(--bd-blue-50)',
      color: 'var(--bd-blue-700)'
    },
    ink: {
      background: 'var(--bd-ink)',
      color: '#fff'
    },
    yellow: {
      background: 'var(--bd-highlight)',
      color: 'var(--bd-ink)'
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 26,
      padding: '0 10px',
      borderRadius: 999,
      fontSize: 12,
      fontWeight: 600,
      ...styles[tone]
    }
  }, children);
};
const Stat = ({
  value,
  suffix,
  label,
  light
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: 'var(--font-mono)',
    fontWeight: 600,
    fontSize: 56,
    lineHeight: 1,
    letterSpacing: '-0.03em',
    color: light ? '#fff' : 'var(--bd-ink)',
    fontVariantNumeric: 'tabular-nums'
  }
}, value, suffix && /*#__PURE__*/React.createElement("small", {
  style: {
    fontSize: 20,
    fontWeight: 500,
    marginLeft: 4,
    color: light ? 'rgba(255,255,255,0.6)' : 'var(--fg-2)'
  }
}, suffix)), /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
    color: light ? 'rgba(255,255,255,0.6)' : 'var(--fg-2)'
  }
}, label));
const Logo = ({
  light,
  size = 28
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    alignItems: 'center',
    gap: 10
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    width: size * 0.6,
    height: size * 0.6,
    borderRadius: 999,
    background: 'var(--bd-blue)'
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 700,
    fontSize: size * 0.65,
    letterSpacing: '-0.02em',
    color: light ? '#fff' : 'var(--bd-ink)'
  }
}, "bluedot studio"));
Object.assign(window, {
  Dot,
  Eyebrow,
  Button,
  Tag,
  Stat,
  Logo
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ui.jsx", error: String((e && e.message) || e) }); }

})();
