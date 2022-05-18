import {Category} from "./category";

export interface Product {
  id?: number;
  name?: string;
  price?: string;
  startDate?: string;
  endDate?: string;
  category?: Category;
}
