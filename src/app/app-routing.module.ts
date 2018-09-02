import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { MainComponent } from './layout/main/main.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: '',
    // component: MainComponent,
    loadChildren: './posts/posts.module#PostsModule'
  }
];

@NgModule({
  // 若要將router隱藏可使用usehash參數
  // imports: [RouterModule.forRoot(routes, { useHash: true })],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
