
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DatabaseService } from '../../Servies/database.service';
const baseUrl = 'http://localhost:3000'
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  currentFood = null;
  data = [] as any
  http: any;
  constructor(private fetch:DatabaseService) { }

  ngOnInit(): void {
    this.fetch.fetch().subscribe(res =>{
      console.log(res)
      this.data = res
    
      console.log('this is it',this.data)
    })
  }
  //DeleteFood
  deleteFood( _id: any ): void {
      console.log("done deleted",_id);
  //  this.fetch.delete(`${baseUrl}/${this.data.element._id}`)
  this.fetch.delete(_id)
      .subscribe(
        
        (        response: any) => {console.log(response);
        },
        (        error: any) => {
          console.log(error);
        });
  }

  //updateFood
  updateFood( _id: any ): void {
//     console.log("done updated",_id);
// //  this.fetch.delete(`${baseUrl}/${this.data.element._id}`)
//   this.fetch.update(_id,{})
//     .subscribe(
      
//       (        response: any) => {console.log(response);
//       },
//       (        error: any) => {
//         console.log(error);
//       });
}


}
