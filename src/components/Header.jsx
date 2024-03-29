import React from 'react'

export default function Header() {
  return (
    <div id='heder'>
        <div className='md:bg-gradient-to-r md:from-[#115] md:from-12.95% md:via-[#017] md:via-49.12% md:to-violet-800 md:to-887.71% bg-gradient-to-br from-[#115] from-2% via-[#017] via-30% to-violet-800 to-80% w-full md:h-[95vh] h-[60vh] absolute top-0 '>
            <div className='max-w-[1040px] w-full h-full justify-center items-center m-auto text-center pt-[6.9em]'>
            <h2 className='md:text-[80px] text-4xl tracking-wide font-primaryMedium text-white'>Effortless Creation</h2>
            <h2 className='md:text-[80px] text-4xl tracking-wide font-primaryMedium text-white md:py-16 py-4'>Limitless Possibilities</h2>
            <p className='text-[14px] text-white tracking-widest font-primaryRegular'>Create an impressive slide deck in minutes by just typing a sentence. No special design skills needed.</p>
            <div className='py-7 text-center'>
            <input type="text" name="create" id="create" placeholder='Try a prompt to create your own slide' className='max-w-[600px] md:w-full  px-[24px] py-[16px] rounded-lg shadow-2xl text-base' />
            </div>

            <div className='py-1 text-center'>
                <button className='bg-[#fd4] py-[8px] px-[20px] rounded-lg text-[15px] font-primaryRegular text-center'>Try for free</button>
            </div>
        </div>
            </div>


    </div>
  )
}
