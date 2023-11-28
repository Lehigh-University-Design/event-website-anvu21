import { Tilt } from "react-tilt";
import {motion} from 'framer-motion'
import {styles} from '../style'
import { SectionWrapper } from "../hoc";
//import {projects} from '../constants'
import { fadeIn, textVariant } from "../utils/motion";
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
    time: 'Wednesday 6:00 PM',
    title: 'Planet Showcase 1: Pyroterra & Aquamara  ',
    info: 'Pyroterra & Aquamara - Unveiling of the planets, their lore, and opening bids.',
    icon: '🕒', 
  },
  {
    time: 'Wednesday 7:00 PM',
    title: 'Interstellar Intermission',
    info: 'A virtual lounge for participants to discuss the planets and network.',
    icon: '🕒', 
  },
  {
    time: 'Wednesday 7:30 PM',
    title: 'Planet Showcase 2: Zephyria & Sylveron',
    info: 'Presentation of the planets and commencement of bidding.',
    icon: '🕒', 
  },
  {
    time: 'Wednesday 9:00 PM',
    title: 'Cosmic Concert',
    info: 'Live-streamed performance by intergalactic-themed musicians.',
    icon: '🕒', 
  }
];
const day2Events   = [
  {
    time: 'Thursday 5:00 PM',
    title: 'Day 1 Recap & Day 2 Kickoff',
    info: 'Briefing on the previous day’s outcomes and what to expect on Day 2.',
    icon: '🕒', 
  },
  {
    time: 'Thursday 5:30 PM',
    title: 'Planet Showcase 3: Chronosia & Nocturne',
    info: 'Exploration and bidding on these unique planets.',
    icon: '🕒', 
  },
  {
    time: 'Thursday 6:30 PM',
    title: 'Auction Break & Virtual Observatory Tour',
    info: 'A guided tour of a digital galaxy, including trivia and fun facts.',
    icon: '🕒', 
  },
  {
    time: 'Thursday 7:00 PM',
    title: 'Planet Showcase 4: Aurelia & Crysallis',
    info: 'Insight into the planets’ features and live auction.',
    icon: '🕒', 
  },
  {
    time: 'Thursday 8:00 PM',
    title: 'Closing the Cosmos',
    info: 'Final bidding, closing remarks, and announcement of the winning names.',
    icon: '🕒', 
  },
  {
    time: 'Thursday 8:30 PM',
    title: 'Galactic Gratitude Party',
    info: 'A celebratory end to the event with virtual fireworks and a live DJ set.',
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
          Day 1: Galactic Gathering
        </button>
        <button
          onClick={() => setActiveDay('day2')}
          className={`rounded-full px-6 py-2 ${activeDay === 'day2' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Day 2: Stellar Stakes
        </button>
      </div>
      <Schedule events={activeDay === 'day1' ? day1Events : day2Events} />
    </div>
  );
};

export default SectionWrapper(Calendar,"")