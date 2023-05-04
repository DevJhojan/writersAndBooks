import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Writers } from 'src/app/Models/writers.models';
import { WriterServiceService } from 'src/app/service/writer-service.service';

@Component({
  selector: 'app-detail-writer',
  templateUrl: './detail-writer.component.html',
  styleUrls: ['./detail-writer.component.scss'],
})
export class DetailWriterComponent implements OnInit {
  writer: Writers;
  id: number;
  constructor(
    private router: Router,
    private activedRoute: ActivatedRoute,
    private writerService: WriterServiceService
  ) {
    this.writer = new Writers();
  }

  ngOnInit():void{
    this.activedRoute.params.subscribe(async params=>{
      this.id = parseInt(params['writerId']);
      this.writer = await this.writerService.getById(this.id);
    })
  }
  
}
