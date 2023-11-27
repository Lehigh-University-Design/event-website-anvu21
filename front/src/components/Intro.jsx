import {useState, useRef} from 'react'
import {motion} from 'framer-motion'
import emailjs from '@emailjs/browser'

import {styles} from '../style'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'
import { Input } from 'postcss'
const Intro = () => {
  const formRef = useRef();
  


  

  
  //template_m2exzjg
//service_ntgsx82
//80iRhlogur-A9wOQE
  return (
    <div className="xl:mt-12 xl:flex-row my-40  flex-col-reverse flex gap-x-8 gap-y-10 overflow">
      <motion.div
      variants= {slideIn('left', "tween",0.2,1)}
      className= "flex-[0.75]  p-30 rounded-2xl"
      >
        <h3 className={styles.specialSectionHeadText}>
          CosmoClaim:
        </h3>
        <p className={styles.specialSectionHeadText}>
           Bidding Beyond Earth
        </p>
        

          
      </motion.div>

      <motion.div 
            variants= {slideIn('right', "tween",0.2,1)}
            className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
            >
        <EarthCanvas/>


      </motion.div>

    </div>
  )
}

export default SectionWrapper(Intro, "Intro")