import {Component, OnInit} from '@angular/core';

/*
* Então com angular podemos usar de 3 principais métodos para trabalhar dados com nosso html
*
* Interpolação: Interpolação aqui se refere a incorporar dados no html, normalmente usamos os {{}}.
*
* Property binding: é uma forma de associar propriedades entre o template (arquivo html) e o component (arquivo typescript).
* Essa associação pode ser feita utilizando a sintaxe dos colchetes ou das chaves duplas (interpolação).
* Então, property binding no angular, nos permite usar propriedades de elementos da DOM, que antes usariamos com javascript (veja no romms.html)
*
* Event Binding: No Angular temos o banana syntax, que serve para termos angular event no html
* */

@Component({
  selector: 'hotel-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})


export class RoomsComponent implements OnInit {
  //para property binding
  rooms = ['1', '2', '3', '4', '5', '6', '7']
  numberOfRooms = this.rooms.length
  // para interpolação
  recommendedRoom = this.rooms[Math.floor(Math.random() * (this.rooms.length - 1 + 1)) + 1]; // random integer, inside of the range of the arrat
  constructor() {}
  ngOnInit() {}

  selectRoom(){
    this.rooms.splice(this.rooms.indexOf(this.recommendedRoom), 1)
    console.debug(this.rooms)
    this.numberOfRooms = this.rooms.length;
    this.recommendedRoom = this.rooms[Math.floor(Math.random() * (this.rooms.length - 1 + 1)) + 1];
  }
}
