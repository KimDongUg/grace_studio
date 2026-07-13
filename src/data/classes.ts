export type ClassCategory = "꽃" | "키즈" | "성인" | "원데이" | "정규반";

export interface ClassItem {
  id: string;
  category: ClassCategory;
  name: string;
  duration: string;
  price: string;
  image: string;
  description: string;
}

export const classes: ClassItem[] = [
  {
    id: "flower-wreath",
    category: "꽃",
    name: "드라이플라워 리스 만들기",
    duration: "60분",
    price: "45,000원",
    image: "/images/flower-wall-1.jpg",
    description: "은은하게 마른 꽃으로 완성하는 나만의 리스. 초보자도 부담 없이 참여할 수 있어요.",
  },
  {
    id: "paper-flower",
    category: "꽃",
    name: "페이퍼플라워 원데이",
    duration: "90분",
    price: "55,000원",
    image: "/images/flower-wall-2.jpg",
    description: "공방 시그니처 페이퍼플라워 월과 같은 기법으로 대형 종이꽃을 만들어봐요.",
  },
  {
    id: "kids-flower",
    category: "키즈",
    name: "어린이 꽃다발 클래스",
    duration: "50분",
    price: "35,000원",
    image: "/images/flower-nest-toy.jpg",
    description: "아이들이 안전한 재료로 직접 꽃다발을 만들어보는 체험형 클래스.",
  },
  {
    id: "adult-flower-box",
    category: "성인",
    name: "플라워 박스 클래스",
    duration: "70분",
    price: "50,000원",
    image: "/images/window-corner.jpg",
    description: "선물하기 좋은 플라워 박스를 만드는 성인 대상 클래스.",
  },
  {
    id: "wreath-regular",
    category: "정규반",
    name: "플로리스트 정규반 (4주)",
    duration: "주 1회 · 4주",
    price: "280,000원",
    image: "/images/toy-hammock.jpg",
    description: "기초부터 차근차근, 꽃을 다루는 감각을 익히는 4주 정규 커리큘럼.",
  },
  {
    id: "onedayclass-basic",
    category: "원데이",
    name: "웰컴 원데이 클래스",
    duration: "40분",
    price: "30,000원",
    image: "/images/drink-corner.jpg",
    description: "처음 방문하시는 분들을 위한 가볍고 편안한 원데이 클래스.",
  },
];

export const classCategories: ClassCategory[] = ["꽃", "키즈", "성인", "원데이", "정규반"];
