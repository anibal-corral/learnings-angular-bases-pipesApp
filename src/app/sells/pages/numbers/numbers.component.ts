import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {

  sells:number =283749000.247;
  percentage:number=0.19;
  constructor() { }

  ngOnInit(): void {
  }

}
