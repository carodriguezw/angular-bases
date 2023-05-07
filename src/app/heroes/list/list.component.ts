import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroNames:string[] = ['Goku','Vegeta','Truks','Gojan','Freezer','Chavo del 8','Super Raton'];

  public deleteHeroe?:string;

renovarList():void{
  this.deleteHeroe = this.heroNames.pop();

}



}
