/* ============================================================
   cols-shared.jsx — dummy data + helpers shared by all 3 column-page
   design directions. Exposes window.ColShared.
   ============================================================ */

/* 업종별 카테고리 (필터) */
const CATS = ['전체', '시작 가이드', '대표 사례'];

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
    title: '릴스 2개로 95만 조회수, 그 안에 숨은 공식',
    excerpt: '딱 3가지만 바꿨습니다.',
    date: '2026.05.13', read: 5
  },
  {
    id: 3, cat: '시작 가이드', type: '인사이트',
    title: '‘문의로 이어지는 숏폼’은 이게 다릅니다',
    excerpt: '문의를 만드는 2가지 차이.',
    date: '2026.06.01', read: 5
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
