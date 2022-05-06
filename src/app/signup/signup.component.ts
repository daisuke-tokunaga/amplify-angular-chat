import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { tap } from 'rxjs';
import { SessionService } from '../service/session.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private router: Router,
    private sessionService: SessionService
    ) { }

  ngOnInit(): void {
  }

  signUpForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  onConfirmSignup() {
    const value = this.signUpForm.value;
    console.log("username",value.username)
    const navigationExtra: NavigationExtras = {
      queryParams: {
        username: value.email
      }
    };
    this.sessionService.entryUserSignUp(value).pipe(
      tap(() => this.router.navigate(['/conf-signup'], navigationExtra))
    ).subscribe();
  }

}
