import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../Servies/database.service';

@Component({
  selector: 'app-filtred-data',
  templateUrl: './filtred-data.component.html',
  styleUrls: ['./filtred-data.component.css']
})
export class FiltredDataComponent implements OnInit {
message : any
  constructor(private fetch:DatabaseService) { }

  ngOnInit(): void {
    console.log(this.message)
  }
  sub(){

      this.fetch.currentMessage.subscribe(message => this.message = message)

  }
}
