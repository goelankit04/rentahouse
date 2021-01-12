export class ClassroomModel {
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

  constructor(classroom: ClassroomModel) {
    this.id = classroom.id;
    this.name = classroom.name;
    this.product_type = classroom.product_type;
    this.author_name = classroom.author_name;
    this.description = classroom.description;
    this.short_description = classroom.short_description;
    this.pre_requisite = classroom.pre_requisite;
    this.image_url = classroom.image_url;
    this.duration = classroom.duration;
    this.scheduled_date = classroom.scheduled_date;
  }
}
