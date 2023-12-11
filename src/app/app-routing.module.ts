import { NgModule } from '@angular/core';
import { RouterModule, Routes,ExtraOptions } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegistrationformComponent } from './registrationform/registrationform.component';
import { GeneralrulesComponent } from './generalrules/generalrules.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';

const routes: Routes = [
  {path: "",component: HomeComponent},
  // { path: "login", component: LoginComponent },
  { path: "registration", component: RegistrationformComponent },
  { path: "rules", component: GeneralrulesComponent },
  { path: "admin", component: LoginComponent },
  {path: "adminpanel",component:AdminpanelComponent}
];

const routerOptions: ExtraOptions = {
  anchorScrolling: "enabled",
  scrollPositionRestoration: "enabled"
};

@NgModule({
  imports: [RouterModule.forRoot(routes,routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
