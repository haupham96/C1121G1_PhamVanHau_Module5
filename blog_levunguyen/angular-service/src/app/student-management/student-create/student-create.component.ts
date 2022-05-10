import {Component, OnInit} from '@angular/core';
import {IStudent} from "../../model/IStudent";
import {FormControl, FormGroup} from "@angular/forms";
import {StudentService} from "../../service/StudentService";
import {Router, Routes} from "@angular/router";

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {
  student: IStudent = {};
  studentForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    studyClass: new FormControl()
  })

  constructor(private studentService: StudentService,private router:Router) {
  }

  ngOnInit(): void {
  }

  createStudent() {
    this.student = Object.assign({}, this.studentForm.value);
    this.student.id = this.studentService.getLastId();
    this.studentService.createStudent(this.student);
    this.router.navigate(['/']);
  }
}
