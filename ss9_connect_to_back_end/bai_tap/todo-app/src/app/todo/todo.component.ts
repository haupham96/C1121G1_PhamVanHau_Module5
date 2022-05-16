import {Component, OnInit} from '@angular/core';
import {Todo} from '../todo';
import {FormControl} from '@angular/forms';
import {TodoService} from './service/todo.service';
import {ActivatedRoute, Router} from '@angular/router';

let _id = 1;

@Component({

  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {

  todos: Todo[] = [];

  content = new FormControl();

  constructor(private service: TodoService, private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.loadAll();
  }

  change() {
    const value = this.content.value;
    if (value) {
      const todo: Todo = {
        id: _id++,
        cotent: value,
        complete: false
      };
      this.service.save(todo).subscribe(() => {
        console.log('create success !');
        this.loadAll();
      }, err => {
        console.log(err);
      });
      this.content.reset();
    }
  }

  loadAll() {
    this.service.getAllTodos().subscribe(data => {
      this.todos = data;
    }, err => {
      console.log(err);
    });
  }

  toggleTodo(i: number) {
    let todo: Todo = {};
    this.service.findById(i).subscribe(data => {
      todo = data;
      todo.complete = !todo.complete;
      this.service.edit(todo).subscribe(() => {
        console.log('success!');
        this.loadAll();
      }, err => {
        console.log(err);
      });
    }, error => {
      console.log(error);
    });

  }

  ngOnInit(): void {
  }

  deleteTodo(id: number) {
    this.service.delete(id).subscribe(() => {
      console.log('success!');
      this.loadAll();
    }, err => {
      console.log(err);
    });
  }
}
