import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { TasksFinalizadasComponent } from "./components/tasks-finalizadas/tasks-finalizadas.component";
import { TasksIniciadasComponent } from "./components/tasks-iniciadas/tasks-iniciadas.component";
import { TodoComponent } from "./todo.component";
import { TasksService } from "./todo.service";
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TasksComponent } from "./components/tasks/tasks.component";
import { Store } from "./todo.store";
import { CriarTasksComponent } from './components/criar-tasks/criar-tasks.component';
import { FormsModule } from "@angular/forms";

@NgModule({
    imports:[
        CommonModule,
        HttpClientModule,
        FormsModule
    ],
    providers:[
        TasksService,
        Store
    ],
    declarations: [
        TodoComponent,
        TasksFinalizadasComponent,
        TasksIniciadasComponent,
        TodoListComponent,
        TasksComponent,
        CriarTasksComponent
    ],
    exports:[
        TodoComponent,
        TasksFinalizadasComponent,
        TasksIniciadasComponent,
        TodoListComponent,
        TasksComponent,
        CriarTasksComponent
    ]
})
export class TodoModule{}