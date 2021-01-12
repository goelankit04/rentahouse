import { map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Meta, Title } from '@angular/platform-browser';
import * as _ from 'lodash';

interface GoogleMeta {
  name: String;
  content: String;
}

interface TwitterMeta extends GoogleMeta {}

interface FacebookMeta {
  property: String;
  content: String;
}

let GoogleMetaInfo: GoogleMeta[] = [
  {
    name: `description`,
    content: `nurtr is an online skilling platform focused on extra-curriculars. Learn from the world’s best mentors through cinematized videos and live interactive sessions.`,
  },
  {
    name: `keywords`,
    content: `learn chess online, learn cricket online, chess coaching online, cricket coaching online, chess coaching program, cricket coaching program, chess course online, cricket course online, chess best mentors, cricket best coach, Gary Kirsten, RB Ramesh, chess coach RB Ramesh, cricket coach Gary Kirsten`,
  },
];

let TwitterMetaInfo: TwitterMeta[] = [
  {
    name: `twitter:card`,
    content: `summary_large_image`,
  },
  {
    name: `twitter:site`,
    content: `@nurtrdotcom`,
  },
  {
    name: `twitter:creator`,
    content: `@nurtrdotcom`,
  },
  {
    name: `twitter:url`,
    content: `https://www.nurtr.com/`,
  },
  {
    name: `twitter:title`,
    content: `Learn from Best Coaches & Mentors | nurtr`,
  },
  {
    name: `twitter:description`,
    content: `nurtr is an online skilling platform focused on extra-curriculars. Learn from the world’s best mentors through cinematized videos and live interactive sessions.`,
  },
  {
    name: `twitter:image:src`,
    content: `https://nurtr-seo.s3.ap-south-1.amazonaws.com/nurtr_icon.jpg`,
  },
];

let FacebookMetaInfo: FacebookMeta[] = [
  {
    property: `og:title`,
    content: `Learn from Best Coaches & Mentors | nurtr`,
  },
  {
    property: `og:type`,
    content: `website`,
  },
  {
    property: `og:url`,
    content: `http://www.nurtr.com/`,
  },
  {
    property: `og:image`,
    content: `https://nurtr-seo.s3.ap-south-1.amazonaws.com/nurtr_icon.jpg`,
  },
  {
    property: `og:description`,
    content: `nurtr is an online skilling platform focused on extra-curriculars. Learn from the world’s best mentors through cinematized videos and live interactive sessions.`,
  },
  {
    property: `og:site_name`,
    content: `nurtrdotcom`,
  },
];

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  constructor(private _meta: Meta, private _title: Title) {}

  addMetaTags() {
    this._title.setTitle(`Learn from Best Coaches & Mentors | nurtr`);
    this._meta.addTags(
      [...GoogleMetaInfo, ...TwitterMetaInfo, ...FacebookMetaInfo] as any,
      true
    );
  }

  removeMetaTags() {
    this._title.setTitle(`nurtr`);
    const metaTagsKeys = [];
    const current_tags: Array<any> = _.cloneDeep([
      ...GoogleMetaInfo,
      ...TwitterMetaInfo,
      ...FacebookMetaInfo,
    ]);

    _.forEach(current_tags, (tag, key) => {
      if (tag.name) {
        metaTagsKeys.push(tag.name);
      } else {
        metaTagsKeys.push(tag.property);
      }
    });

    metaTagsKeys.forEach((prop: string) => {
      this._meta.removeTagElement(this._meta.getTag(`name = "${prop}"`));
      this._meta.removeTagElement(this._meta.getTag(`property = "${prop}"`));
    });
  }

  addProductDescMetaTag(
    product_title: string,
    product_description: string,
    product_url: string,
    product_image: string
  ) {
    this._title.setTitle(product_title);

    const ProductGoogleMetaInfo = [
      {
        name: `description`,
        content: product_description,
      },
      {
        name: `keywords`,
        content: `learn chess online, learn cricket online, chess coaching online, cricket coaching online, chess coaching program, cricket coaching program, chess course online, cricket course online, chess best mentors, cricket best coach, Gary Kirsten, RB Ramesh, chess coach RB Ramesh, cricket coach Gary Kirsten`,
      },
    ];

    const ProductTwitterMetaInfo = [
      {
        name: `twitter:card`,
        content: `summary_large_image`,
      },
      {
        name: `twitter:site`,
        content: `@nurtrdotcom`,
      },
      {
        name: `twitter:creator`,
        content: `@nurtrdotcom`,
      },
      {
        name: `twitter:url`,
        content: product_url,
      },
      {
        name: `twitter:title`,
        content: product_title,
      },
      {
        name: `twitter:description`,
        content: product_description,
      },
      {
        name: `twitter:image:src`,
        content: product_image,
      },
    ];
    const ProductFacebookMetaInfo = [
      {
        property: `og:title`,
        content: `Learn from Best Coaches & Mentors | nurtr`,
      },
      {
        property: `og:type`,
        content: `website`,
      },
      {
        property: `og:url`,
        content: product_url,
      },
      {
        property: `og:image`,
        content: product_image,
      },
      {
        property: `og:description`,
        content: product_description,
      },
      {
        property: `og:site_name`,
        content: `nurtrdotcom`,
      },
    ];

    this._meta.addTags(
      [
        ...ProductGoogleMetaInfo,
        ...ProductTwitterMetaInfo,
        ...ProductFacebookMetaInfo,
      ] as any,
      true
    );
  }
}
