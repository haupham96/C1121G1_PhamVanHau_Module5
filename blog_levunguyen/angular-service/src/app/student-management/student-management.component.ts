import {Component, OnInit} from '@angular/core';
import {StudentService} from "../service/StudentService";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {IStudent} from "../model/IStudent";

@Component({
  selector: 'app-student-management',
  templateUrl: './student-management.component.html',
  styleUrls: ['./student-management.component.css']
})

export class StudentManagementComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {

  }

}
