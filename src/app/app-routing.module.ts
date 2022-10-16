import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { HomeComponent } from './pages/home/home.component';

export const Navigation = {
  Home: 'home'
}

const routes: Routes = [
  { 
    path: '', component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: Navigation.Home,
        pathMatch: 'full'
      },
    ]
  },
  { path: Navigation.Home, component: HomeComponent },
  { path: '*', pathMatch: 'full', redirectTo: Navigation.Home }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
