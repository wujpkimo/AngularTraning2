import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { NavComponent } from './layout/nav/nav.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LoginModule } from './login/login.module';
import { PostsModule } from './posts/posts.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    LoginModule,
    PostsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [NavComponent, FooterComponent]
})
@Injectable({
  providedIn: LayoutModule
})
export class AppModule {}
