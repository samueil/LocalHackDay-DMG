import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {FeedbackFormComponent} from "./components/feedback-form.component";
import {HotListComponent} from "./components/hot-list.component";
import {FreshListComponent} from "./components/fresh-list.component";
import {LoginComponent} from "./components/login.component";
import {RegisterComponent} from "./components/register.component";

const appRoutes: Routes = [

  {
    path: 'fresh',
    component: FreshListComponent
  },
  {
    path: 'hot',
    component: HotListComponent
  },
  {
    path: 'new',
    component: FeedbackFormComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
