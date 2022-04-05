import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';


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
clients:string[]=[
 'Anastasia','Pocoyo','Erminda','Eli'
]
clientsMap={
'=0':'no tenemos ningun cliente esperando.',
'=1':'tenemos un cliente esperando',
'=2':'tenemos dos clientes esperando',
'other':'tenemos # clientes esperando'
}
  constructor() { }

  ngOnInit(): void {
    
  }
  changePerson(){
    this.name='Pocoyo';
    this.genre='masculino';
  }
  deleteClient(){
    this.clients.shift();
  }
  person={
    name:'Anastasia',
    age:'3',
    address:'Santiago, Chile'
  }

  dbz=[{
    name:'Goku',
    fly:true
  },
  {
    name:'Vegeta',
    fly:true
  },
  {
    name:'Roshi',
    fly:true
  }]

  myObservable =interval(1000);
  myPromes=new Promise((resolve, reject)=>{
setTimeout(()=>{
  resolve('End of promise')
},3500)
  });
    


}
