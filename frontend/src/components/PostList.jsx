import React from 'react';
import PostCard from './PostCard';
import carImage from '../assets/car.jpg'
const PostList = () => {
  const posts = [
    {
      title: 'What if famous brands had regular fonts?',
      subtitle: 'Meet RegulaBrands!',
      author: 'Siddharth Goyal',
      views: '1.4k',
      image: carImage,
    },
     {
      title: 'What if famous brands had regular fonts?',
      subtitle: 'Meet RegulaBrands!',
      author: 'Siddharth Goyal',
      views: '1.4k',
      image: carImage,
    },
     {
      title: 'What if famous brands had regular fonts?',
      subtitle: 'Meet RegulaBrands!',
      author: 'Siddharth Goyal',
      views: '1.4k',
      image: carImage,
    },
    // more posts
  ];

  return (
    <>
      {posts.map((post, index) => (
        <PostCard key={index} {...post} />
      ))}
    </>
  );
};

export default PostList;
