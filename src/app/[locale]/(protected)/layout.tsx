// import { redirect } from "next/navigation"
// import { Session } from "next-auth"
// import { auth } from "@/lib/auth"


import JwtEmpty from "@/components/jwt-empty"

// export default async function 
export default function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // const session = (await auth()) as Session
  // if (!session) {
  //   redirect("/login")
  // }
  return (<div className="w-full">
    <JwtEmpty />
    {children}
  </div>)
}
