import Link from "next/link";
import SiteHeader from "./components/site-header";

const menuItems = [
  
  {
    title: "장기요양",
    description:  "장기요양보험 신청 방법, 등급 판정 기준, 급여 이용 절차와 본인부담금을 쉽게 확인하세요.",
    href: "/long-term-care",
  },
  {
    title: "가족요양 안내",
    description: "가족요양 급여 기준, 인정 조건, 실제 받을 수 있는 금액까지 쉽게 확인하세요.",
    href: "/family-care-guide",
  },
  {
    title: "방문요양 안내",
    description: "이용시간, 등급별 한도액, 본인부담금 계산 기준을 확인하세요.",
    href: "/visit-care-guide",
  },
  {
    title: "요양보호사 정보",
    description: "자격 취득, 업무 범위, 현장 가이드를 확인하세요.",
    href: "/caregiver-info",
  },
  {
    title: "사회복지사 정보",
    description: "상담, 사례관리, 복지서비스 연계 정보를 확인하세요.",
    href: "/social-worker-info",
  },
  {
    title: "지원금",
    description: "본인부담 경감, 지자체 지원, 신청 방법을 안내합니다.",
    href: "/support-benefits",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <SiteHeader />

      <section className="mx-auto w-full max-w-5xl px-4 pb-8 pt-8 sm:px-6 sm:pt-12">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <p className="mb-3 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
            공공복지 정보 통합 안내
          </p>
          <h1 className="text-2xl font-bold leading-tight text-slate-900 sm:text-4xl">
            장기요양부터 지원금까지
            <br />
            한 번에 확인하는 복지 서비스
          </h1>
          <p className="mt-4 text-sm leading-6 text-slate-600 sm:max-w-3xl sm:text-base">
            장기요양, 가족요양, 요양보호사, 사회복지사 관련 핵심 정보를 신뢰할 수 있는 형식으로 제공합니다.
            필요한 계산 기능을 통해 예상 급여와 본인부담금을 빠르게 확인해 보세요.
          </p>

          <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2">
            <Link
              href="/family-care-calculator"
              className="rounded-xl bg-blue-700 px-4 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800 sm:px-5 sm:py-4 sm:text-base"
            >
              가족요양 급여 계산기
            </Link>
            <a
              href="visit-care-calculator"
              className="rounded-xl border border-blue-700 bg-white px-4 py-3 text-center text-sm font-semibold text-blue-800 transition hover:bg-blue-50 sm:px-5 sm:py-4 sm:text-base"
            >
              장기요양 본인부담금 계산기
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-4 pb-10 sm:px-6 sm:pb-14">
        <h2 className="mb-4 text-lg font-bold text-slate-900 sm:text-xl">주요 서비스</h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {menuItems.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-slate-300 hover:shadow"
            >
              <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
            </a>
          ))}
        </div>
      </section>

      <section id="long-term-care" className="mx-auto w-full max-w-5xl px-4 pb-12 sm:px-6">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">신뢰할 수 있는 복지 안내</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
            본 플랫폼은 공공서비스 이용자가 필요한 정보를 빠르게 이해할 수 있도록 구성되었습니다.
            실제 신청 전에는 국민건강보험공단 및 관할 지자체의 최신 공고를 반드시 함께 확인하세요.
          </p>
        </div>
      </section>
    </main>
  );
}
