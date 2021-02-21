export interface project {
  title: string;
  cardImage: string;
  description: string;
  tags: Array<string>;
  links: link[];
}

export interface link {
  name: string;
  url: string;
}

export interface experience {
  role: string;
  company: string;
  companylogo: string;
  companylogoColour: string;
  date: string;
  desc: string;
  descBullets?: Array<string>;
}
