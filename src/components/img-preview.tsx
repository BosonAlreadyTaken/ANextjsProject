'use client'
import { Image } from 'antd';

export default function ImgPreview({src, previewSrc} : {src: string, previewSrc: string}) {
  return (
    <Image
      className="min-w-[300px] flex-1"
      alt="example"
      src={src}
      preview={{
        destroyOnClose: true,
        imageRender: () => (
          <Image
            alt="example"
            width={600}
            src={previewSrc}
            preview={false}
          />
        ),
        toolbarRender: () => null,
      }}
    />
  )
}
