import Link from "next/link";
import SiteHeader from "../../components/site-header";

export default function CaregiverFaqPage() {
  const faqs = [
    {
      q: "요양보호사 자격증을 취득하는 데 필요한 조건이 있나요?",
      a: "특별한 학력 조건은 없습니다. 중학교 졸업 이상 학력이면 충분하며, 나이 제한도 없습니다. 교육기관에서 160시간 교육을 이수하고 시험에 합격하면 됩니다.",
    },
    {
      q: "요양보호사와 방문요양이 다른가요?",
      a: "요양보호사는 자격증을 가진 사람을 말하고, 방문요양은 그 요양보호사가 하는 서비스입니다. 요양보호사는 시설근무, 방문요양, 병원 등 다양한 곳에서 일할 수 있습니다.",
    },
    {
      q: "요양보호사 자격증 취득 비용은 얼마인가요?",
      a: "교육비는 기관마다 다르지만 보통 100만 원~150만 원 정도입니다. 시험 응시료는 약 50,000~70,000원입니다. 저소득층은 정부 지원을 받을 수 있습니다.",
    },
    {
      q: "요양보호사 일을 하면서 다른 일을 병행할 수 있나요?",
      a: "방문요양의 경우 시간제 근무가 가능하므로 다른 일과 병행할 수 있습니다. 시설 정규직은 근무 시간이 정해져 있어 병행이 어렵습니다.",
    },
    {
      q: "요양보호사는 얼마나 오래 일할 수 있나요?",
      a: "신체 건강이 허락하는 한 오랫동안 일할 수 있습니다. 60대 이상 요양보호사도 많으며, 자격증 유효기간도 평생입니다.",
    },
    {
      q: "요양보호사 교육 중 실습이 중요한가요?",
      a: "네, 매우 중요합니다. 실습을 통해 신체활동 보조, 기본간호 등 실제 업무 기술을 배웁니다. 실습을 충실히 하면 현장 적응이 훨씬 수월합니다.",
    },
    {
      q: "요양보호사 일을 하다가 부상을 입으면 어떻게 하나요?",
      a: "직장에서 입은 부상은 산재보험 대상이 됩니다. 정규직은 자동으로 가입되고, 비정규직도 고용된 기관의 정책에 따라 보험이 적용될 수 있습니다.",
    },
    {
      q: "요양보호사 시험에 떨어지면 어떻게 하나요?",
      a: "재응시 제한이 없으므로 다음 시험에 다시 응시할 수 있습니다. 떨어진 부분을 중점으로 복습한 후 다시 도전하세요. 합격률이 70~80%로 충분히 높습니다.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <SiteHeader />

      <section className="mx-auto w-full max-w-4xl px-4 py-6 sm:px-6 sm:py-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <p className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
            요양보호사 FAQ
          </p>
          <h1 className="mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-4xl">
            요양보호사 자주 묻는 질문
          </h1>
          <p className="mt-4 text-sm leading-6 text-slate-700 sm:text-base">
            요양보호사 자격증 취득과 일에 대해 자주 묻는 질문들을 정리했습니다. 자격 조건부터 현장 근무까지 필요한 모든 정보를
            확인하세요.
          </p>
        </div>

        <section className="mt-5 space-y-4">
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

        <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">관련 서비스</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <Link
              href="/caregiver-info"
              className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
            >
              <h3 className="text-base font-semibold text-slate-900">요양보호사 안내</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">요양보호사 역할과 기본 정보를 확인하세요.</p>
            </Link>

            <Link
              href="/caregiver-info/certificate"
              className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
            >
              <h3 className="text-base font-semibold text-slate-900">자격증 안내</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">자격증 취득 과정을 알아보세요.</p>
            </Link>

            <Link
              href="/caregiver-info/exam"
              className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
            >
              <h3 className="text-base font-semibold text-slate-900">시험일정 안내</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">시험 일정과 준비 방법을 확인하세요.</p>
            </Link>

            <Link
              href="/caregiver-info/jobs"
              className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
            >
              <h3 className="text-base font-semibold text-slate-900">취업정보 안내</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">취업 기관과 팁을 알아보세요.</p>
            </Link>

            <Link
              href="/caregiver-info/salary"
              className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
            >
              <h3 className="text-base font-semibold text-slate-900">월급 안내</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">급여와 수입 정보를 확인하세요.</p>
            </Link>

            <Link
              href="/caregiver-info/reality"
              className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
            >
              <h3 className="text-base font-semibold text-slate-900">현실 후기</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">요양보호사의 실제 경험담을 확인하세요.</p>
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
