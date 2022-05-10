import {Component, OnInit} from '@angular/core';
import {StudentService} from "../../service/StudentService";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {IStudent} from "../../model/IStudent";

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  student: IStudent ;
  id = '0';

  constructor(private studentService: StudentService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      this.id = param.get('id');
    });

    this.student = this.studentService.findById(this.id);
  }

  editStudent() {
    console.log(this.student);
  }
}
