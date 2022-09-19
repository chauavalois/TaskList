import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { NavBarComponent } from './nav-bar/nav-bar.component';

 @NgModule ({
    declarations:[
        NavBarComponent,
    ],
    imports: [
        // RouterModule.forChild([
        //     {
        //         path: '**', component: Error404Component
        //     }
        // ])
    ],
    exports: [
        NavBarComponent
    ]
 })
 export class CoreModule {

 }