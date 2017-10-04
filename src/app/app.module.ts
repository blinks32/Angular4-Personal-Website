import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// components
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header.component';
import { HomeComponent } from './home/home.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { TutorialDetailsComponent } from './tutorial-details/tutorial-details.component';
import { WorksComponent } from './works/works.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { SkillComponent } from './skill/skill.component';
import { DataService } from './data.service';


export const firebaseConfig = {
  apiKey: "AIzaSyAtmkDWOVGMtpKZBTLoic8ipeOgoH1HMP0",
  authDomain: "taxi-59a68.firebaseapp.com",
  databaseURL: "https://taxi-59a68.firebaseio.com",
  storageBucket: "taxi-59a68.appspot.com",
};


export const ROUTES: Routes = [
  {path: '', redirectTo: '/home', pathMatch : 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'tutorials', component: TutorialsComponent },
  { path: 'tutorialdetails', component: TutorialDetailsComponent },
  { path: 'works', component: WorksComponent },
  { path: 'education', component: EducationComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'skills', component: SkillComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    HomeComponent,
    TutorialsComponent,
    TutorialDetailsComponent,
    WorksComponent,
    ContactComponent,
    EducationComponent,
    SkillComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    RouterModule.forRoot(ROUTES, {useHash : true}),
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
