import { Routes } from '@angular/router';
import { CreateBookingComponent } from './create-booking/create-booking.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { EditBookingComponent } from './edit-booking/edit-booking.component';
import { CourseListComponent } from './Course/course-list/course-list.component';
import { CreateCourseComponent } from './Course/create-course/create-course.component';
import { EditCourseComponent } from './Course/edit-course/edit-course.component';
import { authGuard } from './guards/auth.guard';
import { LoginComponent } from './Course/login/login.component';
import { editGuard } from './guards/edit.guard';

export const routes: Routes = [
    { path: 'booking', component: BookingListComponent },
    { path: 'createBooking', component: CreateBookingComponent },
    { path: 'editBooking/:id', component: EditBookingComponent },
    { path: 'courseList', component: CourseListComponent },
    { path: 'createCourse', component: CreateCourseComponent, canActivate: [authGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'editCourse/:id', component: EditCourseComponent, canActivate: [editGuard] },
    { path: '', redirectTo: '/courseList', pathMatch: 'full' }

];
