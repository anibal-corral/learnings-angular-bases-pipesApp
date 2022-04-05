import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[]=[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
          label: 'Angular Pipes',
          icon: 'pi pi-desktop',
          items:[
           {
             label:'Texts and Dates',
             icon:'pi pi-align-left',
             routerLink:'/'

           },
           {
            label:'Numbers',
            icon:'pi pi-dollar',
            routerLink:'numbers'

          },
          {
            label:'No commons',
            icon:'pi pi-globe',
            routerLink:'no-commons'

          }
         ]
      },
      {
        label:'Customs Pipes',
        icon: 'pi pi-cog'
      }
  ];
  }

}
