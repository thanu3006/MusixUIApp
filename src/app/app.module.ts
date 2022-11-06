import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './music-component/home/home.component';
import { HeaderComponent } from './music-component/header/header.component';
import { DashboardComponent } from './music-component/dashboard/dashboard.component';
import { FavouritesComponent } from './music-component/favourites/favourites.component';
import { TopPlaylistsComponent } from './music-component/top-playlists/top-playlists.component';
import { RecommendationsComponent } from './music-component/recommendations/recommendations.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegisterSService } from './auth/register-s.service';
import { InterceptorServService } from './auth/interceptor-serv.service';
import { MusicService } from './auth/music.service';
import { ContainerComponent } from './music-component/container/container.component';

const routes: Routes = [
  {path:'', redirectTo:'hover',pathMatch:'full'},
  // {path:'hover',component:HoverComponent},
  { path: 'home', component:HomeComponent},
   {path: 'header', component:  HeaderComponent },
   {path:'login', component:LoginComponent},
   {path:'register',component:RegisterComponent},
   {path: 'dashboard', component: DashboardComponent},
   {path: 'favourite', component: FavouritesComponent},
   {path: 'recommendation', component: RecommendationsComponent}
//  {path: 'signup', component: SignupComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HeaderComponent,    
    DashboardComponent,
    FavouritesComponent,
    TopPlaylistsComponent,
    RecommendationsComponent,
    ContainerComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: InterceptorServService, multi: true},RegisterSService,InterceptorServService,MusicService],
  exports: [RouterModule],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
