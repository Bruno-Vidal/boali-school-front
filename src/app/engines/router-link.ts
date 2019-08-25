import {Injectable} from "@angular/core";
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterLink {
  constructor(private router:Router){
  }

  public goTo(rota:string){
      console.log(rota);
    this.router.navigate([rota]);

  }

    goToForCustumer(role: string) {
      4
    }
}
