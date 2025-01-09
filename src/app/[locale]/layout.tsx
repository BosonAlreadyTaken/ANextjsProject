import { Inter } from "next/font/google"
import { notFound } from "next/navigation"
import { NextIntlClientProvider } from "next-intl"
import { getMessages, getTranslations } from "next-intl/server"
import { AuthProvider } from "@/lib/auth/provider/auth"
import { Toaster } from "@/components/ui/sonner"
import { appConfig } from "@/../app.config"
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';
import "@/styles/globals.css"

const inter = Inter({ subsets: ["latin"] })

const antdThemeConfig = {
  token: {
    // Seed Token，影响范围大
    colorPrimary: '#D4A767',
    borderRadius: 4
  },
}


export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: "Meta",
  })

  return {
    title: t("title"),
    description: t("description"),
  }
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>) {
  const messages = await getMessages()
  if (!appConfig.locales.includes(params.locale)) notFound()
  return (
    <html>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta property="og:image" content="/images/share.png"></meta>
      </head>
      <body className={inter.className}>
        <AuthProvider>
          <Toaster position="bottom-right" />
          <NextIntlClientProvider locale={params.locale} messages={messages}>
            <AntdRegistry>
              <ConfigProvider theme={{...antdThemeConfig}} >
                {children}
              </ConfigProvider>
            </AntdRegistry>
          </NextIntlClientProvider>
          <div id="modal-root" />
        </AuthProvider>
      </body>
    </html>
  )
}
