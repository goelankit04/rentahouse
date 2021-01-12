import { Injectable } from '@angular/core';

@Injectable()
export class VideoViewerService {

  product_type: string;
  product_name: string;
  product_hls: any;
  product_dash: any;
  product_poster: any;
  product_description: any;
  product_id: number;

  constructor() { }

  setProductType(product_type: string) {
    this.product_type = product_type;
  }

  getProductType() {
    return this.product_type;
  }

  setProductId(id: number) {
    this.product_id = id;
  }

  getProductId() {
    return this.product_id;
  }

  setProductName(product_name: string) {
    this.product_name = product_name;
  }

  getProductName() {
    return this.product_name;
  }

  setHls(hls: any) {
    this.product_hls = hls;
  }

  getHls() {
    return this.product_hls;
  }

  setDash(dash: any) {
    this.product_dash = dash;
  }

  getDash() {
    return this.product_dash;
  }

  setPoster(poster: any) {
    this.product_poster = poster;
  }

  getPoster() {
    return this.product_poster;
  }

  setProductdescription(description: any) {
    this.product_description = description;
  }

  getProductdescription() {
    return this.product_description;
  }
}
