import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListWritersComponent } from './Components/list-writers/list-writers.component';
import { DetailWriterComponent } from './Components/detail-writer/detail-writer.component';
import { ListBooksComponent } from './Components/list-books/list-books.component';

const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo:'/writers'},
  {path: 'writers', component: ListWritersComponent},
  {path: 'writers/:writerId', component: DetailWriterComponent, children:[
    {path: 'books', component:ListBooksComponent}
  ]},
  {path: '**', redirectTo: '/writers'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
