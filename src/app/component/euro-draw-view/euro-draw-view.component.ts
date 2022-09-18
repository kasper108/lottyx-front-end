import { Component, OnInit } from '@angular/core';
import {EuroDrawService} from "../../service/euro-draw.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-euro-draw-view',
  templateUrl: './euro-draw-view.component.html',
  styleUrls: ['./euro-draw-view.component.css']
})
export class EuroDrawViewComponent implements OnInit {

  constructor(private euroDrawService: EuroDrawService) { }

  ngOnInit(): void {
  }

  public addNewOrEditEuroDraw(addNewOrEditEuroDrawForm: NgForm){
    this.euroDrawService.saveNewOrEditEuroDraw(addNewOrEditEuroDrawForm.value).subscribe(
      (resp) => {
        console.log(resp);
        addNewOrEditEuroDrawForm.reset();
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
