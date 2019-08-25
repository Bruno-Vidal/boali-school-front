import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { SloganComponent } from './slogan/slogan.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { IntroComponent } from './intro/intro.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { DependentesComponent } from './dependentes/dependentes.component';
import { DependenteOpenComponent } from './dependente-open/dependente-open.component';
import { MainDependenteComponent } from './main-dependente/main-dependente.component';
import { CadastroDependenteComponent } from './cadastro-dependente/cadastro-dependente.component';
import {FormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    SloganComponent,
    LoginComponent,
    CadastroComponent,
    IntroComponent,
    CardapioComponent,

    DependentesComponent,
    DependenteOpenComponent,
    MainDependenteComponent,
    CadastroDependenteComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
