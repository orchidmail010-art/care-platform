import Link from "next/link";
import SiteHeader from "../../components/site-header";

export default function LongTermCareBenefitsPage() {
  const faqs = [
    {
      q: "장기요양 혜택을 받으려면 어떤 조건이 필요한가요?",
      a: "65세 이상이거나 노인성 질병이 있는 분으로 등급 심사를 거쳐 1~5등급 또는 인지지원등급으로 판정받아야 합니다.",
    },
    {
      q: "재가급여와 시설급여를 동시에 이용할 수 있나요?",
      a: "기본적으로 월 단위로 선택하여 이용하는 방식이지만, 상황에 따라 월 내에서 변경이 가능합니다. 공단에 문의하여 상세히 확인하세요.",
    },
    {
      q: "장기요양 이용 후 나머지 본인부담금은 의료비 공제가 되나요?",
      a: "네, 의료비 세액공제 대상에 포함될 수 있으니 세무사 또는 세무서에 문의하여 공제 가능 여부를 확인하세요.",
    },
    {
      q: "장기요양 급여 외 추가 비용이 발생하나요?",
      a: "급여 범위 내의 서비스는 본인부담금 범위만 부담하지만, 기관의 추가 선택 서비스를 이용하면 추가 비용이 발생할 수 있습니다.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <SiteHeader />

      <section className="mx-auto w-full max-w-4xl px-4 py-6 sm:px-6 sm:py-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <p className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
            장기요양 혜택
          </p>
          <h1 className="mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-4xl">
            장기요양 혜택 안내
          </h1>
          <p className="mt-4 text-sm leading-6 text-slate-700 sm:text-base">
            장기요양 제도는 신체적 또는 정신적 손상으로 일상생활에 어려움이 있는 분들을 위해 다양한 혜택을 제공합니다.
            재가급여부터 시설급여까지 맞춤형 서비스와 복지 혜택을 자세히 알아보세요.
          </p>
        </div>

        <section className="mt-5 space-y-4">
          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">재가급여</h2>
            <p className="mt-4 text-sm leading-6 text-slate-700 sm:text-base">
              재가급여는 집에 머물면서 받을 수 있는 가정 방문 서비스입니다. 일상생활의 편의성을 유지하면서 필요한 지원을 받을 수 있다는
              큰 장점이 있습니다.
            </p>
            <div className="mt-4 space-y-3 text-sm leading-6 text-slate-700 sm:text-base">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">방문요양</h3>
                <p>요양보호사가 가정을 방문하여 식사, 배설, 목욕, 이동 등 신체 활동 보조와 정서적 지원을 제공합니다.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">방문목욕</h3>
                <p>전문 요양보호사가 가정에서 안전하고 위생적인 목욕 서비스를 제공합니다.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">방문간호</h3>
                <p>간호사가 가정을 방문하여 상처 관리, 투약 관리, 재활 운동 등 의료적 서비스를 제공합니다.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">주야간보호</h3>
                <p>낮 시간에 보호 시설을 이용하여 안전한 환경에서 관리 및 활동 프로그램을 받을 수 있습니다.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">단기보호</h3>
                <p>임시로 시설에 입소하여 보호를 받는 서비스로, 가족의 긴급 상황 시에도 안심할 수 있습니다.</p>
              </div>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">시설급여</h2>
            <p className="mt-4 text-sm leading-6 text-slate-700 sm:text-base">
              시설급여는 요양 시설에 입소하여 24시간 일관된 돌봄과 의료 지원을 받을 수 있는 서비스입니다. 전문 인력과 의료 시설이
              갖춰져 있어 응급 상황에도 즉시 대응할 수 있습니다.
            </p>
            <div className="mt-4 space-y-3 text-sm leading-6 text-slate-700 sm:text-base">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">통합적인 돌봄</h3>
                <p>식사, 위생, 투약, 신체 활동 보조 등 모든 일상생활 전반을 전문적으로 관리받을 수 있습니다.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">의료 연계</h3>
                <p>의사, 간호사 등 의료진이 상주하여 건강 상태를 지속적으로 관리하고 필요한 치료를 제공합니다.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">사회활동 프로그램</h3>
                <p>문화, 운동, 여가 활동 등 다양한 프로그램을 통해 정서적 안정과 사회적 관계를 유지할 수 있습니다.</p>
              </div>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">복지 혜택</h2>
            <div className="mt-4 space-y-3 text-sm leading-6 text-slate-700 sm:text-base">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">본인부담금 감면</h3>
                <p>기초생활수급자, 차상위계층, 의료급여 대상자 등은 본인부담금을 감면받을 수 있어 비용 부담을 크게 줄일 수 있습니다.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">의료비 공제</h3>
                <p>장기요양 이용에 따른 본인부담금은 의료비 세액공제 대상이 될 수 있어 세금 혜택을 받을 수 있습니다.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">지역별 추가 지원</h3>
                <p>거주 지역에 따라 지자체에서 제공하는 추가 복지 사업(요양비 지원, 보조기구 지원 등)을 이용할 수 있습니다.</p>
              </div>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">이용 시 장점</h2>
            <div className="mt-4 grid gap-3 text-sm leading-6 text-slate-700 sm:grid-cols-2 sm:text-base">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">가정 유지</h3>
                <p>재가급여를 통해 익숙한 가정환경과 지역사회 관계를 지속할 수 있습니다.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">안정적 돌봄</h3>
                <p>전문 요양보호사와 의료진의 체계적인 돌봄으로 건강과 안전을 보장받습니다.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">경제적 부담 완화</h3>
                <p>공단의 급여 지원으로 개인 부담을 줄이고 필요한 서비스를 합리적인 가격에 이용할 수 있습니다.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">가족 부담 감소</h3>
                <p>전문 서비스 이용으로 가족 돌봄 부담을 줄여 모두의 삶의 질을 향상할 수 있습니다.</p>
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
                href="/long-term-care"
                className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
              >
                <h3 className="text-base font-semibold text-slate-900">장기요양 안내</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">장기요양 제도 전반을 이해하고 신청 절차를 확인하세요.</p>
              </Link>
              <Link
                href="/long-term-care/grade"
                className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
              >
                <h3 className="text-base font-semibold text-slate-900">등급 안내</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">1~5등급과 인지지원등급을 자세히 알아보세요.</p>
              </Link>
              <Link
                href="/family-care-guide"
                className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
              >
                <h3 className="text-base font-semibold text-slate-900">가족요양 안내</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">가족이 제공하는 돌봄 서비스를 살펴보세요.</p>
              </Link>
              <Link
                href="/support-benefits"
                className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
              >
                <h3 className="text-base font-semibold text-slate-900">지원금/감면 정보</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">본인부담금 감면과 추가 복지 혜택을 확인하세요.</p>
              </Link>
            </div>
          </section>
        </section>
      </section>
    </main>
  );
}
