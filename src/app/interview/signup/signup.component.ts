import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { sign } from 'src/app/sign';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  myForm: any;
  cred:sign=new sign("","","","");
  constructor(private route:Router){}
  
  submit(){
    
    this.route.navigate(['login']);
  
   
  }
    password: string | undefined;
   re_password: string | undefined;
  passwordsMatch: boolean = true;

  // constructor() { }
  public registerNow(){
    let resp=this.service.doRegistration(this.user);
    resp.subscribe((data=>this.message=data))
  }

  ngOnInit() {
  }

  checkPasswords() {
    if (this.password === this.re_password) {
      this.passwordsMatch = true;
    } else {
      this.passwordsMatch = false;
    }
  }

  }


// export class SignupComponent implements OnInit {

//   password: string | undefined;
//   confirmPassword: string | undefined;
//   passwordsMatch: boolean = true;

//   constructor() { }

//   ngOnInit() {
//   }

//   checkPasswords() {
//     if (this.password === this.confirmPassword) {
//       this.passwordsMatch = true;
//     } else {
//       this.passwordsMatch = false;
//     }
//   }

// }

