'use client'
import { redirect } from "next/navigation"

export default function JwtEmpty() {
  // localStorage 中查询是否有 jwt 
  redirect("/login")
  return null
}