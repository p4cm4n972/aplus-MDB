import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/**
 * ADD ROUTES
 */
import { HomeComponent } from './home/home.component';
import { PresentationComponent } from './presentation/presentation.component';
import { CompetenceComponent } from './competence/competence.component';
import { ProduitComponent } from './produit/produit.component';
import { ProduitListComponent } from './produit-list/produit-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'presentation', component: PresentationComponent },
  { path: 'competence', component: CompetenceComponent },
  { path: 'produit', component: ProduitComponent },
  { path: 'produit/:id', component: ProduitListComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
