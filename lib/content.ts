import careersData from "@/data/careers.json";
import caseStudiesData from "@/data/case-studies.json";
import homeData from "@/data/home.json";
import insightsData from "@/data/insights.json";
import portfolioData from "@/data/portfolio.json";
import servicesData from "@/data/services.json";
import solutionsData from "@/data/solutions.json";
import technologiesData from "@/data/technologies.json";
import testimonialsData from "@/data/testimonials.json";
import companyData from "@/data/company.json";
import type {
  CareerPosition,
  CaseStudy,
  Insight,
  Service,
  Solution,
  TechnologyCategory,
  Testimonial,
  PortfolioItem
} from "@/types/content";

export const services = servicesData as Service[];
export const solutions = solutionsData as Solution[];
export const technologies = technologiesData as TechnologyCategory[];
export const caseStudies = caseStudiesData as CaseStudy[];
export const insights = insightsData as Insight[];
export const careers = careersData as CareerPosition[];
export const testimonials = testimonialsData as Testimonial[];
export const portfolio = portfolioData as PortfolioItem[];
export const home = homeData;
export const company = companyData;

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getSolution(slug: string) {
  return solutions.find((solution) => solution.slug === slug);
}

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}

export function getInsight(slug: string) {
  return insights.find((insight) => insight.slug === slug);
}

export function getRelatedInsights(slugs: string[]) {
  return insights.filter((insight) => slugs.includes(insight.slug));
}

export function getSearchDocuments() {
  return [
    ...services.map((item) => ({
      title: item.title,
      href: `/services/${item.slug}/`,
      category: "Service",
      excerpt: item.description
    })),
    ...solutions.map((item) => ({
      title: item.title,
      href: `/solutions/#${item.slug}`,
      category: "Solution",
      excerpt: item.description
    })),
    ...caseStudies.map((item) => ({
      title: item.title,
      href: `/case-studies/${item.slug}/`,
      category: "Case Study",
      excerpt: item.summary
    })),
    ...insights.map((item) => ({
      title: item.title,
      href: `/insights/${item.slug}/`,
      category: "Insight",
      excerpt: item.excerpt
    }))
  ];
}
