import {Component, OnInit} from '@angular/core';
import {LibraryService} from "../../service/library.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Student} from "../../model/student";
import {Book} from "../../model/book";
import {Card} from "../../model/card";
import {ModalDirective} from "angular-bootstrap-md";

@Component({
  selector: 'app-card-create',
  templateUrl: './card-create.component.html',
  styleUrls: ['./card-create.component.scss']
})
export class CardCreateComponent implements OnInit {
  bookBorrow: Book = {};
  students: Student[] = [];
  cardForm = new FormGroup({
    code: new FormControl('', [Validators.required, Validators.pattern('^(MS-)[0-9]{4}$')]),
    status: new FormControl(1, Validators.required),
    borrowDate: new FormControl('', [Validators.required, Validators.pattern("^\\d{4}[\\-\\/\\s]?((((0[13578])|(1[02]))[\\-\\/\\s]?(([0-2][0-9])|(3[01])))|(((0[469])|(11))[\\-\\/\\s]?(([0-2][0-9])|(30)))|(02[\\-\\/\\s]?[0-2][0-9]))$")]),
    returnDate: new FormControl('', [Validators.required, Validators.pattern("^\\d{4}[\\-\\/\\s]?((((0[13578])|(1[02]))[\\-\\/\\s]?(([0-2][0-9])|(3[01])))|(((0[469])|(11))[\\-\\/\\s]?(([0-2][0-9])|(30)))|(02[\\-\\/\\s]?[0-2][0-9]))$")]),
    book: new FormControl(),
    student: new FormControl()
  });

  constructor(private service: LibraryService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      let bookId = +param.get('id');
      this.service.findBookById(bookId).subscribe(data => {
        this.bookBorrow = data;
        this.cardForm.get('book').setValue(this.bookBorrow);
        this.cardForm.get('student').setValidators(Validators.required);
        this.service.getAllStudent().subscribe(data => {
          this.students = data;
        }, err => {
          console.log(err);
        });
      }, err => {
        console.log(err)
      })

    })
  }

  ngOnInit(): void {
  }

  createCard(successModal: ModalDirective, errorModal: ModalDirective) {
    if (this.cardForm.valid) {
      let card: Card = Object.assign({}, this.cardForm.value);
      this.service.borrowBook(card).subscribe(() => {
        this.bookBorrow.quantity = this.bookBorrow.quantity - 1;
        this.service.editBook(this.bookBorrow).subscribe(() => {
        }, error => {
          console.log(error);
        })
        successModal.show();
      }, err => {
        errorModal.show();
        console.log(err);
      })
    }
  }

  checkDateBefore() {
    let date1 = new Date(this.cardForm.get('borrowDate').value);
    let date2 = new Date(this.cardForm.get('returnDate').value);
    if (date1?.getTime() >= date2?.getTime()) {
      this.cardForm.get('returnDate').setErrors({dateBefore: true});
    }
  }

  get code() {
    return this.cardForm.get('code');
  }

  get status() {
    return this.cardForm.get('status');
  }

  get borrowDate() {
    return this.cardForm.get('borrowDate');
  }

  get returnDate() {
    return this.cardForm.get('returnDate');
  }

  get student() {
    return this.cardForm.get('student');
  }

  get book() {
    return this.cardForm.get('book');
  }
}
