import React from 'react'

function Logo() {
  return (
    <div className='w-[20px] h-[20px] flex gap-[2px]'>
        <div className='h-full w-1/3 bg-color-secondary'></div>
        <div className='h-full w-full flex flex-col gap-[2px]'>
            <div className='bg-color-secondary h-1/3 w-full'></div>
            <div className='bg-color-primary h-full w-full'></div>
        </div>
    </div>
  )
}

export default Logo