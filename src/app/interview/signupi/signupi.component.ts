import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signupi',
  templateUrl: './signupi.component.html',
  styleUrls: ['./signupi.component.css']
})
export class SignupiComponent {

  constructor(private route:Router){}
  
  submit(){
    this.route.navigate(['login']);
   
  }

}
