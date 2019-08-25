import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import {Config} from "../config";
import {DependenteRequest} from "../dto/dependente-request";
import {RouterLink} from "../../engines/router-link";

@Injectable({
  providedIn: 'root'
})
export class DependentesService {

  header = new HttpHeaders();

  constructor(private http:HttpClient,private config:Config,private router:RouterLink) {
      this.header.append('Authorization', "Bearer "+ localStorage.getItem('token'))
  }

  cadastrarDependente(request:DependenteRequest): void{

    this.http.post(this.config.SERVER_HOST+"cadastro-dependentes",request,{headers: this.header}).subscribe(response=>{

    },error => {
      if(error.status == 403 || error.status == 401){
        console.log(localStorage.getItem('token'));
        this.config.BASE_HEADERS.headers.delete('Authorization')
        this.router.goTo('/login')
      }
    })
  }
}
