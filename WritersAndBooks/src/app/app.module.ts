import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListWritersComponent } from './Components/list-writers/list-writers.component';
import { ListBooksComponent } from './Components/list-books/list-books.component';
import { DetailWriterComponent } from './Components/detail-writer/detail-writer.component';

@NgModule({
  declarations: [
    AppComponent,
    ListWritersComponent,
    ListBooksComponent,
    DetailWriterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
