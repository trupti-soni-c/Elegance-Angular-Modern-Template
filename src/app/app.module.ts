import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SocialSidebarComponent } from './social-sidebar/social-sidebar.component';

import { HomeComponent } from './components/home/home.component';

import { ServicesComponent } from './components/services/services.component';
import { MySkillsComponent } from './components/my-skills/my-skills.component';
import { MyWorkComponent } from './components/my-work/my-work.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SocialSidebarComponent,
    HomeComponent,
  
    ServicesComponent,
    MySkillsComponent,
    MyWorkComponent,
    TestimonialsComponent,
    ContactMeComponent,
    AboutmeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
