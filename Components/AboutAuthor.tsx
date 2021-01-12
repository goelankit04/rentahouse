import Image from 'next/image';

export default function AboutAuthor() {
  return (
    <section className='py-36 bg-gradient-to-b from-pink-50 to-indigo-50'>
      <div className='max-w-screen-xl mx-auto flex flex-col items-center justify-center p-8 space-y-8 lg:flex-row lg:justify-around'>
        <div className='flex justify-center items-center bg-gradient-to-b from-pink-100 to-white shadow-md rounded-full overflow-hidden'>
          <Image src='/images/rb_ramesh.png' width={400} height={400} />
        </div>
        <div className='flex flex-col items-center justify-center space-y-4 lg:w-1/2 lg:space-y-8'>
          <h2 className='font-semibold text-gray-800 tracking-wide text-2xl lg:w-full'>
            RB Ramesh
          </h2>
          <p className='text-base text-gray-700 tracking-wider leading-8'>
            Known as the Super Coach of India, Grand Master R.B. Ramesh is one
            of the most successful chess coaches in the world today. He won the
            British Chess Championship in 2002 and the Commonwealth Games in
            2007. He also served as the coach of the Indian Olympiad team in the
            years 2012, 2014, 2016 and 2018. GM Ramesh has trained more than 10
            Grand Masters and his Chess Gurukul (chess academy) which has been
            training budding chess players since 2008 has produced multiple
            global champions in different age categories, this includes
            Praggnanandhaa - the youngest International Master in the history of
            the game!
          </p>
        </div>
      </div>
    </section>
  );
}
