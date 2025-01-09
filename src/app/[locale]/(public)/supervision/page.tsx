import { getTranslations } from "next-intl/server"
import LinesFooter from "@/components/lines-footer"

import SuperPCImgs from "@/components/super-pc-imgs"
import SuperPadImgs from "@/components/super-pad-imgs"
import ImgPreview  from "@/components/img-preview";

export default async function Page() {
  const t = await getTranslations("Pages.Supervision")
  
  return (
    <main>
      <div className="h-[280px] bg-[url('/images/supervision/h5/bg1.png')] bg-cover bg-no-repeat md:bg-[url('/images/supervision/pc/bg1.png')]">
        <div className="flex h-full items-center justify-center">
          <div className="w-3/4 text-center text-[#1B222F]">
            <h1 className="text-xl md:text-3xl">{t('it0Title')}</h1>
            <p className="mt-5 text-sm md:text-xl"><span>{t('it0des1_0')}</span><span className="whitespace-nowrap">{t('it0des1_1')}</span><span>{t('it0des1_2')}</span></p>
          </div>
        </div>
      </div>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
        <ImgPreview src="/images/supervision/img0_0.png" previewSrc="/images/supervision/CGSE-Cert-Front.jpg" />
        <ImgPreview src="/images/supervision/img0_1.png" previewSrc="/images/supervision/DPMS-Certificate.jpg" />
      </div>
      {/* pc*/}
      <div className="hidden xl:block">
        <div className="m-auto mt-10 flex w-3/4 items-center justify-center gap-2">
          <SuperPCImgs />
        </div>
      </div>
      {/* pad */}
      <div className="m-auto mt-10 hidden w-3/4 md:block xl:hidden ">
        <SuperPadImgs />
      </div>
      {/* H5 */}
      <div className="p-2 md:hidden">
        <div className="mt-4 flex min-h-[200px] items-center justify-center rounded bg-[url('/images/supervision/h5/img1_h5.png')] bg-contain bg-no-repeat pt-[20px] drop-shadow-xl">
          <div className="text-center">
            <div className="text-xl text-white">{t('it1Title')}</div>
            <div className='mx-auto mb-[30px] h-[2px] w-3 rounded-sm bg-[#D4A767]'></div>
            <div className="flex items-center justify-center rounded bg-white p-3 text-[14px] text-[#49505E]">{t('it1des1')}</div>
          </div>
        </div>
        <div className="mt-4 flex min-h-[200px]  items-center justify-center rounded bg-[#704F3E] bg-[url('/images/supervision/h5/img2_h5.png')] bg-contain bg-no-repeat pt-[20px] drop-shadow-xl">
          <div className="text-center">
            <div className="text-xl text-white">{t('it2Title')}</div>
            <div className='mx-auto mb-[30px] h-[2px] w-3 rounded-sm bg-[#D4A767]'></div>
            <div className="flex items-center justify-center rounded bg-white p-3 pb-[35px] text-[14px] text-[#49505E]">{t('it2des1')}</div>
          </div>
        </div>
        <div className="mt-4 flex min-h-[200px] items-center justify-center rounded bg-[#807E7B] bg-[url('/images/supervision/h5/img3_h5.png')] bg-contain bg-no-repeat  pt-[20px] drop-shadow-xl">
          <div className="text-center">
            <div className="text-xl text-white">{t('it3Title')}</div>
            <div className='mx-auto mb-[30px] h-[2px] w-3 rounded-sm bg-[#D4A767]'></div>
            <div className="flex items-center justify-center rounded bg-white p-3 pb-[60px] text-[14px] text-[#49505E]">{t('it3des1')}</div>
          </div>
        </div>
        <div className="mt-4 flex min-h-[200px] items-center justify-center rounded  bg-[#4C5761] bg-[url('/images/supervision/h5/img4_h5.png')] bg-contain bg-no-repeat pt-[20px] drop-shadow-xl">
          <div className="text-center">
            <div className="text-xl text-white">{t('it4Title')}</div>
            <div className='mx-auto mb-[26px] h-[2px] w-3 rounded-sm bg-[#D4A767]'></div>
            <div className="flex items-center justify-center rounded bg-white p-3 pb-[50px] text-[14px] text-[#49505E]">{t('it4des1')}</div>
          </div>
        </div>
      </div>
      <LinesFooter />
    </main>
  )
}
