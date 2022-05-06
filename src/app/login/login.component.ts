import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SessionService } from '../service/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  constructor(
    private router: Router,
    private sessionService: SessionService,
  ) { }

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });


  ngOnInit(): void {
  }

  onLogin() {
    const value = this.loginForm.value;
    this.sessionService.signIn(value.email, value.password).subscribe((signInResult) => {
      this.router.navigate(['/home']); // Home画面へ繊維する
    });
  }

  onSignUp() {
    console.log("新規登録")
    this.router.navigate(['/signup']);
  }

}
