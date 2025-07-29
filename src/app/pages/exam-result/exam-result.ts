import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-exam-result',
  imports: [CommonModule],
  templateUrl: './exam-result.html',
  styleUrl: './exam-result.css'
})
export class ExamResult {
  semesters: Semester[] = [
    {
    term: 'Year 1 Semester 1 (Term:1)',
    subjects: [
      { no: 1, name: 'Art of Living', midterm: 47, final: 34, credit: 3, total: 81, gpv: 3.5, grade: 'B+' },
      { no: 2, name: 'Computer for Office Application', midterm: 45, final: 32, credit: 3, total: 77, gpv: 3, grade: 'B' },
      { no: 3, name: 'Core English I', midterm: 46, final: 32, credit: 3, total: 78, gpv: 3, grade: 'B' },
      { no: 4, name: 'Critical Thinking', midterm: 37, final: 30, credit: 3, total: 67, gpv: 2.5, grade: 'C+' },
      { no: 5, name: 'Introduction to Economics', midterm: 49, final: 34, credit: 3, total: 83, gpv: 3.5, grade: 'B+' },
    ]
  },
  {
    term: 'Year 1 Semester 2 (Term:2)',
    subjects: [
      { no: 1, name: '.Net Programming I', midterm: 39, final: 40, credit: 3, total: 79, gpv: 3, grade: 'B' },
      { no: 2, name: 'Fundamental of Computer Technology', midterm: 43, final: 40, credit: 3, total: 83, gpv: 3.5, grade: 'B+' },
      { no: 3, name: 'Graphic Design', midterm: 44, final: 32, credit: 3, total: 76, gpv: 3, grade: 'B' },
      { no: 4, name: 'Mathematics for Computing', midterm: 60, final: 38, credit: 3, total: 98, gpv: 4, grade: 'A' },
      { no: 5, name: 'Programming Methodology', midterm: 59, final: 37, credit: 3, total: 96, gpv: 4, grade: 'A' },
    ]
  },
  {
    term: 'Year 2 Semester 1 (Term:3)',
    subjects: [
      { no: 1, name: '.Net Programming II', midterm: 38, final: 37, credit: 3, total: 75, gpv: 3, grade: 'B' },
      { no: 2, name: 'Computer Network', midterm: 52, final: 40, credit: 3, total: 92, gpv: 4, grade: 'A' },
      { no: 3, name: 'Data Structures & Algorithms', midterm: 49, final: 24, credit: 3, total: 73, gpv: 3, grade: 'B' },
      { no: 4, name: 'Database System', midterm: 51, final: 35, credit: 3, total: 86, gpv: 4, grade: 'A' },
      { no: 5, name: 'Web Programming', midterm: 52, final: 33, credit: 3, total: 85, gpv: 4, grade: 'A' },
    ]
  },
  {
    term: 'Year 2 Semester 2 (Term:4)',
    subjects: [
      { no: 1, name: 'Computer System Administration', midterm: 47, final: 30, credit: 3, total: 77, gpv: 3, grade: 'B' },
      { no: 2, name: 'DBMS Project', midterm: 45, final: 33, credit: 3, total: 78, gpv: 3, grade: 'B' },
      { no: 3, name: 'Front End Web Development', midterm: 57, final: 37, credit: 3, total: 94, gpv: 4, grade: 'A' },
      { no: 4, name: 'Personal Application Development', midterm: 57, final: 36, credit: 3, total: 93, gpv: 4, grade: 'A' },
      { no: 5, name: 'Web Application Development', midterm: 56, final: 34, credit: 3, total: 90, gpv: 4, grade: 'A' },
    ]
  },
  {
    term: 'Year 3 Semester 1 (Term:5)',
    subjects: [
      { no: 1, name: 'Advanced PHP and My SQL', midterm: 57, final: 34, credit: 3, total: 91, gpv: 4, grade: 'A' },
      { no: 2, name: 'Client/Server App. Development', midterm: 59, final: 39, credit: 3, total: 98, gpv: 4, grade: 'A' },
      { no: 3, name: 'Introduction to Linux Operating Systems', midterm: 58, final: 39, credit: 3, total: 97, gpv: 4, grade: 'A' },
      { no: 4, name: 'Network Administration', midterm: 50, final: 35, credit: 3, total: 85, gpv: 4, grade: 'A' },
      { no: 5, name: 'System Analysis and Design', midterm: 57, final: 37, credit: 3, total: 94, gpv: 4, grade: 'A' },
    ]
  },
  {
    term: 'Year 3 Semester 2 (Term:6)',
    subjects: [
      { no: 1, name: 'ASP .Net and SQL Server', midterm: 54, final: 32, credit: 3, total: 86, gpv: 4, grade: 'A' },
      { no: 2, name: 'Network Administration in Linux', midterm: 60, final: 38, credit: 3, total: 98, gpv: 4, grade: 'A' },
      { no: 3, name: 'Network Design and Implementation', midterm: 60, final: 37, credit: 3, total: 97, gpv: 4, grade: 'A' },
      { no: 4, name: 'Object Oriented Programming Using Java', midterm: 40, final: 35, credit: 3, total: 75, gpv: 3, grade: 'B' },
      { no: 5, name: 'Oracle (Project)', midterm: 55, final: 35, credit: 3, total: 90, gpv: 4, grade: 'A' },
    ]
  },
  {
    term: 'Year 4 Semester 1 (Term:7)',
    subjects: [
      { no: 1, name: 'Block Chain Technology', midterm: 53, final: 39, credit: 3, total: 92, gpv: 4, grade: 'A' },
      { no: 2, name: 'Internetworking I', midterm: 56, final: 39, credit: 3, total: 95, gpv: 4, grade: 'A' },
      { no: 3, name: 'Mobile Programming I', midterm: 57, final: 35, credit: 3, total: 92, gpv: 4, grade: 'A' },
      { no: 4, name: 'Python Programming', midterm: 54, final: 39, credit: 3, total: 93, gpv: 4, grade: 'A' },
      { no: 5, name: 'Research Methodology', midterm: 54, final: 32, credit: 3, total: 86, gpv: 4, grade: 'A' },
    ]
  },
  {
    term: 'Year 4 Semester 2 (Term:8)',
    subjects: [
      { no: 1, name: 'Research Project for Information Technology', midterm: 47, final: 41, credit: 6, total: 88, gpv: 4, grade: 'A' },
    ]
  }
  ];

  totalCredits = 111;
  totalGPV = 408;
  GPA = 3.68;
}

interface Subject {
  no: number;
  name: string;
  midterm: number;
  final: number;
  credit: number;
  total: number;
  gpv: number;
  grade: string;
}

interface Semester {
  term: string;
  subjects: Subject[];
}