import { Component } from '@angular/core';

class Event{
  eid:number;
  ename:string;
  mp:number;
  disc:string;
  img:string;

  constructor(){
    this.eid=0;
    this.ename='';
    this.mp=0;
    this.disc='';
    this.img='';
  }
}


@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrl: './adminpanel.component.css',
})
export class AdminpanelComponent {
  events:Event[] = [
    {eid:1,ename:'bridge Target',mp:50, disc:'Build a bridge with the given materials and specifications', img:'https://frolic.aswdc.in/img/events/Build-O-Brick.jpg'},
    {eid:2,ename:'Dare to Code',mp:25, disc:'Solve the given problem statement using your coding skills', img:'https://frolic.aswdc.in/img/events/Dare%20To%20Code.jpg'},
    {eid:3,ename:'Elecrtify Your Ideas',mp:100, disc:'Present your ideas on the given topic', img:'https://frolic.aswdc.in/img/events/Electrify%20Your%20Ideas.jpg'},
    {eid:3,ename:'CAD Master',mp:100, disc:'Design the given model using CAD software', img:'https://frolic.aswdc.in/img/events/CAD%20Master.jpg'},
  ];

  tempEve = new Event();
  idToUpdate = -1;
  searchTxt = '';

  addEvent(){
    this.events.push(this.tempEve)
    this.tempEve = new Event();
  }

  editEvent(){
    this.events[this.idToUpdate] = this.tempEve;
    this.tempEve = new Event();
    this.idToUpdate = -1;
  }

  setForEdit(eve:any){
    this.tempEve = eve;
    this.idToUpdate = this.events.indexOf(eve);
  }

  deleteEvent(eve:any){
    this.events.splice(eve,1);
  }
}
