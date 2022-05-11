import {Injectable} from "@angular/core";
import {IStudent} from "../model/IStudent";

@Injectable()
export class StudentService {
  students: Array<IStudent> = [
    {id: 1, name: 'Hau1', studyClass: 'C1'},
    {id: 2, name: 'Hau2', studyClass: 'C2'},
    {id: 3, name: 'Hau3', studyClass: 'C3'}
  ];

  constructor() {
  }

  public getAllStudent() {
    return this.students;
  }

  public createStudent(student: IStudent) {
    this.students.push(student);
  }

  public editStudent(student: IStudent) {
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].id == student.id) {
        this.students[i] = student;
        break;
      }
    }
  }

  public deleteStudent(student: IStudent) {
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].id == student.id) {
        this.students.splice(i);
      }
    }
  }

  public findById(id: any): IStudent | null {
    for (let s of this.students) {
      if (s.id == id) {
        return s;
      }
    }
    return null;
  }

  public getLastId() {
    let id = 0;
    for (let stu of this.students) {
      id = stu.id;
    }
    return id + 1;
  }

}
