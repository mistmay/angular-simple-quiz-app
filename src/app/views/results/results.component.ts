import { Component, OnInit } from '@angular/core';
import { ResultsService } from 'src/app/services/results.service';
import { WelcomePageFormService } from 'src/app/services/welcome-page-form.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  constructor(private resultService: ResultsService, private formService: WelcomePageFormService) { }

  ngOnInit(): void {
  }

  getName(): string {
    return this.formService.name;
  }

  getShowPermission(): boolean {
    return this.resultService.showResult;
  }

  getCorrect(): number {
    return this.resultService.correct;
  }

  getWrong(): number {
    return this.resultService.wrong;
  }

  getPoints(): number {
    return this.resultService.points;
  }

  getImage(): string {
    if (this.resultService.correct > (this.resultService.total / 2)) {
      return '../../../assets/img/silhouette.png';
    } else {
      return '../../../assets/img/silhouette-fail.png';
    }
  }

  getMessage(): string {
    if (this.resultService.correct > (this.resultService.total / 2)) {
      return 'Congratulations! You Passed the quiz!';
    } else {
      return 'I am Sorry. You Failed the quiz!';
    }
  }

}
