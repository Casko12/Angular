export interface examAngular {
  data: Data;
}

export interface Child {
  title: string;
  content: string;
  date: string;
  address: string;
  city: string;
  phone: string;
}

export interface Category {
  name: string;
  childs: Child[];
}

export interface Data {
  categories: Category[];
}
