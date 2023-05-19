import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from "../../interfaces/character.interface";

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[]=[{
    name: 'Trunk',
    power: 10
  }]
  @Output()
  public onDelete:EventEmitter<number> =  new EventEmitter();

  onDeleteCharacter(index:number):void{
    //emitir el ID del personaje
    console.log({index});
    this.onDelete.emit(index);
  }
}
