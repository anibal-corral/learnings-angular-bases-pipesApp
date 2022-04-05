import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-no-commons',
  templateUrl: './no-commons.component.html',
  styleUrls: ['./no-commons.component.css']
})
export class NoCommonsComponent implements OnInit {
name:string='Anastasia';
genre:string='femenino';
invitationMap ={
  'masculino':'invitarlo',
  'femenino':'invitarla'
}
  constructor() { }

  ngOnInit(): void {
    
  }

}
