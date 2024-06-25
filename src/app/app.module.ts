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
                
                

                
                
              
              
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
