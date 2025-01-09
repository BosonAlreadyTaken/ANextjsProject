'use client'

import { useTranslations } from "next-intl"
import Image from 'next/image'
import { useState } from 'react'
import { cn } from "@/lib/utils"

export default  function Qrcode() {
  const t = useTranslations("Pages.Promote")

  const [appstoreHover, setAppstoreHover] = useState(false)
  const [googleplayHover, setGoogleplayHover] = useState(false)
  const [apkHover, setApkHover] = useState(false)
  return (
    // md:grid md:grid-cols-3
    <div className="flex flex-wrap items-center justify-center gap-5 md:justify-start">
      <Image
        src="/images/promote/windows.svg"
        alt="logo"
        width={120}
        height={40}
        className="cursor-pointer"
      />
      <Image
        src="/images/promote/macos.svg"
        alt="logo"
        width={120}
        height={40}
        className="cursor-pointer"
      />
      <Image
        src="/images/promote/web.svg"
        alt="logo"
        width={120}
        height={40}
        className="cursor-pointer"
      />
      <div className="relative" 
        onMouseEnter={() => setApkHover(true)}
        onMouseLeave={() => setApkHover(false)}
      >
        <Image
          src="/images/promote/apk.svg"
          alt="logo"
          width={120}
          height={40}
          className="cursor-pointer"
        />
        <div className={cn("absolute -left-6 top-[50px] hidden size-[182px] flex-col items-center justify-center rounded bg-white p-2 text-center drop-shadow-lg", apkHover && 'flex')}>
          <Image
            src="/images/promote/apkQR.png"
            alt="logo"
            width={120}
            height={120}
            className="cursor-pointer"
          />
          <span className='mt-2 text-[12px]'>{t('qr1')}</span>
        </div>
      </div>
      <div className="relative" 
        onMouseEnter={() => setAppstoreHover(true)}
        onMouseLeave={() => setAppstoreHover(false)}
      >
        <Image
          src="/images/promote/appstore.svg"
          alt="logo"
          width={120}
          height={40}
          className="cursor-pointer"
        />
        <div className={cn("absolute -left-6 top-[50px] hidden size-[182px] flex-col items-center justify-center rounded bg-white p-2 text-center drop-shadow-lg", appstoreHover && 'flex')}>
          <Image
            src="/images/promote/appstoreQR.png"
            alt="logo"
            width={120}
            height={120}
            className="cursor-pointer"
          />
          <span className='mt-2 text-[12px]'>{t('qr2')}</span>
        </div>
      </div>
      <div className="relative" 
        onMouseEnter={() => setGoogleplayHover(true)}
        onMouseLeave={() => setGoogleplayHover(false)}
      >
        <Image
          src="/images/promote/googleplay.svg"
          alt="logo"
          width={120}
          height={40}
          className="cursor-pointer"
        />
        <div className={cn("absolute -left-6 top-[50px] hidden size-[182px] flex-col items-center justify-center rounded bg-white p-2 text-center drop-shadow-lg", googleplayHover && 'flex')}>
          <Image
            src="/images/promote/googleplayQR.png"
            alt="logo"
            width={120}
            height={120}
            className="cursor-pointer"
          />
          <span className='mt-2 text-[12px]'>{t('qr3')}</span>
        </div>
      </div>
    </div>
  )
}
