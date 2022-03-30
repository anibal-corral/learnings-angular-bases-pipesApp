import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

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
