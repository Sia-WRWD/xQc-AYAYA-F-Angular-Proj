import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StudentComponent } from './student-content/student.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { AnimeListComponent } from './anime-list/anime-list.component';
import { MangaListComponent } from './manga-list/manga-list.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SupportComponent } from './support/support.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { FetchComponent } from './fetch/fetch.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    HeaderComponent,
    FooterComponent,
    HomeContentComponent,
    AnimeListComponent,
    MangaListComponent,
    AboutUsComponent,
    SupportComponent,
    UpdateComponent,
    DeleteComponent,
    FetchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    YouTubePlayerModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
