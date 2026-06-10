export type ActiveKey =
  | "home"
  | "prayer"
  | "mosque"
  | "downloads"
  | "education"
  | "social"
  | "join"
  | "donate"
  | "contact"
  | "location"
  | "imprint"
  | "privacy";

export interface NavItem {
  href: string;
  label: string;
  activeKey: ActiveKey;
  icon?: string;
}

export const site = {
  shortName: "IKV Hennef",
  displayName: "IKV Hennef e.V.",
  legalName: "Islamischer Kulturverein Hennef e.V.",
  tagline: "Human-Centric Cultural Spaces",
  description:
    "Ein Ort der Begegnung, Bildung und Spiritualität in Hennef. Wir verbinden tiefe Tradition mit modernem, offenem Diskurs.",
  contactEmail: "kontakt@ikv-hennef.de",
  facebookUrl: "https://www.facebook.com/profile.php?id=100071361166973",
  address: {
    street: "Beethovenstraße 4",
    postalCode: "53773",
    city: "Hennef",
  },
} as const;

export const routes = {
  home: "/",
  prayer: "/gebetszeiten/",
  mosque: "/moschee/",
  education: "/bildung/",
  downloads: "/downloads/",
  join: "/mitglied-werden/",
  donate: "/spenden/",
  contact: "/kontakt/",
  location: "/standort/",
  imprint: "/impressum/",
  privacy: "/datenschutz/",
} as const;

export const addressCityLine = `${site.address.postalCode} ${site.address.city}`;

export const addressLines = [site.legalName, site.address.street, addressCityLine];

export const copyrightText = `© ${new Date().getFullYear()} ${site.displayName} ${site.tagline}.`;

export const heroTitle = {
  desktopLead: "Human-Centric",
  desktopAccent: "Cultural Spaces.",
  mobileLines: ["Human-", "Centric", "Cultural"],
  mobileAccent: "Spaces",
};

export const primaryNavItems: NavItem[] = [
  { href: routes.prayer, label: "Gebetszeiten", activeKey: "prayer" },
  { href: routes.mosque, label: "Moschee", activeKey: "mosque" },
  { href: routes.education, label: "Bildung", activeKey: "education" },
  { href: routes.downloads, label: "Downloads", activeKey: "downloads" },
  { href: routes.join, label: "Mitglied werden", activeKey: "join" },
];

export const mobileNavItems: NavItem[] = [
  { href: routes.home, label: "Home", icon: "home", activeKey: "home" },
  { href: routes.prayer, label: "Zeiten", icon: "event", activeKey: "prayer" },
  { href: routes.education, label: "Lernen", icon: "menu_book", activeKey: "education" },
  { href: routes.downloads, label: "Formulare", icon: "download", activeKey: "downloads" },
];

export const menuItems: NavItem[] = [
  ...primaryNavItems,
  { href: routes.donate, label: "Spenden", activeKey: "donate" },
  { href: routes.contact, label: "Kontakt", activeKey: "contact" },
  { href: routes.location, label: "Standort", activeKey: "location" },
];

export const footerItems = [
  { href: routes.imprint, label: "Impressum" },
  { href: routes.privacy, label: "Datenschutz" },
  { href: routes.contact, label: "Kontakt" },
  { href: routes.location, label: "Standort" },
];

export const prayerTimes = [
  ["Fajr", "05:42"],
  ["Dhuhr", "13:20"],
  ["Asr", "16:45"],
  ["Maghrib", "19:33"],
  ["Isha", "21:05"],
];

export const mobilePrayerTimes = [
  ["Fajr", "05:30"],
  ["Shuruq", "07:00"],
  ["Dhuhr", "13:15"],
  ["Asr", "16:45"],
  ["Maghrib", "20:10"],
];

export const educationPrograms = [
  {
    title: "Sprachkurse",
    icon: "forum",
    text: "Förderung der Mehrsprachigkeit als Schlüssel zur gesellschaftlichen Teilhabe und kulturellem Verständnis.",
    mobileText: "Neue Sprachen in einem immersiven, kulturell reichen Umfeld lernen.",
    accent: "primary",
  },
  {
    title: "Nachhilfe",
    icon: "menu_book",
    text: "Individuelle schulische Unterstützung in einem motivierenden, respektvollen Umfeld für alle Altersstufen.",
    mobileText: "Gezielte Unterstützung für schulische Exzellenz in jedem Alter.",
    accent: "secondary",
  },
  {
    title: "Islamische Lehre",
    icon: "psychiatry",
    text: "Ein zeitgemäßer Zugang zur Theologie, der spirituelle Tiefe mit den Fragen der modernen Gesellschaft verbindet.",
    mobileText: "Verständnis vertiefen durch strukturierte theologische Studien.",
    accent: "tertiary",
  },
];

export const downloadDocuments = [
  {
    title: "Anmeldeformular zur Mitgliedschaft",
    description:
      "Werden Sie Teil unserer Gemeinschaft. Füllen Sie dieses Formular aus, um Ihre Mitgliedschaft zu beantragen.",
    meta: "PDF • 1.2 MB",
    icon: "description",
    tone: "primary",
    href: routes.join,
  },
  {
    title: "Vereinssatzung vom 05.11.2012",
    description: `Die grundlegenden rechtlichen und strukturellen Richtlinien des ${site.displayName}.`,
    meta: "PDF • 3.4 MB",
    icon: "menu_book",
    tone: "secondary",
    href: routes.mosque,
  },
];
