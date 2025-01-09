'use client'

// import Image from 'next/image'
import { useState } from 'react'
import { cn } from "@/lib/utils"
import { useTranslations } from "next-intl"

interface Item {
  title: string
  desc: string
  img: string
  img_small: string
  isHover: boolean
}

export default  function SuperPCImgs() {
  const t = useTranslations("Pages.Supervision")

  const [items, setItems] = useState([
    {
      title: "it1Title",
      desc: "it1des1",
      img: "/images/supervision/pc/img1_big.png",
      img_small: "/images/supervision/pc/img1_small.png",
      isHover: true
    },
    {
      title: "it2Title",
      desc: "it2des1",
      img: "/images/supervision/pc/img2_big.png",
      img_small: "/images/supervision/pc/img2_small.png",
      isHover: false
    },
  ])
  const [items2, setItems2] = useState([
    {
      title: "it3Title",
      desc: "it3des1",
      img: "/images/supervision/pc/img3_big.png",
      img_small: "/images/supervision/pc/img3_small.png",
      isHover: false
    },
    {
      title: "it4Title",
      desc: "it4des1",
      img: "/images/supervision/pc/img4_big.png",
      img_small: "/images/supervision/pc/img4_small.png",
      isHover: true
    },
  ])
  const handleItemClick = (index: number) => {
    const newItems: Item[] = []

    items.forEach((item, i) => {
      if (i === index) {
        item.isHover = true
      } else {
        item.isHover = false
      }
      newItems.push({...item})
    })
    
    setItems(newItems)
    // console.log('👨‍🎨🎨🍑 index', index)
  }

  const handleItem2Click = (index: number) => {
    const newItems2: Item[] = []

    items2.forEach((item, i) => {
      if (i === index) {
        item.isHover = true
      } else {
        item.isHover = false
      }
      newItems2.push({...item})
    })
    
    setItems2(newItems2)
  }
  return (
    <>
      <div className="flex items-center justify-center gap-2">
        {
          items.map((item, index) => (
            <div key={index} style={{ backgroundImage: `url(${item.isHover ? item.img : item.img_small})` }}
              className={cn("flex h-[280px] flex-col justify-end rounded bg-cover bg-center bg-no-repeat transition-all duration-300 ease-in-out", item.isHover ? "w-3/4": "w-1/4")}
              onClick={() => handleItemClick(index)}
            >
              <div className="p-5">
                <h1 className={cn("text-[18px] text-white", !item.isHover && 'text-center')}>{t(item.title as 'it1Title')}</h1>
                { !item.isHover && (
                    <div className='mx-auto h-[2px] w-3 rounded-sm bg-[#D4A767]'></div>
                  ) 
                }
                {
                  item.isHover && (
                    <p className="mt-5 text-[12px] text-white">{t(item.desc as 'it1des1')}</p>
                  )
                }
              </div>
            </div>
          ))
        }
      </div>
      <div className="mt-3 flex items-center justify-center gap-2">
        {
          items2.map((item, index) => (
            <div key={index} style={{ backgroundImage: `url(${item.isHover ? item.img : item.img_small})` }}
              className={cn("flex h-[280px] flex-col justify-end rounded bg-cover bg-center bg-no-repeat transition-all duration-300 ease-in-out", item.isHover ? "w-3/4": "w-1/4")}
              onClick={() => handleItem2Click(index)}
            >
              <div className="p-5">
                <h1 className={cn("text-[18px] text-white", !item.isHover && 'text-center')}>{t(item.title as 'it1Title')}</h1>
                { !item.isHover && (
                    <div className='mx-auto h-[2px] w-3 rounded-sm bg-[#D4A767]'></div>
                  ) 
                }
                {
                  item.isHover && (
                    <p className="mt-5 text-[12px] text-white">{t(item.desc as 'it1des1')}</p>
                  )
                }
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}
