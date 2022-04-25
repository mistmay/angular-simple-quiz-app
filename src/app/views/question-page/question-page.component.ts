import { Component, OnInit } from '@angular/core';
import { WelcomePageFormService } from 'src/app/services/welcome-page-form.service';
import { QuestionsService } from 'src/app/api/questions.service';
import { Json, Question, Option } from 'src/app/models/question';
import { Router } from '@angular/router';
import { ResultsService } from 'src/app/services/results.service';

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.scss']
})
export class QuestionPageComponent implements OnInit {
  questionList: Question[] = [];
  currentQuestion: number = 0;
  points: number = 0;
  timer: number = 60;
  correct: number = 0;
  wrong: number = 0;
  progressBarFull: boolean = false;
  isClicked: boolean = false;
  showAnswers: boolean = true;
  interval!: ReturnType<typeof setTimeout>;

  constructor(private formService: WelcomePageFormService, private api: QuestionsService, private router: Router, private resultService: ResultsService) { }

  ngOnInit(): void {
    this.getAllQuestions();
    this.interval = setInterval(() => {
      this.timerLogic();
    }, 1000);
  }

  getName(): string {
    return this.formService.name;
  }

  getAllQuestions(): void {
    this.api.getQuestions()
      .subscribe((res: Json) => {
        this.questionList = res.questions;
      });
  }

  checkAnswer(option: Option): void {
    this.isClicked = true;
    if (option.correct) {
      this.points += 10;
      this.correct++;
      setTimeout(() => {
        this.nextQuestion();
      }, 1000);
    } else {
      this.points -= 10;
      this.wrong++;
      setTimeout(() => {
        this.nextQuestion();
      }, 1000);
    }
  }

  nextQuestion(): void {
    this.isClicked = false;
    this.timer = 60;
    if (this.currentQuestion < this.questionList.length - 1) {
      this.currentQuestion++;
    } else {
      this.timer = 0;
      clearInterval(this.interval);
      this.progressBarFull = true;
      this.showAnswers = false;
      setTimeout(() => {
        this.goToResults();
      }, 1000);
    }
  }

  progressBarIncrement(): number {
    if (!this.progressBarFull) {
      return (this.currentQuestion * 100) / this.questionList.length;
    } else {
      return 100;
    }
  }

  getAnswerBackground(option: Option): string {
    if (this.isClicked && option.correct) {
      return 'bg-success border-success';
    } else if (this.isClicked && !option.correct) {
      return 'bg-danger border-danger';
    } else {
      return 'bg-transparent';
    }
  }

  timerLogic(): void {
    if (this.timer === 0) {
      this.points -= 10;
      this.wrong++;
      this.nextQuestion();
    } else {
      this.timer--;
    }
  }

  goToResults(): void {
    this.resultService.showResult = true;
    this.resultService.correct = this.correct;
    this.resultService.wrong = this.wrong;
    this.resultService.points = this.points;
    this.resultService.total = this.questionList.length;
    this.router.navigate(['./result']);
  }

}
