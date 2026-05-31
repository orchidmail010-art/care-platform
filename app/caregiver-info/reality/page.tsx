import Link from "next/link";
import SiteHeader from "../../components/site-header";

export default function CaregiverRealityPage() {
  const faqs = [
    {
      q: "요양보호사 일은 정말 힘들까요?",
      a: "신체적, 정서적 부담이 있는 것은 사실입니다. 하지만 일의 의미와 보람을 느끼는 사람들도 많으며, 준비와 마음가짐으로 극복 가능합니다.",
    },
    {
      q: "요양보호사로 오래 일할 수 있나요?",
      a: "신체 건강을 유지하고 적절한 휴식을 취한다면 충분히 오래 일할 수 있습니다. 많은 경력 요양보호사들이 10년 이상 근무하고 있습니다.",
    },
    {
      q: "어르신과의 관계는 어떤가요?",
      a: "대부분의 경우 긍정적인 관계를 형성합니다. 진심으로 돌보면 어르신들도 고마움을 느끼고 신뢰하게 됩니다.",
    },
    {
      q: "요양보호사 일을 그만두는 주된 이유는 무엇인가요?",
      a: "신체적 부상, 낮은 급여, 심리적 부담, 일과 삶의 균형 문제 등이 주요 이유입니다. 좋은 기관 선택과 자기관리가 중요합니다.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <SiteHeader />

      <section className="mx-auto w-full max-w-4xl px-4 py-6 sm:px-6 sm:py-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <p className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
            요양보호사 현실
          </p>
          <h1 className="mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-4xl">
            요양보호사 현실 후기
          </h1>
          <p className="mt-4 text-sm leading-6 text-slate-700 sm:text-base">
            요양보호사라는 직업에 대한 현실적인 이야기를 공유합니다. 힘든 점과 보람, 급여, 그리고 실제 경험담을 통해 이 직업에 대해
            제대로 알아보세요.
          </p>
        </div>

        <section className="mt-5 space-y-4">
          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">실제 후기</h2>
            <div className="mt-4 space-y-3 text-sm leading-6 text-slate-700 sm:text-base">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="font-semibold text-slate-900">A요양보호사 (시설근무 3년)</p>
                <p>
                  처음에는 신체적으로 힘들었지만, 어르신들이 감사해하는 모습을 보면서 보람을 느낍니다. 동료들과 좋은 관계를 유지하며 
                  월급도 안정적이어서 계속 근무하고 있습니다.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="font-semibold text-slate-900">B요양보호사 (방문요양 2년)</p>
                <p>
                  자유로운 시간표가 좋지만, 실비 부담과 불규칙한 일정이 힘듭니다. 좋은 클라이언트를 만나면 정말 행복하지만, 문제 
                  있는 클라이언트와의 갈등도 있어 정신적 소모가 큽니다.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="font-semibold text-slate-900">C요양보호사 (병원근무 5년)</p>
                <p>
                  의료 현장이라 책임감이 크지만, 전문성을 키울 수 있습니다. 야간근무로 신체 부담이 있지만 급여가 괜찮아서 생활에는 
                  지장이 없습니다.
                </p>
              </div>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">힘든 점</h2>
            <div className="mt-4 space-y-3 text-sm leading-6 text-slate-700 sm:text-base">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">신체적 부담</h3>
                <p>
                  허리 부상, 관절염, 손목 통증 등 신체 건강 문제가 흔합니다. 정확한 신체활동 기술과 규칙적 운동이 필수입니다.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">정서적 소모</h3>
                <p>
                  어르신의 죽음, 악의적인 클라이언트, 폭언 피해 등으로 인한 정서적 스트레스와 번아웃이 발생할 수 있습니다.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">낮은 사회적 인식</h3>
                <p>
                  사회적 지위가 낮다고 느껴지는 경우가 많으며, 일부에서 요양보호사를 폄하하는 태도로 자존감 저하를 경험합니다.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">급여와 근무 조건</h3>
                <p>
                  업종 평균보다 낮은 급여, 불규칙한 근무 시간, 충분하지 않은 휴식이 문제입니다. 특히 방문요양은 실비 부담이 큽니다.
                </p>
              </div>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">장점</h2>
            <div className="mt-4 space-y-3 text-sm leading-6 text-slate-700 sm:text-base">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">의미 있는 일</h3>
                <p>
                  누군가의 일상을 직접 돕는 의미 있는 일을 합니다. 어르신의 감사와 신뢰는 직무만족도를 크게 높입니다.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">인간관계의 깊이</h3>
                <p>
                  어르신들과 가깝게 관계하면서 삶의 경험과 지혜를 배울 수 있고, 동료 요양보호사들과도 깊은 유대감을 형성합니다.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-tableau-900">안정적 수요</h3>
                <p>
                  고령사회에서 요양보호사 수요는 계속 증가하므로, 일자리 선택의 폭이 넓습니다.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">유연한 커리어 선택</h3>
                <p>
                  시설, 방문, 병원 등 다양한 근무처로 전환할 수 있으며, 경력을 쌓으면 관리자나 교육자로 진출 가능합니다.
                </p>
              </div>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">급여 현실</h2>
            <div className="mt-4 space-y-3 text-sm leading-6 text-slate-700 sm:text-base">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">시설근무 기본급</h3>
                <p>
                  월급으로 180만 원~220만 원 정도를 받지만, 세금과 보험료를 빼면 실수령액은 150만 원~190만 원입니다.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">방문요양 시간급</h3>
                <p>
                  월 200시간 근무 시 240만 원~300만 원 정도이지만, 교통비와 식사비 등 실비를 제하면 실제 수입은 낮습니다.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">야간근무 수당</h3>
                <p>
                  야간수당으로 추가 수입이 가능하여 월 250만 원~280만 원도 가능하지만, 신체 부담이 큽니다.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">경력 인상</h3>
                <p>
                  경력이 쌓이면서 월 1~2회 정도 급여 인상이 있으며, 5년 경력 기준 시작급대비 15~20% 정도 인상됩니다.
                </p>
              </div>
            </div>
          </article>

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

          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">관련 링크</h2>
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
                href="/caregiver-info/salary"
                className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
              >
                <h3 className="text-base font-semibold text-slate-900">월급 안내</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">요양보호사 급여와 수입 정보를 확인하세요.</p>
              </Link>
              <Link
                href="/caregiver-info/jobs"
                className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
              >
                <h3 className="text-base font-semibold text-slate-900">취업정보 안내</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">취업 기관과 준비 팁을 알아보세요.</p>
              </Link>
            </div>
          </section>
        </section>
      </section>
    </main>
  );
}
