import {HttpHeaders} from "@angular/common/http";

export class Config {
  public SERVER_HOST: string = 'http://localhost:8120/boali-api';
  // public SERVER_HOST: string = 'http://d-portalriscosacado.original.com.br:8120/mcsv-reip';
  public BASE_HEADERS =   {headers: new HttpHeaders({
                                                                'Allow':['POST'],
                                                                'Content-Type': 'application/json'
                                                              })};
}
