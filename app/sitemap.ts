import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://dolbomdoc.com";
  const paths = [
    "/",
    "/long-term-care",
    "/long-term-care/grade",
    "/long-term-care/copayment",
    "/long-term-care/benefits",
    "/long-term-care/faq",
    "/long-term-care/apply",
    "/family-care-guide",
    "/family-care-guide/60min",
    "/family-care-guide/90min",
    "/family-care-guide/dementia",
    "/family-care-guide/conditions",
    "/family-care-guide/reviews",
    "/family-care-guide/salary",
    "/family-care-calculator",
    "/visit-care-guide",
    "/visit-care-guide/faq",
    "/visit-care-guide/copayment",
    "/visit-care-guide/cost",
    "/visit-care-guide/monthly-limit",
    "/visit-care-guide/service-time",
    "/visit-care-calculator",
    "/caregiver-info",
    "/caregiver-info/salary",
    "/caregiver-info/jobs",
    "/caregiver-info/reality",
    "/caregiver-info/exam",
    "/caregiver-info/faq",
    "/caregiver-info/certificate",
    "/social-worker-info",
    "/social-worker-info/salary",
    "/social-worker-info/jobs",
    "/social-worker-info/certificate",
    "/social-worker-info/faq",
    "/support-benefits",
    "/support-benefits/local-support",
    "/support-benefits/faq",
    "/support-benefits/copayment-reduction",
    "/support-benefits/documents",
  ];

  return paths.map((p) => ({ url: `${base}${p}`, lastModified: new Date() }));
}