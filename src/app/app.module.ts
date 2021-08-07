import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PostComponent } from './components/post/post.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpService } from './services/http.service';
import { DataService } from './services/data.service';
import { CommentComponent } from './components/comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostListComponent,
    PageNotFoundComponent,
    CommentComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [HttpService, DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
