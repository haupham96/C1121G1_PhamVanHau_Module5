import {Component, OnInit} from '@angular/core';
import {IStudent} from "../../model/IStudent";
import {StudentService} from "../../service/StudentService";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css'],
  providers: [StudentService]
})
export class StudentViewComponent implements OnInit {
  student: IStudent = null;
  id = '0';

  constructor(private studentService: StudentService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id');
    });

    this.student = this.studentService.findById(parseInt(this.id));
    console.log(this.student.name);
  }

}
