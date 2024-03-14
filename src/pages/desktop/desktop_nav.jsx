import React from 'react'

export default function Desktop_nav() {
  return (
    <div className='bg-[#fcfcef] flex mx-2 p-5 rounded-xl'>
        <div className='text-[#9F8C76] text-2xl mr-auto'>SplitWay</div>
        <div className='flex'>
            <button className='mx-4 text-[#9F8C76] border-[#9F8C76] border-2 px-8 rounded-2xl'>
               Contact
            </button>
            <button className='mx-4 text-[#9F8C76] border-[#9F8C76] border-2 px-8 rounded-2xl'>
               About
            </button>
            <button className='mx-4 text-[#9F8C76] border-[#9F8C76] border-2 px-8 rounded-2xl'>
               Log in/Sign Up
            </button>
        </div>
    </div>
  )
}
