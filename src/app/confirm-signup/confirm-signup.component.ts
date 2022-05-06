import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from '../service/session.service';

@Component({
  selector: 'app-confirm-signup',
  templateUrl: './confirm-signup.component.html',
  styleUrls: ['./confirm-signup.component.css']
})
export class ConfirmSignupComponent implements OnInit {
  username?: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sessionService: SessionService,
  ) {
    this.route.queryParams.subscribe((param) => {
      this.username = param['username'];
    });
  }

  ngOnInit(): void {
  }

  confirmForm: FormGroup = new FormGroup({
    confirmNumber: new FormControl(''),
  });

  confirmSignUp() {
    const valueNumber = this.confirmForm.value.confirmNumber;
    if(this.username){
      this.sessionService.confirmSignup(this.username, valueNumber).subscribe((result) => {
        const query = { queryParams: { result: 'Success' } };
        this.router.navigate(['/login'], query);
      });
    }
  }

}
