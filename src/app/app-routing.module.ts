import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { GoogleCalendarIntegrationComponent } from './google-calendar-integration/google-calendar-integration.component';


const routes: Routes = [
  {path:"login" , component:LoginComponent},
  {path:"about",component:AboutUsComponent},
  {path:"home",component:HomeComponent},
  {path:"subscribe" , component:SubscribeComponent},
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  {path:'GoogleCalendar' , component:GoogleCalendarIntegrationComponent}


  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
