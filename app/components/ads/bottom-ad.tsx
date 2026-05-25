"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

export default function BottomAd() {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {}
  }, []);

  return (
    <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-3230635014319056"
        data-ad-slot="3281514892"
        data-ad-format="auto"
        data-full-width-responsive="true"
     />
    </div>
  );
}