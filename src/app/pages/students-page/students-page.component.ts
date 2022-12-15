import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student.model';

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.css']
})
export class StudentsPageComponent implements OnInit {

  loading = true;

  students: Student[] = [
    new Student(1, 'Melissa', 'Mora', new Date('2000-04-20'), true),
    new Student(2, 'Melody', 'Guitierrez', new Date('1999-09-21'), false),
    new Student(3, 'Pamela', 'Rivera', new Date('2001-05-04'), true),
  ]

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false
    }, 1500);
  }

}
