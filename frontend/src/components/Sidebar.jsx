import React from 'react';
import GroupCard from './GroupCard';
import User1Img from '../assets/user1.jpg'
import User2Img from '../assets/user2.jpg'
import User3Img from '../assets/user3.jpg'
import User4Img from '../assets/user4.jpg'
const Sidebar = () => {
 const groups = [
  { name: 'User1', image: User1Img },
  { name: 'User2', image: User2Img },
  { name: 'User3', image: User3Img },
  { name: 'User4', image: User4Img },
];
  return (
    <div>
      <div className="text-sm text-gray-500 mb-4">
        📍 Your location will help us serve better and extend a personalised experience.
      </div>
      <h4 className="font-semibold mb-3">👍 RECOMMENDED GROUPS</h4>
      {groups.map(({name, image}) => (
        <GroupCard key={name} name={name} image={image} />
      ))}
      <p className="text-blue-600 mt-4 cursor-pointer">See More...</p>
    </div>
  );
};

export default Sidebar;
