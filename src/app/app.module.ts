import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GoogleCalendarIntegrationComponent } from './google-calendar-integration/google-calendar-integration.component';
import { InterfaceUpdateNewsComponent } from './interface-update-news/interface-update-news.component';
import { NewsDefineObjComponent } from './news-define-obj/news-define-obj.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ObjectivesComponent } from './objectives/objectives.component';
import { ObjectivessComponent } from './objectivess/objectivess.component';




@NgModule({
  declarations: [
                AppComponent,
                SubscribeComponent,
                
               
    
    
                LoginComponent,
                NavbarComponent,
               
                AboutUsComponent,
                FooterComponent,
                HomeComponent,
                
                GoogleCalendarIntegrationComponent,
                                  InterfaceUpdateNewsComponent,
                                  NewsDefineObjComponent,
                                  SidebarComponent,
                                  ObjectivesComponent,
                                  ObjectivessComponent,
                
                

                
                
              
              
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
