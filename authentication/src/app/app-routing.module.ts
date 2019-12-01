import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { AuthGuard } from './auth.guard';
import {AccountComponent} from './account/account.component';
import {ResetpasswordComponent} from './resetpassword/resetpassword.component';
import {FeedbacksComponent} from './feedbacks/feedbacks.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/events',
    pathMatch: 'full'
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'account',
    canActivate: [AuthGuard],
    component: AccountComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'special',
    component: SpecialEventsComponent
  },
  {
    path: 'reset',
    component : ResetpasswordComponent
  },
  {
    path: 'feedback',
    component : FeedbacksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
