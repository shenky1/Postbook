import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PostComponent } from './components/post/post.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpService } from './core/services/http.service';
import { DataService } from './core/services/data.service';
import { CommentComponent } from './components/comment/comment.component';
import { AppBarComponent } from './components/app-bar/app-bar.component';
import { CapitalizePipe } from './core/pipes/capitalize.pipe';
import { SinglePostComponent } from './components/single-post/single-post.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostListComponent,
    PageNotFoundComponent,
    CommentComponent,
    AppBarComponent,
    CapitalizePipe,
    SinglePostComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule, AppRoutingModule],
  providers: [HttpService, DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
