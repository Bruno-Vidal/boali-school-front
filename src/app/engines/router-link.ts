import {Injectable} from "@angular/core";
import { Router } from '@angular/router';
import {Role} from "../services/dto/role";

@Injectable({
  providedIn: 'root'
})
export class RouterLink {
  constructor(private router:Router){
  }

  public goTo(rota:string){
    this.router.navigate([rota]);

  }
  public goToForCustumer(role:Role){
    console.log(role)
    switch (role) {
      case Role.DEPENDENTES:
        this.goTo('/dashboard-dependentes');
        break;
      case Role.PARCEIROS:
        this.goTo('/dashboard-parceiros');
        break;
      case Role.REPRESENTANTES:
        this.goTo('/dashboard-representantes');
    }
  }
}
