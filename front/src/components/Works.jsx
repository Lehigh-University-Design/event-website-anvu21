import { Tilt } from "react-tilt";
import {motion} from 'framer-motion'
import {styles} from '../style'
import { SectionWrapper } from "../hoc";
//import {projects} from '../constants'
import { fadeIn, textVariant } from "../utils/motion";
import { TestCanvas } from './canvas'

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
     <motion.div variants= {textVariant()}>
    
        <h2 className={styles.sectionHeadText}>
        Featured Planets:
        </h2>
    </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("","",0.1,1)}
          className="mt-3 text-secondary text-[17px] max-w-3x1 leading-[30px]"
        >
          Featured Planets:

Each of our planets presents a unique opportunity to leave your mark in the stars. From the fiery surfaces of molten worlds to the icy realms of distant giants, discover the story behind each planet before placing your bid.



        </motion.p>
      </div>
      <div className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] overflow border-2 border-red-500 gap-7 grid gap-x-8 gap-y-4 grid-cols-3">
      
      <div className="flex flex-col items-center">
        <TestCanvas />
        <div className={styles.sectionHeadText}>
            Feature Planets
        </div>
    </div>

  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>

      </div>
    </>
  )
}

export default SectionWrapper(Works,"")