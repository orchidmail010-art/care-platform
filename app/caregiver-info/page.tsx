import Link from "next/link";
import SiteHeader from "../components/site-header";

export default function CaregiverInfoPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <SiteHeader />

      <section className="mx-auto w-full max-w-4xl px-4 py-6 sm:px-6 sm:py-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <p className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">요양보호사 정보</p>
          <h1 className="mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-4xl">요양보호사 안내</h1>
          <p className="mt-4 text-sm leading-6 text-slate-700 sm:text-base">
            요양보호사는 장기요양보험 제도에서 핵심적인 돌봄 서비스를 제공하는 전문 인력입니다. 이 페이지에서는 요양보호사란
            무엇인지, 자격증 취득 조건, 교육시간 및 교육기관 안내, 취업 분야, 월급 현실, 가족요양과의 관계를 체계적으로
            확인할 수 있습니다.
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
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">요양보호사란?</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              요양보호사는 노인장기요양보험 대상자에게 신체활동 지원, 일상생활 지원, 정서 지원을 제공하는 돌봄 전문 인력입니다.
              방문요양, 주야간보호, 시설요양 등 다양한 장기요양 서비스 현장에서 수급자의 안전과 삶의 질 향상을 돕습니다.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">요양보호사 자격증 취득 조건</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              요양보호사 자격증은 지정 교육기관에서 교육 과정을 이수한 뒤 국가시험에 합격하면 취득할 수 있습니다. 교육 이수
              시간, 시험 일정, 응시 자격은 제도 개편에 따라 변동될 수 있으므로 최신 공고를 반드시 확인해야 합니다.
            </p>
            <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-base font-semibold text-slate-900">자격 취득 전 체크 포인트</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                교육기관의 지정 여부, 실습 가능 환경, 시험 준비 커리큘럼을 함께 비교하면 자격 취득 후 현장 적응에 도움이 됩니다.
              </p>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">교육시간 및 교육기관 안내</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              요양보호사 교육은 이론, 실기, 실습으로 구성되며 교육시간은 법령 및 정책에 따라 조정될 수 있습니다. 교육기관은
              지역별로 운영되므로 접근성, 수강 일정, 실습 연계 기관 여부를 확인해 선택하는 것이 좋습니다.
            </p>
            <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-base font-semibold text-slate-900">교육기관 선택 기준</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                수강생 후기, 합격률, 실습 지원 체계, 취업 연계 프로그램 등을 비교하면 장기적인 경력 설계에 유리합니다.
              </p>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">요양보호사 취업 분야</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              요양보호사는 방문요양센터, 주야간보호센터, 노인요양시설 등 다양한 기관에서 근무할 수 있습니다. 근무 형태는 전일제,
              시간제, 교대제 등으로 나뉘며 지역과 기관 특성에 따라 업무 강도와 급여 체계가 달라질 수 있습니다.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">요양보호사 월급 현실</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              요양보호사 월급은 근무 시간, 고용 형태, 근무 기관, 지역 수가 구조에 따라 차이가 큽니다. 방문요양의 경우 실제 제공
              시간과 이동 시간, 기관 운영 방식이 소득에 영향을 줄 수 있어 계약 조건을 꼼꼼히 확인해야 합니다.
            </p>
            <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-base font-semibold text-slate-900">소득 확인 시 주의사항</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                기본급, 수당, 근무시간 산정 방식, 4대보험 적용 여부를 함께 확인해야 실제 수령액을 정확히 예측할 수 있습니다.
              </p>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">가족요양과 요양보호사 자격증의 관계</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              가족요양은 요양보호사 자격증을 보유한 가족이 수급자를 돌보는 경우 적용될 수 있습니다. 다만 가족관계, 제공 조건,
              공단 인정 기준, 기관 운영 정책에 따라 실제 적용 여부가 달라지므로 사전 상담이 중요합니다.
            </p>
          </article>

                  <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
              요양보호사 자주 묻는 질문
            </h2>

            <div className="mt-4 space-y-3">
              {[
                {
                  q: "요양보호사 자격증은 어떻게 취득하나요?",
                  a: "지정 교육기관에서 요양보호사 교육 과정을 이수한 뒤 국가시험에 합격하면 자격증을 취득할 수 있습니다.",
                },
                {
                  q: "요양보호사는 어디에서 일할 수 있나요?",
                  a: "방문요양센터, 주야간보호센터, 노인요양시설, 재가복지센터 등 다양한 장기요양기관에서 근무할 수 있습니다.",
                },
                {
                  q: "요양보호사 월급은 얼마나 되나요?",
                  a: "근무 시간, 근무 형태, 기관, 지역에 따라 차이가 있으며 방문요양은 실제 제공 시간과 이동 시간도 소득에 영향을 줄 수 있습니다.",
                },
                {
                  q: "가족요양을 하려면 요양보호사 자격증이 꼭 필요한가요?",
                  a: "가족요양은 요양보호사 자격을 가진 가족이 수급자를 돌보는 경우에 적용될 수 있어 자격증 보유 여부가 중요합니다.",
                },
              ].map((faq) => (
                <details
                  key={faq.q}
                  className="group overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-sm transition-shadow duration-200 ease-out"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4 px-4 py-4 text-base font-semibold text-slate-900 transition-colors duration-200 ease-out hover:text-slate-700">
                    {faq.q}
                    <span className="text-slate-500 transition-transform duration-200 ease-out group-open:-rotate-45">+</span>
                  </summary>
                  <div className="overflow-hidden border-t border-slate-200 px-4 transition-[max-height,opacity] duration-300 ease-out max-h-0 opacity-0 group-open:max-h-60 group-open:py-4 group-open:opacity-100">
                    <p className="text-sm leading-6 text-slate-700">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
              함께 보면 좋은 서비스
            </h2>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <Link
                href="/family-care-guide"
                className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
              >
                <h3 className="text-base font-semibold text-slate-900">가족요양 안내</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  가족요양 조건과 급여 기준을 확인하세요.
                </p>
              </Link>

              <Link
                href="/visit-care-guide"
                className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
              >
                <h3 className="text-base font-semibold text-slate-900">방문요양 안내</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  방문요양 이용 기준과 본인부담금을 확인하세요.
                </p>
              </Link>

              <Link
                href="/long-term-care"
                className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
              >
                <h3 className="text-base font-semibold text-slate-900">장기요양 안내</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  장기요양 등급 신청과 이용 절차를 확인하세요.
                </p>
              </Link>
            </div>
          </article>
                  </section>
      </section>
    </main>
  );
}
