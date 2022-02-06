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
          console.log("iamge", this.beerList.image_url);
      } ,
      error => {
          console.log("some error occured");
          console.log(error.errorMessage);
      }
  );
  }
}
