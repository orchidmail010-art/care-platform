import Link from "next/link";
import SiteHeader from "../../components/site-header";

export default function FamilyCareGuideConditionsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <SiteHeader />

      <section className="mx-auto w-full max-w-4xl px-4 py-6 sm:px-6 sm:py-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <p className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
            가족요양 조건
          </p>
          <h1 className="mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-4xl">
            가족요양 조건 총정리
          </h1>
          <p className="mt-4 text-sm leading-6 text-slate-700 sm:text-base">
            가족요양을 이용하기 위해 필요한 장기요양등급, 요양보호사 자격, 가족관계, 이용 전 확인사항을 쉽게 안내합니다.
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
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">가족요양 조건이란?</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              가족요양 조건은 가족이 장기요양 수급자를 돌보기 위해 필요한 자격과 관계, 서비스를 받기 위한 기준을 뜻합니다.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">장기요양등급 보유 여부</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              가족요양을 받으려면 수급자가 먼저 장기요양등급을 보유해야 합니다. 등급에 따라 이용 가능한 서비스 범위와 한도액이 달라집니다.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">요양보호사 자격증 필요 여부</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              서비스 제공자는 요양보호사 자격을 갖춘 가족이어야 합니다. 자격증이 없으면 가족요양 신청이 제한될 수 있습니다.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">가족관계 기준</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              가족관계 기준은 공단에서 인정하는 배우자, 직계혈족, 일정 범위의 가족 등으로 제한됩니다. 실제 인정 여부는 신청 시 공단 심사를 통해 결정됩니다.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">동거 여부와 실제 돌봄 제공</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              동거 여부와 실제 돌봄 제공 사실은 인정 심사에서 중요한 요소입니다. 단순한 가족 관계보다 실제 돌봄 제공 상황이 더 중시될 수 있습니다.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">60분/90분 기준과의 관계</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              가족요양 조건은 60분형과 90분형 모두 적용됩니다. 기본적으로 60분형이 먼저 검토되며, 90분형은 추가적인 인정 조건을 충족해야 합니다.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">이용 전 기관 상담이 필요한 이유</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              이용 전 기관 상담을 통해 가족요양 조건, 신청 절차, 필요한 서류, 예상 급여 등을 확인하면 신청 후 불필요한 혼선을 줄일 수 있습니다.
            </p>
          </article>
        </section>

        <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">자주 묻는 질문</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
            가족요양 조건에 대해 자주 묻는 질문을 정리했습니다.
          </p>

          <div className="mt-4 space-y-3">
            <details className="group rounded-xl border border-slate-200 bg-slate-50 p-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-slate-900 sm:text-base">
                <span>가족이면 누구나 가족요양이 가능한가요?</span>
                <span className="text-base leading-none text-slate-500 group-open:hidden" aria-hidden>
                  +
                </span>
                <span className="hidden text-base leading-none text-slate-500 group-open:inline" aria-hidden>
                  -
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                가족이라도 공단이 인정하는 가족관계와 요양보호사 자격을 갖춰야 가족요양이 가능합니다. 단순한 가족 관계만으로는 부족할 수 있습니다.
              </p>
            </details>

            <details className="group rounded-xl border border-slate-200 bg-slate-50 p-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-slate-900 sm:text-base">
                <span>요양보호사 자격증이 꼭 필요한가요?</span>
                <span className="text-base leading-none text-slate-500 group-open:hidden" aria-hidden>
                  +
                </span>
                <span className="hidden text-base leading-none text-slate-500 group-open:inline" aria-hidden>
                  -
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                네. 가족요양 서비스 제공자는 요양보호사 자격을 갖추어야 합니다. 자격증이 없으면 가족요양 신청이 제한될 수 있습니다.
              </p>
            </details>

            <details className="group rounded-xl border border-slate-200 bg-slate-50 p-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-slate-900 sm:text-base">
                <span>같이 살지 않아도 가족요양이 가능한가요?</span>
                <span className="text-base leading-none text-slate-500 group-open:hidden" aria-hidden>
                  +
                </span>
                <span className="hidden text-base leading-none text-slate-500 group-open:inline" aria-hidden>
                  -
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                같이 살지 않아도 가족요양이 가능한 경우가 있지만, 실제 돌봄 제공 상황과 동거 여부가 인정 심사에 영향을 줄 수 있습니다.
              </p>
            </details>

            <details className="group rounded-xl border border-slate-200 bg-slate-50 p-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-slate-900 sm:text-base">
                <span>가족요양 조건은 어디서 확인해야 하나요?</span>
                <span className="text-base leading-none text-slate-500 group-open:hidden" aria-hidden>
                  +
                </span>
                <span className="hidden text-base leading-none text-slate-500 group-open:inline" aria-hidden>
                  -
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                가족요양 조건은 국민건강보험공단, 장기요양기관, 또는 공식 안내 페이지에서 확인할 수 있습니다. 사전 상담을 통해 최신 기준을 확인하세요.
              </p>
            </details>
          </div>
        </section>

        <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">계산 후 함께 확인하세요</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
            가족요양 조건 정보를 확인한 후 아래 링크를 통해 60분, 90분 기준, 계산기, 장기요양 안내를 함께 확인하세요.
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <Link href="/family-care-guide/60min" className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm transition hover:border-slate-300 hover:bg-white">
              <h3 className="text-base font-semibold text-slate-900">가족요양 60분 기준</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">60분형 기준을 확인하세요.</p>
            </Link>
            <Link href="/family-care-guide/90min" className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm transition hover:border-slate-300 hover:bg-white">
              <h3 className="text-base font-semibold text-slate-900">가족요양 90분 기준</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">90분형 인정 기준을 확인하세요.</p>
            </Link>
            <Link href="/family-care-calculator" className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm transition hover:border-slate-300 hover:bg-white">
              <h3 className="text-base font-semibold text-slate-900">가족요양 계산기</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">가족요양 급여를 계산해 보세요.</p>
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
