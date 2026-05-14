import Link from "next/link";
import SiteHeader from "../../components/site-header";

export default function FamilyCareGuide90MinPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <SiteHeader />

      <section className="mx-auto w-full max-w-4xl px-4 py-6 sm:px-6 sm:py-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <p className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
            가족요양 90분
          </p>
          <h1 className="mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-4xl">
            가족요양 90분 인정 기준 안내
          </h1>
          <p className="mt-4 text-sm leading-6 text-slate-700 sm:text-base">
            가족요양 90분 인정 조건과 실제 적용 기준, 이용 전 확인사항을 쉽게 안내합니다.
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
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">가족요양 90분이란?</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              가족요양 90분은 가족요양 서비스에서 60분형 대신 적용할 수 있는 조건부 서비스입니다. 공단이 정한
              인정 기준을 충족하면 90분 단위로 서비스를 제공하고, 그에 따른 급여가 적용됩니다.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">60분과 90분 차이</h2>
            <div className="mt-3 space-y-3 text-sm leading-6 text-slate-700 sm:text-base">
              <p>
                60분형은 일반적인 가족요양 기준으로 월 최대 20회까지 이용 가능한 방식입니다. 90분형은 추가적인
                인정 조건을 충족하면 월 최대 31회까지 이용 가능한 조건부 유형입니다.
              </p>
              <p>
                90분형은 기본적으로 60분형 요양비보다 높은 단가가 적용되며, 실제 서비스 제공 시간과 급여체계가 더욱
                넓게 설정됩니다.
              </p>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">90분 인정 조건</h2>
            <div className="mt-3 space-y-3 text-sm leading-6 text-slate-700 sm:text-base">
              <p>
                90분형은 요양보호사가 만 65세 이상 배우자인 경우 또는 수급자에게 치매, 문제행동 등 공단 인정 조건이
                있는 경우에만 인정됩니다.
              </p>
              <p>
                단순히 가족이 요양보호사 자격을 보유했다는 사실만으로는 부족하며, 공단의 추가 조건과 가족관계 여부를 함께
                검토해야 합니다.
              </p>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">치매 여부와 인정 기준</h2>
            <div className="mt-3 space-y-3 text-sm leading-6 text-slate-700 sm:text-base">
              <p>
                치매가 있으면 90분형 인정 가능성이 높아지지만, 무조건 인정되는 것은 아닙니다. 치매 진단과 함께 수급자의
                일상생활 지원 필요도, 문제행동 여부 등이 종합적으로 평가됩니다.
              </p>
              <p>
                따라서 치매 여부뿐 아니라 실제 돌봄 필요성과 서비스 제공 환경을 함께 확인해야 합니다.
              </p>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">동거 가족 기준</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              90분형 가족요양을 인정받으려면 요양보호사 자격을 가진 가족이 수급자와 동거하거나 실제 돌봄을 제공하는
              관계이어야 합니다. 공단에서 인정하는 가족관계 기준에 부합하는지도 반드시 확인해야 합니다.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">실제 이용 시 주의사항</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              실제 이용 전에는 장기요양기관 또는 공단에 90분형 승인 여부를 먼저 확인하고, 서비스 제공 기록과 신청 서류를
              정확히 준비해야 합니다. 인정 기준이 변경되거나 기관별 운영 조건이 다를 수 있으므로 사전 상담이 중요합니다.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">급여 차이 설명</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              90분형은 60분형보다 단가가 높아 월 급여와 본인부담금이 달라질 수 있습니다. 90분형을 선택하면 서비스 시간과
              급여 계산 방식이 달라지므로, 예상 급여를 계산한 뒤 실제 급여 적용 여부를 함께 확인하는 것이 필요합니다.
            </p>
          </article>
        </section>

        <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">자주 묻는 질문</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
            가족요양 90분형에 대해 이용자가 자주 묻는 질문을 정리했습니다.
          </p>

          <div className="mt-4 space-y-3">
            <details className="group rounded-xl border border-slate-200 bg-slate-50 p-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-slate-900 sm:text-base">
                <span>가족요양 90분은 누구나 가능한가요?</span>
                <span className="text-base leading-none text-slate-500 group-open:hidden" aria-hidden>
                  +
                </span>
                <span className="hidden text-base leading-none text-slate-500 group-open:inline" aria-hidden>
                  -
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                90분형은 모든 가족요양 대상자가 이용할 수 있는 것은 아닙니다. 공단이 규정한 추가 인정 조건을 충족해야만
                신청할 수 있습니다.
              </p>
            </details>

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
                치매가 있더라도 무조건 인정되지는 않습니다. 치매 상태와 함께 일상생활 지원 필요성, 문제행동 여부, 가족의 돌봄
                환경까지 종합적으로 평가합니다.
              </p>
            </details>

            <details className="group rounded-xl border border-slate-200 bg-slate-50 p-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-slate-900 sm:text-base">
                <span>가족관계 기준도 중요한가요?</span>
                <span className="text-base leading-none text-slate-500 group-open:hidden" aria-hidden>
                  +
                </span>
                <span className="hidden text-base leading-none text-slate-500 group-open:inline" aria-hidden>
                  -
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                네. 가족요양 90분형은 요양보호사 자격을 가진 가족이 수급자와 인정되는 가족관계인지도 중요한 요소입니다.
                동거 여부와 실제 돌봄 관계를 함께 확인해야 합니다.
              </p>
            </details>

            <details className="group rounded-xl border border-slate-200 bg-slate-50 p-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-slate-900 sm:text-base">
                <span>90분 급여는 얼마인가요?</span>
                <span className="text-base leading-none text-slate-500 group-open:hidden" aria-hidden>
                  +
                </span>
                <span className="hidden text-base leading-none text-slate-500 group-open:inline" aria-hidden>
                  -
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                90분 급여는 60분형보다 단가가 높으며, 실제 금액은 공단 고시 수가와 기관별 운영 기준에 따라 달라질 수 있습니다.
                따라서 실제 이용 전 계산기나 기관 상담을 통해 확인하는 것이 좋습니다.
              </p>
            </details>
          </div>
        </section>

        <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">계산 후 함께 확인하세요</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
            90분형 관련 정보를 확인한 뒤 아래 링크를 참고하여 가족요양, 계산기, 장기요양, 지원금 정보를 함께 확인해 보세요.
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <Link href="/family-care-guide" className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm transition hover:border-slate-300 hover:bg-white">
              <h3 className="text-base font-semibold text-slate-900">가족요양 안내</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">가족요양 인정 조건과 급여 기준을 확인하세요.</p>
            </Link>
            <Link href="/family-care-calculator" className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm transition hover:border-slate-300 hover:bg-white">
              <h3 className="text-base font-semibold text-slate-900">가족요양 계산기</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">가족요양 90분 급여를 계산기로 직접 확인하세요.</p>
            </Link>
            <Link href="/long-term-care" className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm transition hover:border-slate-300 hover:bg-white">
              <h3 className="text-base font-semibold text-slate-900">장기요양 안내</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">장기요양 등급과 이용 절차를 확인하세요.</p>
            </Link>
            <Link href="/support-benefits" className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm transition hover:border-slate-300 hover:bg-white">
              <h3 className="text-base font-semibold text-slate-900">지원금/감면 제도</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">본인부담금 감면과 지원금 정보를 확인하세요.</p>
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
