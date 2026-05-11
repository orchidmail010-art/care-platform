import Link from "next/link";
import SiteHeader from "../components/site-header";

export default function SupportBenefitsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <SiteHeader />

      <section className="mx-auto w-full max-w-4xl px-4 py-6 sm:px-6 sm:py-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <p className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">지원금/감면 제도</p>
          <h1 className="mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-4xl">지원금 및 감면 제도 안내</h1>
          <p className="mt-4 text-sm leading-6 text-slate-700 sm:text-base">
            장기요양 서비스 이용과 관련하여 본인부담금을 경감받을 수 있는 다양한 지원금 및 감면 제도를 안내합니다. 지자체 지원,
            감면 대상 기준, 신청 방법 등을 확인하여 필요한 혜택을 놓치지 마세요.
          </p>
          <div className="mt-6">
            <Link
              href="/"
              className="inline-flex w-full items-center justify-center rounded-xl bg-blue-700 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800 sm:w-auto sm:px-5 sm:py-3 sm:text-base"
            >
              메인으로 돌아가기
            </Link>
          </div>
        </div>

        <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">지원금/감면 세부 메뉴</h2>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-2">
            <Link
              href="/support-benefits/copayment-reduction"
              className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
            >
              <h3 className="text-base font-semibold text-slate-900">본인부담금 감면</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">본인부담금 감면 대상과 신청 정보를 자세히 확인할 수 있습니다.</p>
            </Link>

            <Link
              href="/support-benefits/local-support"
              className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
            >
              <h3 className="text-base font-semibold text-slate-900">지자체 지원금</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">지역별 추가 지원금과 신청 방법을 확인하세요.</p>
            </Link>

            <Link
              href="/support-benefits/documents"
              className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
            >
              <h3 className="text-base font-semibold text-slate-900">신청서류</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">감면 및 지원금 신청 시 필요한 주요 서류를 안내합니다.</p>
            </Link>

            <Link
              href="/support-benefits/faq"
              className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
            >
              <h3 className="text-base font-semibold text-slate-900">자주 묻는 질문</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">지원금 및 감면 제도 관련 자주 묻는 질문을 모았습니다.</p>
            </Link>
          </div>
        </section>

        <section className="mt-5 space-y-4">
          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">장기요양 본인부담금이란?</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              장기요양 본인부담금은 장기요양 서비스를 이용할 때 수급자 또는 보호자가 부담하는 비용의 일부입니다. 이는 요양 서비스의
              종류(재가/시설), 등급, 본인부담률(일반 15%, 감경 9% 또는 6%, 기초생활수급자 0%)에 따라 달라집니다.
              국민건강보험공단은 장기요양 급여 비용의 일정 부분을 부담하고, 나머지를 본인부담금으로 책정합니다. 본인부담금이 부담될
              경우 다양한 지원 및 감면 제도를 활용할 수 있습니다.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">감면 대상은 누구인가?</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              장기요양 본인부담금 감면 대상은 크게 의료급여 수급권자, 기초생활수급자, 차상위계층, 그리고 재난적 의료비 지원 대상자
              등이 있습니다. 소득 수준과 재산 정도에 따라 감면율이 달라지며, 본인부담률은 0%에서 최대 9%까지 적용될 수 있습니다.
              자세한 감면 대상 기준과 필요 서류는 국민건강보험공단 또는 거주지 관할 지자체에 문의하여 확인할 수 있습니다.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">지자체 지원금 확인 방법</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              각 지자체에서는 장기요양 수급자 및 가족을 위한 다양한 추가 지원 사업을 운영할 수 있습니다. 예를 들어, 특정 조건의
              치매 어르신을 위한 돌봄 서비스 연계, 저소득층 본인부담금 일부 지원, 노인 용품 지원 등이 있습니다. 지자체 지원금
              정보는 해당 지자체의 복지 부서 또는 노인장기요양보험 홈페이지에서 최신 공고를 확인하거나, 가까운 행정복지센터에 문의하여
              상담받는 것이 가장 정확합니다.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">신청 전 확인해야 할 서류</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              본인부담금 감면 또는 지원금 신청 시에는 일반적으로 장기요양 인정서, 표준 장기요양 이용 계획서, 소득 및 재산 증빙
              서류(건강보험료 납부확인서, 재산세 과세증명서 등), 신분증 사본 등이 필요합니다. 지자체별 또는 지원 사업별로 요구하는
              서류가 다를 수 있으므로, 반드시 사전에 필요한 서류 목록을 확인하고 준비하는 것이 중요합니다.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">가족요양/방문요양과의 연관성</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              가족요양 및 방문요양 서비스를 이용할 때도 본인부담금이 발생합니다. 이때 수급자 또는 요양보호사의 자격 조건에 따라
              본인부담률이 달라질 수 있으며, 감면 제도를 통해 부담을 줄일 수 있습니다. 예를 들어, 기초생활수급자는 본인부담금 0%로
              가족요양이나 방문요양을 이용할 수 있습니다. 각 서비스의 계산기와 안내 페이지를 통해 예상 비용을 확인하고, 감면 혜택을
              적용하여 최종 부담금을 예측할 수 있습니다.
            </p>
          </article>
        </section>

        <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">자주 묻는 질문</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
            지원금 및 감면 제도에 대해 자주 묻는 질문들을 모았습니다.
          </p>
          <div className="mt-4 space-y-3">
            <details className="group rounded-xl border border-slate-200 bg-slate-50 p-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-slate-900 sm:text-base">
                <span>본인부담금 감면은 자동으로 적용되나요?</span>
                <span className="text-base leading-none text-slate-500 group-open:hidden" aria-hidden>+</span>
                <span className="hidden text-base leading-none text-slate-500 group-open:inline" aria-hidden>-</span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                아닙니다. 본인부담금 감면은 수급자의 소득 및 재산 기준에 따라 신청 절차를 거쳐 인정받아야 합니다. 국민건강보험공단
                또는 지자체에 문의하여 감면 대상 여부와 신청 방법을 확인해야 합니다.
              </p>
            </details>

            <details className="group rounded-xl border border-slate-200 bg-slate-50 p-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-slate-900 sm:text-base">
                <span>지자체 지원금은 전국 공통인가요?</span>
                <span className="text-base leading-none text-slate-500 group-open:hidden" aria-hidden>+</span>
                <span className="hidden text-base leading-none text-slate-500 group-open:inline" aria-hidden>-</span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                아닙니다. 지자체 지원금은 각 지방자치단체에서 자체적으로 운영하는 사업이므로, 거주하는 지역에 따라 지원 내용과
                기준이 다를 수 있습니다. 해당 지자체의 복지 부서에 직접 문의해야 합니다.
              </p>
            </details>

            <details className="group rounded-xl border border-slate-200 bg-slate-50 p-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-slate-900 sm:text-base">
                <span>본인부담금 감면 후에도 월 한도액을 초과하면 어떻게 되나요?</span>
                <span className="text-base leading-none text-slate-500 group-open:hidden" aria-hidden>+</span>
                <span className="hidden text-base leading-none text-slate-500 group-open:inline" aria-hidden>-</span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                본인부담금 감면은 월 한도액 내에서 적용되는 것이 원칙입니다. 월 한도액을 초과하는 서비스 이용료는 감면 여부와
                관계없이 전액 본인 부담이 됩니다.
              </p>
            </details>

            <details className="group rounded-xl border border-slate-200 bg-slate-50 p-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-slate-900 sm:text-base">
                <span>감면 제도는 모든 장기요양 서비스에 적용되나요?</span>
                <span className="text-base leading-none text-slate-500 group-open:hidden" aria-hidden>+</span>
                <span className="hidden text-base leading-none text-slate-500 group-open:inline" aria-hidden>-</span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                주로 재가급여(방문요양, 방문목욕, 방문간호, 주야간보호, 단기보호 등)와 시설급여에 적용됩니다. 복지용구 구매 비용 등
                일부 비급여 항목에는 적용되지 않을 수 있으므로 확인이 필요합니다.
              </p>
            </details>
          </div>
        </section>

        <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">함께 보면 좋은 서비스</h2>

          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <Link
              href="/long-term-care"
              className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
            >
              <h3 className="text-sm font-bold text-slate-900 sm:text-base">장기요양 안내</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">장기요양 등급 신청과 이용 절차를 확인하세요.</p>
            </Link>

            <Link
              href="/visit-care-guide"
              className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
            >
              <h3 className="text-sm font-bold text-slate-900 sm:text-base">방문요양 안내</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">방문요양 이용 시간과 본인부담 기준을 확인하세요.</p>
            </Link>

            <Link
              href="/family-care-guide"
              className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
            >
              <h3 className="text-sm font-bold text-slate-900 sm:text-base">가족요양 안내</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">가족요양 인정 기준과 급여 조건을 확인하세요.</p>
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
