import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { DynamicBackgroundComponent } from './dynamic-background/dynamic-background.component';
import { NavComponent } from './nav/nav.component';
import { GalleryComponent } from './gallery/gallery.component';
import { DesignComponent } from './design/design.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  {
    path: 'landing',
    component: DynamicBackgroundComponent,
  },
  {
    path: 'about',
    component: IntroComponent
  },
  {
    path: 'photography',
    component: GalleryComponent
  },
  {
    path: 'design',
    component: DesignComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  { 
    path: '',
    redirectTo: '/landing',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: '/about', }
];

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    DynamicBackgroundComponent,
    NavComponent,
    DesignComponent,
    ContactComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
