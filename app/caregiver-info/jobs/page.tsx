import Link from "next/link";
import SiteHeader from "../../components/site-header";

export default function CaregiverJobsPage() {
  const faqs = [
    {
      q: "요양보호사 취업은 어디서 찾아야 하나요?",
      a: "워크넷, 사람인, 인크루트 등 일반 구인구직 사이트와 요양시설 전문 구인구직 사이트, 요양보호사 채용 앱 등에서 찾을 수 있습니다.",
    },
    {
      q: "첫 취업 시 시설과 방문 중 어디를 선택하는 것이 좋을까요?",
      a: "경험이 없다면 시설 근무를 권장합니다. 시설에서 기본을 배운 후 방문요양으로 전환하면 더 수월합니다.",
    },
    {
      q: "면접 시 준비해야 할 것은 무엇인가요?",
      a: "요양보호사 자격증 원본, 이력서, 신분증, 그리고 돌봄에 대한 기본 이해와 긍정적 태도를 준비하세요.",
    },
    {
      q: "요양보호사 경력이 없어도 취업할 수 있나요?",
      a: "네, 요양보호사 자격증만 있으면 취업 가능합니다. 많은 기관에서 신입을 채용하며 현장에서 교육하기도 합니다.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <SiteHeader />

      <section className="mx-auto w-full max-w-4xl px-4 py-6 sm:px-6 sm:py-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <p className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
            요양보호사 취업
          </p>
          <h1 className="mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-4xl">
            요양보호사 취업정보 안내
          </h1>
          <p className="mt-4 text-sm leading-6 text-slate-700 sm:text-base">
            요양보호사 자격증을 취득했다면 이제 취업을 준비할 차례입니다. 취업 가능한 기관부터 근무 형태, 초보자 팁까지 알아보세요.
          </p>
        </div>

        <section className="mt-5 space-y-4">
          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">취업 가능한 곳</h2>
            <p className="mt-4 text-sm leading-6 text-slate-700 sm:text-base">
              요양보호사는 다양한 돌봄 기관과 개인 클라이언트를 위해 일할 수 있습니다. 각 기관의 특징을 파악하여 자신에게 맞는 곳을
              찾아보세요.
            </p>
            <div className="mt-4 space-y-3 text-sm leading-6 text-slate-700 sm:text-base">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">요양원</h3>
                <p>노인성 질환이나 장애로 일상생활이 어려운 어르신들을 24시간 돌보는 시설입니다. 정규직 근무가 많고 안정적입니다.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">요양병원</h3>
                <p>의료 관리와 간호가 강화된 시설로, 의료진과 함께 근무하며 환자 간호 업무를 담당합니다.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">방문요양 센터</h3>
                <p>클라이언트의 가정을 방문하여 신체 활동 보조와 일상생활을 지원합니다. 유연한 근무 시간이 특징입니다.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">주야간보호센터</h3>
                <p>낮 시간 또는 저녁 시간에 운영되는 돌봄 시설로, 방문요양과 시설근무의 중간 형태입니다.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">개인 돌봄</h3>
                <p>개인 클라이언트를 직접 돌보는 경우로, 방문요양 센터를 통하지 않고 직접 계약하기도 합니다.</p>
              </div>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">방문요양/시설 차이</h2>
            <div className="mt-4 grid gap-4 text-sm leading-6 text-slate-700 sm:grid-cols-2 sm:text-base">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="mb-3 font-semibold text-slate-900">시설 근무</h3>
                <ul className="list-inside list-disc space-y-1">
                  <li>정해진 시간에 시설 출근</li>
                  <li>여러 명 돌봄</li>
                  <li>동료와 협력</li>
                  <li>안정적 급여</li>
                  <li>교육 기회 많음</li>
                  <li>체계적 관리</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="mb-3 font-semibold text-slate-900">방문요양</h3>
                <ul className="list-inside list-disc space-y-1">
                  <li>유연한 근무 시간</li>
                  <li>1대 1 돌봄</li>
                  <li>독립적 업무</li>
                  <li>변동하는 수입</li>
                  <li>자율성 높음</li>
                  <li>이동 필요</li>
                </ul>
              </div>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">초보 취업 팁</h2>
            <div className="mt-4 space-y-3 text-sm leading-6 text-slate-700 sm:text-base">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">1. 시설 근무로 시작하기</h3>
                <p>
                  신입이라면 요양원이나 병원 같은 시설 근무로 시작하는 것을 권장합니다. 선배 동료로부터 배우고 기본기를 다질 수
                  있습니다.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">2. 면접 준비 잘하기</h3>
                <p>요양보호사 자격증 원본, 신분증, 이력서를 챙기고, 성실함과 긍정적 태도를 보여주세요.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">3. 기관 선택 신중하게</h3>
                <p>급여와 복리후생, 근무 환경을 꼼꼼히 확인하고, 기관 평판을 온라인에서 검색해보세요.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">4. 맨토 찾기</h3>
                <p>경력 많은 요양보호사에게 현장 팁을 배우고 어려움이 생겼을 때 조언을 구해보세요.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">5. 계속 배우기</h3>
                <p>기초교육 이수 후에도 추가 교육 기회를 찾아 전문성을 높이고 급여 인상 기회를 늘리세요.</p>
              </div>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">실제 근무 형태</h2>
            <div className="mt-4 space-y-3 text-sm leading-6 text-slate-700 sm:text-base">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="font-semibold text-slate-900">정규직 근무</p>
                <p>월급제로 월 1회 급여를 받으며, 연차휴가와 4대보험이 보장됩니다. 근무 시간이 정해져 있습니다.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="font-semibold text-slate-900">계약직/아르바이트</p>
                <p>시간급 또는 일당제로 받으며, 정규직보다 유연하지만 보험과 휴가 보장이 불명확할 수 있습니다.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="font-semibold text-slate-900">파트타임 근무</p>
                <p>
                  주 3~4일 정도 정해진 시간에 근무하며, 학업이나 다른 일과 병행하기에 좋습니다. 급여는 시간당으로 책정됩니다.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="font-semibold text-slate-900">야간/교대근무</p>
                <p>야간, 저녁, 새벽 등 교대로 근무하며, 일반 근무보다 급여가 높지만 신체 부담이 큽니다.</p>
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
                <p className="mt-2 text-sm leading-6 text-slate-700">요양보호사의 전반적인 정보를 확인하세요.</p>
              </Link>
              <Link
                href="/caregiver-info/certificate"
                className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
              >
                <h3 className="text-base font-semibold text-slate-900">자격증 안내</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">요양보호사 자격증 취득 과정을 알아보세요.</p>
              </Link>
              <Link
                href="/caregiver-info/salary"
                className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
              >
                <h3 className="text-base font-semibold text-slate-900">월급 안내</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">요양보호사 급여와 수입 정보를 확인하세요.</p>
              </Link>
              <Link
                href="/visit-care-guide"
                className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
              >
                <h3 className="text-base font-semibold text-slate-900">방문요양 안내</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">방문요양 서비스와 요양보호사 역할을 알아보세요.</p>
              </Link>
            </div>
          </section>
        </section>
      </section>
    </main>
  );
}
