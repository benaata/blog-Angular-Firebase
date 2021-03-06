import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SignupComponent} from './auth/signup/signup.component';
import {SigninComponent} from './auth/signin/signin.component';
import {PostListComponent} from './post-list/post-list.component';
import {SinglePostComponent} from './post-list/single-post/single-post.component';
import {PostFormComponent} from './post-list/post-form/post-form.component';
import {HeaderComponent} from './header/header.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from './services/auth.service';
import {PostsService} from './services/posts.service';
import {AuthGuardService} from './services/auth-guard.service';
import {RouterModule} from '@angular/router';


const appRoutes: Routes = [
    {path: 'auth/signup', component: SignupComponent},
    {path: 'auth/signin', component: SigninComponent},
    {path: 'posts', component: PostListComponent},
    {path: 'posts/new', component: PostFormComponent},
    {path: 'posts/view/:id', component: SinglePostComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        SignupComponent,
        SigninComponent,
        PostListComponent,
        SinglePostComponent,
        PostFormComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [
        AuthService, PostsService, AuthGuardService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
