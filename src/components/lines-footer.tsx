import { getTranslations } from "next-intl/server"

export  default async function LinesFooter() {
  const t = await getTranslations("Pages.Legal")
  return (
    <div className="mt-6 px-[24px] pb-[80px] text-[14px] text-[#979797] md:px-[166px]">
      <div className="mb-10 h-px bg-[#D5D8DC]"></div>
      <div className="pb-2 leading-4">{t('item3des1')}</div>
      <div className="pb-2 leading-4">{t('item3des2')}</div>
      <div className="pb-2 leading-4">{t('item3des3')}</div>
      <div className="pb-2 leading-4">{t('item3des4')}</div>
      <div className="pb-2 leading-4">{t('item3des5')}</div>
    </div>
  )
}
