import {Component, OnInit} from '@angular/core';
import {LibraryService} from "../../service/library.service";
import {Book} from "../../model/book";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: Book[] = [];

  constructor(private service: LibraryService) {
    this.service.getAllBooks().subscribe(data => {
      this.books = data;
    }, err => {
      console.log(err);
    });
  }

  ngOnInit(): void {
  }

}
