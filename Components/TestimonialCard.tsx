import Image from 'next/image';

export default function TestimonialCard({
  img,
  name,
  title,
  quote,
  cssClasses,
}) {
  return (
    <div
      className={`flex-1 space-y-8 flex flex-col justify-center items-center border-4 rounded-tl-3xl rounded-br-3xl text-center py-8 px-2 shadow-xl my-16 ml-5 bg-white hover:shadow-2xl transform hover:-translate-y-3 hover:-skew-y-3 transition-all ${cssClasses}`}
    >
      <div className='rounded-full ring-4 ring-pink-300 w-36 h-36 flex justify-center items-center'>
        <Image
          className='rounded-full'
          src={img}
          alt={name}
          width={130}
          height={130}
        />
      </div>
      <blockquote className='relative w-96 h-20 rounded-t-xl bg-white leading-2 font-semibold text-gray-900'>
        <svg
          width={45}
          height={36}
          className='fill-current text-green-200 -top-10 absolute -z-3'
        >
          <path d='M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z' />
        </svg>
        <p className='relative z-1 flex-1'>{quote}</p>
      </blockquote>
      <div className='h-12'>
        <h3 className='font-extrabold text-gray-900 tracking-wide'>{name}</h3>
        <p className='font-semibold text-sm text-gray-600 tracking-wider'>
          {title}
        </p>
      </div>
    </div>
  );
}
