import Link from "next/link";
import TopAd from "../../components/ads/top-ad";
import MiddleAd from "../../components/ads/middle-ad";
import BottomAd from "../../components/ads/bottom-ad";
import SiteHeader from "../../components/site-header";

export default function VisitCareServiceTimePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <SiteHeader />

      <section className="mx-auto w-full max-w-4xl px-4 py-6 sm:px-6 sm:py-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <p className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">방문요양 이용시간</p>
          <h1 className="mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-4xl">방문요양 이용시간 기준 안내</h1>
          <p className="mt-4 text-sm leading-6 text-slate-700 sm:text-base">
            방문요양 이용시간 계산 방식과 실제 이용 기준을 쉽게 안내합니다.
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

        <TopAd />

        <section className="mt-5 space-y-4">
          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">이용시간 계산 방식</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              방문요양 이용시간은 장기요양등급별 월 한도액 안에서 이용자가 선택한 시간과 횟수에 따라 정해집니다.
              하루 1회, 주 3회, 주 5회 등 생활 상황에 맞게 조정할 수 있습니다.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">시간별 차이</h2>
            <div className="mt-3 space-y-3 text-sm leading-6 text-slate-700 sm:text-base">
              <p>
                방문요양은 30분 단위로 이용 시간이 정해지며, 1회 이용 시간은 최대 480분까지 가능합니다.
              </p>
              <p>
                이용 시간에 따라 급여 비용이 달라지고, 시간이 길수록 한 번에 받을 수 있는 서비스 범위도 넓어집니다.
              </p>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">이용 가능 시간</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              방문요양은 등급별 월 한도액 범위 안에서 이용할 수 있습니다. 월 한도액을 초과하면 초과분은 전액 본인 부담이 될 수 있습니다.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">실제 이용 사례</h2>
            <div className="mt-3 space-y-3 text-sm leading-6 text-slate-700 sm:text-base">
              <p>
                예를 들어 3등급 수급자가 주 5회, 하루 180분 방문요양을 이용하면 식사 준비, 청소, 세면 도움, 이동 도움 등을 받을 수 있습니다.
              </p>
              <p>
                이처럼 이용 시간과 횟수는 수급자의 상태와 생활 패턴에 따라 조정할 수 있습니다.
              </p>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">장기요양등급과의 관계</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              방문요양 이용 가능 시간은 장기요양등급과 월 한도액에 따라 달라집니다. 등급이 높을수록 월 한도액이 커져 더 많은 서비스를 이용할 수 있습니다.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">주의사항</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              방문요양은 단순 가사도우미 서비스가 아닙니다. 수급자의 신체활동 지원, 일상생활 지원, 정서 지원을 중심으로 제공됩니다.
            </p>
          </article>
        </section>

        <MiddleAd />

        <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">자주 묻는 질문</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
            방문요양 이용시간과 관련된 자주 묻는 질문을 정리했습니다.
          </p>

          <div className="mt-4 space-y-3">
            <details className="group rounded-xl border border-slate-200 bg-slate-50 p-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-slate-900 sm:text-base">
                <span>방문요양은 하루 몇 시간까지 이용할 수 있나요?</span>
                <span className="text-base leading-none text-slate-500 group-open:hidden" aria-hidden>
                  +
                </span>
                <span className="hidden text-base leading-none text-slate-500 group-open:inline" aria-hidden>
                  -
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                수급자의 등급, 월 한도액, 이용 계획에 따라 달라집니다. 일반적으로 30분 단위로 이용 시간이 정해집니다.
              </p>
            </details>

            <details className="group rounded-xl border border-slate-200 bg-slate-50 p-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-slate-900 sm:text-base">
                <span>방문요양은 매일 이용할 수 있나요?</span>
                <span className="text-base leading-none text-slate-500 group-open:hidden" aria-hidden>
                  +
                </span>
                <span className="hidden text-base leading-none text-slate-500 group-open:inline" aria-hidden>
                  -
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                가능합니다. 다만 월 한도액 범위 안에서 이용해야 하며, 초과 시 본인 부담이 발생할 수 있습니다.
              </p>
            </details>

            <details className="group rounded-xl border border-slate-200 bg-slate-50 p-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-slate-900 sm:text-base">
                <span>방문요양 시간에는 어떤 서비스를 받을 수 있나요?</span>
                <span className="text-base leading-none text-slate-500 group-open:hidden" aria-hidden>
                  +
                </span>
                <span className="hidden text-base leading-none text-slate-500 group-open:inline" aria-hidden>
                  -
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                식사 도움, 세면 도움, 이동 도움, 청소, 말벗, 병원 동행 등 수급자 중심의 서비스를 받을 수 있습니다.
              </p>
            </details>

            <details className="group rounded-xl border border-slate-200 bg-slate-50 p-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-slate-900 sm:text-base">
                <span>방문요양 시간은 중간에 변경할 수 있나요?</span>
                <span className="text-base leading-none text-slate-500 group-open:hidden" aria-hidden>
                  +
                </span>
                <span className="hidden text-base leading-none text-slate-500 group-open:inline" aria-hidden>
                  -
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                가능합니다. 이용자의 상태나 가족 상황에 따라 센터와 상담 후 조정할 수 있습니다.
              </p>
            </details>
          </div>
        </section>

        <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">함께 확인하세요</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
            이용시간 정보를 확인한 뒤 아래 링크를 통해 관련 정보를 함께 살펴보세요.
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <Link href="/visit-care-guide/monthly-limit" className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm transition hover:border-slate-300 hover:bg-white">
              <h3 className="text-base font-semibold text-slate-900">월한도액 안내</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">월한도액 기준과 한도 관리 방법을 확인하세요.</p>
            </Link>
            <Link href="/visit-care-guide/copayment" className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm transition hover:border-slate-300 hover:bg-white">
              <h3 className="text-base font-semibold text-slate-900">본인부담금 안내</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">본인부담금 기준과 계산 방법을 확인하세요.</p>
            </Link>
            <Link href="/visit-care-calculator" className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm transition hover:border-slate-300 hover:bg-white">
              <h3 className="text-base font-semibold text-slate-900">방문요양 계산기</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">방문요양 이용 계획을 계산해 보세요.</p>
            </Link>
            <Link href="/support-benefits" className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm transition hover:border-slate-300 hover:bg-white">
              <h3 className="text-base font-semibold text-slate-900">지원금/감면 제도</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">지원금과 감면 정보를 함께 확인하세요.</p>
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
