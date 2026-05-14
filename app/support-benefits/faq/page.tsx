import Link from "next/link";
import SiteHeader from "../../components/site-header";

export default function SupportBenefitsFaqPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <SiteHeader />

      <section className="mx-auto w-full max-w-4xl px-4 py-6 sm:px-6 sm:py-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <p className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
            지원금 FAQ
          </p>
          <h1 className="mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-4xl">
            지원금/감면 제도 자주 묻는 질문
          </h1>
          <p className="mt-4 text-sm leading-6 text-slate-700 sm:text-base">
            장기요양 본인부담금 감면, 지자체 지원금, 신청서류와 관련해 자주 묻는 질문을 한곳에 정리했습니다.
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

        <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">자주 묻는 질문</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
            지원금/감면 제도에 대해 자주 묻는 질문을 정리했습니다.
          </p>

          <div className="mt-4 space-y-3">
            <details className="group rounded-xl border border-slate-200 bg-slate-50 p-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-slate-900 sm:text-base">
                <span>장기요양 본인부담금 감면은 누구에게 적용되나요?</span>
                <span className="text-base leading-none text-slate-500 group-open:hidden" aria-hidden>
                  +
                </span>
                <span className="hidden text-base leading-none text-slate-500 group-open:inline" aria-hidden>
                  -
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                장기요양 본인부담금 감면은 기초생활수급자, 차상위계층, 장애인 등 공단이 정한 대상자에게 적용됩니다. 감면 비율은 대상자 유형에 따라 9% 또는 6%로 달라집니다.
              </p>
            </details>

            <details className="group rounded-xl border border-slate-200 bg-slate-50 p-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-slate-900 sm:text-base">
                <span>감면 대상이면 자동으로 적용되나요?</span>
                <span className="text-base leading-none text-slate-500 group-open:hidden" aria-hidden>
                  +
                </span>
                <span className="hidden text-base leading-none text-slate-500 group-open:inline" aria-hidden>
                  -
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                아니요. 감면 대상이라도 신청서를 제출해야 적용됩니다. 장기요양기관이나 공단에 감면 신청서를 제출하고 승인을 받아야 본인부담금 감면이 적용됩니다.
              </p>
            </details>

            <details className="group rounded-xl border border-slate-200 bg-slate-50 p-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-slate-900 sm:text-base">
                <span>기초생활수급자는 본인부담금이 있나요?</span>
                <span className="text-base leading-none text-slate-500 group-open:hidden" aria-hidden>
                  +
                </span>
                <span className="hidden text-base leading-none text-slate-500 group-open:inline" aria-hidden>
                  -
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                기초생활수급자는 본인부담금이 0%로 적용됩니다. 다만 장기요양급여 이용 시 공단이 정한 기준에 따라 본인부담금이 면제될 수 있습니다.
              </p>
            </details>

            <details className="group rounded-xl border border-slate-200 bg-slate-50 p-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-slate-900 sm:text-base">
                <span>차상위계층도 감면을 받을 수 있나요?</span>
                <span className="text-base leading-none text-slate-500 group-open:hidden" aria-hidden>
                  +
                </span>
                <span className="hidden text-base leading-none text-slate-500 group-open:inline" aria-hidden>
                  -
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                네. 차상위계층도 본인부담금 감면 대상입니다. 감면 비율은 9% 또는 6%로 적용되며, 소득 수준과 가족 구성에 따라 결정됩니다.
              </p>
            </details>

            <details className="group rounded-xl border border-slate-200 bg-slate-50 p-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-slate-900 sm:text-base">
                <span>지자체 지원금은 어디서 확인하나요?</span>
                <span className="text-base leading-none text-slate-500 group-open:hidden" aria-hidden>
                  +
                </span>
                <span className="hidden text-base leading-none text-slate-500 group-open:inline" aria-hidden>
                  -
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                지자체 지원금은 거주지 관할 주민센터, 시군구청 복지부서, 지자체 홈페이지에서 확인할 수 있습니다. 지역별로 지원 내용과 신청 절차가 다를 수 있습니다.
              </p>
            </details>

            <details className="group rounded-xl border border-slate-200 bg-slate-50 p-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-slate-900 sm:text-base">
                <span>지역마다 지원 내용이 다른가요?</span>
                <span className="text-base leading-none text-slate-500 group-open:hidden" aria-hidden>
                  +
                </span>
                <span className="hidden text-base leading-none text-slate-500 group-open:inline" aria-hidden>
                  -
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                네. 지자체 지원금은 지역별 예산과 정책에 따라 다릅니다. 같은 지원 항목이라도 금액, 대상자, 신청 절차가 달라질 수 있습니다.
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
                네. 가족이 대신 신청할 수 있습니다. 다만 위임장, 가족관계증명서, 대리인 신분증 사본 등 추가 서류를 준비해야 합니다.
              </p>
            </details>

            <details className="group rounded-xl border border-slate-200 bg-slate-50 p-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-slate-900 sm:text-base">
                <span>신청 전에 어떤 서류를 준비해야 하나요?</span>
                <span className="text-base leading-none text-slate-500 group-open:hidden" aria-hidden>
                  +
                </span>
                <span className="hidden text-base leading-none text-slate-500 group-open:inline" aria-hidden>
                  -
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                기본적으로 주민등록등본, 장기요양인정서, 통장사본, 가족관계증명서 등이 필요합니다. 감면 유형이나 지자체 지원금에 따라 추가 서류가 요구될 수 있습니다.
              </p>
            </details>
          </div>
        </section>

        <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">함께 확인하세요</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
            FAQ를 확인한 후 아래 링크를 통해 감면, 지원금, 서류, 계산기 정보를 함께 확인하세요.
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
            <Link href="/support-benefits/documents" className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm transition hover:border-slate-300 hover:bg-white">
              <h3 className="text-base font-semibold text-slate-900">신청서류</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">신청서류 안내를 확인하세요.</p>
            </Link>
            <Link href="/visit-care-calculator" className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm transition hover:border-slate-300 hover:bg-white">
              <h3 className="text-base font-semibold text-slate-900">방문요양 계산기</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">방문요양 비용을 계산기로 확인해 보세요.</p>
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
