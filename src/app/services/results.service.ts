import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {
  showResult: boolean = false;
  correct!: number;
  wrong!: number;
  points!: number;
  total!: number;

  constructor() { }
}
