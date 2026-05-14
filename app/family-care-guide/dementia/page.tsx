import Link from "next/link";
import SiteHeader from "../../components/site-header";

export default function FamilyCareGuideDementiaPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <SiteHeader />

      <section className="mx-auto w-full max-w-4xl px-4 py-6 sm:px-6 sm:py-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <p className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
            치매 가족요양
          </p>
          <h1 className="mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-4xl">
            치매 가족요양 인정 기준 안내
          </h1>
          <p className="mt-4 text-sm leading-6 text-slate-700 sm:text-base">
            치매 장기요양 대상자의 가족요양 인정 기준과 90분 적용 여부, 이용 전 확인사항을 쉽게 안내합니다.
          </p>

          <div className="mt-6">
            <Link
              href="/family-care-calculator"
              className="inline-flex w-full items-center justify-center rounded-xl bg-blue-700 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800 sm:w-auto sm:px-5 sm:py-3 sm:text-base"
            >
              가족요양 계산기 바로가기
            </Link>
          </div>
        </div>

        <section className="mt-5 space-y-4">
          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">치매 가족요양이란?</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              치매가 있는 장기요양 대상자가 가족요양 서비스를 이용할 때, 가족의 돌봄과 장기요양 급여가 함께 인정되는 제도입니다.
              치매라는 진단과 함께 서비스 필요성, 가족 관계, 돌봄 제공 능력 등을 종합적으로 평가합니다.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">인지지원등급 설명</h2>
            <div className="mt-3 space-y-3 text-sm leading-6 text-slate-700 sm:text-base">
              <p>
                인지지원등급은 치매와 인지 기능 저하로 일상생활 지원이 필요한 대상자에게 적용되는 등급입니다.
                가족요양 인정 시에는 치매 상태와 더불어 인지지원등급 여부도 서비스 필요성을 판단하는 중요한 요소가 됩니다.
              </p>
              <p>
                인지지원등급이라도 가족요양이 가능한 경우가 있으며, 그 기준과 인정 범위는 공단의 평가 결과에 따라 달라질 수 있습니다.
              </p>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">치매와 90분 인정 기준</h2>
            <div className="mt-3 space-y-3 text-sm leading-6 text-slate-700 sm:text-base">
              <p>
                치매가 있다고 해서 자동으로 90분형 가족요양이 인정되는 것은 아닙니다. 90분형은 추가적인 돌봄 필요성과 가족관계, 요양보호사 자격 여부 등이 함께 고려됩니다.
              </p>
              <p>
                공단이 정한 90분 인정 기준을 충족해야 하며, 치매 진단 외에도 일상생활 지원 정도, 문제행동, 장애 정도 등이 종합적으로 평가됩니다.
              </p>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">실제 인정 사례</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              실제로 치매를 가진 수급자가 가족요양 90분을 인정받은 사례는, 가족이 일상생활 보조와 문제행동 관리가 필요한 경우가 많습니다.
              공단은 서류와 현장 평가를 통해 치매 상태와 가족 돌봄 환경을 확인하고, 인정 여부를 결정합니다.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">가족관계와 이용 조건</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              가족요양을 이용하려면 요양보호사 자격을 가진 가족이 수급자와 인정되는 가족관계에 있어야 합니다. 동거 여부와 실제 돌봄 제공 여부가 중요한 판단 요소입니다.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">이용 전 확인해야 할 점</h2>
            <div className="mt-3 space-y-3 text-sm leading-6 text-slate-700 sm:text-base">
              <p>
                서비스 신청 전에 치매 진단서, 가족관계 확인 서류, 요양보호사 자격증 등 필요한 서류를 준비해야 합니다.
              </p>
              <p>
                또한, 공단의 인정 기준이 자주 변경될 수 있으므로 장기요양기관과 상담하여 최신 기준을 확인하는 것이 중요합니다.
              </p>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">실제 이용 시 주의사항</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              실제 이용 시에는 치매 상태에 따른 서비스 필요성, 가족 돌봄 환경, 한도 내 이용 계획 등을 종합적으로 검토해야 합니다.
              신청 전에 장기요양기관과 공단에 문의해 인정 가능성 및 예상 급여를 확인하세요.
            </p>
          </article>
        </section>

        <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">자주 묻는 질문</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
            치매 가족요양 인정 기준에 대해 자주 묻는 질문을 정리했습니다.
          </p>

          <div className="mt-4 space-y-3">
            <details className="group rounded-xl border border-slate-200 bg-slate-50 p-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-slate-900 sm:text-base">
                <span>치매가 있으면 무조건 90분 인정되나요?</span>
                <span className="text-base leading-none text-slate-500 group-open:hidden" aria-hidden>
                  +
                </span>
                <span className="hidden text-base leading-none text-slate-500 group-open:inline" aria-hidden>
                  -
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                치매가 있다고 해서 무조건 90분이 인정되는 것은 아닙니다. 치매 여부 외에도 일상생활 지원 필요성, 문제행동, 가족 돌봄 환경 등이 함께 평가됩니다.
              </p>
            </details>

            <details className="group rounded-xl border border-slate-200 bg-slate-50 p-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-slate-900 sm:text-base">
                <span>인지지원등급도 가족요양이 가능한가요?</span>
                <span className="text-base leading-none text-slate-500 group-open:hidden" aria-hidden>
                  +
                </span>
                <span className="hidden text-base leading-none text-slate-500 group-open:inline" aria-hidden>
                  -
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                인지지원등급 대상자도 가족요양 대상이 될 수 있습니다. 다만 가족요양 인정 여부는 공단에서 평가한 돌봄 필요성과 가족관계를 기준으로 결정됩니다.
              </p>
            </details>

            <details className="group rounded-xl border border-slate-200 bg-slate-50 p-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-slate-900 sm:text-base">
                <span>가족요양 인정 기준은 어디서 확인하나요?</span>
                <span className="text-base leading-none text-slate-500 group-open:hidden" aria-hidden>
                  +
                </span>
                <span className="hidden text-base leading-none text-slate-500 group-open:inline" aria-hidden>
                  -
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                가족요양 인정 기준은 국민건강보험공단의 장기요양급여 인정기준과 지침에서 확인할 수 있습니다. 장기요양기관이나 공단에 문의하면 최신 기준을 안내받을 수 있습니다.
              </p>
            </details>

            <details className="group rounded-xl border border-slate-200 bg-slate-50 p-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-slate-900 sm:text-base">
                <span>실제 급여 차이가 발생하나요?</span>
                <span className="text-base leading-none text-slate-500 group-open:hidden" aria-hidden>
                  +
                </span>
                <span className="hidden text-base leading-none text-slate-500 group-open:inline" aria-hidden>
                  -
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                네. 가족요양 90분형은 60분형보다 단가가 높아 급여와 본인부담금이 달라질 수 있습니다. 실제 급여 차이는 공단 고시 수가와 가족요양 인정 여부에 따라 결정됩니다.
              </p>
            </details>
          </div>
        </section>

        <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">계산 후 함께 확인하세요</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
            치매 가족요양 인정 기준을 확인한 뒤 아래 링크를 통해 가족요양 관련 다른 정보도 함께 살펴보세요.
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <Link href="/family-care-guide/90min" className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm transition hover:border-slate-300 hover:bg-white">
              <h3 className="text-base font-semibold text-slate-900">가족요양 90분 기준</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">가족요양 90분 인정 조건을 자세히 확인하세요.</p>
            </Link>
            <Link href="/family-care-guide/conditions" className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm transition hover:border-slate-300 hover:bg-white">
              <h3 className="text-base font-semibold text-slate-900">가족요양 조건</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">가족요양 이용 조건과 인정 기준을 확인하세요.</p>
            </Link>
            <Link href="/family-care-calculator" className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm transition hover:border-slate-300 hover:bg-white">
              <h3 className="text-base font-semibold text-slate-900">가족요양 계산기</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">가족요양 본인부담금을 직접 계산해 보세요.</p>
            </Link>
            <Link href="/long-term-care" className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm transition hover:border-slate-300 hover:bg-white">
              <h3 className="text-base font-semibold text-slate-900">장기요양 안내</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">장기요양 등급과 이용 절차를 확인하세요.</p>
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
