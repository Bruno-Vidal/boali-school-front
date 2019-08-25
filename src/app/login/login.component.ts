import {Component, Input, OnInit} from '@angular/core';
import {LoginService} from "../services/login.service";
import {LoginRequest} from "../services/dto/login-request";
import {RouterLink} from "../engines/router-link";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input()
  email;
  @Input()
  senha;
  img: string = "https://trello-attachments.s3.amazonaws.com/5d619df7e4e53a53ad7b92d4/5d622897a1258b18a528611c/be608fa381dba188e7d63d133abbbf06/confirmar.svg";
  constructor(private service: LoginService, private routerlink:RouterLink) { }

  ngOnInit() {
  }

  logar(){
    this.service.login(new LoginRequest(this.email,this.senha)).subscribe(response =>{
      localStorage.setItem("token",response);
      this.routerlink.goToForCustumer(response.dashboard)
    },error => {
      // realizar evento de erro
      alert("Login invalido");
      console.log(error);
    });
  }

}
