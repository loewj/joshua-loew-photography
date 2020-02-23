import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { DynamicBackgroundComponent } from './dynamic-background/dynamic-background.component';
import { NavComponent } from './nav/nav.component';

const appRoutes: Routes = [
  {
    path: 'landing',
    component: DynamicBackgroundComponent,
  },
  {
    path: 'home',
    component: IntroComponent
  },
  { 
    path: '',
    redirectTo: '/landing',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: '/home', }
];

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    DynamicBackgroundComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
