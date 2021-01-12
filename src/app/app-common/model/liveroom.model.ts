export class LiveroomModel {
  id: number;
  name: string;
  product_type: number;
  author_name: string;
  description: string;
  short_description: string;
  pre_requisite: string;
  image_url: string;
  duration: string;
  scheduled_date: Date;

  constructor(liveroom: LiveroomModel) {
    this.id = liveroom.id;
    this.name = liveroom.name;
    this.product_type = liveroom.product_type;
    this.author_name = liveroom.author_name;
    this.description = liveroom.description;
    this.short_description = liveroom.short_description;
    this.pre_requisite = liveroom.pre_requisite;
    this.image_url = liveroom.image_url;
    this.duration = liveroom.duration;
    this.scheduled_date = liveroom.scheduled_date;
  }
}
