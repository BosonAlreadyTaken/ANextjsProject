import { getTranslations } from "next-intl/server"
// import { LawsSection } from "@/components/laws-section"
import LinesFooter from "@/components/lines-footer"
import ButtonFile from "@/components/button-file"

export default async function egal() {
  const {NEXT_PUBLIC_STATIC_URL} = process.env
  const t = await getTranslations("Pages.Legal")
  return (
    <main>
      {/* <LawsSection /> */}
      <div className="flex h-[280px] flex-col items-center justify-center bg-[url('/images/law/bg1.png')] bg-cover pt-5">
        <div className="w-4/6 text-center text-[46px] font-bold">{t('title')}</div>
        <div className="w-4/6 text-center text-[18px]">{t('subtitle')}</div>
      </div>
      <div className="bg-[url('/images/law/bg2.png')] bg-cover px-[24px] py-[80px] md:px-[166px]">
        <div className="text-[32px]">{t('item2Title')}</div>
        <div className="mt-3 flex flex-col gap-5 md:grid md:grid-cols-2 md:gap-7 lg:gap-8 xl:grid-cols-3 xl:gap-10">
          <ButtonFile desc={t('item2btn1')} src="/images/law/btn1.svg" link={NEXT_PUBLIC_STATIC_URL + '/个人资料收集声明.pdf'} />
          <ButtonFile desc={t('item2btn2')} src="/images/law/btn2.svg" link={NEXT_PUBLIC_STATIC_URL + '/客户协议.pdf'} />
          <ButtonFile desc={t('item2btn3')} src="/images/law/btn3.svg" link={NEXT_PUBLIC_STATIC_URL + '/电子签署协议.pdf'} />
          <ButtonFile desc={t('item2btn4')} src="/images/law/btn4.png" link={NEXT_PUBLIC_STATIC_URL + '/订单执行规则.pdf'} />
          <ButtonFile desc={t('item2btn5')} src="/images/law/btn5.svg" link={NEXT_PUBLIC_STATIC_URL + '/订单执行风险.pdf'} />
          <ButtonFile desc={t('item2btn6')} src="/images/law/btn6.svg" link={NEXT_PUBLIC_STATIC_URL + '/风险声明.pdf'} />
        </div>
      </div>
      <LinesFooter />
    </main>
  )
}
