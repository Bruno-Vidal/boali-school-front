import {Injectable} from "@angular/core";
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterLink {
  constructor(private router:Router){
  }

  public goTo(rota:string) {
    this.router.navigate([rota]);
  }

  public goToForCustumer(role: string) {
    if('REPRESENTANTES' === role)this.goTo('dashboard-representantes');
    if('DEPENDENTES' === role)this.goTo('dashboard-dependentes');
    if('PARTICIPANTES' === role)this.goTo('dashboard-participante');
  }
}
