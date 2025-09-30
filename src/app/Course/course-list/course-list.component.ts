import { Component } from '@angular/core';
import { CourseService } from '../../service/course.service';
import { DatePipe, NgFor, NgIf } from '@angular/common';
import { RouterLink } from "@angular/router";



@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [NgFor, RouterLink, DatePipe, NgIf],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent {

  courseList: course[] = []
  constructor(private courseService: CourseService) { }

  ngOnInit() {

    this.courseService.getDataFromServer("courses").subscribe({
      next: (resp: any) => {
        if (resp) {
          this.courseList = resp;
        }
      },
      error: (error: any) => {
        alert(error);
      }
    })
  }

  deleteCourse(id: number | string, index: any) {
    var endPoint = "courses/" + id;
    var isConfirm = confirm("Are You Sure,Do you want to Delete ?")
    if (isConfirm) {
      this.courseService.deleteDataFromServer(endPoint).subscribe({
        next: (resp: any) => {
          this.courseList.splice(index, 1)
          alert("Delete course Successfully")
        },
        error: (error: any) => {
          alert(error)

        }
      })
    }

  }
}
interface course {
  "id": string | number;
  "courseName": string;
  "duration": string;
  "fees": string;
  "courseList": string;
  "gender": string;
  "startDate": string;


}
