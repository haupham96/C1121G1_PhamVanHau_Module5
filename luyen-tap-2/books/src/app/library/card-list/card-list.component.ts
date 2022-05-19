import {Component, OnInit} from '@angular/core';
import {Card} from "../../model/card";
import {LibraryService} from "../../service/library.service";
import {Book} from "../../model/book";
import {ModalDirective} from "angular-bootstrap-md";

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  cards: Card[] = [];
  cardReturn: Card = {};
  bookReturn: Book = {};

  constructor(private service: LibraryService) {
    this.loadAll();
  }

  ngOnInit(): void {

  }

  loadAll() {
    this.service.getAllCard().subscribe(data => {
      this.cards = data;
    }, err => {
      console.log(err);
    })
  }

  sendBookInfo(card: Card) {
    this.cardReturn = card;
    this.bookReturn = card.book;
  }

  returnBook(basicModal: ModalDirective, success: ModalDirective) {

    this.service.returnCard(this.cardReturn).subscribe(() => {
      this.service.findBookById(this.bookReturn.id).subscribe(data => {
        this.bookReturn = data;
        this.bookReturn.quantity = this.bookReturn.quantity + 1;
        this.service.editBook(this.bookReturn).subscribe(() => {
          this.loadAll();
          basicModal.hide();
          success.show();
        }, err => {
          console.log(err);
        })
      })

    })

  }
}
