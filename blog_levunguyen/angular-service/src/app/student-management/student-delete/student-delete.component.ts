import {Component, OnInit} from '@angular/core';
import {StudentService} from "../../service/StudentService";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {IStudent} from "../../model/IStudent";

@Component({
  selector: 'app-student-delete',
  templateUrl: './student-delete.component.html',
  styleUrls: ['./student-delete.component.css']
})
export class StudentDeleteComponent implements OnInit {
  student: IStudent = null;
  id = '0';

  constructor(private studentService: StudentService, private activatedRoute: ActivatedRoute,private router:Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      this.id = param.get('id');
    });
    this.student = this.studentService.findById(this.id);
  }

  deleteStudent() {
      this.studentService.deleteStudent(this.student);
      this.router.navigate(['/'])
  }
}
