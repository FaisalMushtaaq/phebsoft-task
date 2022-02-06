import { Component } from '@angular/core';
import { SharedServiceService } from './shared-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'phebsoft-task';
  beerList: any;

  constructor(private service: SharedServiceService){
       
  }

  ngOnInit(): void {
    this.getList();
  }

  getList(){
    this.service.getBeerList().subscribe(
      data => {
          this.beerList = data;
          // console.log(this.dictData);
      } ,
      error => {
          console.log("some error occured");
          console.log(error.errorMessage);
      }
  );
  }
  // users = [
  //   { id: 1001, label: 'Roma', lat: 42, lng: 12 },
  //   { id: 1002, label: 'Copenaghen', lat: 56, lng: 14},
  //   { id: 1003, label: 'Gibuti', lat: 11, lng: 44}
  // ];
}
