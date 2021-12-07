import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { NaviComponent } from './navi/navi.component';
import { SectionComponent } from './section/section.component';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';
import {MatCardModule} from '@angular/material/card';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { SimplywasteComponent } from './simplywaste/simplywaste.component';


@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    NaviComponent,
    SectionComponent,
    SignupComponent,
    AboutComponent,
    LoginComponent,
    ContactComponent,
    SimplywasteComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
