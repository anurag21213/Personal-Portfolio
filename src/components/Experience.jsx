import { VerticalTimeline,VerticalTimelineElement } from "react-vertical-timeline-component"

import {motion} from 'framer-motion'

import 'react-vertical-timeline-component/style.min.css'

import {styles} from '../style'
import {experiences} from '../constants'
import {SectionWrapper} from '../hoc'
import { textVariant } from "../utils/motion"

const ExperienceCard=({exp})=>{
  return(
    <VerticalTimelineElement
     contentStyle={{background:'#id1836',color:'#fff'}}
     contentArrowStyle={{borderRight:'7px solid #232631'}}
     date={exp.date}
     iconStyle={{background:exp.iconBg}}
     icon={
      <div className="flex items-center justify-center w-full h-full">
        <img src={exp.icon} alt={exp.title} className="w-[60%] h-[60%] object-contain"  />
      </div>
     }
    >
    <div className="text-black" >
      <h3 className=" text-[24px] font-bold">{exp.title} </h3>
      <p className="text-primary font-semibold text-[16px]" style={{margin:0}}>{exp.company_name}</p>
    </div>

    <ul className="mt-5 ml-5 list-disc space-y-2 text-black">
      {
        exp.points.map((point,index)=>(
          <li key={`experience-point=${index}`} className=" text-[14px] pl-1 tracking-wider" >{point}</li>
        ))
      }
    </ul>
    
    
    </VerticalTimelineElement>
  )
}

const Experience = () => {
  return (
    <div>
       <motion.div variants={textVariant()}>
       <p className={styles.sectionSubText}>What i have done so far...</p>
       <h2 className={styles.sectionHeadText}>Work Experience.</h2>
       </motion.div>

       <div className="flex flex-col mt-20">
         <VerticalTimeline>
           {
            experiences.map((exp,index)=>(
              <ExperienceCard key={index} exp={exp} />
            ))
           }
         
         </VerticalTimeline>
       </div>
    
    </div>
  )
}

export default SectionWrapper(Experience,"work")