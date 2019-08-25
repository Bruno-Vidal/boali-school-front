import {Component, Input, OnInit} from '@angular/core';
import {RouterLink} from "../engines/router-link";
import {DependenteRequest} from "../services/dto/dependente-request";
import {DependentesService} from "../services/dependentes/dependentes.service";

@Component({
  selector: 'app-cadastro-dependente',
  templateUrl: './cadastro-dependente.component.html',
  styleUrls: ['./cadastro-dependente.component.css']
})
export class CadastroDependenteComponent implements OnInit {

  constructor(private router:RouterLink,private service:DependentesService) { }

  @Input()
  nome:string;

  @Input()
  dt_nascimento:string;

  @Input()
  email:string;

  @Input()
  senha:string;

  @Input()
  confirma_senha:string;


  ngOnInit() {
  }

    telaCardapio() {
        this.router.goTo('dashboard-representantes')
    }
  cadastrarDependente(){
    // depois fazer validacao

    let request: DependenteRequest = new DependenteRequest();
    request.data_nascimento = this.dt_nascimento;
    request.email = this.email;
    request.nome = this.nome;
    request.senha = this.nome;

    this.service.cadastrarDependente(request);
  }
}
