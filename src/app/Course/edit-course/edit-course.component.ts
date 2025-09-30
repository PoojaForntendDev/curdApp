import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CourseService } from '../../service/course.service';
import { course, courseList } from '../create-course/create-course.component';
import { FormsModule, NgForm } from '@angular/forms';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-edit-course',
  standalone: true,
  imports: [FormsModule, RouterLink, NgFor],
  templateUrl: './edit-course.component.html',
  styleUrl: './edit-course.component.css'
})
export class EditCourseComponent {
  coursesObj = new course();
  courseDataList: courseList[] = [];
  courseId: number | string | null = null;


  constructor(private activateRoute: ActivatedRoute, private courseService: CourseService, private router: Router) {
    this.courseId = this.activateRoute.snapshot.paramMap.get('id');

  }
  ngOnInit() {
    var endPoint = "courses/" + this.courseId;
    this.courseService.getDataFromServer(endPoint).subscribe({
      next: (resp: any) => {
        this.coursesObj = resp;
      },
      error: (error: any) => {
        alert(error)
      }
    })

    this.courseService.getDataDropDownList("courseList").subscribe({
      next: (resp: any) => {
        if (resp) {
          this.courseDataList = resp;

        }
      },
      error: (error: any) => {
        alert(error)

      },
    })

  }

  updateCourse(form: NgForm) {
    if (form.valid) {
      var endPoint = "courses/" + this.courseId;
      this.courseService.putDataToServer(endPoint, this.coursesObj).subscribe({
        next: (resp: any) => {
          this.coursesObj = resp;
          alert("updat Course successfully");
          this.router.navigate(['/courseList'])

        },
        error: (error: any) => { console.log("error", error) }
      })
    }
  }

}
