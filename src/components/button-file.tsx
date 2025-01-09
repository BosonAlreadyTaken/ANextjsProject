'use client'

// import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { ArrowRight } from 'lucide-react';

export default function ButtonFile({link, src, desc} : {link: string , src: string , desc: string}) {
  // const t = useTranslations("Pages.Legal")
 return (
    <Button
      variant="secondary"
      className="flex w-full min-w-[280px] items-center justify-between rounded-md hover:text-[#1b222f]"
      onClick={() => window.open(link, '_blank')}
    >
      <div className="flex items-center justify-center">
        <Image
          src={src}
          alt="logo"
          width={24}
          height={24}
        />
        <span className="ml-1 truncate md:max-w-[190px] xl:max-w-[300px]">{desc}</span>
      </div>
      <ArrowRight strokeWidth={1} />
    </Button>
 )
}