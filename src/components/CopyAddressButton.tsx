"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function CopyAddressButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard API 미지원 브라우저는 조용히 무시
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex items-center gap-2 rounded-full border border-accent px-6 py-3 text-sm font-medium text-text transition-colors hover:border-text"
    >
      {copied ? <Check size={16} /> : <Copy size={16} />}
      {copied ? "주소가 복사되었어요" : "주소 복사"}
    </button>
  );
}
