"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import BottomAd from "../components/ads/bottom-ad";
import MiddleAd from "../components/ads/middle-ad";
import SiteHeader from "../components/site-header";
import TopAd from "../components/ads/top-ad";

type CareGrade = "1등급" | "2등급" | "3등급" | "4등급" | "5등급" | "인지지원";
type VisitDuration = "30분" | "60분" | "90분" | "120분" | "150분" | "180분" | "210분" | "240분";
type CopayType = "일반" | "감경40%" | "감경60%";

const gradeMonthlyLimits: Record<CareGrade, number> = {
  "1등급": 2512900,
  "2등급": 2331200,
  "3등급": 1528200,
  "4등급": 1409700,
  "5등급": 1208900,
  인지지원: 676320,
};

const durationFees: Record<VisitDuration, number> = {
  "30분": 17450,
  "60분": 25320,
  "90분": 34120,
  "120분": 43430,
  "150분": 50640,
  "180분": 57020,
  "210분": 63530,
  "240분": 70080,
};

const copayRates: Record<CopayType, number> = {
  일반: 0.15,
  "감경40%": 0.09,
  "감경60%": 0.06,
};

const formatKRW = (value: number) =>
  new Intl.NumberFormat("ko-KR", {
    style: "currency",
    currency: "KRW",
    maximumFractionDigits: 0,
  }).format(value);

export default function VisitCareCalculatorPage() {
  const [grade, setGrade] = useState<CareGrade>("3등급");
  const [duration, setDuration] = useState<VisitDuration>("60분");
  const [monthlyCount, setMonthlyCount] = useState<number>(20);
  const [copayType, setCopayType] = useState<CopayType>("일반");

  const safeMonthlyCount = Math.min(Math.max(Number.isNaN(monthlyCount) ? 0 : monthlyCount, 0), 60);
  const isOverCountLimit = monthlyCount > 60;
  const selectedFee = durationFees[duration];
  const gradeMonthlyLimit = gradeMonthlyLimits[grade];
  const maxAvailableCountByGrade = Math.floor(gradeMonthlyLimit / selectedFee);

  const result = useMemo(() => {
    const totalPay = selectedFee * safeMonthlyCount;
    const payableWithinLimit = Math.min(totalPay, gradeMonthlyLimit);
    const excessAmount = Math.max(totalPay - gradeMonthlyLimit, 0);
    const baseCopayAmount = Math.round(payableWithinLimit * copayRates[copayType]);
    const copayAmount = baseCopayAmount + excessAmount;
    const nhisAmount = payableWithinLimit - baseCopayAmount;
    const isOverMonthlyLimit = totalPay > gradeMonthlyLimit;

    return {
      totalPay,
      payableWithinLimit,
      excessAmount,
      copayAmount,
      nhisAmount,
      isOverMonthlyLimit,
    };
  }, [copayType, gradeMonthlyLimit, safeMonthlyCount, selectedFee]);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <SiteHeader />

      <section className="mx-auto w-full max-w-xl px-4 py-6 sm:px-6 sm:py-10">
        <div className="mb-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <p className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">방문요양 급여 계산기</p>
          <h1 className="mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">방문요양 예상 급여 계산</h1>
          <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
            장기요양 등급별 월 한도액과 이용시간별 수가를 기준으로 예상 총 급여, 본인부담금, 공단 부담금을 확인할 수 있습니다.
          </p>
        </div>

       {/* <TopAd /> */}

        <div className="mt-5 rounded-2xl border border-blue-200 bg-blue-50 p-5 shadow-sm sm:p-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="grade" className="mb-2 block text-sm font-semibold text-slate-800">
                장기요양 등급
              </label>
              <select
                id="grade"
                value={grade}
                onChange={(event) => setGrade(event.target.value as CareGrade)}
                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-3 text-sm outline-none ring-blue-500 transition focus:ring-2"
              >
                {(Object.keys(gradeMonthlyLimits) as CareGrade[]).map((gradeOption) => (
                  <option key={gradeOption} value={gradeOption}>
                    {gradeOption} (월 한도 {formatKRW(gradeMonthlyLimits[gradeOption])})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="duration" className="mb-2 block text-sm font-semibold text-slate-800">
                이용시간
              </label>
              <select
                id="duration"
                value={duration}
                onChange={(event) => setDuration(event.target.value as VisitDuration)}
                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-3 text-sm outline-none ring-blue-500 transition focus:ring-2"
              >
                {(Object.keys(durationFees) as VisitDuration[]).map((durationOption) => (
                  <option key={durationOption} value={durationOption}>
                    {durationOption} ({formatKRW(durationFees[durationOption])})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="monthlyCount" className="mb-2 block text-sm font-semibold text-slate-800">
                월 이용 횟수
              </label>
              <input
                id="monthlyCount"
                type="number"
                min={0}
                max={60}
                value={monthlyCount}
                onChange={(event) => setMonthlyCount(Number(event.target.value))}
                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-3 text-sm outline-none ring-blue-500 transition focus:ring-2"
                placeholder="예: 20"
              />
              {isOverCountLimit && (
                <p className="mt-2 text-xs font-medium text-red-600 sm:text-sm">월 이용 횟수는 최대 60회까지 입력할 수 있습니다.</p>
              )}
              <p className="mt-2 text-xs text-slate-600 sm:text-sm">
                선택한 등급 기준 최대 이용 가능 횟수(이론값): <span className="font-semibold">{maxAvailableCountByGrade}회</span>
              </p>
            </div>

            <div>
              <label htmlFor="copayType" className="mb-2 block text-sm font-semibold text-slate-800">
                본인부담률
              </label>
              <select
                id="copayType"
                value={copayType}
                onChange={(event) => setCopayType(event.target.value as CopayType)}
                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-3 text-sm outline-none ring-blue-500 transition focus:ring-2"
              >
                <option value="일반">일반 (15%)</option>
                <option value="감경40%">감경40% (9%)</option>
                <option value="감경60%">감경60% (6%)</option>
              </select>
            </div>
          </div>
        </div>

       {/* <MiddleAd /> */}

        <div className="mt-5 rounded-2xl border border-blue-200 bg-blue-50 p-5 shadow-sm sm:p-6">
          <h2 className="text-base font-bold text-blue-900 sm:text-lg">예상 급여 결과</h2>
          <div className="mt-4 space-y-2">
            <p className="text-sm text-blue-900">
              적용 수가: <span className="font-semibold">{duration} / {formatKRW(selectedFee)}</span>
            </p>
            <p className="text-sm text-blue-900">
              등급별 월 한도액: <span className="font-semibold">{formatKRW(gradeMonthlyLimit)}</span>
            </p>
            <p className="text-lg font-bold text-blue-950 sm:text-xl">
              예상 총 급여: {formatKRW(result.totalPay)}
            </p>
            <p className="text-sm font-semibold text-blue-900 sm:text-base">
              예상 본인부담금: {formatKRW(result.copayAmount)}
            </p>
            <p className="text-sm font-semibold text-blue-900 sm:text-base">
              예상 공단 부담금: {formatKRW(result.nhisAmount)}
            </p>
            <p className="text-sm text-blue-900">
              한도 내 급여 반영액: <span className="font-semibold">{formatKRW(result.payableWithinLimit)}</span>
            </p>
          </div>
          {result.isOverMonthlyLimit && (
            <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-3">
              <p className="text-sm font-semibold text-red-700">월 한도 초과</p>
              <p className="mt-1 text-xs leading-5 text-red-700 sm:text-sm">
                현재 입력 조건은 등급 한도액을 초과합니다. 초과 금액 {formatKRW(result.excessAmount)}은 전액 본인 부담으로 계산했습니다.
              </p>
            </div>
          )}
          <p className="mt-4 text-xs leading-5 text-blue-800 sm:text-sm">
            실제 금액은 공단 고시 수가, 장기요양기관 운영 기준, 본인부담 경감 적용 여부에 따라 달라질 수 있습니다.
          </p>
        </div>

        <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">방문요양 안내 및 이용 가이드</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
            방문요양은 요양보호사가 수급자 가정을 방문해 신체활동 지원, 일상생활 지원, 정서 지원 등을 제공하는 장기요양
            서비스입니다. 방문요양 계산기를 통해 이용시간별 수가와 본인부담금을 미리 확인하면 실제 이용 계획을 세우는 데
            도움이 됩니다.
          </p>

          <div className="mt-5 space-y-4">
            <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-base font-semibold text-slate-900">이용시간별 수가 적용 기준</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                방문요양 수가는 30분, 60분, 90분, 120분, 150분, 180분, 210분, 240분과 같이 이용시간 구간에 따라 다르게
                적용됩니다. 선택한 이용시간 수가와 월 이용 횟수를 곱해 예상 총 급여를 계산합니다.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-base font-semibold text-slate-900">본인부담률과 공단 부담금의 관계</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                방문요양 본인부담금은 일반, 감경40%, 감경60% 등 수급자 자격에 따라 달라지며 나머지 금액은 공단 부담금으로
                계산됩니다. 같은 이용시간과 횟수라도 본인부담률에 따라 실제 납부 금액 차이가 크게 발생할 수 있습니다.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-base font-semibold text-slate-900">실제 이용 시 확인할 사항</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                방문요양 예상 급여 계산기는 사전 확인용 참고 도구입니다. 실제 비용은 장기요양기관 계약 조건, 제공 기록, 공단
                최신 고시, 지역별 운영 지침에 따라 달라질 수 있으므로 이용 전 기관 상담을 권장합니다.
              </p>
            </article>
          </div>
        </section>

      {/*  <BottomAd /> */}

        <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">자주 묻는 질문</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
            방문요양 서비스 이용 전에 자주 확인하는 기준을 FAQ로 정리했습니다.
          </p>

          <div className="mt-4 space-y-3">
            <details className="group rounded-xl border border-slate-200 bg-slate-50 p-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-slate-900 sm:text-base">
                <span>방문요양 이용시간은 어떻게 선택하나요?</span>
                <span className="text-base leading-none text-slate-500 group-open:hidden" aria-hidden>+</span>
                <span className="hidden text-base leading-none text-slate-500 group-open:inline" aria-hidden>-</span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                수급자의 상태와 돌봄 필요도에 맞춰 30분부터 240분 구간 중 이용시간을 선택할 수 있으며, 이용시간별 수가표가
                각각 다르게 적용됩니다.
              </p>
            </details>

            <details className="group rounded-xl border border-slate-200 bg-slate-50 p-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-slate-900 sm:text-base">
                <span>방문요양 계산기 금액이 실제 청구 금액과 다른 이유는 무엇인가요?</span>
                <span className="text-base leading-none text-slate-500 group-open:hidden" aria-hidden>+</span>
                <span className="hidden text-base leading-none text-slate-500 group-open:inline" aria-hidden>-</span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                계산기 결과는 입력값 기준 예상 금액이며, 실제 청구 금액은 공단 고시, 계약 내용, 서비스 제공 기록 등에 따라 달라질
                수 있습니다.
              </p>
            </details>

            <details className="group rounded-xl border border-slate-200 bg-slate-50 p-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-slate-900 sm:text-base">
                <span>본인부담률은 어디에서 확인하나요?</span>
                <span className="text-base leading-none text-slate-500 group-open:hidden" aria-hidden>+</span>
                <span className="hidden text-base leading-none text-slate-500 group-open:inline" aria-hidden>-</span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                본인부담률은 수급자 자격(일반, 감경40%, 감경60%)과 공단 인정 정보에 따라 결정되며, 장기요양기관 또는 국민건강보험공단에서
                확인할 수 있습니다.
              </p>
            </details>
          </div>
        </section>

        <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">계산 후 함께 확인하세요</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
            계산 결과를 확인한 후 아래 자료를 참고하여 방문요양, 장기요양, 지원금 정보를 함께 확인해 보세요.
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <Link href="/visit-care-guide" className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm transition hover:border-slate-300 hover:bg-white">
              <h3 className="text-base font-semibold text-slate-900">방문요양 안내</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">방문요양 서비스 이용 기준과 처차를 확인하세요.</p>
            </Link>
            <Link href="/visit-care-guide/copayment" className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm transition hover:border-slate-300 hover:bg-white">
              <h3 className="text-base font-semibold text-slate-900">방문요양 본인부담금</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">방문즔당 본인부담금 기준과 감면 정보를 확인하세요.</p>
            </Link>
            <Link href="/long-term-care" className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm transition hover:border-slate-300 hover:bg-white">
              <h3 className="text-base font-semibold text-slate-900">장기요양 안내</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">장기요양 등급과 이용 절차를 확인하세요.</p>
            </Link>
            <Link href="/support-benefits" className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm transition hover:border-slate-300 hover:bg-white">
              <h3 className="text-base font-semibold text-slate-900">지원금/감면 제도</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">본인부담금 감면과 지원금 정보를 확인하세요.</p>
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
