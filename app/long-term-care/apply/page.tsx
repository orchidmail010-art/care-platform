import Link from "next/link";
import SiteHeader from "../../components/site-header";

export default function LongTermCareApplyPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <SiteHeader />

      <section className="mx-auto w-full max-w-4xl px-4 py-6 sm:px-6 sm:py-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <p className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">장기요양 신청</p>
          <h1 className="mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-4xl">장기요양 신청방법 안내</h1>
          <p className="mt-4 text-sm leading-6 text-slate-700 sm:text-base">
            장기요양보험 신청 절차와 준비서류, 등급판정 과정까지 쉽게 안내합니다.
          </p>

          <div className="mt-6">
            <Link
              href="/long-term-care"
              className="inline-flex w-full items-center justify-center rounded-xl bg-blue-700 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800 sm:w-auto sm:px-5 sm:py-3 sm:text-base"
            >
              장기요양 메인 바로가기
            </Link>
          </div>
        </div>

        <section className="mt-5 space-y-4">
          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">장기요양 신청이란?</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              장기요양 신청은 일상생활 수행에 어려움이 있는 어르신이나 노인성 질환자를 위해 국민건강보험공단에
              요양등급을 신청하는 절차입니다. 신청 후 인정조사와 등급판정 과정을 거쳐 서비스 이용 여부가 결정됩니다.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">신청 가능한 대상</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              만 65세 이상 어르신 또는 치매, 뇌혈관질환 등 노인성 질병으로 인해 일상생활 수행이 어려운 분이 신청할 수 있습니다.
              가족이나 친족, 사회복지전담공무원 등이 대신 신청하는 경우도 가능합니다.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">신청 절차 순서</h2>
            <div className="mt-3 space-y-3 text-sm leading-6 text-slate-700 sm:text-base">
              <p>1. 신청서 접수: 국민건강보험공단 지사나 온라인으로 장기요양 인정 신청서를 제출합니다.</p>
              <p>2. 인정조사: 공단 조사원이 방문하여 신체기능, 인지상태, 일상생활 수행 능력을 평가합니다.</p>
              <p>3. 등급판정: 조사 결과와 제출 서류를 바탕으로 장기요양 등급을 판정합니다.</p>
              <p>4. 결과 통보: 판정 결과가 신청자에게 안내되며, 서비스를 이용할 수 있는 등급이 결정됩니다.</p>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">국민건강보험공단 방문 설명</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              신청자는 국민건강보험공단 지사 방문을 통해 신청서 작성과 제출 안내를 받을 수 있습니다. 방문이 어려운 경우
              온라인 또는 대리 신청을 통해 진행할 수 있으나, 필요한 서류와 절차는 사전에 확인해야 합니다.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">등급판정 과정</h2>
            <div className="mt-3 space-y-3 text-sm leading-6 text-slate-700 sm:text-base">
              <p>
                공단은 인정조사 결과를 바탕으로 등급 판정위원회에서 장기요양 등급을 결정합니다. 신체기능, 인지기능,
                일상생활 수행능력 등이 종합적으로 평가됩니다.
              </p>
              <p>
                판정 결과에 따라 1~5등급 또는 인지지원등급이 부여되며, 그에 맞는 장기요양 서비스를 이용할 수 있습니다.
              </p>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">조사 일정과 결과</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              인정조사는 신청 후 일정 기간 내에 진행되며, 조사 일정은 지역과 신청 상황에 따라 달라질 수 있습니다.
              결과는 서면 또는 전화를 통해 통보되며, 보통 몇 주 안에 안내받을 수 있습니다.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">신청 전 준비사항</h2>
            <div className="mt-3 space-y-3 text-sm leading-6 text-slate-700 sm:text-base">
              <p>신분증, 신청서, 의사 소견서, 진단서, 가족관계증명서 등 필요한 서류를 미리 준비하세요.</p>
              <p>장기요양 신청 전에는 현재 건강 상태와 일상생활 수행 어려움을 정리하여 공단에 정확히 전달하는 것이 중요합니다.</p>
            </div>
          </article>
        </section>

        <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">자주 묻는 질문</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
            장기요양 신청과 관련된 자주 묻는 질문을 정리했습니다.
          </p>

          <div className="mt-4 space-y-3">
            <details className="group rounded-xl border border-slate-200 bg-slate-50 p-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-slate-900 sm:text-base">
                <span>장기요양 신청은 어디에서 하나요?</span>
                <span className="text-base leading-none text-slate-500 group-open:hidden" aria-hidden>
                  +
                </span>
                <span className="hidden text-base leading-none text-slate-500 group-open:inline" aria-hidden>
                  -
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                장기요양 신청은 국민건강보험공단 지사를 방문하거나, 공단의 온라인 서비스를 통해 신청할 수 있습니다.
                상황에 따라 대리 신청도 가능합니다.
              </p>
            </details>

            <details className="group rounded-xl border border-slate-200 bg-slate-50 p-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-slate-900 sm:text-base">
                <span>가족이 대신 신청 가능한가요?</span>
                <span className="text-base leading-none text-slate-500 group-open:hidden" aria-hidden>
                  +
                </span>
                <span className="hidden text-base leading-none text-slate-500 group-open:inline" aria-hidden>
                  -
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                네, 가족이나 친족이 대신 신청할 수 있습니다. 다만 대리 신청 시 위임장이나 관계증명서 등 추가 서류가 필요할 수 있습니다.
              </p>
            </details>

            <details className="group rounded-xl border border-slate-200 bg-slate-50 p-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-slate-900 sm:text-base">
                <span>신청 후 결과까지 얼마나 걸리나요?</span>
                <span className="text-base leading-none text-slate-500 group-open:hidden" aria-hidden>
                  +
                </span>
                <span className="hidden text-base leading-none text-slate-500 group-open:inline" aria-hidden>
                  -
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                지역과 신청 상황에 따라 다르지만, 일반적으로 신청 후 몇 주 안에 인정조사와 등급판정 결과를 받을 수 있습니다.
                정확한 일정은 공단에 문의하여 확인하세요.
              </p>
            </details>

            <details className="group rounded-xl border border-slate-200 bg-slate-50 p-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-slate-900 sm:text-base">
                <span>꼭 공단 방문을 해야 하나요?</span>
                <span className="text-base leading-none text-slate-500 group-open:hidden" aria-hidden>
                  +
                </span>
                <span className="hidden text-base leading-none text-slate-500 group-open:inline" aria-hidden>
                  -
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                대부분의 신청은 공단 방문이 필요하지만, 상황에 따라 온라인 신청이나 대리 신청이 가능합니다. 방문 전 필요한 서류와 절차를 확인하는 것이 좋습니다.
              </p>
            </details>
          </div>
        </section>

        <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">함께 확인하세요</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
            신청 방법을 확인한 뒤 아래 링크를 통해 관련 정보도 함께 살펴보세요.
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <Link href="/long-term-care/grade" className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm transition hover:border-slate-300 hover:bg-white">
              <h3 className="text-base font-semibold text-slate-900">장기요양 등급 안내</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">장기요양 등급 기준과 서비스 범위를 확인하세요.</p>
            </Link>
            <Link href="/support-benefits/documents" className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm transition hover:border-slate-300 hover:bg-white">
              <h3 className="text-base font-semibold text-slate-900">신청서류 안내</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">신청 시 필요한 서류 목록을 확인하세요.</p>
            </Link>
            <Link href="/long-term-care" className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm transition hover:border-slate-300 hover:bg-white">
              <h3 className="text-base font-semibold text-slate-900">장기요양 안내</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">장기요양 제도와 이용 가능한 서비스를 확인하세요.</p>
            </Link>
            <Link href="/support-benefits" className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm transition hover:border-slate-300 hover:bg-white">
              <h3 className="text-base font-semibold text-slate-900">지원금/감면 제도</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">지원금과 본인부담 경감 제도를 확인하세요.</p>
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
