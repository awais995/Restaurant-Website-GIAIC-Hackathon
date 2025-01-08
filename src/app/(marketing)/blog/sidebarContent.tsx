import { Content } from "next/font/google";

export const BlogPosts = [
    {
      id: 1,
      date: '14 Feb',
      image: '/blog-post-1.png',
      title: '10 Reasons To Do A Digital Detox Challenge',
      description: 'At vero eos et accusam et justo duo dolores et ea rebum...',
      author: 'Admin',
      comments: 3,
      postDate: 'Feb 14, 2022',
      content: `Hello Ut enim ad minima veniam, quis nostrum exercitationem
                Ut enim ad minima veniam, quis nostrum exercitationem
                Ut enim ad minima veniam, quis nostrum exercitationem
                Ut enim ad minima veniam, quis nostrum exercitationem
                Ut enim ad minima veniam, quis nostrum exercitationem
                Ut enim ad minima veniam, quis nostrum exercitationem`
    },
    {
      id: 2,
      date: '20 Mar',
      image: '/blog-post-2.png',
      title: '5 Healthy Recipes To Boost Your Energy',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      author: 'Admin',
      comments: 5,
      postDate: 'Mar 20, 2022',
      content: `Hello Ut enim ad minima veniam, quis nostrum exercitationem...Ut enim ad minima veniam, quis nostrum exercitationem...Ut enim ad minima veniam, quis nostrum exercitationem...Ut enim ad minima veniam, quis nostrum exercitationem...Ut enim ad minima veniam, quis nostrum exercitationem...Ut enim ad minima veniam, quis nostrum exercitationem...`
    },
    {
      id: 3,
      date: '10 Apr',
      image: '/blog-post-3.png',
      title: 'The Ultimate Guide to Gourmet Burgers',
      description: 'Sed diam nonumy eirmod tempor invidunt ut labore...',
      author: 'Admin',
      comments: 8,
      postDate: 'Apr 10, 2022',
      Content: `Hello Ut enim ad minima veniam, quis nostrum exercitationem...Ut enim ad minima veniam, quis nostrum exercitationem...Ut enim ad minima veniam, quis nostrum exercitationem...Ut enim ad minima veniam, quis nostrum exercitationem...Ut enim ad minima veniam, quis nostrum exercitationem...Ut enim ad minima veniam, quis nostrum exercitationem...`
    },
    {
      id: 4,
      date: '15 May',
      image: '/blog-post-4.png',
      title: 'How to Make Desserts That Everyone Will Love',
      description: 'Ut enim ad minima veniam, quis nostrum exercitationem...',
      author: 'Admin',
      comments: 2,
      postDate: 'May 15, 2022',
      content: `Hello Ut enim ad minima veniam, quis nostrum exercitationem...Ut enim ad minima veniam, quis nostrum exercitationem...Ut enim ad minima veniam, quis nostrum exercitationem...Ut enim ad minima veniam, quis nostrum exercitationem...Ut enim ad minima veniam, quis nostrum exercitationem...Ut enim ad minima veniam, quis nostrum exercitationem...`
    },
  ];
  

    // Recent Posts
  export const recentPosts = [
    {
      id: 1,
      src: '/recent-post-1.png', // Replace with your image path
      date: 'June 22, 2020',
      description: 'Lorem ipsum dolor sit amet...',
    },
    {
      id: 2,
      src: '/recent-post-2.png', // Replace with your image path
      date: 'June 23, 2020',
      description: 'Consectetur adipiscing elit...',
    },
    {
      id: 3,
      src: '/recent-post-3.png', // Replace with your image path
      date: 'June 24, 2020',
      description: 'Sed do eiusmod tempor incididunt...',
    },
    {
      id: 4,
      src: '/recent-post-4.png', // Replace with your image path
      date: 'June 25, 2020',
      description: 'Ut labore et dolore magna aliqua...',
    },
  ];


//   filters by menu 

export const menuItems = [
    {
      id: 1,
      src: '/side-fbm-1.png',
      name: 'Chicken Fry',
      count: Math.floor(Math.random() * 50),
    },
    {
      id: 2,
      src: '/side-fbm-2.png',
      name: 'Burger Food',
      count: Math.floor(Math.random() * 50),
    },
    {
      id: 3,
      src: '/side-fbm-3.png',
      name: 'Pizza',
      count: Math.floor(Math.random() * 50),
    },
    {
      id: 4,
      src: '/side-fbm-4.png',
      name: 'Fresh Fruits',
      count: Math.floor(Math.random() * 50),
    },
    {
      id: 5,
      src: '/side-fbm-5.png',
      name: 'Vegetables',
      count: Math.floor(Math.random() * 50),
    },
    // Add more menu items here
  ];


//   Gallery Photos 

export const galleryPhotos = [
    {
      id: 1,
      src: '/gallery-1.png',
      alt: 'Gallery Photo 1',
    },
    {
      id: 2,
      src: '/gallery-2.png',
      alt: 'Gallery Photo 2',
    },
    {
      id: 3,
      src: '/gallery-3.png',
      alt: 'Gallery Photo 3',
    },
    {
      id: 4,
      src: '/gallery-4.png',
      alt: 'Gallery Photo 4',
    },
    {
      id: 5,
      src: '/gallery-1.png',
      alt: 'Gallery Photo 5',
    },
    {
      id: 6,
      src: '/gallery-5.png',
      alt: 'Gallery Photo 6',
    },
    // Add more photos here
  ];