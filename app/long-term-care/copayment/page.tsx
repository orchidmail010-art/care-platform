import Link from "next/link";
import SiteHeader from "../../components/site-header";

export default function LongTermCareCopaymentPage() {
  const faqs = [
    {
      q: "장기요양 본인부담금은 어떻게 계산되나요?",
      a: "총 급여액에서 공단 부담금을 제외한 금액이 본인부담금이며, 등급과 감면 비율에 따라 최종 부담 금액이 달라집니다.",
    },
    {
      q: "본인부담금 감면 대상은 누구인가요?",
      a: "기초생활수급자, 차상위계층, 의료급여 대상자 등 소득 및 재산 기준에 따라 감면 혜택을 받을 수 있습니다.",
    },
    {
      q: "감경 40%와 60%의 차이는 무엇인가요?",
      a: "감경 40%는 총 급여의 9%를 본인이 부담하고, 감경 60%는 6%를 본인이 부담하는 방식으로, 실제 부담액 차이가 큽니다.",
    },
    {
      q: "본인부담금 사례는 어떤 식으로 확인하나요?",
      a: "이용 시간, 등급, 감면 비율을 반영한 계산기를 사용하거나 상담을 통해 예상 부담액을 확인할 수 있습니다.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <SiteHeader />

      <section className="mx-auto w-full max-w-4xl px-4 py-6 sm:px-6 sm:py-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <p className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
            장기요양 본인부담금
          </p>
          <h1 className="mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-4xl">
            장기요양 본인부담금 안내
          </h1>
          <p className="mt-4 text-sm leading-6 text-slate-700 sm:text-base">
            장기요양 서비스를 이용할 때 발생하는 본인부담금과 감면 제도를 이해하면 부담을 줄이는 데 도움이 됩니다.
            등급별 계산 방식과 실제 사례를 통해 핵심 정보를 빠르게 확인해보세요.
          </p>
        </div>

        <section className="mt-5 space-y-4">
          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">본인부담금 설명</h2>
            <p className="mt-4 text-sm leading-6 text-slate-700 sm:text-base">
              장기요양 본인부담금은 공단이 부담하는 급여 부분을 제외한 비용입니다. 등급, 서비스 종류, 이용 시간, 감면 비율에 따라서
              실제 부담 금액이 크게 달라질 수 있습니다.
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              기본적으로 급여액의 일부만 본인이 부담하며, 감면 대상자는 더 낮은 본인부담률을 적용받아 비용을 줄일 수 있습니다.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">감면 대상</h2>
            <div className="mt-4 space-y-3 text-sm leading-6 text-slate-700 sm:text-base">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">기초생활수급자</h3>
                <p>기초생활수급자는 본인부담금 0% 또는 매우 낮은 비율로 감면 받을 수 있습니다.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">차상위계층</h3>
                <p>차상위계층은 소득 및 재산 기준에 따라 본인부담금 감면 혜택을 적용받을 수 있습니다.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">의료급여 대상자</h3>
                <p>의료급여 수급권자는 장기요양 본인부담금을 추가로 감면 받을 수 있는 자격을 갖출 수 있습니다.</p>
              </div>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">감경 차이</h2>
            <div className="mt-4 grid gap-3 text-sm leading-6 text-slate-700 sm:grid-cols-2 sm:text-base">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">감경 40%</h3>
                <p>총 급여액의 9%를 본인이 부담하며, 나머지는 공단이 부담합니다. 중간 수준의 감면 혜택입니다.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">감경 60%</h3>
                <p>총 급여액의 6%를 본인이 부담하며, 공단 부담 비율은 낮아집니다. 감면 대상 범위가 더 제한적일 수 있습니다.</p>
              </div>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">실제 부담 사례</h2>
            <div className="mt-4 space-y-3 text-sm leading-6 text-slate-700 sm:text-base">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="font-semibold text-slate-900">사례 1: 1등급 일반</p>
                <p>30분 방문요양 월 20회 이용 시, 본인부담률 15%가 적용되면 매달 일정 금액을 본인이 부담하게 됩니다.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="font-semibold text-slate-900">사례 2: 감경 40%</p>
                <p>감경 40%를 적용받는 경우 일반 이용자의 본인부담금보다 약 9% 더 낮은 금액만 부담하게 됩니다.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="font-semibold text-slate-900">사례 3: 기초생활수급자</p>
                <p>기초생활수급자는 본인부담금 0%가 적용되어 서비스 이용 비용 부담이 크게 줄어듭니다.</p>
              </div>
            </div>
          </article>

          <section className="space-y-4">
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

          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">관련 링크</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <Link
                href="/long-term-care"
                className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
              >
                <h3 className="text-base font-semibold text-slate-900">장기요양 안내</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">장기요양 서비스와 전체 제도를 확인하세요.</p>
              </Link>
              <Link
                href="/long-term-care/grade"
                className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
              >
                <h3 className="text-base font-semibold text-slate-900">등급 안내</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">1~5등급과 인지지원등급의 차이를 자세히 살펴보세요.</p>
              </Link>
              <Link
                href="/family-care-guide"
                className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
              >
                <h3 className="text-base font-semibold text-slate-900">가족요양 안내</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">가족요양 이용과 본인부담금 관계를 알아보세요.</p>
              </Link>
              <Link
                href="/support-benefits"
                className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
              >
                <h3 className="text-base font-semibold text-slate-900">지원금/감면 정보</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">본인부담금 감면과 추가 지원 혜택을 확인하세요.</p>
              </Link>
            </div>
          </section>
        </section>
      </section>
    </main>
  );
}
