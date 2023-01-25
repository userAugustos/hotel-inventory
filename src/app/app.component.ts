import { Component } from '@angular/core';

// components são seus views (MVC)

/*
* Vamos falar desse decorator @Component
* Quando cria um component, o que você realmente cria é uma view, o que vai acontecer na tela
* *selector*: então, se você for ao nosso index.html, vai ver que troquei a tag html, para app-start (assim como aqui a baixo)
* assim, nosso selector, sabe onde jogar nosso component. (lembrando que se mudar o prefixo, vai precisar mudar no angular.json também)
* *templateUrl*: É o html como qual nosso component vai conversar, passar o css e o js, e o que ele vai mandar pro nosso selector
* styleUrls: É o css que passamos ao nosso html
*
* */

@Component({
  selector: 'hotel-start',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hotel Inventory';
}
