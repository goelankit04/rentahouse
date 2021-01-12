export default function ComboOfferCard({ title, description, price, info }) {
  return (
    <div className='border-t-8 border-b-2 bg-white  border-pink-500 rounded-3xl shadow-2xl px-4 py-16 space-y-8 flex flex-col justify-center items-center text-center w-52 lg:mt-8'>
      <div>
        <h3 className='border-green-400 font-semibold text-gray-700 tracking-wide text-2xl'>
          {title}
        </h3>
        <p className='text-sm text-gray-500 font-semibold tracking-wider leading-6'>
          {description}
        </p>
        <p className='text-sm text-gray-500 font-semibold'>({info})</p>
      </div>
      <div className='flex items-center justify-center'>
        <svg
          className='w-6 h-6 fill-current text-pink-500'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 169.76 250.39'
        >
          <path
            d='M99.017 250.33L8.44 137l.523-22.46c42.51 2.93 75.56-1.57 83.248-41.78l-90.578-.52 14.66-24.55 72.253 1.04C77.537 25.85 47.26 23.03.062 24.71L16.293.68l153.41-.23-15.184 23.732H112.11c7.751 8.182 13.424 17.597 13.613 25.59l43.98-.522-15.184 23.502-29.32.523c-4.577 35.058-36.787 55.815-77.489 60.584l91.184 116.44-39.874.022h0z'
            strokeWidth={0.099}
          />
        </svg>
        {/* <svg
          className='w-12 h-12 stroke-current text-pink-500'
          fill='white'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z' />
          <path
            fillRule='evenodd'
            d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z'
            clipRule='evenodd'
          />
        </svg> */}
        <p className='text-xl text-pink-600 font-semibold'>{price}</p>
      </div>
    </div>
  );
}
