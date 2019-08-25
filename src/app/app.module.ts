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
    DependenteOpenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
