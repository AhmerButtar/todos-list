import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input()
  todo: Todo = new Todo;
  @Input() i:number | undefined;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckBox: EventEmitter<Todo> = new EventEmitter();

  onClick(todo: Todo){
    this.todoDelete.emit(todo);
    console.log("onClick has been triggered")
  }

  onCheckBoxClick(todo: Todo){
    console.log(todo);
    this.todoCheckBox.emit(todo);
    console.log(todo);

  }



}
