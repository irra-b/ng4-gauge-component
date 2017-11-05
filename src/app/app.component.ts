import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  sections:any=[];
  areas:any=[];
  constructor(){
    this.sections.push({start: 0, end: 25, color: 'rgba(255, 0, 0, 0.5)'});
    this.sections.push({start: 25, end: 50, color: 'rgba(255, 255, 0, 0.5)'});
    this.sections.push({start: 50, end: 100, color: 'rgba(0, 255, 0, 0.5)'});
    this.areas.push({start: 0, end: 24, color: 'rgba(255, 0, 0, 0.3)'});
  }
}
