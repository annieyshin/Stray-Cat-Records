import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent }   from './about/about.component';
import { MarketplaceComponent }   from './marketplace/marketplace.component';
import { AlbumDetailComponent }   from './album-detail/album-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
   path: 'about',
   component: AboutComponent
  },
  {
   path: 'nick',
   component: MarketplaceComponent
 },
 {
  path: 'albums/:id',
  component: AlbumDetailComponent
  }
  // Notice the dynamic :id segment in the route's path property above. By including the : before id we make the last portion of the path a variable instead of a literal string. :id will be replaced with the id number of the Album whose details we're viewing.
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
