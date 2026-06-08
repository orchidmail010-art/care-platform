import Link from "next/link";
import TopAd from "../../components/ads/top-ad";
import MiddleAd from "../../components/ads/middle-ad";
import BottomAd from "../../components/ads/bottom-ad";
import SiteHeader from "../../components/site-header";

export default function CaregiverSalaryPage() {
  const faqs = [
    {
      q: "요양보호사 급여는 어떻게 결정되나요?",
      a: "급여는 근무 기관(시설/방문), 근무 형태(정규직/비정규직), 경력, 지역에 따라 다르게 결정됩니다. 일반적으로 공단에서 정하는 기본 급여 기준이 있으며, 기관마다 추가 수당이 다를 수 있습니다.",
    },
    {
      q: "방문요양 요양보호사는 실비는 본인이 부담하나요?",
      a: "네, 방문요양 요양보호사는 교통비와 식사비 등을 대부분 본인이 부담합니다. 기관에 따라 교통비를 일부 지원하기도 합니다.",
    },
    {
      q: "요양보호사도 4대보험에 가입되나요?",
      a: "정규직으로 근무하는 요양보호사는 4대보험(건강보험, 고용보험, 국민연금, 산재보험)에 가입됩니다. 비정규직의 경우 기관 정책에 따라 다를 수 있습니다.",
    },
    {
      q: "경력에 따라 급여 인상이 있나요?",
      a: "대부분의 기관에서 경력을 인정하여 급여 인상을 제공합니다. 연 1~2회 정도 정기 인상이 이루어지는 경우가 많습니다.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <SiteHeader />

      <section className="mx-auto w-full max-w-4xl px-4 py-6 sm:px-6 sm:py-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <p className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
            요양보호사 월급
          </p>
          <h1 className="mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-4xl">
            요양보호사 월급 안내
          </h1>
          <p className="mt-4 text-sm leading-6 text-slate-700 sm:text-base">
            요양보호사의 급여는 근무 기관, 근무 형태, 경력에 따라 다양하게 책정됩니다. 시설근무와 방문요양, 그리고 정규직과 비정규직의
            차이를 이해하면 자신에게 맞는 일자리를 찾을 수 있습니다.
          </p>
        </div>

        <TopAd />

        <section className="mt-5 space-y-4">
          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">시설 급여</h2>
            <p className="mt-4 text-sm leading-6 text-slate-700 sm:text-base">
              요양원, 노인병원 등 시설에 근무하는 요양보호사의 급여는 기본급 + 수당 형태로 책정됩니다.
            </p>
            <div className="mt-4 space-y-3 text-sm leading-6 text-slate-700 sm:text-base">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">기본급</h3>
                <p>월 평균 180만 원~220만 원 정도입니다. 경력과 자격에 따라 차이가 발생합니다.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">수당</h3>
                <p>야간수당, 휴일수당, 상여금, 복리후생비 등이 추가될 수 있습니다. 기관마다 정책이 다릅니다.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">근무 환경</h3>
                <p>정해진 시간에 시설에서 근무하며, 연차휴가, 유급휴가 등 보장이 비교적 잘 되어 있습니다.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">월급 실수령액</h3>
                <p>세금과 보험료를 제외하면 월 150만 원~190만 원 정도를 실수령하게 됩니다.</p>
              </div>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">방문요양 급여</h2>
            <p className="mt-4 text-sm leading-6 text-slate-700 sm:text-base">
              방문요양 요양보호사는 시간제 근무가 많으며, 시간당 급여 형태로 책정되는 경우가 대부분입니다.
            </p>
            <div className="mt-4 space-y-3 text-sm leading-6 text-slate-700 sm:text-base">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">시간급</h3>
                <p>시간당 12,000원~15,000원 정도입니다. 경력에 따라 차이가 있으며, 기관마다 다릅니다.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">월 수입 기준</h3>
                <p>월 200시간 근무 기준으로 240만 원~300만 원 정도입니다. 이동 및 실비 차감이 있을 수 있습니다.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">유연한 근무</h3>
                <p>자신의 일정에 따라 근무 시간을 조정할 수 있는 유연성이 있습니다.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">변동성</h3>
                <p>근무 시간과 클라이언트 수에 따라 월급 변동이 크므로 안정적 수입이 어려울 수 있습니다.</p>
              </div>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">근무 형태별 차이</h2>
            <div className="mt-4 grid gap-3 text-sm leading-6 text-slate-700 sm:grid-cols-2 sm:text-base">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">정규직 요양보호사</h3>
                <ul className="mt-2 list-inside list-disc space-y-1">
                  <li>기본급 + 수당</li>
                  <li>4대보험 가입</li>
                  <li>연차휴가 보장</li>
                  <li>안정적 수입</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">비정규직 요양보호사</h3>
                <ul className="mt-2 list-inside list-disc space-y-1">
                  <li>시간급 또는 일당제</li>
                  <li>보험 불명확</li>
                  <li>휴가 미보장</li>
                  <li>변동성 있는 수입</li>
                </ul>
              </div>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">실제 수입 이야기</h2>
            <div className="mt-4 space-y-3 text-sm leading-6 text-slate-700 sm:text-base">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="font-semibold text-slate-900">사례 1: 요양원 정규직</p>
                <p>기본급 200만 원 + 야간수당 30만 원 + 상여금 등 총 230만 원 정도 수령. 월급이 안정적이고 복리후생이 좋음.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="font-semibold text-slate-900">사례 2: 방문요양 시간제</p>
                <p>월 180시간 근무 기준 약 220만 원 수령. 교통비와 식사비 제외 시 실수령은 180만 원 정도.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="font-semibold text-slate-900">사례 3: 병원 야간근무</p>
                <p>야간근무 수당을 포함하여 월 250만 원 정도 수령. 신체 부담이 크지만 고수입.</p>
              </div>
            </div>
          </article>

          <MiddleAd />

          <section className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow duration-200 ease-out"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 text-base font-semibold text-slate-900 transition-colors duration-200 ease-out hover:text-slate-700">
                  {faq.q}
                  <span className="text-slate-500 transition-transform duration-200 ease-out group-open:-rotate-45">+</span>
                </summary>
                <div className="border-t border-slate-200 px-5 py-4 text-sm leading-6 text-slate-700 transition-[max-height,opacity] duration-300 ease-out max-h-0 opacity-0 group-open:max-h-96 group-open:opacity-100">
                  {faq.a}
                </div>
              </details>
            ))}
          </section>

          <BottomAd />

          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">관련 링크</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <Link
                href="/caregiver-info"
                className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
              >
                <h3 className="text-base font-semibold text-slate-900">요양보호사 안내</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">요양보호사의 전반적인 역할을 알아보세요.</p>
              </Link>
              <Link
                href="/caregiver-info/certificate"
                className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
              >
                <h3 className="text-base font-semibold text-slate-900">자격증 안내</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">요양보호사 자격증 취득 방법을 확인하세요.</p>
              </Link>
              <Link
                href="/long-term-care"
                className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
              >
                <h3 className="text-base font-semibold text-slate-900">장기요양 안내</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">장기요양 제도를 이해하면 요양보호사 업무가 명확해집니다.</p>
              </Link>
              <Link
                href="/family-care-guide"
                className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
              >
                <h3 className="text-base font-semibold text-slate-900">가족요양 안내</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">가족요양 근무와의 차이를 확인하세요.</p>
              </Link>
            </div>
          </section>
        </section>
      </section>
    </main>
  );
}
