import Link from 'next/link';

export default function FooterLinks() {
  return (
    <ul className='flex flex-col space-y-8 sm:flex-row sm:items-baseline sm:justify-between lg:flex-1 lg:px-20'>
      <li>
        <h3 className='text-base font-semibold tracking-wide text-gray-500 uppercase lg:mb-2'>
          Home
        </h3>
        <ul>
          <li>
            <Link href='/'>
              <a className='text-base text-gray-700 tracking-wider'>Chess</a>
            </Link>
          </li>
          <li>
            <Link href='/cricket'>
              <a className='text-base text-gray-700 tracking-wider'>Cricket</a>
            </Link>
          </li>
          <li>
            <Link href='/product/list'>
              <a className='text-base text-gray-700 tracking-wider'>
                All Products
              </a>
            </Link>
          </li>
        </ul>
      </li>
      <li>
        <h3 className='text-base font-semibold tracking-wide text-gray-600 lg:mb-2 uppercase'>
          About
        </h3>
        <ul>
          <li>
            <Link href='/'>
              <a className='text-base text-gray-700 tracking-wider'>
                Privacy Policy
              </a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a className='text-base text-gray-700 tracking-wider'>
                Terms of use
              </a>
            </Link>
          </li>
        </ul>
      </li>
      <li>
        <h3 className='text-base font-semibold tracking-wide text-gray-600 lg:mb-2 uppercase'>
          More
        </h3>

        <ul>
          <li>
            <Link href='/'>
              <a className='text-base text-gray-700 tracking-wider'>FAQ</a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a className='text-base text-gray-700 tracking-wider'>Blog</a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a className='text-base text-gray-700 tracking-wider'>
                Contact Us
              </a>
            </Link>
          </li>
        </ul>
      </li>
    </ul>
  );
}
