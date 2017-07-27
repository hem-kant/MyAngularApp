import { Component } from '@angular/core';
import { DataserviceService } from './dataservice.service';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',

  template: `
            <!-- <p> {{ someProperty }} </p> -->
            <h1>My Angular4-App</h1>
            <img  width="300" src="{{ logo }}">
            <!-- <img  width="300" [src]="logo">
            <img  width="300" bind-src="logo"> -->
            <ul>
                <li *ngFor="let arr of myArr">{{ arr }}</li>
            </ul>  
            <button (click)="myEvent($event)">OnClick-Event</button>
            <button (mouseenter)="myEvent($event)">OnClick-hover</button>
            <!-- <ul>
                <li *ngIf="myArr">Array contains records =True!!!</li>
            </ul>

            <div *ngIf="myArr1; then tmpl1 else tmpl2"></div>
            <ng-template #tmpl1>myArr1 is set to True</ng-template>
            <ng-template #tmpl2>myArr1 is set to False</ng-template>  -->
            <p [@myAwesomeAnimation]='state' (click)="animateMe()"> I will animate</p>
            `,
  //styleUrls: ['./app.component.css'],
  styles: [`
          p{
            width: 200px;
            background: lightgray;
            margin: 100px auto ;
            text-align:center;
            padding:20px;
            font-size:1.5em;
          }
  
  `],
  animations: [
    trigger('myAwesomeAnimation',[
        state('small',style({
          tranform: 'scale(1)',
        })),
        state('large',style({
          tranform: 'scale(1.2)',
        })),
        transition('small <=> large', animate('300ms ease-in')),
    ]),
  ]
  })
export class AppComponent {

  state: string = 'small'
  // myEvent(event)
  // {
  //   console.log(event);
  // }
constructor(private dataservice:DataserviceService){

}
animateMe(){
  this.state = (this.state === 'small' ? 'large' : 'small');
}
  someProperty:string = '';
  ngOnInt() {
    console.log(this.dataservice.cars);

    this.someProperty = this.dataservice.myData();
  }
 
  logo='https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/3/005/018/338/330787a.jpg';
  myArr=['Name :- Hem Kant','Designation :- Technical Constulant','Company Name :- Content Bloom Inc.'];
  //myArr1=true;
}
