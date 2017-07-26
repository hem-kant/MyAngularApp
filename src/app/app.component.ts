import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `
            <h1> How to create template in Angular4 and render data from array using ngFor </h1>
            <ul>
                <li *ngFor="let arr of myArr">{{ arr }}</li>
            </ul>  
            
            <ul>
                <li *ngIf="myArr">Array contains records =True!!!</li>
            </ul>

            <div *ngIf="myArr1; then tmpl1 else tmpl2"></div>
            <ng-template #tmpl1>myArr1 is set to True</ng-template>
            <ng-template #tmpl2>myArr1 is set to False</ng-template>
            
            `,
  styleUrls: ['./app.component.css']
  })
export class AppComponent {
  myArr=['Name :- Hem Kant','Designation :- Technical Constulant','Company Name :- Content Bloom Inc.'];
  myArr1=true;
}
