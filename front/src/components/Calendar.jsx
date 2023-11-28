import { Tilt } from "react-tilt";
import {motion} from 'framer-motion'
import {styles} from '../style'
import { SectionWrapper } from "../hoc";
//import {projects} from '../constants'
import { fadeIn, textVariant } from "../utils/motion";
import { TestCanvas } from './canvas'
import { useState } from 'react';
const day1Events  = [
  {
    time: 'Wednesday 5:00 PM',
    title: 'Opening Ceremony',
    info: 'A virtual welcome, overview of the event, and introduction to the CosmoClaim universe.',
    icon: '🕒', 
  },
  {
    time: 'Wednesday 5:30 PM',
    title: 'The Art of Naming ',
    info: 'A keynote speech on the significance of naming celestial bodies.',
    icon: '🕒', 
  },
  {
    time: 'Wednesday 5:30 PM',
    title: 'The Art of Naming ',
    info: 'A keynote speech on the significance of naming celestial bodies.',
    icon: '🕒', 
  },
  {
    time: 'Wednesday 5:30 PM',
    title: 'The Art of Naming ',
    info: 'A keynote speech on the significance of naming celestial bodies.',
    icon: '🕒', 
  },
];
const day2Events   = [
  {
    time: 'Thursday 9:00 - 10:00 PDT',
    title: 'Breakfast',
    icon: '🍽️', 
  },
  {
    time: 'Thursday 10:15 - 10:40 PDT',
    title: 'Time for the Timing Object',
    info: 'Christoph Guttandin',
    company: 'Media Codings',
    icon: '🕒', 
  },
];

const EventCard = ({ time, title, info, company, icon }) => (
  <div className="border rounded-lg p-4 shadow-md bg-black">
    <div className="flex items-center mb-2">
      <span className="text-lg mr-2">{icon}</span>
      <p className="text-sm">{time}</p>
    </div>
    <h3 className="text-lg font-semibold">{title}</h3>
    {info && <p className="text-sm mt-1">{info}</p>}
    {company && <p className="text-sm">{company}</p>}
  </div>
);

const Schedule = ({ events }) => (
  <div className="grid grid-cols-2 gap-1 ">
    {events.map((event, index) => (
      <EventCard key={index} {...event} />
    ))}
  </div>
);


const Calendar = () => {
  const [activeDay, setActiveDay] = useState('day1');

  return (
    <div className="my-4 mx-8">
      <div className="flex justify-between mb-4">
        <button
          onClick={() => setActiveDay('day1')}
          className={`rounded-full px-6 py-2 ${activeDay === 'day1' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Day 1: Wednesday, Oct 12th
        </button>
        <button
          onClick={() => setActiveDay('day2')}
          className={`rounded-full px-6 py-2 ${activeDay === 'day2' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Day 2: Thursday, Oct 13th
        </button>
      </div>
      <Schedule events={activeDay === 'day1' ? day1Events : day2Events} />
    </div>
  );
};

export default SectionWrapper(Calendar,"")