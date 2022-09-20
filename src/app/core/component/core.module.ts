import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';

 @NgModule ({
    declarations:[
        NavBarComponent,
        FooterComponent,
    ],
    imports: [
        
    ],
    exports: [
        NavBarComponent,
        FooterComponent
    ]
 })
 export class CoreModule {

 }