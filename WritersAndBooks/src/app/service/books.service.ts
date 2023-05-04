import { Injectable } from '@angular/core';
import { Books } from '../Models/books.models';
import { LIBROS } from '../db/libros.db';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  getByWriterId(id):Promise<Books[]>{
    return new Promise((resolve, reject)=>{
      const bookFilter = LIBROS.filter(book=>{
        return book.escritor === id;
      });
      resolve(bookFilter);
    })
  }
}
