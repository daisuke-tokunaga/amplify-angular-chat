import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit(): void {
  }

  signUpForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  onConfirmSignup() {
    const value = this.signUpForm.value;
    console.log(value)
    // const navigationExtra: NavigationExtras = {
    //   queryParams: {
    //     userName: value.userName
    //   }
    // };
    // this.sessionService.entryUserSignUp(value).pipe(
    //   tap(() => this.router.navigate(['/confirm-signup'], navigationExtra))
    // ).subscribe();
  }

}
