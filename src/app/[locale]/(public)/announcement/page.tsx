import { getTranslations } from "next-intl/server"
import LinesFooter from "@/components/lines-footer"
import TimelineCmp from "@/components/timelineCmp"
import { Pagination } from 'antd';
// import Image from 'next/image'


export default async function Page() {
  const t = await getTranslations("Pages.Announcement")
  
  return (
    <main>
      <div className="h-[88px] bg-[url('/images/announcement/bg1_h5.png')] bg-cover bg-no-repeat md:bg-[url('/images/announcement/bg1.png')]">
        <div className="flex h-full items-center px-6 md:px-12">
          <h2 className="text-xl text-white md:text-2xl">{t('title')}</h2>
        </div>
      </div>
      {/* pc &  pad */}
      <div className="block">
        <div className="flex items-center p-6 md:p-12">
          <TimelineCmp />
        </div>
        <div className="flex justify-end px-6 md:px-12">
          <Pagination defaultCurrent={1} total={50} />
        </div>
      </div>
      <LinesFooter />
    </main>
  )
}
