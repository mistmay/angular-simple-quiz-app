import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WelcomePageFormService {
  name!: string;

  constructor() { }
}
