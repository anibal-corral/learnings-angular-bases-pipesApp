import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private primeNGConfig:PrimeNGConfig){}
  ngOnInit(): void {
    this.primeNGConfig.ripple=true;
  }

  title = 'pipesApp';
  name: string= 'Anastasia anais corral montecinos';
  value: number=1000;
  obj={
    name:'anibal'
  }
  showName(){
    console.log(this.name);
    console.log(this.value);
    console.log(this.obj);
    
    
    
  }
}
