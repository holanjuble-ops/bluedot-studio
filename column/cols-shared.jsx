/* ============================================================
   cols-shared.jsx — dummy data + helpers shared by all 3 column-page
   design directions. Exposes window.ColShared.
   ============================================================ */

/* 업종별 카테고리 (필터) */
const CATS = ['전체', '시작 가이드', '대표 사례', 'SEO·GEO 가이드'];

/* 칼럼 3편 — 처음 온 분들을 위한 필수 3부작 (id는 articles.jsx 와 일치) */
const COLS = [
  {
    id: 1, cat: '시작 가이드', type: '인사이트',
    title: '나도 숏폼이 필요할까?',
    excerpt: '제발, 이런 분들만 숏폼을 하세요.',
    date: '2026.04.21', read: 4
  },
  {
    id: 2, cat: '한의원', type: '대표 사례',
    title: '릴스 2개로 100만 조회수, 그 안에 숨은 공식',
    excerpt: '딱 3가지만 바꿨습니다.',
    date: '2026.05.13', read: 5
  },
  {
    id: 3, cat: '시작 가이드', type: '인사이트',
    title: '‘문의로 이어지는 숏폼’은 이게 다릅니다',
    excerpt: '문의를 만드는 2가지 차이.',
    date: '2026.06.01', read: 5
  },
  {
    id: 4, cat: 'SEO·GEO 가이드', type: '인용형 가이드',
    title: '전문직 숏폼 마케팅이 필요한지 판단하는 3가지 기준',
    excerpt: '숏폼이 필요한 업종과 먼저 다른 채널을 점검해야 하는 업종을 구분합니다.',
    date: '2026.09.11', read: 5
  },
  {
    id: 5, cat: 'SEO·GEO 가이드', type: '인용형 가이드',
    title: '릴스 조회수를 만드는 3가지 원칙',
    excerpt: '100만 조회수 사례를 바탕으로, 전문직 숏폼의 핵심 원칙을 정리합니다.',
    date: '2026.09.11', read: 5
  },
  {
    id: 6, cat: 'SEO·GEO 가이드', type: '인용형 가이드',
    title: '숏폼 조회수를 문의로 전환하는 2가지 조건',
    excerpt: '플랫폼 선택과 문의 장벽 제거를 중심으로 전환 구조를 설명합니다.',
    date: '2026.09.11', read: 5
  }
];

/* image-slot 래퍼 — 9:16/16:9 등 비율은 호출부에서 style로 지정 */
function Slot({ id, placeholder, radius = 0, style }) {
  return (
    <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--bd-gray-100)', borderRadius: radius, ...style }}>
      <image-slot id={id} shape="rect" fit="cover" placeholder={placeholder}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}></image-slot>
    </div>
  );
}

/* 카테고리 → 칩 색 (스튜디오 방향용 tint) */
function catTint(cat) {
  return cat === '소식' ? { bg: 'var(--bd-gray-100)', fg: 'var(--bd-gray-600)' } : { bg: 'var(--bd-blue-50)', fg: 'var(--bd-blue)' };
}

window.ColShared = { CATS, COLS, Slot, catTint };
