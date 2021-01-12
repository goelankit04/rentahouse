export default function CombinedOfferCard({
  title,
  originalPrice,
  offerPrice,
}) {
  return (
    <div className='h-72 bg-gradient-to-b from-blue-500 to-pink-400 rounded-3xl shadow-2xl px-4 py-16 space-y-2 flex flex-col justify-center items-center text-center w-52 lg:mt-8 transform lg:hover:scale-110 transition-all hover:-translate-y-6'>
      <div>
        <h3 className='font-semibold text-gray-50 tracking-wide text-3xl'>
          {title}
        </h3>
      </div>
      <div className='flex items-center justify-center line-through'>
        <svg
          className='w-4 h-4 fill-current text-gray-200'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 169.76 250.39'
        >
          <path
            d='M99.017 250.33L8.44 137l.523-22.46c42.51 2.93 75.56-1.57 83.248-41.78l-90.578-.52 14.66-24.55 72.253 1.04C77.537 25.85 47.26 23.03.062 24.71L16.293.68l153.41-.23-15.184 23.732H112.11c7.751 8.182 13.424 17.597 13.613 25.59l43.98-.522-15.184 23.502-29.32.523c-4.577 35.058-36.787 55.815-77.489 60.584l91.184 116.44-39.874.022h0z'
            strokeWidth={0.099}
          />
        </svg>
        <p className='text-base text-gray-200 font-semibold'>{originalPrice}</p>
      </div>
      <div className='flex items-center justify-center'>
        <svg
          className='w-6 h-6 fill-current text-gray-50'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 169.76 250.39'
        >
          <path
            d='M99.017 250.33L8.44 137l.523-22.46c42.51 2.93 75.56-1.57 83.248-41.78l-90.578-.52 14.66-24.55 72.253 1.04C77.537 25.85 47.26 23.03.062 24.71L16.293.68l153.41-.23-15.184 23.732H112.11c7.751 8.182 13.424 17.597 13.613 25.59l43.98-.522-15.184 23.502-29.32.523c-4.577 35.058-36.787 55.815-77.489 60.584l91.184 116.44-39.874.022h0z'
            strokeWidth={0.099}
          />
        </svg>
        <p className='text-3xl text-gray-100 font-semibold'>{offerPrice}</p>
      </div>
    </div>
  );
}
