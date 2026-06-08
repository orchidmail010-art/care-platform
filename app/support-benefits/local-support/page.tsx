import Link from "next/link";
import TopAd from "../../components/ads/top-ad";
import MiddleAd from "../../components/ads/middle-ad";
import BottomAd from "../../components/ads/bottom-ad";
import SiteHeader from "../../components/site-header";

export default function LocalSupportPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <SiteHeader />

      <section className="mx-auto w-full max-w-4xl px-4 py-6 sm:px-6 sm:py-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <p className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
            지자체 지원금
          </p>
          <h1 className="mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-4xl">
            장기요양 지자체 지원금 안내
          </h1>
          <p className="mt-4 text-sm leading-6 text-slate-700 sm:text-base">
            장기요양 서비스 이용 시 지역별로 확인할 수 있는 지원금과 신청 전 확인사항을 쉽게 안내합니다.
          </p>

          <div className="mt-6">
            <Link
              href="/support-benefits"
              className="inline-flex w-full items-center justify-center rounded-xl bg-blue-700 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800 sm:w-auto sm:px-5 sm:py-3 sm:text-base"
            >
              지원금/감면 제도 메인 바로가기
            </Link>
          </div>
        </div>

        <TopAd />

        <section className="mt-5 space-y-4">
          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">지자체 지원금이란?</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              지자체 지원금은 장기요양 서비스를 이용하는 수급자에게 각 지역 지자체가 추가로 제공하는 금전적 또는 서비스형 지원을 말합니다.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">지역마다 지원 내용이 다른 이유</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              지자체 지원금은 각 지역의 예산, 정책 목표, 복지 프로그램에 따라 차이가 납니다. 같은 장기요양 서비스라도 지역별로 지원 항목과 지원 금액이 다르게 적용될 수 있습니다.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">확인해야 할 지원 항목</h2>
            <div className="mt-3 space-y-3 text-sm leading-6 text-slate-700 sm:text-base">
              <p>지자체 지원금은 식사비, 교통비, 돌봄 지원, 가사 지원 등 다양한 항목으로 구성될 수 있습니다.</p>
              <p>신청 전에는 지역별 지원 대상, 지원 한도, 신청 절차, 지원 기간을 반드시 확인하는 것이 중요합니다.</p>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">식사비/교통비/돌봄 지원 예시</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              일부 지자체는 식사비 지원, 통원 교통비 지원, 방문 돌봄 서비스 비용 지원 등 다양한 형태로 장기요양 이용자를 돕고 있습니다.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">신청 전 준비서류</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              신청 전에는 주민등록등본, 장기요양인정서, 통장사본, 가족관계증명서 등 지역별로 요구하는 서류를 준비해야 합니다.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">국민건강보험공단 지원과의 차이</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              지자체 지원금은 공단 지원금과 별도로 운영됩니다. 국민건강보험공단 급여는 기본 급여와 공단 부담금을 다루며, 지자체 지원금은 추가적인 지역별 혜택입니다.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">실제 이용 시 주의사항</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              실제 이용 시에는 지자체 지원금의 신청 조건, 지원 기간, 중복 수혜 여부, 서류 제출 기한 등을 확인하여 지원금 신청에 차질이 없도록 해야 합니다.
            </p>
          </article>
        </section>

        <MiddleAd />

        <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">자주 묻는 질문</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
            지자체 지원금에 대해 자주 묻는 질문을 정리했습니다.
          </p>

          <div className="mt-4 space-y-3">
            <details className="group rounded-xl border border-slate-200 bg-slate-50 p-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-slate-900 sm:text-base">
                <span>지자체 지원금은 전국 동일한가요?</span>
                <span className="text-base leading-none text-slate-500 group-open:hidden" aria-hidden>
                  +
                </span>
                <span className="hidden text-base leading-none text-slate-500 group-open:inline" aria-hidden>
                  -
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                아니요. 지자체 지원금은 지역별 예산과 정책에 따라 다릅니다. 같은 지원항목이라도 금액과 신청 기준이 달라질 수 있습니다.
              </p>
            </details>

            <details className="group rounded-xl border border-slate-200 bg-slate-50 p-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-slate-900 sm:text-base">
                <span>어디에서 지원 여부를 확인하나요?</span>
                <span className="text-base leading-none text-slate-500 group-open:hidden" aria-hidden>
                  +
                </span>
                <span className="hidden text-base leading-none text-slate-500 group-open:inline" aria-hidden>
                  -
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                거주지 관할 주민센터, 시군구청 복지 부서, 지자체 홈페이지 등에서 지원 여부와 신청 절차를 확인할 수 있습니다.
              </p>
            </details>

            <details className="group rounded-xl border border-slate-200 bg-slate-50 p-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-slate-900 sm:text-base">
                <span>장기요양 등급이 있어야 신청 가능한가요?</span>
                <span className="text-base leading-none text-slate-500 group-open:hidden" aria-hidden>
                  +
                </span>
                <span className="hidden text-base leading-none text-slate-500 group-open:inline" aria-hidden>
                  -
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                대부분 지자체 지원금은 장기요양 등급이 있어야 신청 가능합니다. 다만 지자체마다 지원 대상 범위가 달라질 수 있으므로 확인이 필요합니다.
              </p>
            </details>

            <details className="group rounded-xl border border-slate-200 bg-slate-50 p-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-slate-900 sm:text-base">
                <span>지원금 신청 시 필요한 서류는 무엇인가요?</span>
                <span className="text-base leading-none text-slate-500 group-open:hidden" aria-hidden>
                  +
                </span>
                <span className="hidden text-base leading-none text-slate-500 group-open:inline" aria-hidden>
                  -
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                주민등록등본, 장기요양인정서, 통장사본, 가족관계증명서 등 기본 서류를 준비해야 합니다. 지자체별로 추가 서류를 요구할 수 있습니다.
              </p>
            </details>
          </div>
        </section>

        <BottomAd />

        <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">함께 확인하세요</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
            지자체 지원금 정보를 확인한 후 아래 링크를 통해 관련 지원 제도와 계산기 정보를 함께 확인하세요.
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <Link href="/support-benefits/copayment-reduction" className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm transition hover:border-slate-300 hover:bg-white">
              <h3 className="text-base font-semibold text-slate-900">본인부담금 감면</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">본인부담금 감면 제도와 적용 기준을 확인하세요.</p>
            </Link>
            <Link href="/long-term-care" className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm transition hover:border-slate-300 hover:bg-white">
              <h3 className="text-base font-semibold text-slate-900">장기요양 안내</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">장기요양 등급과 이용 절차를 확인하세요.</p>
            </Link>
            <Link href="/visit-care-calculator" className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm transition hover:border-slate-300 hover:bg-white">
              <h3 className="text-base font-semibold text-slate-900">방문요양 계산기</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">방문요양 비용을 계산기로 확인해 보세요.</p>
            </Link>
            <Link href="/visit-care-guide/copayment" className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm transition hover:border-slate-300 hover:bg-white">
              <h3 className="text-base font-semibold text-slate-900">방문요양 본인부담금</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">방문요양 본인부담금 기준 안내를 확인하세요.</p>
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
