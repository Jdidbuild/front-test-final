import { Exam } from "src/app/api-client";

export const exams: Exam[] = [
    {
        "student": {
          "first_name": "John",
          "last_name": "Doe"
        },
        "meeting_point": "Salle 101, Bâtiment A",
        "date": "2025-02-10T10:00:00Z",
        "status": "Confirmé"
      },
      {
        "student": {
          "first_name": "Alice",
          "last_name": "Smith"
        },
        "meeting_point": "Salle 202, Bâtiment B",
        "date": "2025-02-11T14:00:00Z",
        "status": "A organiser"
      },
      {
        "student": {
          "first_name": "Bob",
          "last_name": "Johnson"
        },
        "meeting_point": "Salle 303, Bâtiment C",
        "date": "2025-02-12T09:00:00Z",
        "status": "Annulé"
      },
      {
        "student": {
          "first_name": "Eve",
          "last_name": "Davis"
        },
        "meeting_point": "Salle 404, Bâtiment D",
        "date": "2025-02-13T11:00:00Z",
        "status": "Recherche de place"
      },
      {
        "student": {
          "first_name": "Charlie",
          "last_name": "Brown"
        },
        "meeting_point": "Salle 505, Bâtiment E",
        "date": "2025-02-14T15:00:00Z",
        "status": "Confirmé"
      }
  ];
