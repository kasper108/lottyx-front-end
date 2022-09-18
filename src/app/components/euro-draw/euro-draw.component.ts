import { Component, OnInit } from '@angular/core';
import {EuroDrawService} from "../../services/euro-draw.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-euro-draw',
  templateUrl: './euro-draw.component.html',
  styleUrls: ['./euro-draw.component.css']
})
export class EuroDrawComponent implements OnInit {

  constructor(private euroDrawService: EuroDrawService){}

  ngOnInit(): void {
  }

  public postNewEuroDraw(newEuroDrawData: NgForm){
    this.euroDrawService.addNewEuroDraw(newEuroDrawData.value).subscribe(
    (resp) => {
      console.log(resp);
      newEuroDrawData.reset();
    },
      (err) => {
        console.log(err);
      }
    );
  }
}
