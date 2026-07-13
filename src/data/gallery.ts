export type GalleryCategory = "전체" | "공방전경" | "포토존" | "작품" | "소품디테일";

export interface GalleryItem {
  id: string;
  category: Exclude<GalleryCategory, "전체">;
  image: string;
  alt: string;
}

export const galleryItems: GalleryItem[] = [
  { id: "g1", category: "포토존", image: "/images/flower-wall-1.jpg", alt: "페이퍼플라워 월 포토존" },
  { id: "g2", category: "포토존", image: "/images/flower-wall-2.jpg", alt: "페이퍼플라워 월 클로즈업" },
  { id: "g3", category: "공방전경", image: "/images/window-corner.jpg", alt: "볕 좋은 창가 자리" },
  { id: "g4", category: "소품디테일", image: "/images/toy-hammock.jpg", alt: "마크라메 해먹 인형 소품" },
  { id: "g5", category: "작품", image: "/images/flower-nest-toy.jpg", alt: "페이퍼플라워 작품 디테일" },
  { id: "g6", category: "공방전경", image: "/images/drink-corner.jpg", alt: "셀프 티타임 코너" },
  { id: "g7", category: "소품디테일", image: "/images/fridge.jpg", alt: "음료 쇼케이스" },
  { id: "g8", category: "공방전경", image: "/images/storefront.jpg", alt: "Grace Studio 외관 간판" },
];

export const galleryCategories: GalleryCategory[] = [
  "전체",
  "공방전경",
  "포토존",
  "작품",
  "소품디테일",
];
