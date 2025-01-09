'use client';
import LoginForm from '@/components/login-form';
import Image from 'next/image';
import { useTranslations } from "next-intl"

export default function Login() {
  const t = useTranslations("Pages.login")

  return (
    <div className='min-w-[300px] bg-white'>
        {/* pc & pad */}
        <div className='hidden md:block'>
          <div className="flex items-stretch justify-center" style={{minHeight: "calc(100vh - 80px)"}}>
            {/* <div className='flex-1 bg-[url(/images/login/img1.png)] bg-contain bg-center bg-no-repeat'></div> */}
            <Image className='w-1/2 object-cover' src="/images/login/img1.png" width={600} height={600} alt='image'/>
            <div className='flex-1 bg-white px-36 py-10'>
              <div className='mb-5 flex items-center justify-center'>
                <div className='text-2xl'>{t('title')}</div>
              </div>
              <LoginForm  formName="loginForm" />
            </div>
          </div>
        </div>

        {/* h5 */}
        <div className='md:hidden'>
          <div className='h-[200px] bg-[url(/images/login/img1_h5.png)] bg-cover bg-center bg-no-repeat md:bg-[url(/images/login/img1_h5.png)]'></div>
          <div className='relative -top-2 rounded-t-md bg-white px-10 py-5'>
            <LoginForm formName="loginFormH5" />
          </div>
        </div>
    </div>
  )
}
