import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SeattleComponent } from './seattle/seattle.component';
import { SanJoseComponent } from './san-jose/san-jose.component';
import { BurbankComponent } from './burbank/burbank.component';
import { DallasComponent } from './dallas/dallas.component';
import { DcComponent } from './dc/dc.component';
import { ChicagoComponent } from './chicago/chicago.component';

const routes: Routes = [
  { path: 'seattle', pathMatch: 'full', component: SeattleComponent },
  { path: 'sanjose', pathMatch: 'full', component: SanJoseComponent },
  { path: 'burbank', pathMatch: 'full', component: BurbankComponent },
  { path: 'dallas', pathMatch: 'full', component: DallasComponent },
  { path: 'dc', pathMatch: 'full', component: DcComponent },
  { path: 'chicago', pathMatch: 'full', component: ChicagoComponent },
  { path: '', pathMatch: 'full', component: SeattleComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }