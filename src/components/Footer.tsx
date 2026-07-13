import Link from "next/link";
import { AtSign, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-[#3d3530] text-white/70">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div>
            <p className="font-hand text-2xl text-white">grace studio</p>
            <p className="mt-3 text-sm leading-relaxed">
              {siteConfig.address}
              <br />
              {siteConfig.phone} · {siteConfig.hours}
              <br />
              {siteConfig.account}
            </p>
          </div>

          <div className="flex gap-4">
            <Link
              href={siteConfig.kakaoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="카카오톡 채널"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
            >
              <MessageCircle size={18} />
            </Link>
            <Link
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="인스타그램"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
            >
              <AtSign size={18} />
            </Link>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Grace Studio. All rights reserved.</p>
          <p className="mt-1">개인정보는 별도로 수집하지 않습니다. 문의는 전화 또는 카카오톡을 이용해주세요.</p>
        </div>
      </div>
    </footer>
  );
}
