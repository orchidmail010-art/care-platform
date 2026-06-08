import Link from "next/link";
import TopAd from "../../components/ads/top-ad";
import MiddleAd from "../../components/ads/middle-ad";
import BottomAd from "../../components/ads/bottom-ad";
import SiteHeader from "../../components/site-header";

export default function FamilyCareGuide60MinPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <SiteHeader />

      <section className="mx-auto w-full max-w-4xl px-4 py-6 sm:px-6 sm:py-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <p className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
            가족요양 60분
          </p>
          <h1 className="mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-4xl">
            가족요양 60분 기준 안내
          </h1>
          <p className="mt-4 text-sm leading-6 text-slate-700 sm:text-base">
            가족요양 60분은 일반적으로 많이 적용되는 가족요양 이용 기준입니다. 60분 기준의 의미, 인정 조건, 90분 기준과의 차이를 쉽게 안내합니다.
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

        <TopAd />

        <section className="mt-5 space-y-4">
          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">가족요양 60분이란?</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              가족요양 60분은 가족요양 서비스에서 기본적으로 적용되는 이용 단위입니다. 공단 기준에 따라 60분 단위로 서비스를 제공하고 급여가 산정됩니다.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">60분 기준이 적용되는 경우</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              60분 기준은 일반적인 가족요양 상황에서 우선 적용됩니다. 특별한 90분 인정 조건이 없거나, 90분형으로 전환이 어렵다고 판단되는 경우 60분 기준을 사용합니다.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">60분과 90분의 차이</h2>
            <div className="mt-3 space-y-3 text-sm leading-6 text-slate-700 sm:text-base">
              <p>
                60분형은 일반적인 가족요양 기준으로 적용되는 서비스 시간입니다. 90분형은 추가 조건을 충족하는 경우에만 인정되며, 60분형보다 긴 이용 시간과 높은 단가가 적용됩니다.
              </p>
              <p>
                60분형은 월 최대 20회 기준으로 사용되는 경우가 많고, 90분형은 조건을 만족하면 최대 31회까지 이용할 수 있습니다.
              </p>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">가족요양 인정 조건</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              가족요양 60분형은 수급자가 장기요양등급을 받았고, 요양보호사 자격을 갖춘 가족이 돌봄을 제공하는 경우에 적용될 수 있습니다. 가족관계, 동거 여부, 공단 인정 조건을 함께 확인해야 합니다.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">실제 급여 계산 시 주의사항</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              실제 급여는 공단 고시 수가, 가족요양 조건, 서비스 제공 시간 등에 따라 달라질 수 있습니다. 계산기 결과를 참고하되, 기관 상담을 통해 최종 금액을 확인하세요.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">가족요양 이용 전 확인해야 할 점</h2>
            <div className="mt-3 space-y-3 text-sm leading-6 text-slate-700 sm:text-base">
              <p>
                가족요양 60분형을 이용하기 전에는 수급자의 장기요양등급, 가족관계, 요양보호사 자격, 동거 여부 등을 확인해야 합니다.
              </p>
              <p>
                또한 90분형 가능 여부, 본인부담금, 공단 부담금, 기관별 운영 기준 등을 함께 검토하면 서비스 이용 계획 수립에 도움이 됩니다.
              </p>
            </div>
          </article>
        </section>

        <MiddleAd />

        <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">자주 묻는 질문</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
            가족요양 60분형과 관련된 자주 묻는 질문을 정리했습니다.
          </p>

          <div className="mt-4 space-y-3">
            <details className="group rounded-xl border border-slate-200 bg-slate-50 p-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-slate-900 sm:text-base">
                <span>가족요양 60분은 누구나 가능한가요?</span>
                <span className="text-base leading-none text-slate-500 group-open:hidden" aria-hidden>
                  +
                </span>
                <span className="hidden text-base leading-none text-slate-500 group-open:inline" aria-hidden>
                  -
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                대부분 가족요양 대상자는 60분형을 먼저 고려할 수 있습니다. 다만 가족요양 조건과 공단 인정 기준을 충족해야 합니다.
              </p>
            </details>

            <details className="group rounded-xl border border-slate-200 bg-slate-50 p-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-slate-900 sm:text-base">
                <span>60분과 90분 중 어떤 기준이 적용되나요?</span>
                <span className="text-base leading-none text-slate-500 group-open:hidden" aria-hidden>
                  +
                </span>
                <span className="hidden text-base leading-none text-slate-500 group-open:inline" aria-hidden>
                  -
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                기본적으로는 60분형이 적용됩니다. 90분형은 별도의 인정 조건을 충족하는 경우에만 추가적으로 적용됩니다.
              </p>
            </details>

            <details className="group rounded-xl border border-slate-200 bg-slate-50 p-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-slate-900 sm:text-base">
                <span>60분 가족요양 급여는 어떻게 계산되나요?</span>
                <span className="text-base leading-none text-slate-500 group-open:hidden" aria-hidden>
                  +
                </span>
                <span className="hidden text-base leading-none text-slate-500 group-open:inline" aria-hidden>
                  -
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                60분 가족요양 급여는 적용 수가에 본인부담률과 월 이용 횟수를 곱해 계산합니다. 월 한도액과 감면 여부도 함께 고려해야 합니다.
              </p>
            </details>

            <details className="group rounded-xl border border-slate-200 bg-slate-50 p-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-slate-900 sm:text-base">
                <span>가족요양 60분도 본인부담금이 있나요?</span>
                <span className="text-base leading-none text-slate-500 group-open:hidden" aria-hidden>
                  +
                </span>
                <span className="hidden text-base leading-none text-slate-500 group-open:inline" aria-hidden>
                  -
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                네. 60분형도 본인부담금이 있습니다. 본인부담률은 수급자 자격, 감경 대상 여부에 따라 달라질 수 있습니다.
              </p>
            </details>
          </div>
        </section>

      <BottomAd />

        <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">계산 후 함께 확인하세요</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
            60분형 관련 정보를 확인한 후 아래 링크를 통해 90분 기준, 안내 정보, 계산기, 지원금 정보를 함께 확인하세요.
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <Link href="/family-care-guide/90min" className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm transition hover:border-slate-300 hover:bg-white">
              <h3 className="text-base font-semibold text-slate-900">가족요양 90분 기준</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">90분형 인정 기준과 차이를 확인하세요.</p>
            </Link>
            <Link href="/family-care-guide" className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm transition hover:border-slate-300 hover:bg-white">
              <h3 className="text-base font-semibold text-slate-900">가족요양 안내</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">가족요양 전체 안내를 확인하세요.</p>
            </Link>
            <Link href="/family-care-calculator" className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm transition hover:border-slate-300 hover:bg-white">
              <h3 className="text-base font-semibold text-slate-900">가족요양 계산기</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">가족요양 급여를 계산해 보세요.</p>
            </Link>
            <Link href="/support-benefits" className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm transition hover:border-slate-300 hover:bg-white">
              <h3 className="text-base font-semibold text-slate-900">지원금/감면 제도</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">지원금 및 감면 정보를 확인하세요.</p>
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
