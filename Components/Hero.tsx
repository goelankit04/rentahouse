export default function Hero() {
  return (
    <section className='max-h-screen relative'>
      <video
        className='object-cover w-full h-96 sm:h-5/6'
        playsInline
        autoPlay
        muted
        loop
      >
        <source
          src='https://assets.nurtr.com/chess/background-video.mp4'
          type='video/mp4'
        />
      </video>
      <div className='max-w-screen-xl mx-auto'>
        <div className='absolute inset-0 z-10 space-y-4 w-full h-full bg-black bg-opacity-60 flex flex-col justify-center items-center text-center'>
          <h1 className='text-3xl lg:text-5xl font-extrabold tracking-wide uppercase bg-gradient-to-r from-green-100 to-pink-100 text-transparent bg-clip-text lg:-mt-36'>
            Learn Chess
          </h1>
          <p className='text-xl lg:text-3xl leading-6 font-semibold tracking-wider bg-gradient-to-r from-green-300 to-pink-300 text-transparent bg-clip-text px-4 uppercase'>
            With best trainers from around the world
          </p>
          <a href='#' className='flex items-center shadow-2xl'>
            <div className='rounded-full bg-gradient-to-br from-green-700 to-pink-600 hover:bg-gradient-to-br hover:from-green-500 hover:to-pink-500'>
              <svg
                className='h-10 w-10 lg:w-14 lg:h-14 transform hover:-rotate-45 hover:scale-150 transition duration-500 ease-in-out animate-bounce'
                viewBox='0 0 24 24'
              >
                <circle cx='12' cy='12' r='7' fill='#F3E8FF'></circle>
                <path
                  d='M14.52 11.136a1 1 0 010 1.728l-3.016 1.759A1 1 0 0110 13.759v-3.518a1 1 0 011.504-.864l3.015 1.76z'
                  fill='#C084FC'
                ></path>
              </svg>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
