import en from "@/locales/en.json"
import zh from "@/locales/zh.json"
import hk from "@/locales/zh-HK.json"
import de from "@/locales/de.json"

type MessagesEN = typeof en
type MessagesZH = typeof zh
type MessagesZHHK = typeof hk
type MessagesDE = typeof de

declare global {
  interface IntlMessages extends MessagesEN, MessagesZH, MessagesZHHK,  MessagesDE {}
}
