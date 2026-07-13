import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/site";

interface BookingButtonProps {
  variant?: "phone" | "kakao";
  size?: "default" | "lg";
  className?: string;
}

/**
 * 지금은 tel: / 카카오톡 링크로 동작하지만, 나중에 실제 예약 모달로
 * 교체할 때 이 컴포넌트만 갈아끼우면 되도록 분리해둔다.
 */
export default function BookingButton({
  variant = "phone",
  size = "default",
  className,
}: BookingButtonProps) {
  const isPhone = variant === "phone";

  return (
    <Link
      href={isPhone ? siteConfig.phoneHref : siteConfig.kakaoUrl}
      target={isPhone ? undefined : "_blank"}
      rel={isPhone ? undefined : "noopener noreferrer"}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300",
        "hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0",
        size === "lg" ? "px-8 py-4 text-base" : "px-6 py-3 text-sm",
        isPhone
          ? "bg-text text-white hover:bg-[#333]"
          : "bg-[#FEE500] text-[#391B1B] hover:bg-[#f5d900]",
        className
      )}
    >
      {isPhone ? <Phone size={18} /> : <MessageCircle size={18} />}
      {isPhone ? "전화 문의하기" : "카카오톡 문의"}
    </Link>
  );
}
