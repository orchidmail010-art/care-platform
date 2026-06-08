import Link from "next/link";
import TopAd from "../../components/ads/top-ad";
import MiddleAd from "../../components/ads/middle-ad";
import BottomAd from "../../components/ads/bottom-ad";
import SiteHeader from "../../components/site-header";

export default function CaregiverCertificatePage() {
  const faqs = [
    {
      q: "요양보호사 자격증을 취득하는 데 얼마나 걸리나요?",
      a: "기본 이론 교육 80시간 + 실습 80시간 총 160시간으로, 약 4주~8주 정도 소요됩니다. 교육 기관과 일정에 따라 다를 수 있습니다.",
    },
    {
      q: "요양보호사 시험 합격률은 어느 정도인가요?",
      a: "시험 합격률은 평균 70~80% 정도입니다. 교육을 충실히 이수하면 충분히 합격할 수 있습니다.",
    },
    {
      q: "요양보호사 자격증은 평생 유효한가요?",
      a: "네, 요양보호사 자격증은 취득 후 평생 유효합니다. 다만 취업 시 정기적인 교육이나 보수 교육을 받아야 할 수 있습니다.",
    },
    {
      q: "요양보호사 자격증 없이도 일할 수 있나요?",
      a: "장기요양 서비스 제공자로서 급여를 받으려면 자격증이 필수입니다. 자격증 없이는 장기요양 서비스를 제공할 수 없습니다.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <SiteHeader />

      <section className="mx-auto w-full max-w-4xl px-4 py-6 sm:px-6 sm:py-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <p className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
            요양보호사 자격증
          </p>
          <h1 className="mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-4xl">
            요양보호사 자격증 취득 안내
          </h1>
          <p className="mt-4 text-sm leading-6 text-slate-700 sm:text-base">
            요양보호사 자격증 취득을 계획하고 있다면 필요한 모든 정보를 한 곳에서 확인할 수 있습니다. 교육 과정부터 시험, 비용까지
            단계별로 알아보세요.
          </p>
        </div>

        <TopAd />

        <section className="mt-5 space-y-4">
          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">자격증 취득 방법</h2>
            <p className="mt-4 text-sm leading-6 text-slate-700 sm:text-base">
              요양보호사 자격증을 취득하기 위해서는 정해진 교육 과정을 이수한 후 국가 시험에 합격해야 합니다. 단계별 절차는 다음과
              같습니다.
            </p>
            <div className="mt-4 space-y-3 text-sm leading-6 text-slate-700 sm:text-base">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">1단계: 교육기관 선택</h3>
                <p>국가에서 인정한 요양보호사 교육기관을 찾아 등록합니다.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">2단계: 교육 이수</h3>
                <p>이론 교육 80시간 + 실습 80시간 총 160시간을 이수합니다.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">3단계: 자격시험 응시</h3>
                <p>교육 이수 후 한국보건의료인국가시험원에서 시행하는 시험에 응시합니다.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">4단계: 합격 및 자격 취득</h3>
                <p>시험에 합격하면 요양보호사 자격증을 발급받을 수 있습니다.</p>
              </div>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">교육 과정</h2>
            <p className="mt-4 text-sm leading-6 text-slate-700 sm:text-base">
              요양보호사 교육은 이론과 실습으로 구성되며, 각 과정별 주요 내용은 다음과 같습니다.
            </p>
            <div className="mt-4 space-y-3 text-sm leading-6 text-slate-700 sm:text-base">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">이론 교육 (80시간)</h3>
                <ul className="mt-2 list-inside list-disc space-y-1">
                  <li>요양보호의 기초 및 윤리</li>
                  <li>노인 심리의 이해</li>
                  <li>노인 질환의 이해</li>
                  <li>응급처치 및 감염관리</li>
                  <li>요양보호 기술 이론</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">실습 교육 (80시간)</h3>
                <ul className="mt-2 list-inside list-disc space-y-1">
                  <li>신체활동 보조 실습</li>
                  <li>기본간호 실습</li>
                  <li>일상생활 보조 실습</li>
                  <li>의사소통 및 상담 실습</li>
                  <li>현장 실습</li>
                </ul>
              </div>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">시험 설명</h2>
            <p className="mt-4 text-sm leading-6 text-slate-700 sm:text-base">
              요양보호사 자격시험은 한국보건의료인국가시험원에서 주관하며, 객관식 시험으로 진행됩니다.
            </p>
            <div className="mt-4 space-y-3 text-sm leading-6 text-slate-700 sm:text-base">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">시험 형식</h3>
                <p>총 60문항 객관식 4지선다형, 60분 내에 실시됩니다.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">합격 기준</h3>
                <p>100점 만점 중 60점 이상 획득 시 합격입니다.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">시험 과목</h3>
                <p>요양보호의 기초, 노인 이해, 요양보호 기술, 의사소통, 기타 관련 내용을 다룹니다.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">응시 기회</h3>
                <p>1년에 여러 차례 시험이 시행되므로 자신의 일정에 맞춰 응시할 수 있습니다.</p>
              </div>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">비용 설명</h2>
            <p className="mt-4 text-sm leading-6 text-slate-700 sm:text-base">
              요양보호사 자격증 취득에는 교육 비용과 시험 응시료 등이 소요됩니다. 대략적인 비용은 다음과 같습니다.
            </p>
            <div className="mt-4 space-y-3 text-sm leading-6 text-slate-700 sm:text-base">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">교육 비용</h3>
                <p>교육기관마다 다르지만, 보통 100만 원~150만 원 정도입니다. 일부 교육기관에서는 분할 납부를 지원합니다.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">시험 응시료</h3>
                <p>응시료는 약 50,000~70,000원 정도입니다. 정확한 금액은 시험원에 문의하세요.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">자격증 발급료</h3>
                <p>자격증 발급 시 약 10,000원 정도의 수수료가 발생합니다.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">정부 지원</h3>
                <p>실직자, 저소득층 등은 직업훈련비 지원을 받을 수 있으니 관할 노동청에 문의하세요.</p>
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
                <p className="mt-2 text-sm leading-6 text-slate-700">요양보호사 업무와 역할을 전체적으로 이해하세요.</p>
              </Link>
              <Link
                href="/family-care-guide"
                className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
              >
                <h3 className="text-base font-semibold text-slate-900">가족요양 안내</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">가족요양 자격과 지원을 확인하세요.</p>
              </Link>
              <Link
                href="/long-term-care"
                className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
              >
                <h3 className="text-base font-semibold text-slate-900">장기요양 안내</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">장기요양 제도를 자세히 알아보세요.</p>
              </Link>
              <Link
                href="/social-worker-info"
                className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
              >
                <h3 className="text-base font-semibold text-slate-900">사회복지사 안내</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">사회복지사 역할과 자격을 확인하세요.</p>
              </Link>
            </div>
          </section>
        </section>
      </section>
    </main>
  );
}
