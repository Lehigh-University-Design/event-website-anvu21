
import {styles} from '../style'
//import {projects} from '../constants'
import { fadeIn, textVariant } from "../utils/motion";
import { useState } from 'react';
import { SectionWrapper } from "../hoc";


// TicketCard.js
const TicketCard = ({ title, price, features, tag, isSoldOut }) => {
  return (
    <div className="bg-tertiary p-4 shadow-lg rounded-lg">
      {tag && <div className="px-3 py-1 bg-yellow-400 text-yellow-900 rounded-full text-sm font-bold uppercase mb-3">{tag}</div>}
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-4xl font-bold">{price}</p>
      <ul className="my-4">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-secondary">{feature}</li> 
        ))}
      </ul>
      <div className="flex items-center gap-2 mb-4">
        <button className="text-gray-500 focus:outline-none">-</button>
        <span className="text-gray-700">1</span>
        <button className="text-gray-500 focus:outline-none">+</button>
      </div>
      <button
        className={`w-full mb-2 py-2 text-white font-bold rounded-lg ${isSoldOut ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
        disabled={isSoldOut}
      >
        {isSoldOut ? 'Sold Out' : 'Add to Cart'}
      </button>
      <a href="#" className="text-blue-500 hover:underline">More Details →</a>
    </div>
  );
};

// BuyTicketsSection.js
const BuyTicketsSection = () => {
  const tickets = [
    {
      title: 'Express Pass Second Half: In Person',
      price: '$4,000',
      features: ['Unlimited in-person screenings', 'Priority access at all Festival theaters', 'Valid January 24–28, 2024'],
      tag: 'PRIORITY ACCESS',
      isSoldOut: false
    },
    {
      title: 'VIP All-Access Pass',
      price: '$2,500',
      features: ['Access to all events and screenings', 'VIP seating arrangements', 'Complimentary refreshments', 'Valid for the entire festival'],
      tag: 'MOST POPULAR',
      isSoldOut: false
    },
    {
      title: 'Weekend Warrior Pass',
      price: '$1,200',
      features: ['Access to all weekend screenings', 'Early bird seating', '2 free guest passes', 'Valid every weekend during the festival'],
      tag: 'GREAT VALUE',
      isSoldOut: false
    },
    {
      title: 'One-Day Festival Pass',
      price: '$300',
      features: ['Full day access to screenings', 'Includes workshops and panels', 'Valid on selected date only'],
      tag: 'SPECIAL DISCOUNT',
      isSoldOut: true
    },
    {
      title: 'Evening Special Pass',
      price: '$150',
      features: ['Entry to all evening screenings', 'One complimentary drink', 'Perfect for night owls', 'Valid from 6 PM onwards'],
      tag: '',
      isSoldOut: false
    },
    {
      title: 'Group Discount Package',
      price: '$3,500',
      features: ['Ten tickets package', 'Access to group-only events', 'Dedicated support line', 'Valid for groups of 10 or more'],
      tag: '',
      isSoldOut: false
    },
  ];

  return (
    <div className=" py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tickets.map((ticket, index) => (
            <TicketCard key={index} {...ticket} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default SectionWrapper(BuyTicketsSection,"")
