import { NgModule } from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule,} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";

const MaterialComponents = [
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  FormsModule
]

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
