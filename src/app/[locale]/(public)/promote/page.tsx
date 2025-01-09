import { getTranslations } from "next-intl/server"
import LinesFooter from "@/components/lines-footer"
// import Image from 'next/image'
import Qrcode from "@/components/qrcode-section"

export default async function Page() {
  const t = await getTranslations("Pages.Promote")
  return (
    <main>
      {/* pc && pad */}
      <div className="hidden xl:block">
        <div className="p-24 pb-6">
          <div className="flex min-h-[600px] items-center justify-between bg-contain bg-[right_center] bg-no-repeat p-5 md:bg-[url('/images/promote/bg1_pad.png')] xl:bg-[url('/images/promote/bg1.png')]">
            <div className="flex w-1/3 flex-col">
              <h1 className="text-3xl">{t('it1Title')}</h1>
              <p className="mb-8 mt-5 text-xl">{t('it1des1')}</p>
              <Qrcode />
            </div>
          </div>
          <div className="flex items-center justify-end bg-contain bg-center bg-no-repeat md:min-h-[520px] md:bg-[url('/images/promote/bg2_pad.png')] xl:mb-10 xl:min-h-[660px] xl:bg-[url('/images/promote/bg2.png')]">
            <div className="mr-6 flex w-1/3 flex-col text-white">
              <h1 className="mb-5 text-3xl">{t('it2Title')}</h1>
              <p className="text-xl">{t('it2des1')}</p>
            </div>
          </div>
          <div className="flex min-h-[600px] items-center justify-between bg-[right_center] bg-no-repeat p-5 md:bg-[url('/images/promote/bg3_pad.png')] xl:mb-10 xl:bg-[url('/images/promote/bg3.png')]">
            <div className="flex w-1/3 flex-col">
              <h1 className="mb-5 text-3xl">{t('it3Title')}</h1>
              <p className="text-xl">{t('it3des1')}</p>
            </div>
          </div>
          <div className="flex min-h-[450px] items-center justify-end bg-contain bg-[left_center] bg-no-repeat p-5 md:bg-[url('/images/promote/bg4_pad.png')]  xl:mb-10 xl:bg-[url('/images/promote/bg4.png')]">
            <div className="flex w-1/3 flex-col">
              <h1 className="mb-5 text-3xl">{t('it4Title')}</h1>
              <p className="text-xl">{t('it4des1')}</p>
            </div>
          </div>
          <div className="flex h-[360px] items-center justify-between bg-contain bg-[right_center] bg-no-repeat p-5 md:bg-[url('/images/promote/bg5_pad.png')] xl:bg-[url('/images/promote/bg5.png')]">
            <div className="flex w-1/3 flex-col">
              <h1 className="mb-5 text-3xl">{t('it5Title')}</h1>
              <p className="text-xl">{t('it5des1')}</p>
            </div>
          </div>
        </div>
        <div className="flex min-h-[120px] items-center gap-x-3 bg-[#262834] bg-[url('/images/promote/bg6.png')] bg-[right_6rem_bottom] bg-no-repeat px-11 py-3">
          <div className="">
              <span className="text-md rounded border border-[#D4A767] p-2 text-[#D4A767]">{t('it6btn1')}</span>
            </div>
            <div className="truncate text-xl text-white">{t('it6Title')}</div>
        </div>
      </div>
      {/* H5 */}
      <div className="py-6 xl:hidden">
        <div className="mt-8 h-[264px] bg-[url('/images/promote/bg1_h5.png')] bg-contain bg-center bg-no-repeat"></div>
        <div className="flex flex-col items-center justify-center px-6 py-8">
          <h1 className="text-center text-xl">{t('it1Title')}</h1>
          <p className="my-5 text-center text-sm">{t('it1des1')}</p>
          <Qrcode />
        </div>
        <div className="mt-8 h-[560px] bg-[url('/images/promote/bg2_h5.png')] bg-contain bg-center bg-no-repeat"></div>
        <div className="flex flex-col items-center justify-center px-6 py-8">
          <h1 className="mb-5 text-xl">{t('it2Title')}</h1>
          <p className="text-center text-sm">{t('it2des1')}</p>
        </div>
        <div className="mt-8 h-[236px] bg-[url('/images/promote/bg3_h5.png')] bg-center bg-no-repeat"></div>
        <div className="flex flex-col items-center justify-center px-6 py-8">
          <h1 className="mb-5 text-xl">{t('it3Title')}</h1>
          <p className="text-center text-sm">{t('it3des1')}</p>
        </div>
        <div className="mt-8 h-[250px] bg-[url('/images/promote/bg4_h5.png')] bg-center bg-no-repeat"></div>
        <div className="flex flex-col items-center justify-center px-6 py-8">
          <h1 className="mb-5 text-xl">{t('it4Title')}</h1>
          <p className="text-center text-sm">{t('it4des1')}</p>
        </div>
        <div className="mt-8 h-[390px] bg-[url('/images/promote/bg5_h5.png')] bg-contain bg-center bg-no-repeat"></div>
        <div className="flex flex-col items-center justify-center px-6 py-8">
          <h1 className="mb-5 text-xl">{t('it5Title')}</h1>
          <p className="text-center text-sm">{t('it5des1')}</p>
        </div>
        <div className="h-[240px] bg-[#262834] bg-[url('/images/promote/bg6_h5.png')] bg-[center_bottom] bg-no-repeat px-11 py-3">
          <div className="mt-2 flex h-full flex-col  items-center justify-start">
            <div className="text-center text-sm text-white">{t('it6Title')}</div>
            <span className="mt-3 rounded border border-[#D4A767] p-2 text-center text-[16px] text-[#D4A767]">{t('it6btn1')}</span>
          </div>
        </div>
      </div>
      <LinesFooter />
    </main>
  )
}
