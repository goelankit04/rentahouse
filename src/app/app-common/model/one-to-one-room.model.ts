export class OneToOneRoomModel {
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

  constructor(oneToOne: OneToOneRoomModel) {
    this.id = oneToOne.id;
    this.name = oneToOne.name;
    this.product_type = oneToOne.product_type;
    this.author_name = oneToOne.author_name;
    this.description = oneToOne.description;
    this.short_description = oneToOne.short_description;
    this.pre_requisite = oneToOne.pre_requisite;
    this.image_url = oneToOne.image_url;
    this.duration = oneToOne.duration;
    this.scheduled_date = oneToOne.scheduled_date;
  }
}
