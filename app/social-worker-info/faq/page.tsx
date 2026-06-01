import Link from "next/link";
import SiteHeader from "../../components/site-header";

export default function SocialWorkerFaqPage() {
  const faqs = [
    {
      q: "사회복지사 자격증은 어떻게 취득하나요?",
      a: "2급 사회복지사는 사회복지 관련 학과를 졸업하거나 한국사회복지사협회 인정 교육과정을 이수한 뒤 국가시험에 합격하면 됩니다. 1급은 2급 취득 후 실무경력과 추가 교육을 통해 응시할 수 있습니다.",
    },
    {
      q: "사회복지사와 요양보호사의 차이는 무엇인가요?",
      a: "사회복지사는 사례관리, 상담, 프로그램 운영 등 사회복지 서비스를 담당하며, 요양보호사는 신체활동 지원과 일상생활 지원을 중심으로 합니다. 두 직무는 역할과 전문성이 다릅니다.",
    },
    {
      q: "실습은 꼭 해야 하나요?",
      a: "네, 실습은 사회복지사 자격 취득에 필수 조건입니다. 실습을 통해 현장 경험을 쌓고 실제 업무를 이해할 수 있습니다.",
    },
    {
      q: "사회복지사로 취업하려면 어떤 역량이 필요할까요?",
      a: "대인관계 능력, 공감력, 문서 작성 능력, 문제 해결력, 서비스 기획 능력이 중요합니다. 실습 경험과 자원봉사 경험도 큰 도움이 됩니다.",
    },
    {
      q: "사회복지사 급여는 어느 정도인가요?",
      a: "초임은 월 200만 원대 후반에서 300만 원대 초반이 일반적입니다. 공공기관과 민간기관, 경력에 따라 급여 수준이 다르게 나타납니다.",
    },
    {
      q: "자격증 취득 후 어디에서 일할 수 있나요?",
      a: "사회복지관, 장애인시설, 노인복지시설, 정신건강센터, 병원, 공공기관 등 다양한 기관에서 취업할 수 있습니다. 분야가 넓어 진로 선택 폭이 큽니다.",
    },
    {
      q: "자격증 취득에 비용이 얼마나 드나요?",
      a: "교육비와 시험 응시료가 필요합니다. 교육 기관과 과정에 따라 비용이 다르니 지원 전에 비용 구성과 장학, 지원 제도를 확인하세요.",
    },
    {
      q: "사회복지사 자격증은 어디서 확인하나요?",
      a: "한국사회복지사협회와 교육기관, 그리고 관련 공공기관 홈페이지에서 최신 정보를 확인할 수 있습니다. 자격증 발급과 시험 일정은 공식 채널을 참고하세요.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <SiteHeader />

      <section className="mx-auto w-full max-w-4xl px-4 py-6 sm:px-6 sm:py-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <p className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
            사회복지사 FAQ
          </p>
          <h1 className="mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-4xl">
            사회복지사 자주 묻는 질문
          </h1>
          <p className="mt-4 text-sm leading-6 text-slate-700 sm:text-base">
            사회복지사 자격, 실습, 취업, 급여 등 자주 묻는 질문을 정리했습니다. 사회복지사 준비와 경력 설계에 도움되는 정보를 확인하세요.
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
              href="/social-worker-info"
              className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
            >
              <h3 className="text-base font-semibold text-slate-900">사회복지사 안내</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">사회복지사의 역할과 주요 정보를 확인하세요.</p>
            </Link>

            <Link
              href="/social-worker-info/certificate"
              className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
            >
              <h3 className="text-base font-semibold text-slate-900">자격증 안내</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">사회복지사 자격 취득 방법을 알아보세요.</p>
            </Link>

            <Link
              href="/social-worker-info/jobs"
              className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
            >
              <h3 className="text-base font-semibold text-slate-900">취업 정보</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">사회복지사 취업처와 준비 팁을 확인하세요.</p>
            </Link>

            <Link
              href="/social-worker-info/salary"
              className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
            >
              <h3 className="text-base font-semibold text-slate-900">급여 정보</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">사회복지사 급여 수준과 사례를 확인하세요.</p>
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
