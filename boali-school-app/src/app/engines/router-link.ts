import {Injectable} from "@angular/core";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterLink {
  constructor(private router:Router){
  }

  public goTo(rota:string){
    this.router.navigate([rota]);

  }
}
