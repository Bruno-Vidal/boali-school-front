import {HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class Config {
  public SERVER_HOST: string = 'http://localhost:8080/boali-api/';
  // public SERVER_HOST: string = 'http://d-portalriscosacado.original.com.br:8120/mcsv-reip';
  public BASE_HEADERS =   {headers: new HttpHeaders({
                                                                'Authorization': 5,
                                                                'Allow':['POST'],
                                                                'Content-Type': 'application/json'
                                                              })};
}
