import Link from "next/link";
import TopAd from "../../components/ads/top-ad";
import MiddleAd from "../../components/ads/middle-ad";
import BottomAd from "../../components/ads/bottom-ad";
import SiteHeader from "../../components/site-header";

export default function CaregiverExamPage() {
  const faqs = [
    {
      q: "요양보호사 시험은 현재 어떤 방식으로 시행되나요?",
      a: "현재 상시 CBT(컴퓨터 기반 시험) 방식으로 시행되고 있습니다. 더 이상 정기시험 방식이 아니며, 시험센터 운영 일정에 따라 상시 응시가 가능합니다. 가장 정확한 시험 일정과 접수 가능 여부는 한국보건의료인국가시험원(국시원) 홈페이지에서 확인해야 합니다.",
    },
    {
      q: "시험 응시료는 얼마인가요?",
      a: "응시료는 약 50,000~70,000원 정도입니다. 시험원에 따라 다를 수 있으므로 공식 홈페이지에서 확인하세요.",
    },
    {
      q: "시험 결과는 언제 나오나요?",
      a: "시험 시행일 다음날 오전 10시 이후 발표 예정입니다. 공식 홈페이지에서 수험번호로 조회할 수 있습니다.",
    },
    {
      q: "시험 불합격 시 재응시가 가능한가요?",
      a: "네, 제한 없이 재응시할 수 있습니다. 다음 시험 기간에 다시 신청하면 됩니다.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <SiteHeader />

      <section className="mx-auto w-full max-w-4xl px-4 py-6 sm:px-6 sm:py-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <p className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
            요양보호사 시험
          </p>
          <h1 className="mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-4xl">
            요양보호사 시험일정 안내
          </h1>
          <p className="mt-4 text-sm leading-6 text-slate-700 sm:text-base">
            요양보호사 자격시험의 일정, 응시 절차, 준비 방법을 한눈에 확인할 수 있습니다. 시험에 성공하기 위한 모든 정보를 정리했으니
            꼼꼼히 확인하세요.
          </p>
        </div>

        <TopAd />

        <section className="mt-5 space-y-4">
          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">시험 일정 설명</h2>
            <p className="mt-4 text-sm leading-6 text-slate-700 sm:text-base">
              요양보호사 시험은 현재 상시 CBT(컴퓨터 기반 시험) 방식으로 시행되고 있습니다. 더 이상 정기시험 방식이 아니며, 시험센터 운영 일정과 잔여 좌석에 따라 응시 가능한 날짜가 달라집니다.
            </p>
            <div className="mt-4 space-y-3 text-sm leading-6 text-slate-700 sm:text-base">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">상시 CBT 시험 방식</h3>
                <p>요양보호사 시험은 CBT(컴퓨터 기반 시험) 방식으로 시행됩니다. 더 이상 정기시험으로 보는 방식이 아닙니다.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">원서접수</h3>
                <p>국시원 홈페이지에서 시험일 7일 전까지 접수할 수 있습니다. 접수 가능한 날짜와 좌석은 시험센터별로 다를 수 있습니다.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">시험 장소</h3>
                <p>전국 국시원 시험센터에서 시행됩니다. 원서접수 시 시험센터와 날짜를 선택하는 방식입니다.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">공식 정보</h3>
                <p>가장 정확한 시험 일정과 접수 가능 여부는 한국보건의료인국가시험원(국시원) 홈페이지에서 확인해야 합니다.</p>
              </div>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">응시 방법</h2>
            <p className="mt-4 text-sm leading-6 text-slate-700 sm:text-base">
              요양보호사 시험에 응시하기 위해서는 정해진 절차를 따라야 합니다.
            </p>
            <div className="mt-4 space-y-3 text-sm leading-6 text-slate-700 sm:text-base">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">1단계: 원서접수</h3>
                <p>국시원 홈페이지에서 시험일 7일 전까지 온라인 원서접수를 합니다. 시험센터와 날짜를 선택합니다.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">2단계: 수험표 출력</h3>
                <p>원서접수 완료 후 시험원에서 발급하는 수험표를 출력합니다. 수험번호와 시험 장소를 확인하세요.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">3단계: 시험 응시</h3>
                <p>지정된 시간과 장소에 도착하여 신분증을 제시하고 시험에 응시합니다. 수험표와 신분증은 필수입니다.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">4단계: 합격자 발표</h3>
                <p>시험 시행일 다음날 오전 10시 이후 발표 예정입니다. 최종 확인은 국시원 홈페이지에서 해야 합니다.</p>
              </div>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">시험 준비</h2>
            <div className="mt-4 space-y-3 text-sm leading-6 text-slate-700 sm:text-base">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">교육 과정 충실히 이수하기</h3>
                <p>이론 80시간과 실습 80시간을 충실히 이수하고, 강사의 설명을 잘 듣고 질문하며 이해하세요.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">기출문제 풀이</h3>
                <p>시험 2~4주 전부터 기출문제를 반복해서 풀어보세요. 자주 출제되는 영역과 오답을 정리합니다.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">핵심 내용 정리</h3>
                <p>
                  요양보호의 기초, 노인 이해, 기본간호 기술 등 주요 내용을 요약 정리하여 시험 직전에 복습하세요.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">모의고사 응시</h3>
                <p>실제 시험 환경에서 모의고사를 풀어보면 시간 배분과 긴장 관리 연습에 도움이 됩니다.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">충분한 수면과 휴식</h3>
                <p>시험 전날은 충분히 쉬고, 시험 당일 아침 여유 있게 시간을 가지세요. 과도한 스트레스는 성능을 떨어뜨립니다.</p>
              </div>
            </div>
          </article>

          <MiddleAd />

          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">자주 하는 질문</h2>
            <div className="mt-4 space-y-3 text-sm leading-6 text-slate-700 sm:text-base">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="font-semibold text-slate-900">Q: 교육을 마친 직후 바로 시험에 응시할 수 있나요?</p>
                <p>A: 네, 교육 이수 후 다음 시험 기간에 응시할 수 있습니다. 교육 기관에 따라 시험을 같은 기관에서 시행하기도 합니다.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="font-semibold text-slate-900">Q: 시험 시간은 어떻게 되나요?</p>
                <p>A: 60분 내에 60문제를 푸는 시험입니다. 시간 배분을 잘 하는 것이 중요합니다.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="font-semibold text-slate-900">Q: 점수는 어떻게 산출되나요?</p>
                <p>
                  A: 정답 1문제당 1점이며, 총 60점 이상을 획득하면 합격입니다. 합격선 이상이면 등급 없이 합격 판정만 받습니다.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="font-semibold text-slate-900">Q: 휴대폰이나 참고서는 반입 가능한가요?</p>
                <p>A: 아니요, 휴대폰, 전자기기, 참고서 등 일절 반입할 수 없습니다. 규정을 어기면 부정행위로 처리됩니다.</p>
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

          <BottomAd />

          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">관련 링크</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <Link
                href="/caregiver-info"
                className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
              >
                <h3 className="text-base font-semibold text-slate-900">요양보호사 안내</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">요양보호사 역할과 정보를 확인하세요.</p>
              </Link>
              <Link
                href="/caregiver-info/certificate"
                className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
              >
                <h3 className="text-base font-semibold text-slate-900">자격증 안내</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">자격증 취득 과정을 알아보세요.</p>
              </Link>
              <Link
                href="/caregiver-info/jobs"
                className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
              >
                <h3 className="text-base font-semibold text-slate-900">취업정보 안내</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">요양보호사 취업 기관과 팁을 확인하세요.</p>
              </Link>
              <Link
                href="/caregiver-info/salary"
                className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
              >
                <h3 className="text-base font-semibold text-slate-900">월급 안내</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">요양보호사 급여 정보를 확인하세요.</p>
              </Link>
            </div>
          </section>
        </section>
      </section>
    </main>
  );
}
