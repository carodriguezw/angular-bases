import { Character } from './../interfaces/character.interface';
import { Injectable } from '@angular/core';
import { v4 as uuid } from "uuid";



@Injectable({
  providedIn: 'root'
})

export class DbzService {

    public characters: Character[]= [{
      id : uuid(),
      name: 'Krillin',
      power : 1500
    },{
      id :  uuid(),
      name: 'Goku',
      power: 9600
    },{
      id: uuid(),
      name:'Vegeta',
      power: 8500
    }];


    onDeleteCharacter(index:number){
      this.characters.splice(index,1);
    }

    addCharacter( character: Character):void{
      const newCharacter: Character = {id: uuid(), ...character };
      this.characters.push(newCharacter);
    }


    deleteCharacteByid(id:string){
      this.characters = this.characters.filter( Character => Character.id != id);
    }


}
