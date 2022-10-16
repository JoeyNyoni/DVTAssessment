import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistViewComponent } from './pages/artist-view/artist-view.component';
import { HomeComponent } from './pages/home/home.component';

export const Navigation = {
  Home: 'home',
  ArtistView: 'artistView'
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
  { path: Navigation.ArtistView, component: ArtistViewComponent},
  { path: '*', pathMatch: 'full', redirectTo: Navigation.Home }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
