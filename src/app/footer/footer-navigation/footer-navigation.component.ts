import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer-navigation',
  templateUrl: './footer-navigation.component.html',
})
export class FooterNavigationComponent implements OnInit {
  @HostBinding('class') footerNavigationComponentClass =
    'app-footer-navigation';
  socialMedia = [
    {
      name: 'Facebook',
      image: 'https://assetv2.nurtr.com/images/webp/social_logos/facebook.webp',
      link: 'https://www.facebook.com/nurtrdotcom',
    },
    {
      name: 'Twitter',
      image: 'https://assetv2.nurtr.com/images/webp/social_logos/twitter.webp',
      link: 'https://twitter.com/nurtrdotcom',
    },
    {
      name: 'LinkedIn',
      image: 'https://assetv2.nurtr.com/images/webp/social_logos/linkedin.webp',
      link: 'https://www.linkedin.com/company/nurtr/about/',
    },
    {
      name: 'YouTube',
      image: 'https://assetv2.nurtr.com/images/webp/social_logos/youtube.webp',
      link: 'https://www.youtube.com/c/nurtrdotcom',
    },
    {
      name: 'Instagram',
      image:
        'https://assetv2.nurtr.com/images/webp/social_logos/instagram.webp',
      link: 'https://www.instagram.com/nurtrdotcom/',
    },
  ];

  sites = [
    {
      heading: 'Home',
      sections: [
        { name: 'Chess', link: '/', externalLink: false },
        // { name: 'Cricket', link: '/cricket', externalLink: false },
      ],
    },
    {
      heading: 'About',
      sections: [
        {
          name: 'Privacy Policy',
          link: '/footer/privacy-policy',
          externalLink: false,
        },
        {
          name: 'Terms of Use',
          link: '/footer/terms-of-use',
          externalLink: false,
        },
      ],
    },
    {
      heading: 'More',
      sections: [
        { name: 'FAQ', link: '/faq', externalLink: false },
        { name: 'Blog', link: 'https://blog.nurtr.com/', externalLink: true },
        { name: 'Contact Us', link: '/footer/contact-us', externalLink: false },
      ],
    },
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  openSocial(url: any) {
    window.open(url.link, '_blank');
  }

  openPage(link: any) {
    if (link.externalLink) {
      window.open(link.link, '_blank');
    } else {
      this.router.navigateByUrl(link.link);
    }
  }
}
