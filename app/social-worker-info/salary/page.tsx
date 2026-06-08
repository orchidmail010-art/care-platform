import Link from "next/link";
import TopAd from "../../components/ads/top-ad";
import MiddleAd from "../../components/ads/middle-ad";
import BottomAd from "../../components/ads/bottom-ad";
import SiteHeader from "../../components/site-header";

export default function SocialWorkerSalaryPage() {
  const faqs = [
    {
      q: "사회복지사 초임은 어느 정도인가요?",
      a: "초임 사회복지사는 보통 월 200만 원대 후반에서 300만 원대 초반 수준의 급여를 받습니다. 기관 유형과 지역에 따라 차이가 있을 수 있습니다.",
    },
    {
      q: "경력이 쌓이면 급여가 얼마나 오르나요?",
      a: "경력 3~5년차부터 급여가 점차 상승하며, 5년 이후에는 관리자 직급이나 전문 분야로 이동할 때 더 큰 상승을 기대할 수 있습니다.",
    },
    {
      q: "공공기관과 민간기관 급여 차이는 어떻게 되나요?",
      a: "공공기관은 안정적인 기본급이 강점이며, 민간기관은 성과급과 수당 등 추가 보상이 있을 수 있습니다. 기관별 복리후생도 함께 비교하는 것이 중요합니다.",
    },
    {
      q: "사회복지사로 일할 때 추가 수당을 받을 수 있나요?",
      a: "야간근무, 주말근무, 직책수당 등 기관별로 추가 수당이 지급될 수 있습니다. 근무조건을 확인하고 계약서를 꼼꼼히 읽어보세요.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <SiteHeader />

      <section className="mx-auto w-full max-w-4xl px-4 py-6 sm:px-6 sm:py-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <p className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
            사회복지사 급여정보
          </p>
          <h1 className="mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-4xl">
            사회복지사 급여 가이드
          </h1>
          <p className="mt-4 text-sm leading-6 text-slate-700 sm:text-base">
            사회복지사 초봉부터 경력별 급여, 기관별 차이, 실제 사례까지 정리했습니다. 취업 준비나 이직을 고려하는 분들에게 유용한 정보를 제공합니다.
          </p>
        </div>

        <TopAd />

        <section className="mt-5 space-y-4">
          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">초봉 설명</h2>
            <div className="mt-4 space-y-3 text-sm leading-6 text-slate-700 sm:text-base">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">초임 수준</h3>
                <p>사회복지사 초임은 보통 월 200만 원대 후반에서 300만 원대 초반 수준입니다. 지역과 기관에 따라 차이가 있습니다.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">초봉 결정 요소</h3>
                <p>기관 유형, 근무 지역, 계약 형태, 담당 업무, 자격증 등급 등이 초봉에 영향을 미칩니다.</p>
              </div>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">경력별 급여</h2>
            <div className="mt-4 space-y-3 text-sm leading-6 text-slate-700 sm:text-base">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">1~3년차</h3>
                <p>초임에서 시작해 경력이 쌓이면서 기본급이 안정화됩니다. 보통 1~3년차에 10~20% 정도 상승하는 편입니다.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">3~5년차</h3>
                <p>현장 경험이 쌓이면 전문성을 인정받아 급여 상승 폭이 커집니다. 이 시기에 직책 변경이나 승진 기회가 생기기도 합니다.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">5년차 이상</h3>
                <p>관리직이나 전문 분야로 전환하면 급여가 더 올라갑니다. 또한 기관의 선호 경력자 채용 시 연봉 협상에서 유리해질 수 있습니다.</p>
              </div>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">기관별 차이</h2>
            <div className="mt-4 space-y-3 text-sm leading-6 text-slate-700 sm:text-base">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">공공기관</h3>
                <p>공공기관은 안정적인 기본급과 규정된 수당 체계가 강점입니다. 복지 후생도 상대적으로 안정적인 편입니다.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">민간기관</h3>
                <p>민간기관은 성과급, 직책수당, 야근 수당 등 추가 보상이 있을 수 있습니다. 기관별 차이가 크므로 채용 공고를 꼼꼼히 비교하세요.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">시설 유형별 차이</h3>
                <p>복지관, 병원, 정신건강센터, 노인시설 등 시설별로 급여 체계와 수당 구성에 차이가 있습니다.</p>
              </div>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">실제 사례</h2>
            <div className="mt-4 space-y-3 text-sm leading-6 text-slate-700 sm:text-base">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">사례 1: 공공 복지관</h3>
                <p>초임 사회복지사가 공공 복지관에 취업해 월 280만 원대 급여를 받으며 안정적인 복리후생을 누리는 경우입니다.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">사례 2: 민간 장애인시설</h3>
                <p>경력 3년차 장애인시설 사회복지사가 기본급과 야근수당을 합쳐 320만 원대 실수령액을 받는 경우입니다.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">사례 3: 정신건강센터</h3>
                <p>5년차 사회복지사가 전문 분과로 이동해 관리직 수당을 포함해 350만 원대 급여를 받는 경우입니다.</p>
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
                <p className="mt-2 text-sm leading-6 text-slate-700">사회복지사 자격 취득 방법을 확인하세요.</p>
              </Link>
              <Link
                href="/social-worker-info/jobs"
                className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
              >
                <h3 className="text-base font-semibold text-slate-900">취업 정보</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">사회복지사 취업처와 팁을 확인하세요.</p>
              </Link>
              <Link
                href="/support-benefits"
                className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
              >
                <h3 className="text-base font-semibold text-slate-900">지원금 안내</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">사회복지사 관련 지원 혜택을 알아보세요.</p>
              </Link>
            </div>
          </section>
        </section>
      </section>
    </main>
  );
}
