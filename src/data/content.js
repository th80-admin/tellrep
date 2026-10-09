export const requirements = [
  { t: "A conforming device", d: "CE marking under the IVDR or MDR, with declaration of conformity and, where required, notified body certificates. IVDD devices may continue under the transitional rules if their conditions are met, including a quality management system under the IVDR since 26 May 2025 and an application to a notified body by the class deadline.", r: ["Art. 82 IvDO", "Reg. (EU) 2024/1860"] },
  { t: "A Swiss authorised representative", d: "Every manufacturer without a Swiss registered office appoints a CH-REP in writing before placing devices on the Swiss market. This also applies to manufacturers based in the EU. The mandate covers at least all devices of one generic device group.", r: ["Art. 44 IvDO", "Art. 51 MedDO"] },
  { t: "Technical documentation within reach", d: "The CH-REP keeps your technical documentation available, or has a contract with you that guarantees delivery to Swissmedic within seven days on request. Declarations and certificates are kept for ten years after the last device was placed on the market.", r: ["Art. 44 para. 4 IvDO", "Art. 51 para. 3bis MedDO"] },
  { t: "A person responsible for regulatory compliance", d: "The CH-REP must have a qualified person permanently available for regulatory compliance. Importers and distributors do not need one.", r: ["Art. 45 IvDO", "Art. 52 MedDO"] },
  { t: "Registration with Swissmedic", d: "Swiss economic operators (CH-REP, importer) register in the swissdamed Actors module and receive a Swiss Single Registration Number (CHRN). Mandates are notified there too.", r: ["Art. 48 IvDO", "Art. 55 MedDO"] },
  { t: "Device registration in swissdamed", d: "Since 1 July 2026, devices, systems and procedure packs are registered in the swissdamed UDI Devices module. It replaces the old notifications, including those for IVDs of all risk classes. Devices placed on the market after 1 July have a transition period until 31 December 2026. Devices involved in a serious incident, a field safety corrective action or a trend report must be registered immediately.", r: ["from 1 Jul 2026", "until 31 Dec 2026"] },
  { t: "Correct labelling", d: "The CH-REP's name and address appear next to the CH-REP symbol or the words \"CH-REP\". For IVDs not intended for self-testing this may be on the label or an accompanying document; for self-tests it must be on the label. The importer may appear on the device, its packaging or an accompanying document. Product information is generally required in the three official languages German, French and Italian; check the conditions for reduced languages before printing.", r: ["Art. 15 para. 9 IvDO", "Art. 46 para. 2 IvDO"] },
  { t: "Vigilance in Switzerland", d: "Serious incidents and field safety corrective actions concerning devices on the Swiss market are reported to Swissmedic. The CH-REP makes sure this happens and forwards complaints to you without delay.", r: ["Art. 59 para. 3 IvDO", "Art. 66 para. 2bis MedDO"] },
];

export const sources = [
  { t: "Swissmedic: Swiss authorised representative", h: "https://www.swissmedic.ch/swissmedic/en/home/medical-devices/market-access/ch-rep.html", s: "swissmedic.ch" },
  { t: "Obligations of CH-REP, importers, distributors", h: "https://www.swissmedic.ch/swissmedic/en/home/medical-devices/market-access/pflichten-bevollmaechtigte.html", s: "swissmedic.ch" },
  { t: "Registering economic operators (CHRN)", h: "https://www.swissmedic.ch/swissmedic/en/home/medical-devices/market-access/registriernummer-chrn.html", s: "swissmedic.ch" },
  { t: "swissdamed registration obligation", h: "https://www.swissmedic.ch/swissmedic/en/home/news/mitteilungen/swissdamed-registrierungspflicht.html", s: "swissmedic.ch" },
  { t: "swissdamed database", h: "https://www.swissdamed.ch/", s: "swissdamed.ch" },
  { t: "IvDO, SR 812.219", h: "https://www.fedlex.admin.ch/eli/cc/2022/291/en", s: "fedlex.admin.ch" },
  { t: "MedDO, SR 812.213", h: "https://www.fedlex.admin.ch/eli/cc/2020/552/en", s: "fedlex.admin.ch" },
  { t: "FOPH: medical devices legislation", h: "https://www.bag.admin.ch/en/medical-devices-legislation", s: "bag.admin.ch" },
];

export const insights = [
  {
    slug: "swiss-laboratory-landscape",
    tag: "Market",
    title: "The Swiss laboratory landscape",
    teaser: "Who buys diagnostics in Switzerland and how tests are paid.",
    sources: "valindex sector report (2026), FOPH",
    body: `
<div class="facts3"><div><strong>CHF 2.31 bn</strong><span>spent on medical laboratories in 2024</span></div><div><strong>186</strong><span>medical laboratory companies (2024), hospital labs not included</span></div><div><strong>4</strong><span>national languages, three of them on your label</span></div></div>
<p>Switzerland has three kinds of diagnostic customers. Large private laboratory groups run the central, automated testing: Sonic Suisse, Unilabs, Viollier and Labor Team, which Galenica acquired in September 2025. Hospital laboratories serve their own wards and emergency departments. And many general practitioners run their own practice laboratory, where point of care analysers compete with the central labs for routine tests.</p>
<h3>How tests are paid</h3>
<p>Laboratory tests covered by basic health insurance are listed with their tariff in the federal analysis list (Analysenliste) maintained by the FOPH. From July 2026 several high volume analyses were cut by 10 to 20 percent, and a full revision of about 1,300 positions is under way. For manufacturers this means price pressure in routine testing and growing interest in efficient systems.</p>
<h3>What it means for you</h3>
<p>A small market with high standards: buyers expect local service, technical support and documentation in their language. A CH-REP who knows the labs from the inside shortens the way from registration to the first installed system.</p>`,
  },
  {
    slug: "swissdamed-and-eudamed",
    tag: "Regulation",
    title: "swissdamed and EUDAMED",
    teaser: "Two databases, two registrations, no shortcut between them.",
    sources: "Swissmedic, HPRA, Walder Wyss",
    body: `
<p>Switzerland has no access to the EU database EUDAMED. Registering a device in EUDAMED does not register it in Switzerland, and the other way round. Manufacturers selling in both markets keep two registrations in parallel.</p>
<div class="tbl"><table><thead><tr><th></th><th>swissdamed</th><th>EUDAMED</th></tr></thead><tbody>
<tr><td>Operated by</td><td>Swissmedic</td><td>European Commission</td></tr>
<tr><td>Actor identifier</td><td class="num">CHRN</td><td class="num">SRN</td></tr>
<tr><td>Who registers devices</td><td>Manufacturer or CH-REP</td><td>Manufacturer</td></tr>
<tr><td>Device registration mandatory</td><td class="num">1 Jul 2026</td><td class="num">28 May 2026</td></tr>
<tr><td>Transition for devices already on the market</td><td class="num">until 31 Dec 2026</td><td>Time limited, see national authority guidance</td></tr>
</tbody></table></div>
<p class="src">EUDAMED: the first four modules (actors, UDI and device registration, notified bodies and certificates, market surveillance) became mandatory on 28 May 2026. Swissmedic charges CHF 200 for the first UDI-DI on the market and CHF 20 for each further one, capped at CHF 10,000 per year.</p>`,
  },
  {
    slug: "from-ivdd-to-ivdr",
    tag: "Regulation",
    title: "From IVDD to IVDR",
    teaser: "What changed and which deadlines still apply.",
    sources: "Regulation (EU) 2024/1860, Johner Institute, FOPH",
    body: `
<p>Under the old directive (98/79/EC) most IVDs were self-declared and only listed products needed a notified body. The IVDR introduced rule based risk classes A to D, and most devices now need a notified body. Switzerland mirrors the IVDR in its own ordinance (IvDO) and has taken over the extended transitional periods.</p>
<div class="tbl"><table><thead><tr><th>Class</th><th>Application to notified body</th><th>Signed agreement</th><th>May be placed on the market until</th></tr></thead><tbody>
<tr><td>D and devices with IVDD certificate</td><td class="num">26 May 2025</td><td class="num">26 Sep 2025</td><td class="num">31 Dec 2027</td></tr>
<tr><td>C</td><td class="num">26 May 2026</td><td class="num">26 Sep 2026</td><td class="num">31 Dec 2028</td></tr>
<tr><td>B and A sterile</td><td class="num">26 May 2027</td><td class="num">26 Sep 2027</td><td class="num">31 Dec 2029</td></tr>
<tr><td>A non sterile, new devices</td><td colspan="3">No transition. IVDR applies since 26 May 2022.</td></tr>
</tbody></table></div>
<h3>Conditions for using the transition</h3>
<p>The device conformed to the IVDD before 26 May 2022, has no significant change in design or intended purpose, presents no unacceptable risk, and the manufacturer runs a quality management system under the IVDR since 26 May 2025. Post-market surveillance, vigilance and registration duties of the new law apply during the transition. The sell off deadline has been removed, so devices already on the market may continue to be supplied.</p>`,
  },
];
