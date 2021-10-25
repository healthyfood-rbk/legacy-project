import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DatabaseService } from '../../Servies/database.service';
const baseUrl = 'http://localhost:3000'

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css']
})
export class AddFoodComponent implements OnInit {
  data = {
    imageUrl:"",
    ingredients:"",
    name:"",
    price: ""
  } as any
  constructor(private fetch:DatabaseService ) { }

  ngOnInit(): void {
  }
  createFood( data:any): void {
   

    this.fetch.create(data)
    .subscribe(
      (response : any) => {
        console.log(response);
        console.log("done created",data);
      },
      (error:any) => {
        console.log(error);
      });
}

}
