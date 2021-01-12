import FooterIcons from './FooterIcons';
import FooterLinks from './FooterLinks';

export default function Footer() {
  return (
    <footer className='bg-gray-50 pt-16 pb-12 sm:pt-4 sm:pb-20'>
      <div className='max-w-screen-xl mx-auto flex flex-col-reverse justify-center p-16 space-y-8 lg:flex-row lg:justify-between lg:items-center'>
        <FooterIcons />
        <FooterLinks />
      </div>
      <div className='max-w-screen-xl mx-auto flex justify-start px-16'>
        <p className='text-gray-600 text-sm'>
          ©2019-20 ThoughtRoots India Private Limited. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
