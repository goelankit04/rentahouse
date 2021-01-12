import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    id: 1,
    name: 'Priyadharshan Kannappan',
    title: 'Chess Grand Master',
    quote:
      'Ramesh Sir gives you enough freedom to experiment, and his thirst to continually update himself always helps his students to learn new things.',
    img: '/images/priyadharshan.png',
    cssClasses: 'border-blue-500',
  },
  {
    id: 2,
    name: 'Debashis Das',
    title: 'Chess Grand Master',
    quote: `Ramesh Sir's approach towards how to think on the board & off the board is truly remarkable`,
    img: '/images/debashis.png',
    cssClasses: 'border-pink-500',
  },
  {
    id: 3,
    name: 'Praggnanandhaa Rameshbabu',
    title: `India's Youngest Grandmaster`,
    quote:
      'You are not just my coach, you are my friend, my guide, my mentor. I will always be thankful to you, for your love, patience and support',
    img: '/images/pragya.png',
    cssClasses: 'border-green-500',
  },
  {
    id: 4,
    name: 'Ankit Rajpara',
    title: 'Chess Grand Master',
    quote:
      'Ramesh Sir always manages to explain complicated chess concepts in seemingly easier ways which can be easily understood.',
    img: '/images/ankit.png',
    cssClasses: 'border-pink-400',
  },
  {
    id: 5,
    name: 'Divya Deshmukh',
    title: 'Current World Under 12 Girl Champion',
    quote:
      'I am growing as a better human and a better chess player under his guidance and wisdom',
    img: '/images/divya.png',
    cssClasses: 'border-indigo-500',
  },
  {
    id: 6,
    name: 'Vaishali Rameshbabu',
    title: 'Women International Master',
    quote: `When I said I can't, you said - you can, when I said I won't, you said - do it, even when I said I don't believe in myself , you said - I believe in you!`,
    img: '/images/vaishali.png',
    cssClasses: 'border-yellow-500',
  },
];

export default function Testimonials() {
  return (
    <div className='py-24 bg-gradient-to-br from-green-50 to-pink-100'>
      <ul className='max-w-screen-xl mx-auto flex space-x-4 overflow-hidden overflow-x-scroll scrolling-touch hide-scrollbar'>
        {testimonials.map((testimonial) => (
          <li key={testimonial.id}>
            <TestimonialCard {...testimonial} />
          </li>
        ))}
      </ul>
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
