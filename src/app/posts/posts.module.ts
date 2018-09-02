import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';
import { EditorComponent } from './editor/editor.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [PostComponent, PostsComponent, EditorComponent],
  exports: [PostComponent, PostsComponent, EditorComponent]
})
export class PostsModule {}
