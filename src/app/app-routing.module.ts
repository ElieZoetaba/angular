import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery/gallery.component';
import { PersonnelComponent } from './personnel/personnel.component';
import { MainComponent } from './main/main.component';

// const appRoutes: Routes = [
//   { path: 'gallery', component: GalleryComponent },
//   { path: 'personnel', component: PersonnelComponent },
//   {
//     path: 'main',
//     component: MainComponent,
//     data: { title: 'All site' }
//   },
//   { path: '',
//     redirectTo: '/main',
//     pathMatch: 'full'
//   },
//   // { path: '**', component: PageNotFoundComponent }
// ];


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})


export class AppRoutingModule { }
