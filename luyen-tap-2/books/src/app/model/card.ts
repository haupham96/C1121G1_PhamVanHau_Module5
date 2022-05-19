import {Book} from "./book";
import {Student} from "./student";

export interface Card {
  id?: number;
  code?: string;
  status?: number;
  borrowDate?: string;
  returnDate?: string;
  book?: Book;
  student?: Student;
}
