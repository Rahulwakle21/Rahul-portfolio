import { skills } from "@/content/profile";
import { tuskr } from "@/content/tuskr";
import { absoluteUrl, siteConfig } from "@/lib/site";

const personId = `${siteConfig.url}/#person`;
const websiteId = `${siteConfig.url}/#website`;

export function homeJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: siteConfig.name,
        jobTitle: siteConfig.role,
        description: siteConfig.description,
        url: siteConfig.url,
        email: `mailto:${siteConfig.email}`,
        telephone: siteConfig.phone.e164,
        address: {
          "@type": "PostalAddress",
          addressLocality: siteConfig.location.city,
          addressCountry: siteConfig.location.countryCode,
        },
        worksFor: { "@type": "Organization", name: "Celoxis Technologies" },
        alumniOf: { "@type": "CollegeOrUniversity", name: "Nagpur University" },
        knowsAbout: skills.slice(0, 4).flatMap((group) => group.items),
        sameAs: Object.values(siteConfig.social),
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: siteConfig.url,
        name: `${siteConfig.name} — Portfolio`,
        inLanguage: "en",
        author: { "@id": personId },
      },
    ],
  };
}

export function caseStudyJsonLd() {
  const url = absoluteUrl(`/case-studies/${tuskr.slug}`);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: `${tuskr.kicker}: ${tuskr.title}`,
        description: tuskr.product,
        url,
        inLanguage: "en",
        author: { "@id": personId, "@type": "Person", name: siteConfig.name, url: siteConfig.url },
        isPartOf: { "@id": websiteId },
        about: { "@type": "SoftwareApplication", name: tuskr.name, applicationCategory: "BusinessApplication" },
        keywords: tuskr.stack.join(", "),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
          { "@type": "ListItem", position: 2, name: `${tuskr.name} case study`, item: url },
        ],
      },
    ],
  };
}
