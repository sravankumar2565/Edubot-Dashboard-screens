export interface Student {
  id: string;
  name: string;
  avatar: string;
}

export interface Feedback {
  text: string;
  timestamp: string;
}

export interface Submission {
  id: string;
  studentId: string;
  student: Student;
  status: "Submitted" | "Pending" | "Graded";
  grade: number | null;
  feedback: Feedback[];
  prompts: string;
  testCases: string;
}