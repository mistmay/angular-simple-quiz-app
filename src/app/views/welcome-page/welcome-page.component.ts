import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WelcomePageFormService } from 'src/app/services/welcome-page-form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {

  constructor(private formService: WelcomePageFormService, private router: Router) { }

  ngOnInit(): void {
  }

  startQuiz(f: NgForm): void {
    if (f.invalid) {
      alert('Error: Please Insert your Name in order to Start!');
    } else {
      this.formService.name = f.controls['name'].value;
      this.router.navigate(['./question']);
    }
  }
}
