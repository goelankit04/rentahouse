export default function FeatureCard({
  children,
  title,
  description,
  cssClasses,
}) {
  return (
    <div
      className={`flex flex-col justify-center items-center mx-auto text-center px-1 space-y-4 py-8 ${cssClasses}`}
    >
      {children}
      <div>
        <h3 className='font-semibold text-gray-800 tracking-wide lg:text-gray-50 lg:text-2xl'>
          {title}
        </h3>
        <p className='text-base text-gray-500 tracking-wider lg:text-gray-50 lg:text-xl p-1'>
          {description}
        </p>
      </div>
    </div>
  );
}
