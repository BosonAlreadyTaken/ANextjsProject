import { getTranslations } from "next-intl/server"
import LinesFooter from "@/components/lines-footer"
import Image from 'next/image'

export default async function Page() {
  const t = await getTranslations("Pages.DemoAccount")
  return (
    <main>
      {/* pc && pad */}
      <div className="hidden md:block">
        <div className="flex items-center justify-around px-16 py-10">
          <Image
            src={`/images/demoAccount/img1.png`} 
            className="w-1/4"
            width={500} 
            height={500}
            alt="img">
          </Image>
          <div className="w-1/2">
            <h3 className="mb-2 text-xl">{t(`it1Title`)}</h3>
            <p className="text-sm">{t(`it1des1`)}</p>
          </div>
        </div>
        <div className="flex items-center justify-around px-16 py-10">
          <div className="w-1/2">
            <h3 className="mb-2 text-xl">{t(`it2Title`)}</h3>
            <p className="text-sm">{t(`it2des1`)}</p>
          </div>
          <Image
            src={`/images/demoAccount/img2.png`} 
            className="w-1/4"
            width={500} 
            height={500}
            alt="img">
          </Image>
        </div>
        <div className="flex items-center justify-around px-16 py-10">
          <Image
            src={`/images/demoAccount/img3.png`} 
            className="w-1/4"
            width={500} 
            height={500}
            alt="img">
          </Image>
          <div className="w-1/2">
            <h3 className="mb-2 text-xl">{t(`it3Title`)}</h3>
            <p className="text-sm">{t(`it3des1`)}</p>
          </div>
        </div>
        <div className="flex items-center justify-around px-16 py-10">
          <div className="w-1/2">
            <h3 className="mb-2 text-xl">{t(`it4Title`)}</h3>
            <p className="text-sm">{t(`it4des1`)}</p>
          </div>
          <Image
            src={`/images/demoAccount/img4.png`} 
            className="w-1/4"
            width={500} 
            height={500}
            alt="img">
          </Image>
        </div>
        <div className="flex items-center justify-around px-16 py-10">
          <Image
            src={`/images/demoAccount/img5.png`} 
            className="w-1/4"
            width={500} 
            height={500}
            alt="img">
          </Image>
          <div className="w-1/2">
            <h3 className="mb-2 text-xl">{t(`it5Title`)}</h3>
            <p className="text-sm">{t(`it5des1`)}</p>
          </div>
        </div>
      </div>
      {/* H5 */}
      <div className="bg-[#EBEEF5] pb-2 pt-1 md:hidden">
        <div className="m-3 flex flex-col items-center justify-center rounded bg-white p-2 pb-5 drop-shadow-xl">
          <Image
            src={`/images/demoAccount/img1.png`} 
            className="mb-4 w-full"
            width={500} 
            height={500}
            alt="img">
          </Image>
          <div className="p-2 text-center">
            <h3 className="mb-2 text-xl">{t(`it1Title`)}</h3>
            <p className="text-sm">{t(`it1des1`)}</p>
          </div>
        </div>
        <div className="m-3 flex flex-col items-center justify-center rounded bg-white p-2 pb-5 drop-shadow-xl">
          <Image
            src={`/images/demoAccount/img2.png`} 
            className="mb-4 w-full"
            width={500} 
            height={500}
            alt="img">
          </Image>
          <div className="p-2 text-center">
            <h3 className="mb-2 text-xl">{t(`it2Title`)}</h3>
            <p className="text-sm">{t(`it2des1`)}</p>
          </div>
        </div>
        <div className="m-3 flex flex-col items-center justify-center rounded bg-white p-2 pb-5 drop-shadow-xl">
          <Image
            src={`/images/demoAccount/img3.png`} 
            className="mb-4 w-full"
            width={500} 
            height={500}
            alt="img">
          </Image>
          <div className="p-2 text-center">
            <h3 className="mb-2 text-xl">{t(`it3Title`)}</h3>
            <p className="text-sm">{t(`it3des1`)}</p>
          </div>
        </div>
        <div className="m-3 flex flex-col items-center justify-center rounded bg-white p-2 pb-5 drop-shadow-xl">
          <Image
            src={`/images/demoAccount/img4.png`} 
            className="mb-4 w-full"
            width={500} 
            height={500}
            alt="img">
          </Image>
          <div className="p-2 text-center">
            <h3 className="mb-2 text-xl">{t(`it4Title`)}</h3>
            <p className="text-sm">{t(`it4des1`)}</p>
          </div>
        </div>
        <div className="m-3 flex flex-col items-center justify-center rounded bg-white p-2 pb-5 drop-shadow-xl">
          <Image
            src={`/images/demoAccount/img5.png`} 
            className="mb-4 w-full"
            width={500} 
            height={500}
            alt="img">
          </Image>
          <div className="p-2 text-center">
            <h3 className="mb-2 text-xl">{t(`it5Title`)}</h3>
            <p className="text-sm">{t(`it5des1`)}</p>
          </div>
        </div>
      </div>
      <LinesFooter />
    </main>
  )
}
