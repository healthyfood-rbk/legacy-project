import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DatabaseService } from '../../Servies/database.service';
const baseUrl = 'http://localhost:3000'

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  id : any ;
  constructor( private fetch:DatabaseService) { }
  data = {
    imageUrl:"",
    ingredients:"",
    name:"",
    price: ""
  } as any
  ngOnInit(): void {
  }
  updateFood(data:any): void {
    
    this.id = this.fetch.currentFood;
    
    console.log("done ", this.id);
    //  this.fetch.delete(`${baseUrl}/${this.data.element._id}`)
    this.fetch.update(this.id,data)
      .subscribe(

        (response: any) => {
          console.log(response);
        },
        (error: any) => {
          console.log(error);
        });
  }
}
