"use client"

import Link from "next/link"
import { useTranslations } from "next-intl"
import { cn } from "@/lib/utils"
import { useCurrentPath } from "@/hooks/use-current-path"
import { Button, ButtonProps } from "@/components/ui/button"

export function ButtonSignup({
  className,
  scroll = false,
  variant,
}: ButtonProps & { scroll?: boolean }) {
  const t = useTranslations("Components.ButtonSignup")
  const isCurrentPath = useCurrentPath("/login")
  return (
    <Button
      variant={variant}
      asChild
      className={cn("flex h-[30px] items-center justify-start rounded-lg bg-[#D4A767] text-[12px] sm:h-[40px]", className)}
    >
      <Link href={!isCurrentPath ? "/login" : ""} scroll={scroll}>
        {t("title")}
      </Link>
    </Button>
  )
}
