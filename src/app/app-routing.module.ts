import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'home', loadChildren:() => import('./home/home.module').then(m => m.HomeModule)},
  { path: 'about', loadChildren:() => import('./about/about.module').then(m => m.AboutModule)},
  { path: 'resume', loadChildren:() => import('./resume/resume.module').then(m => m.ResumeModule)},
  { path: 'portfolio', loadChildren:() => import('./portfolio/portfolio.module').then(m => m.PortfolioModule)},
  { path: 'contact', loadChildren:() => import('./contact/contact.module').then(m => m.ContactModule)},
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
