"use client"

import Link from "next/link"
import { useTranslations } from "next-intl"
import { cn } from "@/lib/utils"
import { publicRoutes } from "@/../app.config"

const { legal, promote, supervision, contract, demoAccount, announcement } = publicRoutes
const routes = [
  // publicRoutes.pricing,   publicRoutes.contact about,  products,  tools,  analysis, 
  legal,
  promote,
  supervision,
  contract,
  demoAccount,
  announcement,
]

export function HeaderNav({ className }: { className?: string }) {
  const t = useTranslations("Routes")
  return (
    <div className={cn("mt-1 flex items-center space-x-8", className)}>
      {routes.map(
        item =>
          item && (
            <Link
              className={cn("text-black hover:text-zinc-500")}
              key={item.href}
              href={item.href}
            >
              {t(item.translationKey)}
            </Link>
          ),
      )}
    </div>
  )
}
