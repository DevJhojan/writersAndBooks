import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../service/books.service';
import { Books } from 'src/app/Models/books.models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.scss']
})
export class ListBooksComponent implements OnInit{
  bookings: Books[] = [];
  id: number;
  constructor(
    private bookservice: BooksService,
    private route: ActivatedRoute
  ){}

   ngOnInit():void {
    this.route.parent.params.subscribe(async params =>{
      this.bookings = await this.bookservice.getByWriterId(parseInt(params['writerId']));
    })
  }
}
