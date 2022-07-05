import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { PersonnelComponent } from './personnel/personnel.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ProfesorsComponent } from './profesors/profesors.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { IncriptionComponent } from './incription/incription.component';
import { FooterComponent } from './footer/footer.component';
import { AProposComponent } from './a-propos/a-propos.component';
import { DescriptionComponent } from './description/description.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    PersonnelComponent,
    GalleryComponent,
    ProfesorsComponent,
    BlogComponent,
    ContactComponent,
    IncriptionComponent,
    FooterComponent,
    AProposComponent,
    DescriptionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
