import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { CadastrardependenteComponent } from './cadastro-dependente/cadastrodependente.component';
const routes: Routes = [
  { path: 'cadastrar', component: CadastrarComponent },
  { path: 'cadastro-dependente', component: CadastroDependenteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
