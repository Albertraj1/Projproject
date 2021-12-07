import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SectionComponent } from './section/section.component';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { SimplywasteComponent } from './simplywaste/simplywaste.component';


const routes: Routes = [

  {path:'home', component:HomeComponent},
  {path:'section', component:SectionComponent},
  {path:'signup', component:SignupComponent},
  {path:'about',component:AboutComponent},
  {path: 'login',component:LoginComponent},
  {path: 'contact', component:ContactComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path: 'simplywaste', component:SimplywasteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
