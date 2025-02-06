export interface Exam {
    student: {
      first_name: string;
      last_name: string;
    };
    meeting_point?: string;
    date?: string; // Format ISO date-time (ex: "2023-02-05T14:30:00Z")
    status?: 'A organiser' | 'Annulé' | 'Recherche de place' | 'Confirmé';
  }




  export interface ExamState {
    examin: Exam[];
  }