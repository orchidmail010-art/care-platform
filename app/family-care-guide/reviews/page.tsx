import Link from "next/link";
import SiteHeader from "../../components/site-header";

export default function FamilyCareGuideReviewsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <SiteHeader />

      <section className="mx-auto w-full max-w-4xl px-4 py-6 sm:px-6 sm:py-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <p className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">가족요양 후기</p>
          <h1 className="mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-4xl">가족요양 실제 후기 모음</h1>
          <p className="mt-4 text-sm leading-6 text-slate-700 sm:text-base">
            가족요양을 실제로 이용한 사례와 장단점, 실제 급여 경험과 주의사항을 쉽게 정리해 드립니다.
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
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">가족요양 실제 경험</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              가족요양을 이용한 많은 가족들은 돌봄의 연속성과 비용 절감 측면에서 긍정적인 평가를 남겼습니다.
              특히 가족이 직접 돌봄에 참여하면서 심리적 안정감을 느낀 사례가 많았습니다.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">힘들었던 점</h2>
            <div className="mt-3 space-y-3 text-sm leading-6 text-slate-700 sm:text-base">
              <p>
                가족요양은 정서적 부담과 함께 돌봄 피로가 발생하기 쉽습니다. 장시간 돌봄, 수급자의 변화하는 상태, 병행해야 하는 가정 업무가 부담으로 작용합니다.
              </p>
              <p>
                또한 요양보호사 자격을 가진 가족이 있어야 하고, 공단의 인정 기준을 만족시키는 과정이 어려울 수 있다는 의견도 있습니다.
              </p>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">만족했던 점</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              가족요양을 선택한 가족들은 정서적 유대 강화와 세심한 돌봄, 그리고 서비스 유연성에 만족감을 보였습니다.
              특히 수급자가 친밀한 가족과 함께 돌봄을 받을 때 안정감이 높아진다는 후기가 많았습니다.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">급여 관련 실제 이야기</h2>
            <div className="mt-3 space-y-3 text-sm leading-6 text-slate-700 sm:text-base">
              <p>
                실제 급여는 60분형 또는 90분형 선택, 등급, 감경 여부에 따라 차이가 큽니다. 어떤 가족들은 90분형으로 인정받아 서비스 시간을 늘린 뒤 본인부담이 증가한 사례도 있었습니다.
              </p>
              <p>
                반면, 감경 대상자가 되면 본인부담률이 낮아져 실질적인 비용 부담이 줄어드는 장점도 있었습니다.
              </p>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">가족 돌봄의 현실</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              가족 요양은 단순한 서비스 이용이 아니라 가족 전체의 생활 패턴과 심리적 상황을 바꾸는 일입니다. 충분한 준비와 지원 없이 시작하면 부담이 커질 수 있습니다.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">실제 이용 시 주의사항</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              실제 이용 전에는 공단 인정 기준, 가족관계 확인, 돌봄 계획, 필요한 서류를 꼼꼼히 점검해야 합니다. 또한 서비스 시작 후에도 주기적으로 상태를 확인하며 필요 시 추가 상담을 받는 것이 중요합니다.
            </p>
          </article>
        </section>

        <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">자주 묻는 질문</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
            가족요양 이용 경험과 관련된 자주 묻는 질문을 정리했습니다.
          </p>

          <div className="mt-4 space-y-3">
            <details className="group rounded-xl border border-slate-200 bg-slate-50 p-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-slate-900 sm:text-base">
                <span>가족요양은 어떤 점이 가장 힘든가요?</span>
                <span className="text-base leading-none text-slate-500 group-open:hidden" aria-hidden>
                  +
                </span>
                <span className="hidden text-base leading-none text-slate-500 group-open:inline" aria-hidden>
                  -
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                장시간 돌봄과 정서적 부담이 가장 큰 어려움으로 꼽힙니다. 특히 가족이 업무나 다른 돌봄 역할을 병행하면서 피로가 쌓이기 쉽습니다.
              </p>
            </details>

            <details className="group rounded-xl border border-slate-200 bg-slate-50 p-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-slate-900 sm:text-base">
                <span>급여는 실제로 도움이 되나요?</span>
                <span className="text-base leading-none text-slate-500 group-open:hidden" aria-hidden>
                  +
                </span>
                <span className="hidden text-base leading-none text-slate-500 group-open:inline" aria-hidden>
                  -
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                네, 급여는 돌봄 비용 부담을 줄이는 데 도움이 됩니다. 다만 등급과 이용 조건에 따라 차이가 있으므로 예상 급여를 사전에 계산하는 것이 좋습니다.
              </p>
            </details>

            <details className="group rounded-xl border border-slate-200 bg-slate-50 p-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-slate-900 sm:text-base">
                <span>가족요양은 누구에게 추천되나요?</span>
                <span className="text-base leading-none text-slate-500 group-open:hidden" aria-hidden>
                  +
                </span>
                <span className="hidden text-base leading-none text-slate-500 group-open:inline" aria-hidden>
                  -
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                직접 돌봄이 가능한 가족 구성원이 있고, 공단 인정 기준을 만족하는 경우에 추천됩니다. 하지만 가족의 부담과 상황을 충분히 고려해야 합니다.
              </p>
            </details>

            <details className="group rounded-xl border border-slate-200 bg-slate-50 p-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-slate-900 sm:text-base">
                <span>실제 이용 후 가장 중요하게 느낀 점은?</span>
                <span className="text-base leading-none text-slate-500 group-open:hidden" aria-hidden>
                  +
                </span>
                <span className="hidden text-base leading-none text-slate-500 group-open:inline" aria-hidden>
                  -
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                꾸준한 소통과 계획이 가장 중요하다는 의견이 많습니다. 돌봄 상황을 정기적으로 점검하고, 필요한 경우 전문가 상담을 병행하는 것이 도움이 됩니다.
              </p>
            </details>
          </div>
        </section>

        <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">계산 후 함께 확인하세요</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
            가족요양 실제 후기를 확인한 뒤 아래 링크를 통해 관련 정보를 함께 살펴보세요.
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <Link href="/family-care-guide/salary" className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm transition hover:border-slate-300 hover:bg-white">
              <h3 className="text-base font-semibold text-slate-900">가족요양 급여</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">급여 기준과 실제 계산 사례를 확인하세요.</p>
            </Link>
            <Link href="/family-care-guide/conditions" className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm transition hover:border-slate-300 hover:bg-white">
              <h3 className="text-base font-semibold text-slate-900">가족요양 조건</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">가족요양 이용 조건과 인정 기준을 확인하세요.</p>
            </Link>
            <Link href="/family-care-guide/dementia" className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm transition hover:border-slate-300 hover:bg-white">
              <h3 className="text-base font-semibold text-slate-900">치매 가족요양</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">치매 관련 가족요양 인정 기준을 확인하세요.</p>
            </Link>
            <Link href="/family-care-calculator" className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm transition hover:border-slate-300 hover:bg-white">
              <h3 className="text-base font-semibold text-slate-900">가족요양 계산기</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">가족요양 본인부담금을 직접 계산해 보세요.</p>
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
