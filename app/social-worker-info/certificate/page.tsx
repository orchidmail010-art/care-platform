import Link from "next/link";
import SiteHeader from "../../components/site-header";

export default function SocialWorkerCertificatePage() {
  const faqs = [
    {
      q: "사회복지사 자격증은 어떤 종류가 있나요?",
      a: "사회복지사 자격증은 1급과 2급으로 나뉩니다. 2급은 대학 또는 전문대학 사회복지 관련 학과를 졸업하거나 지정된 교육과정을 이수하면 취득할 수 있으며, 1급은 2급 취득 후 실무경력과 추가 교육을 통해 응시할 수 있습니다.",
    },
    {
      q: "2급 사회복지사 자격증은 어떻게 취득하나요?",
      a: "대학 또는 전문대학 사회복지 전공을 졸업하거나, 비전공자는 한국사회복지사협회에서 인정하는 교육기관의 지정 교육과정을 이수한 후 국가시험에 합격하면 됩니다.",
    },
    {
      q: "사회복지사 실습은 꼭 해야 하나요?",
      a: "네, 실습은 자격 취득에 필수입니다. 현장 실습을 통해 사회복지 서비스 제공 경험을 쌓고, 실제 업무 이해도를 높일 수 있습니다.",
    },
    {
      q: "자격증을 취득하면 취업 연결이 쉬운가요?",
      a: "사회복지사 자격증은 공공기관, 복지관, 병원 등 다양한 분야에서 선호됩니다. 특히 실습 경력과 자원봉사 경험이 있으면 취업 경쟁력이 높아집니다.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <SiteHeader />

      <section className="mx-auto w-full max-w-4xl px-4 py-6 sm:px-6 sm:py-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <p className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
            사회복지사 자격증 안내
          </p>
          <h1 className="mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-4xl">
            사회복지사 자격증 취득 가이드
          </h1>
          <p className="mt-4 text-sm leading-6 text-slate-700 sm:text-base">
            사회복지사 자격증의 종류와 취득 절차, 실습 정보, 그리고 취업 연결까지 한 번에 정리했습니다. 자격 취득을 준비하는 분들을 위해 꼭 필요한 내용을 담았습니다.
          </p>
        </div>

        <section className="mt-5 space-y-4">
          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">자격증 종류</h2>
            <div className="mt-4 space-y-3 text-sm leading-6 text-slate-700 sm:text-base">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">2급 사회복지사</h3>
                <p>사회복지 관련 학과를 졸업하거나 지정된 교육과정을 이수한 후 국가시험에 합격하면 취득할 수 있는 기본 자격입니다.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">1급 사회복지사</h3>
                <p>2급 자격 취득 후 실무경력과 추가 교육을 통해 응시할 수 있는 상위 자격입니다. 전문적인 사회복지 실무와 책임 있는 역할에 적합합니다.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">전문화 자격</h3>
                <p>일부 분야에서는 1급 자격을 보유한 사회복지사에게 전문사회복지사, 정신보건 사회복지사 등 추가 자격 취득 기회가 열립니다.</p>
              </div>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">취득 방법</h2>
            <div className="mt-4 space-y-3 text-sm leading-6 text-slate-700 sm:text-base">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">전공자 취득 경로</h3>
                <p>대학 또는 전문대학에서 사회복지학과를 전공하여 졸업하면 2급 사회복지사 자격 취득이 가능합니다.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">비전공자 취득 경로</h3>
                <p>한국사회복지사협회가 인정하는 교육기관의 지정 교육과정을 이수한 후 국가시험에 응시하면 2급 자격을 취득할 수 있습니다.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">1급 자격 응시</h3>
                <p>2급 자격 취득 후 일정 기간 실무경력을 쌓고, 추가 교육을 이수하면 1급 사회복지사 시험에 응시할 수 있습니다.</p>
              </div>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">실습 설명</h2>
            <div className="mt-4 space-y-3 text-sm leading-6 text-slate-700 sm:text-base">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">실습 목적</h3>
                <p>실습은 사회복지 현장에서 실제 업무를 경험하고, 이론 지식을 실무 능력으로 연결하는 중요한 과정입니다.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">실습 기관</h3>
                <p>복지관, 정신건강 복지센터, 노인요양시설 등 다양한 기관에서 실습할 수 있으며, 기관별 과제와 경험이 다릅니다.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">실습 준비</h3>
                <p>기관에서 요구하는 보고서 양식과 일정, 상담 기록 작성법 등을 미리 확인하고 준비하면 실습 적응이 빠릅니다.</p>
              </div>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">취업 연결</h2>
            <div className="mt-4 space-y-3 text-sm leading-6 text-slate-700 sm:text-base">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">취업 분야</h3>
                <p>사회복지사는 복지관, 장애인시설, 아동복지시설, 정신건강센터, 공공기관 등 다양한 현장에서 일할 수 있습니다.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">취업 지원</h3>
                <p>대학 취업 지원센터, 사회복지사협회 취업 정보, 공공기관 채용 공고를 활용하면 연결 기회를 넓힐 수 있습니다.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">경력 개발</h3>
                <p>실습 경험, 자원봉사 경력, 세미나 참여 등의 경력 요소를 이력서에 잘 정리하면 채용 경쟁력을 높일 수 있습니다.</p>
              </div>
            </div>
          </article>

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
                <p className="mt-2 text-sm leading-6 text-slate-700">사회복지사 자격증의 종류와 취득 과정을 살펴보세요.</p>
              </Link>
              <Link
                href="/social-worker-info/jobs"
                className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
              >
                <h3 className="text-base font-semibold text-slate-900">취업 정보</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">사회복지사 취업처와 준비 팁을 확인하세요.</p>
              </Link>
              <Link
                href="/support-benefits"
                className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
              >
                <h3 className="text-base font-semibold text-slate-900">지원금 안내</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">사회복지사에게 유리한 지원 혜택을 확인하세요.</p>
              </Link>
            </div>
          </section>
        </section>
      </section>
    </main>
  );
}
