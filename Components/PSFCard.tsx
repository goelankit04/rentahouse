export default function PlatformSpecificFeatureCard({
  children,
  title,
  description,
}) {
  return (
    <div
      className={`flex flex-col justify-center items-center mx-auto text-center px-1 space-y-4 py-8 flex-1`}
    >
      {children}
      <div className='space-y-2'>
        <h3 className='font-semibold text-gray-700 tracking-wide lg:text-lg'>
          {title}
        </h3>
        <p className='text-base text-gray-500 tracking-wider px-1 sm:px-8'>
          {description}
        </p>
      </div>
    </div>
  );
}
