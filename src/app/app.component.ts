import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  sections:any=[];
  areas:any=[];
  val1:number=10;
  val2:number=30;
  _val1:number=10;
  _val2:number=30;
  constructor(){
    this.sections.push({start: 0, end: 25, color: 'rgba(255, 0, 0, 0.5)'});
    this.sections.push({start: 25, end: 50, color: 'rgba(255, 255, 0, 0.5)'});
    this.sections.push({start: 50, end: 100, color: 'rgba(0, 255, 0, 0.5)'});
    this.areas.push({start: 0, end: 24, color: 'rgba(255, 0, 0, 0.3)'});
  }
  setval1(){
    if(this._val1==null){
      this._val1=0;
    }
    this.val1=this._val1;
  }
  setval2(){
    if(this._val2==null){
      this._val2=0;
    }
    this.val2=this._val2;
  }
}
