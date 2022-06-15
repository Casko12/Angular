import {IMail} from "./mail.interface";

export interface ICategory {
  name: string;
  childs: IChild[];
}
export interface IChild {
  name: string;
}
export interface IData {
  categories: ICategory[];
  mails: IMail[];
}
export interface IDataJSON {
  status: number;
  message: string;
  data: IData;
}
