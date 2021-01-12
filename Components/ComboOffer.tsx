import ComboOfferCard from './ComboOfferCard';
import CombinedOfferCard from './CombinedOfferCard';

export default function ComboOffer() {
  return (
    <>
      <section className='max-w-screen-xl mx-auto flex flex-col space-y-8 items-center py-36 lg:flex-row lg:justify-center lg:py-48 lg:space-x-4'>
        <ComboOfferCard
          title='Dream Room'
          description='Lifetime Subscription'
          info='40+ Hours'
          price='160'
        />
        <div className='flex'>
          <svg
            className='stroke-current text-pink-400 w-12 h-12'
            fill='#ffff'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z' />
          </svg>
        </div>
        <ComboOfferCard
          title='Live Room'
          description='Annual Subscription'
          info='24 Live Rooms'
          price='160'
        />
        <div className='flex'>
          <svg
            className='stroke-current text-pink-400 w-12 h-12'
            fill='#ffff'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z' />
          </svg>
        </div>
        <ComboOfferCard
          title='Class Room'
          description='12 Class Rooms'
          info='40+ Hours'
          price='160'
        />
        <div className='flex'>
          <svg
            className='stroke-current text-pink-400 w-12 h-12 transform lg:-rotate-90'
            fill='#fff'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z' />
          </svg>
        </div>
        <CombinedOfferCard
          title='Offer Price'
          offerPrice='300'
          originalPrice='480'
        />
      </section>
    </>
  );
}
