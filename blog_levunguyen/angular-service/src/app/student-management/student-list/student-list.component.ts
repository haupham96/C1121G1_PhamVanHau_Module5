import {Component, OnInit} from '@angular/core';
import {StudentService} from "../../service/StudentService";
import {IStudent} from "../../model/IStudent";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: Array<IStudent> = [];

  constructor(private studentService: StudentService) {

  }

  ngOnInit(): void {
    this.students = this.studentService.getAllStudent();
  }


}
