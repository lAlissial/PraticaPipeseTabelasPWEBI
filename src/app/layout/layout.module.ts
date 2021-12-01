import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import {MatMenuModule} from '@angular/material/menu';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule} from '@angular/router';
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [MenuComponent],
  exports: [
    MenuComponent
  ],
    imports: [
        BrowserAnimationsModule,
        CommonModule,
        MatButtonModule,
        MatMenuModule,
        RouterModule,
        MatIconModule
    ]
})
export class LayoutModule { }
