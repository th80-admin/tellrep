// Structured data and SEO content shared across pages.
export const SITE = "https://tellrep.ch";

export const org = {
  "@type": ["Organization", "ProfessionalService"],
  "@id": `${SITE}/#org`,
  name: "TellRep",
  alternateName: "TellRep CH-REP",
  url: `${SITE}/`,
  logo: `${SITE}/tellrep-logo.png`,
  image: `${SITE}/og.png`,
  email: "info@tellrep.ch",
  slogan: "Your representative in Switzerland. On target.",
  description:
    "Swiss authorised representative (CH-REP) for manufacturers of in vitro diagnostics and medical devices without a registered office in Switzerland.",
  areaServed: { "@type": "Country", name: "Switzerland" },
  knowsLanguage: ["en", "de", "it"],
  knowsAbout: [
    "CH-REP",
    "Swiss authorised representative",
    "Swiss authorized representative",
    "swissdamed",
    "IvDO",
    "MedDO",
    "IVDR",
    "MDR",
    "Swissmedic",
    "person responsible for regulatory compliance",
  ],
  // address: add the registered address once incorporated
};

export const breadcrumb = (items) => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map(([name, path], i) => ({
    "@type": "ListItem",
    position: i + 1,
    name,
    item: `${SITE}${path}`,
  })),
});

export const faqSchema = (faq) => ({
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export const chrepFaq = [
  {
    q: "What is a CH-REP?",
    a: "CH-REP is the short form for Swiss authorised representative. Every manufacturer of medical devices or in vitro diagnostics without a registered office in Switzerland must appoint one in writing before placing devices on the Swiss market. The legal basis is Art. 51 MedDO for medical devices and Art. 44 IvDO for IVDs.",
  },
  {
    q: "Is a Swiss authorized representative the same as a CH-REP?",
    a: "Yes. Swiss authorised representative, Swiss authorized representative, Swiss representative and CH REP all describe the same role. On labels it appears as the CH-REP symbol or the words CH-REP next to the representative's name and address.",
  },
  {
    q: "Do EU manufacturers need a CH-REP?",
    a: "Yes. Since the Mutual Recognition Agreement between Switzerland and the EU was not updated for the MDR and IVDR, Switzerland treats EU manufacturers like any other foreign manufacturer. An EU authorised representative does not cover Switzerland.",
  },
  {
    q: "Can my Swiss distributor or importer act as my CH-REP?",
    a: "It can, if it meets the legal requirements, including a person responsible for regulatory compliance. Many manufacturers prefer an independent CH-REP so that the regulatory role does not depend on a sales relationship and does not change when the distributor changes.",
  },
  {
    q: "What does a CH-REP have to do?",
    a: "Keep the technical documentation available or ensure it reaches Swissmedic within seven days on request, keep declarations and certificates for ten years, have a person responsible for regulatory compliance, register in swissdamed and obtain a CHRN, cooperate with Swissmedic on vigilance and forward complaints to the manufacturer without delay.",
  },
  {
    q: "Does the CH-REP have to appear on the label?",
    a: "Yes. The CH-REP's name and address appear next to the CH-REP symbol or the words CH-REP. For IVDs that are not intended for self-testing this can be on the label, the outer packaging or an accompanying document. For self-tests it must be on the label.",
  },
  {
    q: "What is swissdamed and do I need to register my devices?",
    a: "swissdamed is the Swiss medical devices database operated by Swissmedic. Economic operators register in the Actors module and receive a CHRN. Since 1 July 2026 devices are registered in the UDI Devices module; devices already on the market have a transition period until 31 December 2026.",
  },
  {
    q: "How long does it take to appoint TellRep as CH-REP?",
    a: "It depends mainly on how complete your documentation is. We review your declaration of conformity, certificates and technical documentation first. With complete documents the mandate can often be signed within a few working days.",
  },
  {
    q: "Can I change my CH-REP?",
    a: "Yes. We coordinate the new mandate, the notification in swissdamed and the update of your labelling, so there is no gap in representation.",
  },
];

export const countries = [
  {
    slug: "china",
    name: "China",
    adj: "Chinese",
    title: "CH-REP for Chinese manufacturers",
    lead: "China is one of the largest sources of IVDs and medical devices in Switzerland. Most Chinese exporters already hold CE marking under the IVDR or MDR. What is missing is the Swiss layer.",
    points: [
      ["Working across time zones", "Switzerland is six or seven hours behind China. We answer in your morning, so questions from Swissmedic or Swiss customers do not wait a day."],
      ["Documents in English", "We work with your English technical documentation and declarations. You do not need German translations for the mandate itself."],
      ["Label details before printing", "Our name and Swiss address, the CH-REP symbol and the importer details are checked before your next print run, often together with your EU REP update."],
      ["Typical devices", "Rapid tests, fluorescence and chemiluminescence immunoassays, POCT analysers, consumables and reagents."],
    ],
  },
  {
    slug: "korea",
    name: "Korea",
    adj: "Korean",
    title: "CH-REP for Korean manufacturers",
    lead: "Korean IVD manufacturers are strong in molecular diagnostics, POCT and rapid tests. Switzerland is a small market with high standards, and it requires a CH-REP for every device placed here.",
    points: [
      ["Fast, documented answers", "Swiss laboratories expect quick technical feedback. We forward complaints and questions without delay and keep a record for both sides."],
      ["From CE to Swiss market", "Your IVDR certificates and declaration of conformity stay valid in Switzerland. We add the mandate, the swissdamed registration and the Swiss label details."],
      ["Molecular and POCT experience", "Our team has supported analysers and assays in Swiss hospital and private laboratories."],
      ["One contact for Swissmedic", "Vigilance, field safety notices and authority requests run through one Swiss address."],
    ],
  },
  {
    slug: "india",
    name: "India",
    adj: "Indian",
    title: "CH-REP for Indian manufacturers",
    lead: "Indian manufacturers export a growing range of IVDs, consumables and medical devices to Europe. For Switzerland, CE marking alone is not enough: a CH-REP is required before the first shipment.",
    points: [
      ["Document review first", "Before we sign, we check your declaration of conformity, certificates and technical documentation structure, so gaps are found before Swissmedic finds them."],
      ["IVDD transition", "Many devices still rely on the IVDR transitional provisions. We check that the conditions and deadlines are met for the Swiss market too."],
      ["Clear mandate scope", "The mandate covers at least all devices of one generic device group. We define the scope with you so new products can follow easily."],
      ["English throughout", "Contract, communication and reporting in English."],
    ],
  },
  {
    slug: "turkiye",
    name: "Türkiye",
    adj: "Turkish",
    title: "CH-REP for manufacturers from Türkiye",
    lead: "Manufacturers in Türkiye work under rules aligned with the EU MDR and IVDR. Switzerland, however, requires its own authorised representative and its own device registration.",
    points: [
      ["Same CE, extra Swiss layer", "Your CE marking stays valid. Switzerland adds the CH-REP mandate, the CHRN and the swissdamed device registration."],
      ["Label and language", "Swiss product information is generally needed in German, French and Italian. We check your labels and IFUs before you print."],
      ["Distributor independent", "Change your Swiss distributor without changing your CH-REP. Your regulatory setup stays stable."],
      ["Short distances", "Switzerland is one time zone away. Calls and audits are easy to schedule."],
    ],
  },
  {
    slug: "eu-manufacturers",
    name: "the EU",
    adj: "EU",
    title: "CH-REP for EU manufacturers",
    lead: "Many manufacturers in Germany, Italy, France and other EU countries are surprised to learn that they need a Swiss authorised representative. Since the MDR and IVDR, Switzerland treats them like any third country manufacturer.",
    points: [
      ["Your EU REP does not count", "An EU authorised representative or your EU registered office does not cover Switzerland. A CH-REP must be appointed in writing."],
      ["German and Italian spoken", "We work in English, German and Italian, close to your own teams."],
      ["swissdamed alongside EUDAMED", "Two databases, two registrations. We keep your Swiss registration in line with your EUDAMED data."],
      ["Quick setup", "With CE documents in place, the Swiss layer is mostly a matter of mandate, registration and labelling."],
    ],
  },
];
