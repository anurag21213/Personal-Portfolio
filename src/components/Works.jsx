import  {Tilt}  from "react-tilt"
import {motion} from 'framer-motion'

import {styles} from '../style'
import {github} from '../assets'
import {SectionWrapper} from '../hoc'
import {projects} from '../constants'

import {fadeIn,textVariant} from '../utils/motion'

const ProjectCard=({index,name,description,tags,image,source_code_link})=>{
   return(
      <motion.div variants={fadeIn("up","spring",index*0.5,0.75)}>
      <Tilt
       options={{
        max:45,
        scale:1,
        speed:450
       }}
       className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
           <img src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
           />
           <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div onClick={()=>window.open(source_code_link,"_blank")} className="black-gradient h-10 w-10 rounded-full flex justify-center items-center cursor-pointer">
                <img src={github} alt="github" className="h-1/2 w-1/2 object-contain" />
              </div>

           </div>
        </div>

        <div className="mt-5">
            <h3 className="text-[24px] font-bold ">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {
            tags.map((tag,index)=>(
              <p key={index} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
            ))
          }
        </div>
      </Tilt>
      
      </motion.div>
   )
}


const Works = () => {
  return (
    <div>
    <motion.div variants={textVariant()}>
    <p className={styles.sectionSubText}>My projects</p>
    <h2 className={styles.sectionHeadText}>Projects.</h2>
    </motion.div>

    <div className="w-full flex">
     <motion.p variants={fadeIn("","",0.1,1)} className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
       Following projects showcase my skills and experience.
     </motion.p>
    </div>

    <div className="mt-20 flex flex-wrap gap-7 ">
      {
        projects.map((project,index)=>(
          <ProjectCard key={index} {...project} index={index} />
        ))
      }
    </div>
    
    </div>
  )
}

export default SectionWrapper(Works,"")