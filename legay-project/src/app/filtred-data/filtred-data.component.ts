import { Component, OnChanges, OnInit } from '@angular/core';
import { DatabaseService } from '../Servies/database.service';

@Component({
  selector: 'app-filtred-data',
  templateUrl: './filtred-data.component.html',
  styleUrls: ['./filtred-data.component.css']
})
export class FiltredDataComponent implements OnInit,OnChanges {
message : any
  constructor(private fetch:DatabaseService) { }

  ngOnInit(): void {
    this.sub()
    console.log(this.message)
  }
  ngOnChanges(){
    this.sub()
  }
  sub(){
  
      this.fetch.sub().subscribe(message => this.message = message)
    
  }
}
