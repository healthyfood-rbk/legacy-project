import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../Servies/database.service';
const baseUrl = 'http://localhost:3000'
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
<<<<<<< HEAD
  currentFood :string ='';
  data = [] as any
  http: any;
  constructor(private fetch: DatabaseService) { }
=======
data : any
  constructor(private fetch : DatabaseService) { }
>>>>>>> a8c531dde03b31582b7a848b1b9813d3a01beec3

  ngOnInit(): void {
    this.currentFood = this.fetch.currentFood;
    this.fetch.fetch().subscribe(res => {
      console.log(res)
      this.data = res

      console.log('this is it admin', this.data)
    })
  }
  deleteFood(_id: any): void {
    console.log("done deleted", _id);
    //  this.fetch.delete(`${baseUrl}/${this.data.element._id}`)
    this.fetch.delete(_id)
      .subscribe(

        (response: any) => {
          console.log(response);
        },
        (error: any) => {
          console.log(error);
        });
  }
  

}
