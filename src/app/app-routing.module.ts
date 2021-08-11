import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { PostGuard } from './core/guards/post.guard';


const appRoutes: Routes = [
  {
    path: 'post/:id',
    component: SinglePostComponent,
    canActivate: [PostGuard]
  },
  {
    path: 'posts',
    component: PostListComponent
  },
  { path: '',   redirectTo: '/posts', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
