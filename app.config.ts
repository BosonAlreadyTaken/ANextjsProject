import {
  Newspaper,
  DollarSign,
  Home,
  KeyRound,
  LucideIcon,
  Mail,
  Settings,
  User,
  Zap,
} from "lucide-react"
import { LocaleHasTranslationKey, LocalizedRoute } from "@/lib/i18n"

export interface AppConfig {
  logo: LucideIcon
  name: string
  locales: string[]
  defaultLocale: string
  localePrefix: "as-needed" | "always" | "never" | undefined
}

export const appConfig: AppConfig = {
  logo: Zap,
  name: "RRBull",
  locales: ["en", "zh", "hk"],
  defaultLocale: "hk",
  localePrefix: "never",
}

export const apiPrefix: string = "/api"

export const REDIRECT_AUTHENTICATED: string = "/dashboard"

export const REDIRECT_NOT_AUTHENTICATED: string = "/"

export const publicRoutes: LocaleHasTranslationKey<LocalizedRoute> = {
  pricing: {
    href: "/pricing",
    translationKey: "pricing",
    icon: DollarSign,
    locale: {
      en: "/pricing",
      de: "/preise",
    },
  },
  contact: {
    href: "/contact",
    translationKey: "contact",
    icon: Mail,
    locale: {
      en: "/contact",
      de: "/kontakt",
    },
  },
  login: {
    href: "/login",
    translationKey: "login",
    icon: KeyRound,
  },
  about: {
    href: "/about",
    translationKey: "about",
    icon: DollarSign,
    locale: {
      en: "/pricing"
    },
  },
  products: {
    href: "/products",
    translationKey: "products",
    icon: DollarSign,
    locale: {
      en: "/pricing"
    },
  },
  tools: {
    href: "/tools",
    translationKey: "tools",
    icon: DollarSign,
    locale: {
      en: "/pricing"
    },
  },
  analysis: {
    href: "/analysis",
    translationKey: "analysis",
    icon: DollarSign,
    locale: {
      en: "/pricing"
    },
  },
  legal : {
    href: "/legal",
    translationKey: "legal",
    icon: Newspaper
  },
  promote: {
    href: "/promote",
    translationKey: "promote",
    icon: DollarSign,
  },
  supervision: {
    href: "/supervision",
    translationKey: "supervision",
    icon: DollarSign,
  },
  contract: {
    href: "/contract",
    translationKey: "contract",
    icon: DollarSign,
  },
  demoAccount: {
    href: "/demo-account",
    translationKey: "demoAccount",
    icon: DollarSign,
  },
  announcement: {
    href: "/announcement",
    translationKey: "announcement",
    icon: DollarSign,
  },
}

export const protectedRoutes: LocaleHasTranslationKey<LocalizedRoute> = {
  dashboard: {
    href: "/dashboard",
    translationKey: "dashboard",
    icon: Home,
  },
  profile: {
    href: "/profile",
    translationKey: "profile",
    icon: User,
    locale: {
      en: "/profile",
      de: "/profil",
    },
  },
  settings: {
    href: "/settings",
    translationKey: "settings",
    icon: Settings,
    locale: {
      en: "/settings",
      de: "/einstellungen",
    },
  },
}
