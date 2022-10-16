import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const Navigation = {
  Home: 'home'
}

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: Navigation.Home, component: HomeComponent },
  { path: '*', pathMatch: 'full', redirectTo: Navigation.Home }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
