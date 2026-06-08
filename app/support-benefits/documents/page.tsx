import Link from "next/link";
import TopAd from "../../components/ads/top-ad";
import MiddleAd from "../../components/ads/middle-ad";
import BottomAd from "../../components/ads/bottom-ad";
import SiteHeader from "../../components/site-header";

export default function SupportBenefitsDocumentsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <SiteHeader />

      <section className="mx-auto w-full max-w-4xl px-4 py-6 sm:px-6 sm:py-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <p className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
            신청서류
          </p>
          <h1 className="mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-4xl">
            장기요양 지원금/감면 신청서류 안내
          </h1>
          <p className="mt-4 text-sm leading-6 text-slate-700 sm:text-base">
            장기요양 본인부담금 감면이나 지자체 지원금 신청 전 확인해야 할 기본 서류와 준비사항을 쉽게 안내합니다.
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
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">신청서류가 중요한 이유</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              정확한 서류 제출은 지원금과 감면 신청을 원활하게 진행하는 데 중요합니다. 서류가 부족하거나 누락되면 심사 지연이나 불허가가 발생할 수 있습니다.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">기본적으로 확인할 서류</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              주민등록등본, 장기요양인정서, 통장사본, 가족관계증명서 등 기본 서류를 먼저 준비해야 합니다. 지자체와 공단에서 요구하는 서류가 다를 수 있으니 반드시 목록을 확인하세요.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">본인부담금 감면 관련 서류</h2>
            <div className="mt-3 space-y-3 text-sm leading-6 text-slate-700 sm:text-base">
              <p>
                본인부담금 감면 신청 시에는 감면 대상 증빙서류, 소득자료, 장애인등록증 또는 수급자 증명서 등이 필요할 수 있습니다.
              </p>
              <p>
                감면 유형에 따라 제출해야 하는 서류가 다르므로, 공단의 최신 안내를 확인하고 준비하세요.
              </p>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">지자체 지원금 신청 서류</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              지자체 지원금은 지역마다 필요한 서류가 다릅니다. 주민등록등본, 장기요양인정서, 통장사본 외에 지역별 추가 증빙서류를 준비해야 할 수 있습니다.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">가족 대리 신청 시 확인사항</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              가족이 대신 신청할 때는 위임장, 가족관계증명서, 대리인 신분증 사본 등 추가 서류를 준비해야 합니다. 대리 신청이 가능한 범위도 지자체와 공단 기준에 따라 다를 수 있습니다.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">서류 준비 전 주의사항</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              서류를 준비할 때는 최신 서류 양식과 유효 기간을 확인하세요. 잘못된 서류를 제출하면 신청이 지연되거나 반려될 수 있습니다.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">신청 전 최종 체크리스트</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              신청 전에는 서류 목록, 서명 항목, 제출처, 제출 기한, 본인 확인 정보를 다시 한 번 점검하여 누락 없이 준비하세요.
            </p>
          </article>
        </section>

        <MiddleAd />

        <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">자주 묻는 질문</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
            신청서류 관련 자주 묻는 질문을 정리했습니다.
          </p>

          <div className="mt-4 space-y-3">
            <details className="group rounded-xl border border-slate-200 bg-slate-50 p-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-slate-900 sm:text-base">
                <span>장기요양 감면 신청에 꼭 필요한 서류는 무엇인가요?</span>
                <span className="text-base leading-none text-slate-500 group-open:hidden" aria-hidden>
                  +
                </span>
                <span className="hidden text-base leading-none text-slate-500 group-open:inline" aria-hidden>
                  -
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                기본적으로 주민등록등본, 장기요양인정서, 통장사본 등이 필요하며, 감면 대상에 따라 추가 증빙서류가 요구됩니다.
              </p>
            </details>

            <details className="group rounded-xl border border-slate-200 bg-slate-50 p-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-slate-900 sm:text-base">
                <span>가족이 대신 신청할 수 있나요?</span>
                <span className="text-base leading-none text-slate-500 group-open:hidden" aria-hidden>
                  +
                </span>
                <span className="hidden text-base leading-none text-slate-500 group-open:inline" aria-hidden>
                  -
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                네. 가족이 대리 신청할 수 있으나, 위임장과 대리인 신분증 사본, 가족관계증명서 등 추가 서류가 필요할 수 있습니다.
              </p>
            </details>

            <details className="group rounded-xl border border-slate-200 bg-slate-50 p-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-slate-900 sm:text-base">
                <span>지자체 지원금 서류는 지역마다 다른가요?</span>
                <span className="text-base leading-none text-slate-500 group-open:hidden" aria-hidden>
                  +
                </span>
                <span className="hidden text-base leading-none text-slate-500 group-open:inline" aria-hidden>
                  -
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                네. 지자체별로 지원 대상과 제출 서류가 다를 수 있으며, 각 지자체 홈페이지나 주민센터에서 최신 정보를 확인해야 합니다.
              </p>
            </details>

            <details className="group rounded-xl border border-slate-200 bg-slate-50 p-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-slate-900 sm:text-base">
                <span>서류는 어디에 제출하나요?</span>
                <span className="text-base leading-none text-slate-500 group-open:hidden" aria-hidden>
                  +
                </span>
                <span className="hidden text-base leading-none text-slate-500 group-open:inline" aria-hidden>
                  -
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                서류 제출처는 공단 또는 지자체별 안내에 따라 달라집니다. 일반적으로 공단 지사, 주민센터, 지자체 복지부서에 제출합니다.
              </p>
            </details>
          </div>
        </section>

        <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">함께 확인하세요</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
            신청서류 관련 정보를 확인한 후 아래 링크를 통해 감면, 지원금, 장기요양 정보를 함께 확인하세요.
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <Link href="/support-benefits/copayment-reduction" className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm transition hover:border-slate-300 hover:bg-white">
              <h3 className="text-base font-semibold text-slate-900">본인부담금 감면</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">본인부담금 감면 제도와 적용 기준을 확인하세요.</p>
            </Link>
            <Link href="/support-benefits/local-support" className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm transition hover:border-slate-300 hover:bg-white">
              <h3 className="text-base font-semibold text-slate-900">지자체 지원금</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">지자체 지원금 안내를 확인하세요.</p>
            </Link>
            <Link href="/support-benefits" className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm transition hover:border-slate-300 hover:bg-white">
              <h3 className="text-base font-semibold text-slate-900">지원금/감면 제도</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">지원금/감면 제도 메인 페이지를 확인하세요.</p>
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
