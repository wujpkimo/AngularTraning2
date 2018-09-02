import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './layout/main/main.component';
import { AuthComponent } from './login/auth/auth.component';
import { PostComponent } from './posts/post/post.component';
import { EditorComponent } from './posts/editor/editor.component';
import { PostsComponent } from './posts/posts/posts.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'posts',
        //pathMatch用來決定網址的路由 若為full時，網址路由與設定路由
        pathMatch: 'full'
      },
      {
        path: 'posts',
        component: PostsComponent
      },
      {
        path: 'post/:id',
        component: PostComponent
      },
      {
        path: 'create',
        component: EditorComponent
      }
    ]
  },
  {
    path: 'login',
    component: AuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
