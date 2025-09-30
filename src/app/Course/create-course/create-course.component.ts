import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CourseService } from '../../service/course.service';
import { Router, RouterLink } from "@angular/router";
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-create-course',
  standalone: true,
  imports: [FormsModule, RouterLink, NgFor],
  templateUrl: './create-course.component.html',
  styleUrl: './create-course.component.css'
})
export class CreateCourseComponent {
  coursesObj = new course();
  courseDataList: courseList[] = [];

  constructor(private courseService: CourseService, private router: Router) { }

  ngOnInit() {
    this.courseService.getDataDropDownList("courseList").subscribe({
      next: (resp: any) => {
        if (resp) {
          this.courseDataList = resp;
        }
      },
      error: (error: any) => {
        alert(error)
      }
    })
  }

  createCourse(form: NgForm) {
    if (form.valid) {
      this.courseService.postDataToServer("courses", this.coursesObj).subscribe({
        next: (resp: any) => {
          if (resp) {
            this.coursesObj = resp;
            alert("submited Course Successfully")
            this.router.navigate(['/courseList'])
          }
        },
        error: (error) => {
          alert(error)
        }
      })
    }

  }

}

export class course {
  "courseName": string | null = "";
  "duration": string | null = "";
  "fees": string | null = "";
  "gender": string | null = null;
  "courseList": string | null = "";
  "startDate": string | null = "";
}
export interface courseList {
  "value": string;
  "viewValue": string;
}
