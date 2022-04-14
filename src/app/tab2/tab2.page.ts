import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

  doarAlimentos(){
    window.open('https://www.google.com/maps/search/Ponto+Doacao+Alimentos+Uberaba/@-19.7474901,-47.9301705,14z/data=!3m1!4b1','_blank').focus();
  }

  doarRoupas(){
    window.open('https://www.google.com/maps/search/Ponto+Doacao+Alimentos+Uberaba/@-19.7474901,-47.9301705,14z/data=!3m1!4b1','_blank').focus();
  }

  doarSangue(){
    window.open('https://www.google.com/maps/search/Ponto+Doacao+Alimentos+Uberaba/@-19.7474901,-47.9301705,14z/data=!3m1!4b1','_blank').focus();
  }

}
