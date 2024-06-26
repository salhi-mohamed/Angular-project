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
import { HomeOtherComponent } from './home-other/home-other.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GoogleCalendarIntegrationComponent } from './google-calendar-integration/google-calendar-integration.component';




@NgModule({
  declarations: [
                AppComponent,
                SubscribeComponent,
                
               
    
    
                LoginComponent,
                NavbarComponent,
               
                AboutUsComponent,
                FooterComponent,
                HomeComponent,
                HomeOtherComponent,
                GoogleCalendarIntegrationComponent,
                
                

                
                
              
              
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
