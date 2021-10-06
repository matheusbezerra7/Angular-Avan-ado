import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TasksService } from '../../todo.service';
import { Store } from '../../todo.store';

@Component({
  selector: 'criar-tasks',
  templateUrl: './criar-tasks.component.html',
  styles: []
})
export class CriarTasksComponent implements OnInit {


  todolist: Observable<any[]> 
  public tarefaNome: string;

  constructor(
    private taskService: TasksService,
    private store: Store
  ) { }

  ngOnInit() {
  }

  adicionar() {

  }

}
