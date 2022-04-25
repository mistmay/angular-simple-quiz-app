export interface Option {
    text: string;
    correct: boolean;
}

export interface Question {
    questionText: string;
    options: Option[];
    explanation: string;
}

export interface Json {
    questions: Question[];
}