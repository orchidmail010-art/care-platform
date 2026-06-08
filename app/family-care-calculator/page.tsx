"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import BottomAd from "../components/ads/bottom-ad";
import MiddleAd from "../components/ads/middle-ad";
import SiteHeader from "../components/site-header";

type CareGrade = "1등급" | "2등급" | "3등급" | "4등급" | "5등급";
type FamilyCareType = "60분형" | "90분형";
type CopayType = "일반" | "감경" | "기초수급";

const gradeRates: Record<CareGrade, number> = {
  "1등급": 23000,
  "2등급": 22000,
  "3등급": 21000,
  "4등급": 20000,
  "5등급": 19000,
};

const familyCareTypeRates: Record<FamilyCareType, number> = {
  "60분형": 1.0,
  "90분형": 1.25,
};

const monthlyUsageLimits: Record<FamilyCareType, number> = {
  "60분형": 20,
  "90분형": 31,
};

const copayRates: Record<CopayType, number> = {
  일반: 0.15,
  감경: 0.09,
  기초수급: 0,
};

const formatKRW = (value: number) =>
  new Intl.NumberFormat("ko-KR", {
    style: "currency",
    currency: "KRW",
    maximumFractionDigits: 0,
  }).format(value);

export default function FamilyCareCalculatorPage() {
  const [grade, setGrade] = useState<CareGrade>("3등급");
  const [familyCareType, setFamilyCareType] = useState<FamilyCareType>("60분형");
  const [monthlyUsageCount, setMonthlyUsageCount] = useState<number>(20);
  const [copayType, setCopayType] = useState<CopayType>("일반");
  const [isSpecialConditionChecked, setIsSpecialConditionChecked] = useState(false);

  const maxUsageCount = monthlyUsageLimits[familyCareType];
  const safeUsageCount = Math.min(Math.max(Number.isNaN(monthlyUsageCount) ? 0 : monthlyUsageCount, 0), maxUsageCount);
  const isNinetyMinuteType = familyCareType === "90분형";
  const canUseNinetyMinuteType = !isNinetyMinuteType || isSpecialConditionChecked;
  const isOverUsageLimit = monthlyUsageCount > maxUsageCount;

  const result = useMemo(() => {
    const cautionMessages: string[] = [];

    if (isOverUsageLimit) {
      cautionMessages.push(`입력한 월 이용 횟수가 최대 횟수를 초과하여 ${maxUsageCount}회 기준으로 계산했습니다.`);
    }

    if (!canUseNinetyMinuteType) {
      cautionMessages.push("90분형은 조건 충족 시에만 이용 가능합니다.");

      return {
        maxUsageCount,
        totalPay: 0,
        copayAmount: 0,
        nhisAmount: 0,
        isAvailable: false,
        cautionMessages,
      };
    }

    const oneTimePay = gradeRates[grade] * familyCareTypeRates[familyCareType];
    const totalPay = oneTimePay * safeUsageCount;
    const copayAmount = Math.round(totalPay * copayRates[copayType]);
    const nhisAmount = totalPay - copayAmount;

    return {
      maxUsageCount,
      totalPay,
      copayAmount,
      nhisAmount,
      isAvailable: true,
      cautionMessages,
    };
  }, [canUseNinetyMinuteType, copayType, familyCareType, grade, isOverUsageLimit, maxUsageCount, safeUsageCount]);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <SiteHeader />
      <section className="mx-auto w-full max-w-xl px-4 py-6 sm:px-6 sm:py-10">
        <div className="mb-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <p className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
            가족요양 급여 계산기
          </p>
          <h1 className="mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">
            가족요양 예상 급여 계산
          </h1>
          <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
            가족요양 60분형/90분형 기준으로 월 이용 횟수와 예상 급여를 확인할 수 있습니다.
          </p>
        </div>

        <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
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
                {Object.keys(gradeRates).map((gradeOption) => (
                  <option key={gradeOption} value={gradeOption}>
                    {gradeOption}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="familyCareType" className="mb-2 block text-sm font-semibold text-slate-800">
                가족요양 유형
              </label>
              <select
                id="familyCareType"
                value={familyCareType}
                onChange={(event) => {
                  setFamilyCareType(event.target.value as FamilyCareType);
                  setIsSpecialConditionChecked(false);
                }}
                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-3 text-sm outline-none ring-blue-500 transition focus:ring-2"
              >
                {(Object.keys(monthlyUsageLimits) as FamilyCareType[]).map((typeOption) => (
                  <option key={typeOption} value={typeOption}>
                    {typeOption}
                  </option>
                ))}
              </select>
              <p className="mt-2 text-xs text-slate-600 sm:text-sm">
                {familyCareType === "60분형" ? "60분형은 월 최대 20회까지 이용 가능합니다." : "90분형은 월 최대 31회까지 이용 가능합니다."}
              </p>
            </div>

            <div>
              <label htmlFor="monthlyUsageCount" className="mb-2 block text-sm font-semibold text-slate-800">
                월 이용 횟수
              </label>
              <input
                id="monthlyUsageCount"
                type="number"
                min={0}
                max={maxUsageCount}
                value={monthlyUsageCount}
                onChange={(event) => setMonthlyUsageCount(Number(event.target.value))}
                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-3 text-sm outline-none ring-blue-500 transition focus:ring-2"
                placeholder={`최대 ${maxUsageCount}회`}
              />
              {monthlyUsageCount > maxUsageCount && (
                <p className="mt-2 text-xs font-medium text-red-600 sm:text-sm">
                  선택한 유형의 월 최대 이용 횟수는 {maxUsageCount}회입니다.
                </p>
              )}
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
                <option value="감경">감경 (9%)</option>
                <option value="기초수급">기초수급 (0%)</option>
              </select>
            </div>

            {isNinetyMinuteType && (
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
                <label className="flex items-start gap-2 text-sm text-amber-900">
                  <input
                    type="checkbox"
                    checked={isSpecialConditionChecked}
                    onChange={(event) => setIsSpecialConditionChecked(event.target.checked)}
                    className="mt-1 h-4 w-4 rounded border-amber-400 text-amber-600 focus:ring-amber-500"
                  />
                  <span>
                    90분형 조건을 확인했습니다 (요양보호사가 만 65세 이상 배우자이거나, 수급자에게 치매/문제행동 등 공단 인정
                    조건이 있는 경우).
                  </span>
                </label>
                {!isSpecialConditionChecked && (
                  <p className="mt-2 text-xs font-semibold text-red-600 sm:text-sm">90분형은 조건 충족 시에만 가능</p>
                )}
              </div>
            )}
          </div>
        </div>

      <MiddleAd />

        <div className="mt-5 rounded-2xl border border-blue-200 bg-blue-50 p-5 shadow-sm sm:p-6">
          <h2 className="text-base font-bold text-blue-900 sm:text-lg">예상 급여 결과</h2>
          <div className="mt-3 rounded-lg border border-blue-200 bg-white/80 p-3">
            <p className="text-xs font-semibold text-blue-900 sm:text-sm">입력 요약</p>
            <div className="mt-2 flex flex-wrap gap-2">
              <span className="rounded-full bg-blue-100 px-2.5 py-1 text-xs font-medium text-blue-900 sm:text-sm">등급 {grade}</span>
              <span className="rounded-full bg-blue-100 px-2.5 py-1 text-xs font-medium text-blue-900 sm:text-sm">
                유형 {familyCareType}
              </span>
              <span className="rounded-full bg-blue-100 px-2.5 py-1 text-xs font-medium text-blue-900 sm:text-sm">
                월 {safeUsageCount}회 계산
              </span>
              <span className="rounded-full bg-blue-100 px-2.5 py-1 text-xs font-medium text-blue-900 sm:text-sm">
                입력 {Number.isNaN(monthlyUsageCount) ? 0 : monthlyUsageCount}회
              </span>
              <span className="rounded-full bg-blue-100 px-2.5 py-1 text-xs font-medium text-blue-900 sm:text-sm">
                본인부담률 {copayType}
              </span>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <p className="text-sm text-blue-900">
              월 최대 이용 가능 횟수: <span className="font-semibold">{result.maxUsageCount}회</span>
            </p>
            <p className="text-sm text-blue-900">
              가족요양 가능 여부:{" "}
              <span className={`font-semibold ${result.isAvailable ? "text-blue-900" : "text-red-700"}`}>
                {result.isAvailable ? "가능" : "조건 확인 필요"}
              </span>
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
          </div>
          <div className="mt-4 rounded-xl border border-blue-200 bg-white/70 p-3">
            <p className="text-xs font-semibold text-blue-900 sm:text-sm">주의사항</p>
            {result.cautionMessages.length > 0 ? (
              <ul className="mt-2 space-y-1 text-xs text-blue-900 sm:text-sm">
                {result.cautionMessages.map((message) => (
                  <li key={message}>- {message}</li>
                ))}
              </ul>
            ) : (
              <p className="mt-2 text-xs text-blue-900 sm:text-sm">입력한 조건 기준으로 계산되었습니다.</p>
            )}
          </div>
          <p className="mt-4 text-xs leading-5 text-blue-800 sm:text-sm">
            실제 금액은 공단 고시 및 센터 기준, 수가 개정, 제공 조건에 따라 달라질 수 있습니다.
          </p>
        </div>

        <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">가족요양 안내 및 이용 가이드</h2>
          <div className="mt-4 space-y-3">
            <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-base font-semibold text-slate-900">가족요양이란?</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                가족요양은 장기요양보험 제도 안에서 일정 자격을 갖춘 가족이 수급자에게 돌봄 서비스를 제공하고, 기준에 따라
                급여를 받을 수 있는 서비스 형태입니다. 가족요양 서비스는 일반 방문요양과 다르게 인정 조건과 이용 횟수 기준이
                별도로 적용됩니다.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-base font-semibold text-slate-900">60분형과 90분형의 차이</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                60분형 가족요양은 월 최대 20회까지 이용할 수 있는 기본 유형이며, 90분형 가족요양은 월 최대 31회까지 이용할
                수 있는 조건부 유형입니다. 90분형은 요양보호사가 만 65세 이상 배우자인 경우 또는 수급자에게 치매·문제행동 등
                공단 인정 조건이 있는 경우에만 가능하므로 사전 확인이 중요합니다.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-base font-semibold text-slate-900">장기요양 등급과 가족요양의 관계</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                장기요양 1등급부터 5등급까지 모두 가족요양 계산 구조는 동일하게 적용할 수 있지만, 실제 인정 범위와 급여 적용
                세부 기준은 수급자의 상태와 심사 결과에 따라 달라질 수 있습니다. 따라서 장기요양등급 확인 후 이용 가능한
                서비스 범위를 기관과 함께 검토하는 것이 안전합니다.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-base font-semibold text-slate-900">실제 이용 시 주의사항</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                가족요양 계산기 결과는 사전 예측을 위한 참고값이며, 실제 급여와 본인부담금은 공단 고시 수가, 기관 운영 기준,
                감경 여부, 서비스 제공 기록에 따라 달라질 수 있습니다. 서비스 신청 전에는 장기요양기관 또는 국민건강보험공단에
                최신 기준을 확인하고 상담을 진행하는 것을 권장합니다.
              </p>
            </article>
          </div>
        </section>

      <BottomAd />

        <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">자주 묻는 질문</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
            가족요양 신청 조건, 60분형과 90분형 차이, 실제 급여 반영 기준 등 이용자가 자주 확인하는 질문을 정리했습니다.
          </p>

          <div className="mt-4 space-y-3">
            <details className="group rounded-xl border border-slate-200 bg-slate-50 p-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-slate-900 sm:text-base">
                <span>가족요양은 누구나 받을 수 있나요?</span>
                <span className="text-base leading-none text-slate-500 group-open:hidden" aria-hidden>
                  +
                </span>
                <span className="hidden text-base leading-none text-slate-500 group-open:inline" aria-hidden>
                  -
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                가족요양은 장기요양등급을 받은 수급자를 요양보호사 자격을 가진 가족이 돌보는 경우 이용할 수 있습니다. 다만
                가족관계, 서비스 제공 조건, 공단 인정 기준에 따라 가능 여부가 달라질 수 있습니다.
              </p>
            </details>

            <details className="group rounded-xl border border-slate-200 bg-slate-50 p-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-slate-900 sm:text-base">
                <span>가족요양 60분형과 90분형 차이는 무엇인가요?</span>
                <span className="text-base leading-none text-slate-500 group-open:hidden" aria-hidden>
                  +
                </span>
                <span className="hidden text-base leading-none text-slate-500 group-open:inline" aria-hidden>
                  -
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                60분형은 일반적인 가족요양 기준으로 월 최대 20회까지 이용할 수 있습니다. 90분형은 조건을 충족하는 경우 월 최대
                31회까지 가능할 수 있습니다.
              </p>
            </details>

            <details className="group rounded-xl border border-slate-200 bg-slate-50 p-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-slate-900 sm:text-base">
                <span>90분형은 아무나 선택할 수 있나요?</span>
                <span className="text-base leading-none text-slate-500 group-open:hidden" aria-hidden>
                  +
                </span>
                <span className="hidden text-base leading-none text-slate-500 group-open:inline" aria-hidden>
                  -
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                아닙니다. 90분형은 만 65세 이상 배우자가 돌보는 경우 또는 치매·문제행동 등 공단 인정 조건이 있는 경우처럼
                별도 조건을 충족해야 합니다.
              </p>
            </details>

            <details className="group rounded-xl border border-slate-200 bg-slate-50 p-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-slate-900 sm:text-base">
                <span>가족요양 급여는 실제로 계산기 금액 그대로 나오나요?</span>
                <span className="text-base leading-none text-slate-500 group-open:hidden" aria-hidden>
                  +
                </span>
                <span className="hidden text-base leading-none text-slate-500 group-open:inline" aria-hidden>
                  -
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                계산기는 입력 조건을 기준으로 한 예상 금액입니다. 실제 급여는 공단 고시, 장기요양기관 계약, 본인부담률, 제공
                조건에 따라 달라질 수 있습니다.
              </p>
            </details>

            <details className="group rounded-xl border border-slate-200 bg-slate-50 p-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-slate-900 sm:text-base">
                <span>가족요양과 방문요양은 다른가요?</span>
                <span className="text-base leading-none text-slate-500 group-open:hidden" aria-hidden>
                  +
                </span>
                <span className="hidden text-base leading-none text-slate-500 group-open:inline" aria-hidden>
                  -
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                네. 방문요양은 일반 요양보호사가 수급자 가정을 방문하는 서비스이고, 가족요양은 요양보호사 자격을 가진 가족이
                직접 돌봄을 제공하는 방식입니다.
              </p>
            </details>
          </div>
        </section>

        <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">계산 후 함께 확인하세요</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
            계산 결과를 확인한 후 아래 자료를 참고하여 가족요양, 장기요양, 지원금 정보를 함께 확인해 보세요.
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <Link href="/family-care-guide" className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm transition hover:border-slate-300 hover:bg-white">
              <h3 className="text-base font-semibold text-slate-900">가족요양 안내</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">가족요양 인정 조건과 급여 기준을 확인하세요.</p>
            </Link>
            <Link href="/family-care-guide/90min" className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm transition hover:border-slate-300 hover:bg-white">
              <h3 className="text-base font-semibold text-slate-900">가족요양 90분 기준</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">90분 가족요양 인정 조건과 적용 사례를 확인하세요.</p>
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
