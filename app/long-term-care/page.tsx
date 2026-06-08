import Link from "next/link";
import TopAd from "../components/ads/top-ad";
import MiddleAd from "../components/ads/middle-ad";
import BottomAd from "../components/ads/bottom-ad";
import SiteHeader from "../components/site-header";

export default function LongTermCarePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <SiteHeader />

      <section className="mx-auto w-full max-w-4xl px-4 py-6 sm:px-6 sm:py-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <p className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
            장기요양 안내
          </p>

          <h1 className="mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-4xl">
            장기요양보험 안내
          </h1>

          <p className="mt-4 text-sm leading-6 text-slate-700 sm:text-base">
            장기요양보험은 고령이나 노인성 질병으로 일상생활이 어려운 분들에게
            돌봄 서비스를 제공하기 위한 제도입니다. 본 안내 페이지에서는
            장기요양 등급 신청 대상, 판정 절차, 이용 가능한 서비스와
            본인부담금 기준 등을 쉽게 확인할 수 있습니다.
          </p>

          <div className="mt-6">
            <Link
              href="/visit-care-calculator"
              className="inline-flex w-full items-center justify-center rounded-xl bg-blue-700 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800 sm:w-auto sm:px-5 sm:py-3 sm:text-base"
            >
              장기요양 계산기 바로가기
            </Link>
          </div>
        </div>

        <TopAd />

        <section className="mt-5 space-y-4">
          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
              장기요양보험이란?
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              장기요양보험은 혼자 일상생활을 하기 어려운 어르신에게
              방문요양, 방문목욕, 주야간보호, 시설급여 등의 서비스를 제공하는
              사회보험 제도입니다.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
              장기요양 등급 신청 대상
            </h2>

            <div className="mt-3 space-y-3 text-sm leading-6 text-slate-700 sm:text-base">
              <p>
                만 65세 이상 어르신 또는 치매·뇌혈관질환 등 노인성 질병이 있는
                경우 장기요양 등급 신청이 가능합니다.
              </p>

              <p>
                혼자 일상생활 수행이 어려운 상태인지 여부를 기준으로
                국민건강보험공단의 인정조사를 통해 등급이 판정됩니다.
              </p>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
              등급 판정 절차
            </h2>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-base font-semibold text-slate-900">
                  인정조사 진행
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-700">
                  공단 직원이 방문하여 신체 기능, 인지 상태, 일상생활 수행 능력
                  등을 조사합니다.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-base font-semibold text-slate-900">
                  등급 판정
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-700">
                  인정조사 결과와 의사소견서를 바탕으로 등급판정위원회에서
                  최종 장기요양 등급을 결정합니다.
                </p>
              </div>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
              이용 가능한 서비스
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              장기요양 등급을 받은 경우 방문요양, 방문목욕, 방문간호,
              주야간보호, 단기보호, 복지용구, 시설급여 등의 서비스를 이용할 수
              있습니다.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
              본인부담금 기준
            </h2>

            <div className="mt-3 space-y-2 text-sm leading-6 text-slate-700 sm:text-base">
              <p>
                장기요양 서비스 이용 시 일정 비율의 본인부담금이 발생합니다.
              </p>

              <p>
                기초생활수급자 및 감경 대상자는 본인부담금 감면 혜택을 받을 수
                있습니다.
              </p>

              <p>
                실제 부담 금액은 이용 서비스 종류와 이용 시간에 따라 달라질 수
                있습니다.
              </p>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
              신청 전 확인할 서류
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              장기요양 신청 시 신분증, 장기요양인정 신청서, 의사소견서 등이
              필요할 수 있습니다. 실제 제출 서류는 국민건강보험공단 최신 안내를
              확인하는 것이 좋습니다.
            </p>
          </article>
        </section>
      </section>

             <section className="mx-auto mt-5 w-full max-w-4xl px-4 sm:px-6">
<MiddleAd />

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
            장기요양 자주 묻는 질문
          </h2>

          <div className="mt-4 space-y-3">
            {[
              {
                q: "장기요양 등급은 누가 신청할 수 있나요?",
                a: "본인, 가족, 친족, 사회복지전담공무원 등이 신청할 수 있습니다. 거동이 불편한 경우 가족이 대신 신청하는 경우도 많습니다.",
              },
              {
                q: "등급 판정은 얼마나 걸리나요?",
                a: "신청 후 인정조사와 의사소견서 제출, 등급판정 절차를 거쳐 결정됩니다. 지역과 상황에 따라 기간은 달라질 수 있습니다.",
              },
              {
                q: "가족요양과 방문요양도 이용할 수 있나요?",
                a: "장기요양 등급을 받은 뒤 조건을 충족하면 방문요양 서비스를 이용할 수 있으며, 가족요양은 별도 인정 기준을 충족해야 합니다.",
              },
              {
                q: "본인부담금은 얼마나 내나요?",
                a: "서비스 종류와 등급, 이용 시간, 감면 여부에 따라 달라집니다. 정확한 금액은 이용 예정 서비스 기준으로 계산해보는 것이 좋습니다.",
              },
            ].map((faq) => (
              <details
                key={faq.q}
                className="group overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-sm transition-shadow duration-200 ease-out"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 px-4 py-4 text-sm font-bold text-slate-900 transition-colors duration-200 ease-out hover:text-slate-700">
                  {faq.q}
                  <span className="text-slate-500 transition-transform duration-200 ease-out group-open:-rotate-45">+</span>
                </summary>
                <div className="overflow-hidden border-t border-slate-200 px-4 transition-[max-height,opacity] duration-300 ease-out max-h-0 opacity-0 group-open:max-h-60 group-open:py-4 group-open:opacity-100">
                  <p className="text-sm leading-6 text-slate-700">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </article>
      </section>

      <section className="mx-auto mt-5 w-full max-w-4xl px-4 pb-10 sm:px-6 sm:pb-14">
        <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
            함께 보면 좋은 서비스
          </h2>

          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <Link
              href="/family-care-guide"
              className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
            >
              <h3 className="text-sm font-bold text-slate-900 sm:text-base">가족요양 안내</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                가족요양 인정 기준과 급여 조건을 확인하세요.
              </p>
            </Link>

            <Link
              href="/visit-care-guide"
              className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
            >
              <h3 className="text-sm font-bold text-slate-900 sm:text-base">방문요양 안내</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                방문요양 이용 시간과 본인부담 기준을 확인하세요.
              </p>
            </Link>

            <Link
              href="/support-benefits"
              className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
            >
              <h3 className="text-sm font-bold text-slate-900 sm:text-base">지원금/감면 제도</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                본인부담 경감과 지자체 지원 정보를 확인하세요.
              </p>
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}