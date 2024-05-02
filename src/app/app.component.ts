import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TestApp';

  parent = "This is Parent Component!";
  child = "This is Child Component!";
  Name: string = "";

  GetData(name: string) {
    this.Name = name;
  }

  @ViewChild(ChildComponent) childComp: any;
  ButtonClick() {
    this.Name = this.childComp.name2;
  }
}
