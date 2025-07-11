export interface Student {
  id: string;
  name: string;
  avatar: string;
  score?: number;
}

export interface Submission {
  id: string;
  student: Student;
  submissionDate: string;
  receiptNumber: string;
  score?: number;
  maxScore: number;
  content?: string;
}