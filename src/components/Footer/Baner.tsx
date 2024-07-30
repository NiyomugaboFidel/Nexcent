import React from 'react'
import Button from '../Buttons/Button'
import { FaLongArrowAltRight } from 'react-icons/fa'

const Baner:React.FC = () => {
  return (
    <div className='bg-silver w-full md:h-[209px] h-[105px] flex flex-col items-center justify-center '>
     <h2 className='lg:w-[617px] lg:py-[22px] lg:leading-[53px] lg:text-[44px] font-semibold text-center text-black'>
     Pellentesque suscipit fringilla libero eu.
     </h2>
     <Button label='Get a Demo'
       icon={<FaLongArrowAltRight className="w-[11px] h-[11px]" />}/>
    </div>
  )
}

export default Baner