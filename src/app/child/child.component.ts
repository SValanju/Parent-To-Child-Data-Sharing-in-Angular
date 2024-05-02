import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit {

  @Input() inputFromParent: any;

  ngOnInit(): void {
  }

  name: string = "Hello World!";
  name2: string = "Hello World 2!";
  @Output() updatedString = new EventEmitter<string>();

  postData() {
    this.updatedString.emit(this.name);
  }
}
