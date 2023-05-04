import { Component, OnInit } from '@angular/core';
import { WriterServiceService } from '../../service/writer-service.service';
import { Writers } from 'src/app/Models/writers.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-writers',
  templateUrl: './list-writers.component.html',
  styleUrls: ['./list-writers.component.scss']
})
export class ListWritersComponent implements OnInit {
  writeris: Writers[] = [];
  constructor(
    private router: Router,
    private writerService: WriterServiceService
  ){  }
  async ngOnInit() {
    try{
      this.writeris = await this.writerService.getAllPromise();
    }catch(error){
      console.log(error);
    }
  }

  async onCountry($event:any){
    try{
      if($event.target.value=='Todos') this.writeris = await this.writerService.getAllPromise();
      else this.writeris = await this.writerService.getCountry($event.target.value);
    }catch(error){
      alert("error: " + error);
    }
  }

  bookWriters(index:number){
    
    this.router.navigate(['/writers/'+index+'/books']);
  }
}
