import { Component, OnInit } from '@angular/core';
import {EuroDrawService} from "../../service/euro-draw.service";

@Component({
  selector: 'app-euro-draw-list',
  templateUrl: './euro-draw-list.component.html',
  styleUrls: ['./euro-draw-list.component.css']
})
export class EuroDrawListComponent implements OnInit {

  euroDrawsList = null;

  constructor(private euroDrawService: EuroDrawService) {
    this.getAllEuroDraws();
  }

  ngOnInit(): void {
  }


  public getAllEuroDraws(){
    this.euroDrawService.findAllEuroDraws().subscribe(
      (resp) => {
        console.log(resp);
        // @ts-ignore
        this.euroDrawsList = resp;
      },
      (err) =>{
        console.log(err);
      }
    );
  }

}
