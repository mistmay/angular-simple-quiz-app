import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Json } from '../models/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http: HttpClient) { }

  getQuestions() {
    return this.http.get<Json>('assets/json/questions.json');
  }
}
