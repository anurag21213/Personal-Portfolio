import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import {ComputersCanvas} from './canvas'
import {styles} from '../style'
const Hero = () => {
  const [isMobile,setIsMobile]=useState(false)
  useEffect(()=>{
   //add event listener for handle change of screen size
    const mediaQuerry=window.matchMedia("(max-width:500px)")

    setIsMobile(mediaQuerry.matches)

    const handleScreenSize=(event)=>{
      setIsMobile(event.matches)
    }

    mediaQuerry.addEventListener('change',handleScreenSize)

    return ()=>{
      mediaQuerry.removeEventListener('change',handleScreenSize)
    }
  },[])
  return (
    <section className='relative w-full h-screen mx-auto'>
    <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
      <div className=' flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eef]'/>
          <div className='w-1 h-40 sm:h-80 violet-gradient'/>
      </div>
      <div>
        <h1 className={`${styles.heroHeadText} text-white`}>Hi,I'm <span className='text-[#915eef]'>Anurag Kumar</span></h1>      
        <p className={`${styles.heroSubText} text-white mt-2`}>I a'm a fullstack web developer<br className='sm:block hidden'/> and a coding enthusiast!!</p>
      </div>
    </div>
    
    
    <ComputersCanvas  isMobile={isMobile}/>

    <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
     <a href='#about'>
      <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
         <motion.div
          animate={{y:[0,24,0]}}
          transition={{
            duration:1.5,
            repeat:Infinity,
            repeatType:'loop'
          }}
          className='w-3 h-3 rounded-full bg-secondary mb-1'
         />
      </div>
     </a>
    
    </div>
    
    
    </section>
  )
}

export default Hero