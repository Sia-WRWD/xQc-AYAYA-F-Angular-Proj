import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from '../app/student-content/student.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AnimeListComponent } from './anime-list/anime-list.component';
import { AppComponent } from './app.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { MangaListComponent } from './manga-list/manga-list.component';
import { SupportComponent } from './support/support.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { FetchComponent } from './fetch/fetch.component';

const routes: Routes = [
  {path: 'Student', component: StudentComponent},
  {path: 'Home', component: HomeContentComponent},
  {path: 'AnimeList', component: AnimeListComponent},
  {path: 'MangaList', component: MangaListComponent},
  {path: 'AboutUs', component: AboutUsComponent},
  {path: 'Support', component: SupportComponent},
  {path: 'Update', component: UpdateComponent},
  {path: 'Delete', component: DeleteComponent},
  {path: 'Fetch', component: FetchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
