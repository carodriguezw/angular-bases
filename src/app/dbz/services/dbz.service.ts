import { Injectable } from '@angular/core';
import { v4 } from "uuid";
import { Character } from '../interfaces/character.interface';

console.log(v4);


@Injectable({
  providedIn: 'root'
})

export class DbzService {

    public characters: Character[]= [{
      name: 'Krillin',
      power : 1500
    },{
      name: 'Goku',
      power: 9600
    },{
      name:'Vegeta',
      power: 8500
    }];


    onDeleteCharacter(index:number){
      this.characters.splice(index,1);
    }

    onNewCharacter( character: Character):void{

      //console.log('mainPage');
      //console.log(character);
      this.characters.push(character);
    }



}
