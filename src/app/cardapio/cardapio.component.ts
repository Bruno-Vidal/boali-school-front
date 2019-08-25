import { Component, OnInit } from '@angular/core';
import {RouterLink} from "../engines/router-link";

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent implements OnInit {

  constructor(private router:RouterLink) { }

  ngOnInit() {
  }

  telaDependentes() {
    this.router.goTo('cadastro-dependente')
  }

}
