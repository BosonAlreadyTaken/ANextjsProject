'use client'

import React from 'react';
import Image from 'next/image';

import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';

const text = (
  <p className='text-sm text-[#49505E]' style={{ paddingInlineStart: 24 }}>
    尊敬的客户: <br />我们在此通知您，这是一则临时发挥的公告字段, 所有服务将在维护完成后立即恢复正常运行，您无需进行任何操作。感谢您的耐心与理解。如有任何问题，请随时联系我们。<br /> RRBULL 团队
  </p>
);
const items: CollapseProps['items'] = [
  {
    key: '1',
    label: (
      <div>
        <p className='text-xl'>RRBULL  系统维护公告(2024年12月19)</p>
        <div className='mt-1 flex items-center'>
          <Image src="/images/announcement/time.svg" alt="icon" width={16} height={16}></Image>
          <span className='ml-2 text-sm text-[#A4A8AF]'>19-12-2024 18:09</span>
        </div>
      </div>
    ),
    children: text,
  }
];
export default  function TimelineCmp() {

  return (
    <div className='flex-1 border-l-2 border-dotted border-[#D4A767]'>

      <div className='mb-3 pl-[20px]'>
        <div className='relative mb-3 flex h-[50px] w-[150px] items-center justify-center rounded bg-[#D4A767] text-white'> 
          <div className='absolute left-[-26px] top-1/2 size-[10px] -translate-y-1/2 rounded-full bg-[#D4A767]' />
          <div className='absolute left-[-9px] top-1/2 size-0 -translate-y-1/2' style={{borderTop: '5px solid transparent', borderBottom: '5px solid transparent', borderRight: '10px solid #D4A767'}} />
          <h3>十二月-2024</h3>
        </div>
        <Collapse items={items} expandIconPosition="end" bordered={false} defaultActiveKey={['1']} />
      </div>
      <div className='pl-[20px]'>
        <div className='relative mb-3 flex h-[50px] w-[150px] items-center justify-center rounded bg-[#D4A767] text-white'> 
          <div className='absolute left-[-26px] top-1/2 size-[10px] -translate-y-1/2 rounded-full bg-[#D4A767]' />
          <div className='absolute left-[-9px] top-1/2 size-0 -translate-y-1/2' style={{borderTop: '5px solid transparent', borderBottom: '5px solid transparent', borderRight: '10px solid #D4A767'}} />
          <h3>十二月-2024</h3>
        </div>
        <Collapse items={items} expandIconPosition="end" bordered={false} defaultActiveKey={['1']} />
      </div>

    </div>
  )
}