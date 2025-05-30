export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  
  export const myProjects = [
    {
      title: 'PrepWise - AI Interview Platform',
      desc: 'Prepwise is a revolutionary Software-as-a-Service platform that transforms the way mock interviews are created. With advanced AI-powered features, it empowers users to create personalized mock interviews and enhance their interview preparation.',
      subdesc:
        'Built as a unique Software-as-a-Service app with Next.js 15, Tailwind CSS, TypeScript, Prepwise is designed for optimal performance and scalability.',
      href: 'https://prep-wise-opal.vercel.app/',
      texture: '/textures/project/project1.mp4',
      logo: '/assets/project-logo1.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 2,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 3,
          name: 'NextJs',
          path: '/assets/nextjs.png',
        },
      ],
    },
    {
      title: 'AdiDrive - Real-time Google Drive Clone',
      desc: 'AdiDrive is a powerful collaborative app that elevates the capabilities of Google Drive. It empowers users to work together in real time, sharing files and collaborating on projects with ease.',
      subdesc:
        'Built with Next.js 15, Appwrite, Typescript, and Tailwind CSS, AdiDrive provides a seamless and secure experience for sharing files and collaborating on projects with ease.',
      href: 'https://store-it-dlav.vercel.app/',
      texture: '/textures/project/project2.mp4',
      logo: '/assets/project-logo2.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'Nextjs',
          path: '/assets/nextjs.png',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        }
      ],
    },
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
