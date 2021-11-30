import { Component, OnInit } from '@angular/core';
import { TaskService } from './task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  taskList: any[] = []
  taskById: any;
  constructor( private _taskService: TaskService ) { }

  ngOnInit(): void {
    this.getTasks();
    this.oneTask('');
  }

  getTasks(): void {
    console.log("Fetching task list")
    let observable = this._taskService.getTasks();

    observable.subscribe( (data:any) =>{
      this.taskList = data;
      console.log( "Display All Results: ", this.taskList )
    });
  }

  oneTask( id:string ){
    let observable = this._taskService.oneTask( id );
    
    observable.subscribe( (data:any) =>{
      this.taskById = data;
      console.log("One result By ID: ", this.taskById);
    });
  }

}
