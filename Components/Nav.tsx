import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Nav() {
  const [bgColor, setBgColor] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      if (scrollY > 50) {
        setBgColor('bg-gray-900 opacity-90');
      } else {
        setBgColor('');
      }
    });
    return () => window.removeEventListener('scroll', () => {});
  }, [bgColor]);

  return (
    <header
      className={`shadow-sm fixed top-0  left-0 right-0 z-50 transparent ${bgColor} transition-all`}
    >
      <nav className='max-w-screen-xl mx-auto h-16'>
        <div className='flex justify-center items-center w-full h-full'>
          <Image
            src='/images/nurtr-logo.png'
            alt='nurtr logo'
            width={150}
            height={25}
          />
        </div>
      </nav>
    </header>
  );
}

// bg-gradient-to-b from-gray-900 to-gray-800
