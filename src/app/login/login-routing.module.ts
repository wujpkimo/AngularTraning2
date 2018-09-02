import { NgModule } from '@angular/core';
import { AuthComponent } from './auth/auth.component';
import { RouterModule, Route } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    component: AuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {}
