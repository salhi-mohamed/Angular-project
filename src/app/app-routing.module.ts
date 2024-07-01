import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { GoogleCalendarIntegrationComponent } from './google-calendar-integration/google-calendar-integration.component';
import { InterfaceUpdateNewsComponent } from './interface-update-news/interface-update-news.component';
import { NewsDefineObjComponent } from './news-define-obj/news-define-obj.component';
import { ObjectivesComponent } from './objectives/objectives.component';
import { ListObjectivesComponent } from './list-objectives/list-objectives.component';


const routes: Routes = [
  {path:"login" , component:LoginComponent},
  {path:"about",component:AboutUsComponent},
  {path:"home",component:HomeComponent},
  {path:"subscribe" , component:SubscribeComponent},
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  {path:'GoogleCalendar' , component:GoogleCalendarIntegrationComponent},
  {path:'NewsInterface' , component:InterfaceUpdateNewsComponent},
  {path:'NewsDefineObj' , component:NewsDefineObjComponent},
  {path:'objectives',component:ObjectivesComponent},
  {path:'list-obj',component:ListObjectivesComponent},


  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
