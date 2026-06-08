import Link from "next/link";
import TopAd from "../../components/ads/top-ad";
import MiddleAd from "../../components/ads/middle-ad";
import BottomAd from "../../components/ads/bottom-ad";
import SiteHeader from "../../components/site-header";

export default function LongTermCareFaqPage() {
  const faqs = [
    {
      q: "장기요양 등급 신청은 어떻게 하나요?",
      a: "국민건강보험공단에 장기요양 인정 신청을 하면 공단의 직원이 가정을 방문하여 신체·인지 능력을 조사하고, 의사 소견서를 토대로 심사하여 등급을 결정합니다.",
    },
    {
      q: "65세 미만이어도 장기요양을 받을 수 있나요?",
      a: "네, 65세 미만이라도 노인성 질병(치매, 파킨슨병, 뇌졸중 등)이 있으면 신청 가능합니다.",
    },
    {
      q: "신청부터 등급 결정까지 얼마나 걸리나요?",
      a: "신청 후 일반적으로 30일 이내에 등급 결정이 이루어집니다. 복잡한 경우 조정 기간이 추가될 수 있습니다.",
    },
    {
      q: "등급 판정에 불만이 있으면 어떻게 하나요?",
      a: "등급 결정 통보를 받은 날부터 60일 이내에 이의 신청을 할 수 있으며, 공단에서 재심사를 진행합니다.",
    },
    {
      q: "장기요양 이용 도중 등급이 낮아지면 어떻게 되나요?",
      a: "등급이 낮아지더라도 기존 서비스는 변경될 때까지 계속 이용할 수 있으며, 변경 후 새로운 등급에 맞는 한도액이 적용됩니다.",
    },
    {
      q: "월 한도액을 초과하면 어떻게 되나요?",
      a: "월 한도액을 초과한 부분은 전액 본인이 부담해야 하므로, 서비스 이용량을 계획할 때 한도액을 고려해야 합니다.",
    },
    {
      q: "가족요양과 방문요양을 함께 이용할 수 있나요?",
      a: "기본적으로 같은 월에는 가족요양 또는 방문요양 중 하나만 선택하여 이용합니다. 월을 달리하면 변경 가능합니다.",
    },
    {
      q: "서비스 이용 기관을 바꾸려면 어떻게 하나요?",
      a: "현재 기관과 계약을 해지한 후 새로운 기관과 계약하면 됩니다. 공단에 변경 신청을 하는 것이 좋습니다.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <SiteHeader />

      <section className="mx-auto w-full max-w-4xl px-4 py-6 sm:px-6 sm:py-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <p className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
            장기요양 FAQ
          </p>
          <h1 className="mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-4xl">
            장기요양 자주 묻는 질문
          </h1>
          <p className="mt-4 text-sm leading-6 text-slate-700 sm:text-base">
            장기요양 신청과 이용 과정에서 자주 묻는 질문들을 정리했습니다. 등급 신청부터 서비스 이용까지 필요한 정보를 확인하세요.
          </p>
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

        <article className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">장기요양 급여액 계산</h2>
          <p className="mt-4 text-sm leading-6 text-slate-700 sm:text-base">
            장기요양 급여액은 선택한 서비스, 이용 시간(또는 횟수), 월 이용 횟수, 해당 등급의 한도액에 따라 결정됩니다.
          </p>
          <div className="mt-4 space-y-3 text-sm leading-6 text-slate-700 sm:text-base">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="font-semibold text-slate-900">급여액 = 서비스 수가 × 이용 시간(또는 횟수) × 월 이용 횟수</p>
              <p className="mt-2">
                이 금액에서 공단 부담을 제외한 나머지가 본인부담금으로 계산됩니다. 정확한 계산은 계산기를 통해 확인할 수 있습니다.
              </p>
            </div>
          </div>
        </article>

        <MiddleAd />

        <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">관련 서비스</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <Link
              href="/long-term-care"
              className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
            >
              <h3 className="text-base font-semibold text-slate-900">장기요양 안내</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">장기요양 제도 전체를 확인하세요.</p>
            </Link>

            <Link
              href="/long-term-care/grade"
              className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
            >
              <h3 className="text-base font-semibold text-slate-900">등급 안내</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">1~5등급과 인지지원등급을 알아보세요.</p>
            </Link>

            <Link
              href="/long-term-care/copayment"
              className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
            >
              <h3 className="text-base font-semibold text-slate-900">본인부담금 안내</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">본인부담금 계산과 감면을 확인하세요.</p>
            </Link>

            <Link
              href="/long-term-care/benefits"
              className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
            >
              <h3 className="text-base font-semibold text-slate-900">혜택 안내</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">장기요양 서비스와 복지 혜택을 살펴보세요.</p>
            </Link>

            <Link
              href="/family-care-guide"
              className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
            >
              <h3 className="text-base font-semibold text-slate-900">가족요양 안내</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">가족이 제공하는 돌봄을 알아보세요.</p>
            </Link>

            <Link
              href="/visit-care-guide"
              className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
            >
              <h3 className="text-base font-semibold text-slate-900">방문요양 안내</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">방문요양 서비스를 자세히 확인하세요.</p>
            </Link>
          </div>
        </section>

        <BottomAd />
      </section>
    </main>
  );
}
