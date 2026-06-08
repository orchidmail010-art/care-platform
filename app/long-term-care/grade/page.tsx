import Link from "next/link";
import TopAd from "../../components/ads/top-ad";
import MiddleAd from "../../components/ads/middle-ad";
import BottomAd from "../../components/ads/bottom-ad";
import SiteHeader from "../../components/site-header";

export default function LongTermCareGradePage() {
  const faqs = [
    {
      q: "장기요양 등급 심사는 어떻게 진행되나요?",
      a: "방문조사와 의사 소견서를 바탕으로 공단이 심사하여 1~5등급 또는 인지지원등급을 결정합니다.",
    },
    {
      q: "인지지원등급은 누구에게 해당되나요?",
      a: "일상생활 능력이 떨어지지는 않지만 인지 기능 저하로 일상생활에서 부분적인 지원이 필요한 경우에 해당합니다.",
    },
    {
      q: "등급별로 어떤 서비스를 이용할 수 있나요?",
      a: "1~5등급은 재가급여와 시설급여를, 인지지원등급은 주로 방문요양, 방문목욕, 단기보호 등인지 지원 중심 서비스를 이용할 수 있습니다.",
    },
    {
      q: "등급 변경은 얼마나 자주 신청할 수 있나요?",
      a: "상태 변화가 있을 때마다 변경 신청이 가능하며, 정기 재판정 또는 상태 변화에 따라 공단에 등급 변경을 요청할 수 있습니다.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <SiteHeader />

      <section className="mx-auto w-full max-w-4xl px-4 py-6 sm:px-6 sm:py-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <p className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
            장기요양 등급 안내
          </p>
          <h1 className="mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-4xl">
            장기요양 1~5등급 및 인지지원등급 안내
          </h1>
          <p className="mt-4 text-sm leading-6 text-slate-700 sm:text-base">
            장기요양 등급별로 제공되는 급여와 서비스가 달라집니다. 1~5등급과 인지지원등급의 차이를 이해하고, 나에게
            맞는 돌봄 서비스를 선택하는 데 도움을 드립니다.
          </p>
        </div>

        <TopAd />

        <section className="mt-5 space-y-4">
          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">1~5등급 설명</h2>
            <div className="mt-4 space-y-4 text-sm leading-6 text-slate-700 sm:text-base">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">1등급</h3>
                <p>서서 이동이 어려우며 전반적인 일상생활 수행이 거의 불가능하여 상시 간병과 돌봄이 필요한 상태입니다.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">2등급</h3>
                <p>여러 활동을 스스로 수행하기 어려워 상시 도움과 주기적인 돌봄이 필요한 상태입니다.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">3등급</h3>
                <p>일상생활 수행이 부분적으로 어려우며 도움과 보조가 필요한 상태입니다.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">4등급</h3>
                <p>일부 일상생활 수행이 가능하지만 활동 범위가 좁아 주기적인 돌봄과 지원이 필요한 상태입니다.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">5등급</h3>
                <p>경미한 일상생활 지원이 필요하지만 비교적 독립적인 생활이 가능한 상태로, 제한된 급여를 받을 수 있습니다.</p>
              </div>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">인지지원등급</h2>
            <p className="mt-4 text-sm leading-6 text-slate-700 sm:text-base">
              인지지원등급은 신체 기능 저하보다는 인지 기능 저하가 주된 문제인 경우에 해당합니다. 일상생활 수행에는 큰 어려움이 없지만,
              기억력과 판단력 지원이 필요한 상황에서 별도의 서비스가 제공됩니다.
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              인지지원등급은 주로 방문요양, 방문목욕, 단기보호, 주야간보호 같은 재가급여 중심 서비스를 이용하며, 개별 상태에 따라 추가적인
              인지 지원 서비스가 포함될 수 있습니다.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">등급별 차이</h2>
            <div className="mt-4 grid gap-3 text-sm leading-6 text-slate-700 sm:grid-cols-2 sm:text-base">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">등급별 지원 범위</h3>
                <p>등급이 높을수록 시설급여와 재가급여 모두에서 더 많은 서비스와 지원을 받을 수 있습니다.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">인지지원등급과 일반 등급 차이</h3>
                <p>인지지원등급은 신체적 장애보다는 인지 기능 중심으로 지원하며, 주요 목표는 일상생활 속 안전과 정신적 안정 지원입니다.</p>
              </div>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">이용 가능 서비스</h2>
            <div className="mt-4 space-y-3 text-sm leading-6 text-slate-700 sm:text-base">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">재가급여</h3>
                <p>방문요양, 방문목욕, 방문간호, 주야간보호, 단기보호 등 가정에서 제공되는 다양한 돌봄 서비스를 이용할 수 있습니다.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">시설급여</h3>
                <p>등급에 따라 시설에 입소하여 통합적인 돌봄과 치료를 받는 서비스도 이용 가능합니다.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">인지지원 서비스</h3>
                <p>인지 기능 저하가 있는 경우 인지 활동 지원과 안전 관리 중심의 서비스를 받을 수 있습니다.</p>
              </div>
            </div>
          </article>

          <MiddleAd />

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

          <BottomAd />

          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">관련 링크</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <Link
                href="/long-term-care"
                className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
              >
                <h3 className="text-base font-semibold text-slate-900">장기요양 안내</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">장기요양 제도 전체를 확인하고 등급 신청 절차를 살펴보세요.</p>
              </Link>
              <Link
                href="/family-care-guide"
                className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
              >
                <h3 className="text-base font-semibold text-slate-900">가족요양 안내</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">가족요양 관련 지원과 이용 방법을 자세히 알아보세요.</p>
              </Link>
              <Link
                href="/visit-care-guide"
                className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
              >
                <h3 className="text-base font-semibold text-slate-900">방문요양 안내</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">방문요양 서비스와 본인부담금 정보를 참고하세요.</p>
              </Link>
              <Link
                href="/support-benefits"
                className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
              >
                <h3 className="text-base font-semibold text-slate-900">지원금/감면 제도</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">감면 및 지원 제도를 통해 비용 부담을 줄이는 방법을 확인하세요.</p>
              </Link>
            </div>
          </section>
        </section>
      </section>
    </main>
  );
}
