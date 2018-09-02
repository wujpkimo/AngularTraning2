import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { PostComponent } from './post/post.component';
import { EditorComponent } from './editor/editor.component';
import { PostsComponent } from './posts/posts.component';

const routes: Route[] = [
  {
    path: '',
    redirectTo: 'posts',
    // pathMatch用來決定網址的路由 若為full時，網址路由與設定路由
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule {}
