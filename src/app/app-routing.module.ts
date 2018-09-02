import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './layout/main/main.component';
import { AuthComponent } from './login/auth/auth.component';
import { PostComponent } from './posts/post/post.component';
import { EditorComponent } from './posts/editor/editor.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'posts',
        pathMatch: 'full'
      },
      {
        path: 'posts',
        component: PostComponent
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
