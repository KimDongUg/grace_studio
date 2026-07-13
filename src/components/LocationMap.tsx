import { MapPin } from "lucide-react";
import { siteConfig } from "@/data/site";

/**
 * 카카오맵 JavaScript SDK는 앱키가 필요해 로컬 프리뷰 단계에서는
 * 자리만 잡아둔 플레이스홀더. 앱키 발급 후 이 자리에 SDK 스크립트로 교체.
 */
export default function LocationMap({ className }: { className?: string }) {
  return (
    <div
      className={`flex aspect-[16/10] w-full flex-col items-center justify-center gap-3 rounded-2xl border border-accent bg-secondary text-center ${className ?? ""}`}
    >
      <MapPin size={32} className="text-mustard" />
      <p className="font-medium text-text">{siteConfig.address}</p>
      <p className="text-sm text-text-light">카카오맵 SDK 연동 예정 (앱키 발급 후 교체)</p>
    </div>
  );
}
