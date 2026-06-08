import Link from "next/link";
import TopAd from "../../components/ads/top-ad";
import MiddleAd from "../../components/ads/middle-ad";
import BottomAd from "../../components/ads/bottom-ad";
import SiteHeader from "../../components/site-header";

export default function SocialWorkerJobsPage() {
  const faqs = [
    {
      q: "사회복지사로 취업할 수 있는 기관은 어디인가요?",
      a: "사회복지관, 장애인시설, 노인복지시설, 정신건강복지센터, 병원, 지역자활센터 등 다양한 공공 및 민간 기관에서 사회복지사를 채용합니다.",
    },
    {
      q: "사회복지사의 실제 업무는 어떤 것인가요?",
      a: "사례 관리, 상담 지원, 프로그램 기획 및 운영, 자원 연계, 신청서 작성, 가족 면담 등 현장 이용자 중심의 서비스를 제공합니다.",
    },
    {
      q: "사회복지사 급여 수준은 어느 정도인가요?",
      a: "공공기관과 민간기관에 따라 다르지만, 초임 기준으로 200만 원대 후반에서 300만 원대 초반 수준이 일반적입니다. 경력과 기관 규모에 따라 더 높아질 수 있습니다.",
    },
    {
      q: "취업 준비를 위해 어떤 경험이 필요할까요?",
      a: "실습 경험, 자원봉사, 관련 자격증 또는 세미나 참여 경험이 큰 도움이 됩니다. 현장 중심 경험을 이력서와 자기소개서에 잘 정리하세요.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <SiteHeader />

      <section className="mx-auto w-full max-w-4xl px-4 py-6 sm:px-6 sm:py-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <p className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
            사회복지사 취업정보
          </p>
          <h1 className="mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-4xl">
            사회복지사 취업 가이드
          </h1>
          <p className="mt-4 text-sm leading-6 text-slate-700 sm:text-base">
            사회복지사로 일할 수 있는 기관과 실제 업무, 급여 수준, 취업 팁을 정리했습니다. 현장 경험과 준비 방법을 알아보고 취업 경쟁력을 높이세요.
          </p>
        </div>

        <TopAd />

        <section className="mt-5 space-y-4">
          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">취업 가능한 기관</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">사회복지관</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">지역 주민을 위한 프로그램 운영과 가족 상담, 사례 관리 업무를 수행합니다.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">노인복지시설</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">노인 대상 프로그램 기획, 생활 지원, 가족 면담, 서비스 연계 등이 주요 업무입니다.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">장애인시설</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">장애인 대상 교육, 직업 지원, 자립 생활 도우미 서비스 등을 제공합니다.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">정신건강복지센터</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">정신건강 상담, 사례 관리, 지역자원 연계를 맡아 서비스를 지원합니다.</p>
              </div>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">실제 업무</h2>
            <div className="mt-4 space-y-3 text-sm leading-6 text-slate-700 sm:text-base">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">사례 관리</h3>
                <p>이용자의 상황을 파악하고, 필요한 서비스를 계획·연계하며 결과를 모니터링합니다.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">상담 지원</h3>
                <p>가족 상담, 정서 지원, 문제 해결을 돕는 상담 업무를 수행합니다.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">프로그램 운영</h3>
                <p>복지 프로그램 기획 및 운영, 현장 행사 준비, 참여자 관리 등이 포함됩니다.</p>
              </div>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">급여 수준</h2>
            <div className="mt-4 space-y-3 text-sm leading-6 text-slate-700 sm:text-base">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">초임 급여</h3>
                <p>초임 사회복지사의 월급은 200만 원대 후반에서 300만 원대 초반 수준이 일반적입니다.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">경력에 따른 상승</h3>
                <p>경력이 쌓일수록 급여가 상승하며, 관리직이나 전문 분야로 이동하면 더 높은 보수를 받을 수 있습니다.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">기관별 차이</h3>
                <p>공공기관은 안정적인 급여 체계를, 민간기관은 성과급과 수당 등 추가 보상이 있는 경우가 많습니다.</p>
              </div>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">취업 팁</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 text-sm leading-6 text-slate-700 sm:text-base">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">실습 경험 강조</h3>
                <p>실습 경험을 구체적으로 작성해 현장 적응 능력과 업무 이해도를 보여주세요.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">자원봉사 경력</h3>
                <p>자원봉사 경력은 복지 현장에 대한 관심과 꾸준함을 보여주는 중요한 요소입니다.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">네트워킹</h3>
                <p>관련 세미나, 워크숍, 협회 모임에 참여하면 채용 정보를 더 빠르게 얻을 수 있습니다.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">맞춤형 자기소개서</h3>
                <p>지원 기관의 미션과 사업 내용을 반영해 자기소개서와 포트폴리오를 작성하세요.</p>
              </div>
            </div>
          </article>

          <MiddleAd />

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">자주 묻는 질문</h2>
            <div className="mt-4 space-y-3 text-sm leading-6 text-slate-700 sm:text-base">
              {faqs.map((faq) => (
                <div key={faq.q} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="font-semibold text-slate-900">Q: {faq.q}</p>
                  <p className="mt-2">A: {faq.a}</p>
                </div>
              ))}
            </div>
          </article>

          <BottomAd />

          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">관련 링크</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <Link
                href="/social-worker-info"
                className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
              >
                <h3 className="text-base font-semibold text-slate-900">사회복지사 안내</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">사회복지사 기본 정보를 확인하세요.</p>
              </Link>
              <Link
                href="/social-worker-info/certificate"
                className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
              >
                <h3 className="text-base font-semibold text-slate-900">자격증 안내</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">사회복지사 자격 취득 방법과 정보를 확인하세요.</p>
              </Link>
              <Link
                href="/support-benefits"
                className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
              >
                <h3 className="text-base font-semibold text-slate-900">지원금 안내</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">사회복지사 관련 지원 혜택을 알아보세요.</p>
              </Link>
              <Link
                href="/family-care-guide"
                className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
              >
                <h3 className="text-base font-semibold text-slate-900">가족요양 안내</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">가족요양 서비스 정보를 확인하세요.</p>
              </Link>
            </div>
          </section>
        </section>
      </section>
    </main>
  );
}
