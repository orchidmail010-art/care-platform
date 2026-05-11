import Link from "next/link";
import SiteHeader from "../../components/site-header";

export default function CopaymentReductionPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <SiteHeader />

      <section className="mx-auto w-full max-w-4xl px-4 py-6 sm:px-6 sm:py-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <p className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
            본인부담금 감면
          </p>
          <h1 className="mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-4xl">
            장기요양 본인부담금 감면 안내
          </h1>
          <p className="mt-4 text-sm leading-6 text-slate-700 sm:text-base">
            장기요양 서비스를 이용할 때 발생하는 본인부담금과 감면 대상, 확인 방법을 쉽게 안내합니다.
          </p>

          <div className="mt-6">
            <Link
              href="/visit-care-calculator"
              className="inline-flex w-full items-center justify-center rounded-xl bg-blue-700 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800 sm:w-auto sm:px-5 sm:py-3 sm:text-base"
            >
              방문요양 계산기 바로가기
            </Link>
          </div>
        </div>

        <section className="mt-5 space-y-4">
          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">본인부담금 감면이란?</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              장기요양 서비스를 이용할 때 수급자 또는 가족이 부담하는 금액 중 일부를 공단이나 지자체가 경감해 주는 제도입니다.
              감면 대상 여부에 따라 본인부담금이 줄어들어 경제적 부담을 낮출 수 있습니다.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">감면 대상은 누구인가?</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              기본적으로 기초생활수급자, 차상위계층, 의료급여 수급권자 등 소득·재산 기준을 충족하는 수급자들이 대상이 됩니다.
              또한 특정 질환이나 장기요양 등급 상태에 따라 추가 감면 혜택을 받을 수 있는 경우도 있습니다.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">일반 대상과 감경 대상 차이</h2>
            <div className="mt-3 space-y-3 text-sm leading-6 text-slate-700 sm:text-base">
              <p>
                일반 대상은 기본적인 본인부담률이 적용되는 경우입니다. 주로 일반 장기요양 수급자가 여기에 해당합니다.
              </p>
              <p>
                감경 대상은 소득·재산 기준이나 특별한 상황으로 감면률이 더 낮아지는 경우입니다. 이 경우 본인부담금이 더 적게 책정됩니다.
              </p>
              <p>
                실제 적용률과 범위는 공단과 지자체의 감면 기준에 따라 다르므로, 신청 전에 반드시 확인해야 합니다.
              </p>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">기초생활수급자와 차상위계층</h2>
            <div className="mt-3 space-y-3 text-sm leading-6 text-slate-700 sm:text-base">
              <p>
                기초생활수급자는 법령에 따라 본인부담금이 0%로 감면되는 경우가 많습니다. 해당 수급자는 장기요양 서비스 이용 시 거의 부담이 없거나 매우 낮은 비용으로 이용할 수 있습니다.
              </p>
              <p>
                차상위계층은 기초생활수급자보다는 소득이 높지만 여전히 지원이 필요한 계층입니다. 이 경우 본인부담금의 일부를 감면받을 수 있습니다.
              </p>
              <p>
                두 그룹 모두 지자체별 기준이 다를 수 있으니, 거주지 관할 행정복지센터나 국민건강보험공단을 통해 최신 기준을 확인하는 것이 중요합니다.
              </p>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">감면 여부 확인 방법</h2>
            <div className="mt-3 space-y-3 text-sm leading-6 text-slate-700 sm:text-base">
              <p>
                국민건강보험공단 고객센터 또는 지자체 복지 부서를 통해 본인부담금 감면 대상 여부를 확인할 수 있습니다.
              </p>
              <p>
                온라인으로는 공단 홈페이지와 복지로 사이트를 통해 자격 조회를 하거나, 필요 서류를 제출하여 감면 심사 결과를 받을 수 있습니다.
              </p>
              <p>
                신청 전에 장기요양 급여 유형과 본인부담률, 감면 적용 여부를 다시 한번 검토하는 것이 좋습니다.
              </p>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">신청 전 확인할 서류</h2>
            <div className="mt-3 space-y-3 text-sm leading-6 text-slate-700 sm:text-base">
              <p>본인부담금 감면 신청 시 일반적으로 필요한 서류는 다음과 같습니다.</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700 sm:text-base">
                <li>신분증 사본</li>
                <li>장기요양 인정서 또는 급여 이용 확인서</li>
                <li>소득·재산 증빙서류 (건강보험료 납부확인서, 재산세 과세증명서 등)</li>
                <li>기초생활수급자 증명서 또는 차상위계층 증명서</li>
              </ul>
              <p>
                지자체와 공단마다 요구하는 서류가 다를 수 있으므로, 신청 전에 담당 기관에 꼭 확인해야 합니다.
              </p>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">이용 전 주의사항</h2>
            <div className="mt-3 space-y-3 text-sm leading-6 text-slate-700 sm:text-base">
              <p>
                본인부담금 감면 정보를 확인할 때는 최신 공단 고시와 지자체 공지를 확인하세요. 기준이 변경될 수 있습니다.
              </p>
              <p>
                감면 대상이라고 해서 모든 장기요양 서비스에 자동으로 적용되는 것은 아닙니다. 서비스 유형별 적용 여부를 반드시 확인해야 합니다.
              </p>
              <p>
                감면 신청 후에도 공단 심사 결과에 따라 감면 대상 여부가 달라질 수 있으니, 결과를 받은 뒤 이용 계획을 세우는 것이 안전합니다.
              </p>
            </div>
          </article>
        </section>

        <article className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">자주 묻는 질문</h2>
          <div className="mt-4 space-y-3">
            {[
              {
                q: "장기요양 본인부담금은 누구나 내야 하나요?",
                a: "기본적으로 장기요양 서비스를 이용하는 수급자는 본인부담금을 내야 합니다. 다만 감면 대상자는 일부 또는 전액 감면을 받을 수 있습니다.",
              },
              {
                q: "감면 대상이면 자동으로 적용되나요?",
                a: "아니요. 감면 대상이라도 별도 신청과 심사 절차가 필요합니다. 공단 또는 지자체에 감면 신청을 해야 최종적으로 적용됩니다.",
              },
              {
                q: "가족요양도 감면 적용이 되나요?",
                a: "가족요양 역시 장기요양 서비스에 해당하므로 감면 대상 여부에 따라 본인부담금 감면이 적용될 수 있습니다. 단 서비스 유형별로 조건이 다를 수 있습니다.",
              },
              {
                q: "본인부담금 계산은 어디서 확인하나요?",
                a: "국민건강보험공단 홈페이지, 복지로 사이트, 또는 장기요양기관·지자체 상담을 통해 확인할 수 있습니다. 계산기는 방문요양 본인부담금 예측에 도움이 됩니다.",
              },
            ].map((faq) => (
              <details
                key={faq.q}
                className="group overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-sm transition-shadow duration-200 ease-out"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 px-4 py-4 text-base font-semibold text-slate-900 transition-colors duration-200 ease-out hover:text-slate-700">
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

        <article className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">함께 보면 좋은 서비스</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <Link
              href="/long-term-care"
              className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
            >
              <h3 className="text-base font-semibold text-slate-900">장기요양 안내</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">장기요양 등급 신청과 이용 절차를 확인하세요.</p>
            </Link>

            <Link
              href="/visit-care-guide"
              className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
            >
              <h3 className="text-base font-semibold text-slate-900">방문요양 안내</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">방문요양 이용 기준과 본인부담금을 확인하세요.</p>
            </Link>

            <Link
              href="/support-benefits"
              className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
            >
              <h3 className="text-base font-semibold text-slate-900">지원금/감면 제도</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">감면 제도와 지원금 정보를 다시 확인하세요.</p>
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
