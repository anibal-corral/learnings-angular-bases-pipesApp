import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
export class BasicsComponent implements OnInit {

nameLower:string='anastasia';
nameUpper:string='ANASTASIA';
nameEntire:string='anastasia';

date:Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
