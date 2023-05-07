import { Component } from '@angular/core';
import { withInMemoryScrolling } from '@angular/router';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name:string = 'Superman';
  public age:number = 42;

get capitalizaName():string{
  return this.name.toUpperCase();
}

getHeroDescription():string{
  return `${this.name} - ${this.age} - ${this.name}`;
}

changeHero():void{
  this.name='Cesar';
}
changeAge():void{
  this.age=45;
}
reset():void{
  this.name = 'Superman';
  this.age= 42;
}

}


