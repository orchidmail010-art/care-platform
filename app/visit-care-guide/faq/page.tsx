import Link from "next/link";
import TopAd from "../../components/ads/top-ad";
import MiddleAd from "../../components/ads/middle-ad";
import BottomAd from "../../components/ads/bottom-ad";
import SiteHeader from "../../components/site-header";

export default function VisitCareFaqPage() {
  const faqs = [
    {
      q: "방문요양은 누구에게 필요한 서비스인가요?",
      a: "장기요양 등급을 받은 수급자 중 집에서 일상생활 지원과 신체 활동 보조가 필요한 경우 방문요양을 이용할 수 있습니다.",
    },
    {
      q: "방문요양은 하루 몇 시간까지 이용 가능한가요?",
      a: "이용 가능한 시간은 선택한 서비스 구간(30분, 60분, 90분, 120분 등)에 따라 다르며, 월 한도액과 등급에 따라 이용 횟수가 결정됩니다.",
    },
    {
      q: "방문요양 본인부담금은 어떻게 계산되나요?",
      a: "총 급여에서 공단 부담금을 제외한 금액이 본인부담금입니다. 감면 대상자는 40%, 60% 또는 0%의 본인부담률이 적용될 수 있습니다.",
    },
    {
      q: "방문요양과 가족요양의 차이는 무엇인가요?",
      a: "방문요양은 요양보호사가 가정을 방문해 서비스를 제공하는 반면 가족요양은 가족이 요양보호사 자격으로 직접 돌봄을 제공하는 방식입니다.",
    },
    {
      q: "장기요양 등급별 월 한도액은 어떻게 확인하나요?",
      a: "장기요양 등급에 따라 월 한도액이 달라지며, 공단 고시 자료 또는 방문요양 기관 상담을 통해 최신 한도액을 확인할 수 있습니다.",
    },
    {
      q: "방문요양 본인부담금 감면 대상은 누구인가요?",
      a: "기초생활수급자, 차상위계층, 의료급여 수급권자 등은 감면 대상이 될 수 있으며, 지원 자격은 지자체 및 공단 기준에 따라 다릅니다.",
    },
    {
      q: "방문요양 신청 절차는 어떻게 되나요?",
      a: "먼저 장기요양 등급을 확인하고, 방문요양 기관과 상담 후 서비스를 신청합니다. 이후 공단의 급여인정 및 계약 절차를 거쳐 서비스를 시작합니다.",
    },
    {
      q: "서비스 취소 또는 변경은 어떻게 하나요?",
      a: "방문요양 기관과 사전에 협의하여 일정 변경이나 취소 절차를 진행합니다. 특히 계약 전후에는 기관과의 약속 사항을 확인하는 것이 중요합니다.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <SiteHeader />

      <section className="mx-auto w-full max-w-4xl px-4 py-6 sm:px-6 sm:py-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <p className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
            방문요양 FAQ
          </p>
          <h1 className="mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-4xl">
            방문요양 자주 묻는 질문
          </h1>
          <p className="mt-4 text-sm leading-6 text-slate-700 sm:text-base">
            방문요양 이용을 준비하는 분들을 위해 자주 묻는 질문과 답변을 정리했습니다. 서비스 이용 방법, 본인부담금,
            등급별 한도, 감면 신청 등 핵심 정보를 빠르게 확인하세요.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/visit-care-calculator"
              className="inline-flex items-center justify-center rounded-xl bg-blue-700 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800 sm:w-auto"
            >
              방문요양 계산기 바로가기
            </Link>
            <Link
              href="/support-benefits"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900 transition hover:border-blue-300 hover:bg-blue-50 sm:w-auto"
            >
              지원금/감면 정보 보기
            </Link>
          </div>
        </div>

        <TopAd />

        <section className="mt-5 space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow duration-200 ease-out"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 text-base font-semibold text-slate-900 transition-colors duration-200 ease-out hover:text-slate-700">
                {faq.q}
                <span className="text-slate-500 transition-transform duration-200 ease-out group-open:-rotate-45">+</span>
              </summary>
              <div className="border-t border-slate-200 px-5 py-4 text-sm leading-6 text-slate-700 transition-[max-height,opacity] duration-300 ease-out max-h-0 opacity-0 group-open:max-h-96 group-open:opacity-100">
                {faq.a}
              </div>
            </details>
          ))}
        </section>

        <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">관련 서비스</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <Link
              href="/visit-care-guide/copayment"
              className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
            >
              <h3 className="text-base font-semibold text-slate-900">본인부담금 안내</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">방문요양 본인부담금 계산 방법과 감면 기준을 확인하세요.</p>
            </Link>

            <Link
              href="/visit-care-guide/monthly-limit"
              className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
            >
              <h3 className="text-base font-semibold text-slate-900">월 한도액 안내</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">장기요양 등급별 방문요양 월 한도액을 확인할 수 있습니다.</p>
            </Link>

            <Link
              href="/visit-care-calculator"
              className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
            >
              <h3 className="text-base font-semibold text-slate-900">방문요양 계산기</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">이용 시간과 횟수를 입력해 예상 비용을 계산해보세요.</p>
            </Link>

            <Link
              href="/support-benefits"
              className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
            >
              <h3 className="text-base font-semibold text-slate-900">지원금/감면 제도</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">감면 혜택과 추가 지원 제도를 살펴보세요.</p>
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
