import Link from "next/link";
import SiteHeader from "../components/site-header";

export default function SocialWorkerInfoPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <SiteHeader />

      <section className="mx-auto w-full max-w-4xl px-4 py-6 sm:px-6 sm:py-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <p className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">사회복지사 정보</p>
          <h1 className="mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-4xl">사회복지사 안내</h1>
          <p className="mt-4 text-sm leading-6 text-slate-700 sm:text-base">
            사회복지사는 복지 서비스가 필요한 사람들에게 전문적인 상담과 지원을 제공하는 핵심 인력입니다. 이 페이지에서는
            사회복지사가 하는 일, 자격 기준, 취업 분야, 그리고 요양기관과의 연계 역할에 대해 상세히 안내합니다.
          </p>
          <div className="mt-6">
            <Link
              href="/"
              className="inline-flex w-full items-center justify-center rounded-xl bg-blue-700 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800 sm:w-auto sm:px-5 sm:py-3 sm:text-base"
            >
              메인으로 돌아가기
            </Link>
          </div>
        </div>

        <section className="mt-5 space-y-4">
          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">사회복지사가 하는 일</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              사회복지사는 개인, 가족, 그룹, 지역사회의 다양한 복지 문제 해결을 돕고 삶의 질을 향상시키기 위해 노력합니다. 이들은
              상담, 사례 관리, 자원 연계, 프로그램 개발 및 운영, 정책 제안 등 다각적인 업무를 수행합니다. 특히 노인장기요양보험
              제도에서는 수급자와 가족에게 필요한 정보를 제공하고, 적절한 요양 서비스를 선택하고 이용할 수 있도록 돕는 중요한 역할을
              합니다.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">요양기관에서 사회복지사의 역할</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              요양기관에서 사회복지사는 수급자와 가족의 욕구를 파악하고 맞춤형 돌봄 계획을 수립합니다. 입소 또는 이용 상담부터
              계약 지원, 서비스 조정, 고충 처리, 지역사회 자원 연계까지 전반적인 과정을 관리합니다. 또한, 요양보호사 및 간호사와
              협력하여 통합적인 서비스를 제공하고, 수급자의 정서적 안정과 사회적 관계 유지를 돕습니다.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">사회복지사 자격 기준</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              사회복지사 자격증은 1급과 2급으로 나뉘며, 취득 기준이 다릅니다. 사회복지사 2급은 사회복지 관련 전문학사 또는 학사
              학위를 취득하고 필수 이수 과목을 이수하면 무시험으로 취득 가능합니다. 사회복지사 1급은 2급 자격증을 소지하고 관련
              경력이 있거나, 사회복지학 학사 학위를 취득한 후 국가시험에 합격해야 합니다. 정확한 자격 기준은 한국사회복지사협회에서
              확인할 수 있습니다.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">취업 가능한 분야</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              사회복지사는 노인복지관, 장애인복지관, 아동복지시설, 지역사회복지관 등 다양한 복지 분야에서 활동할 수 있습니다. 또한,
              병원의 의료사회복지사, 학교의 학교사회복지사, 공공기관의 사회복지 전담 공무원, 기업의 사회공헌 담당자 등 폭넓은 분야로
              진출할 수 있습니다. 특히 고령화 사회로 접어들면서 요양병원, 주야간보호센터, 재가방문요양센터 등 노인장기요양기관에서의
              수요가 증가하고 있습니다.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">요양보호사와 사회복지사의 차이</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              요양보호사는 주로 수급자에게 직접적인 신체활동 및 일상생활 지원 서비스를 제공하는 반면, 사회복지사는 복지 상담,
              사례 관리, 서비스 계획 수립 및 조정, 자원 연계 등 보다 포괄적이고 전문적인 복지 서비스를 제공합니다. 두 직업은
              서로 협력하여 수급자의 통합적인 돌봄을 지원합니다.
            </p>
          </article>
        </section>

        <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">자주 묻는 질문</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
            사회복지사 관련하여 자주 묻는 질문들을 모았습니다.
          </p>
          <div className="mt-4 space-y-3">
            <details className="group rounded-xl border border-slate-200 bg-slate-50 p-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-slate-900 sm:text-base">
                <span>사회복지사 2급 자격증은 어떻게 취득하나요?</span>
                <span className="text-base leading-none text-slate-500 group-open:hidden" aria-hidden>+</span>
                <span className="hidden text-base leading-none text-slate-500 group-open:inline" aria-hidden>-</span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                사회복지 관련 학위(전문학사 이상)를 취득하고, 필수 과목을 이수하면 별도의 시험 없이 자격증을 받을 수 있습니다.
              </p>
            </details>

            <details className="group rounded-xl border border-slate-200 bg-slate-50 p-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-slate-900 sm:text-base">
                <span>사회복지사가 요양보호사 교육도 제공할 수 있나요?</span>
                <span className="text-base leading-none text-slate-500 group-open:hidden" aria-hidden>+</span>
                <span className="hidden text-base leading-none text-slate-500 group-open:inline" aria-hidden>-</span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                네, 사회복지사 자격증 소지자는 요양보호사 교육기관에서 강사로 활동할 수 있으며, 요양보호사 자격증 취득에도 도움이
                될 수 있습니다.
              </p>
            </details>

            <details className="group rounded-xl border border-slate-200 bg-slate-50 p-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-slate-900 sm:text-base">
                <span>요양기관에서 사회복지사는 어떤 행정 업무를 주로 하나요?</span>
                <span className="text-base leading-none text-slate-500 group-open:hidden" aria-hidden>+</span>
                <span className="hidden text-base leading-none text-slate-500 group-open:inline" aria-hidden>-</span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                수급자 상담 기록, 급여 제공 계획서 작성, 청구 관련 서류 관리, 인력 관리, 프로그램 일지 작성 등 다양한 행정
                업무를 수행합니다.
              </p>
            </details>

            <details className="group rounded-xl border border-slate-200 bg-slate-50 p-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-slate-900 sm:text-base">
                <span>사회복지사 1급 시험은 언제 응시할 수 있나요?</span>
                <span className="text-base leading-none text-slate-500 group-open:hidden" aria-hidden>+</span>
                <span className="hidden text-base leading-none text-slate-500 group-open:inline" aria-hidden>-</span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                사회복지사 1급 국가시험은 매년 1회 실시됩니다. 자세한 시험 일정과 공고는 한국사회복지사협회 홈페이지를 통해
                확인할 수 있습니다.
              </p>
            </details>
          </div>
        </section>

        <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">관련 페이지</h2>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/caregiver-info"
              className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
            >
              <h3 className="text-base font-semibold text-slate-900">요양보호사 정보</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">자격 취득, 업무 범위, 현장 가이드를 확인하세요.</p>
            </Link>
            <Link
              href="/family-care-guide"
              className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
            >
              <h3 className="text-base font-semibold text-slate-900">가족요양 안내</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">가족요양 인정 기준과 월별 급여 정보를 제공합니다.</p>
            </Link>
            <Link
              href="/visit-care-guide"
              className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
            >
              <h3 className="text-base font-semibold text-slate-900">방문요양 안내</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">이용시간, 등급별 한도액, 본인부담금 계산 기준을 확인하세요.</p>
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
