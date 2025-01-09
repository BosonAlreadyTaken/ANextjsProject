import Link from "next/link"
import { cn } from "@/lib/utils"
import { appConfig } from "@/../app.config"
import Image from 'next/image'

export function Logo({
  href = "/",
  inverted,
}: {
  href?: string
  inverted?: boolean
}) {
  return (
    <Link
      className={cn(
        "flex items-center space-x-1 text-xl font-bold ",
        !inverted
          ? " text-black hover:text-zinc-500 dark:text-white"
          : "text-white hover:text-zinc-500 dark:text-black",
      )}
      href={href}
      aria-label={`Go to ${appConfig.name} homepage`}
    >
      <span
        className="overflow-hidden text-rose-500"
        aria-hidden="true"
      >
         <Image
          src="/images/logo.svg"
          alt="logo"
          width={124}
          height={18}
          className="md:h-[20px] md:w-[144px]"
        />
        {/* <appConfig.logo size={24} aria-hidden="true" /> */}
      </span>
      {/* <span className="text-xl font-extrabold">{appConfig.name}</span> */}
    </Link>
  )
}
