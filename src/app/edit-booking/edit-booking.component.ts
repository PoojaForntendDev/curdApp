import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Booking } from '../create-booking/create-booking.component';
import { BookingService } from '../service/booking.service';

@Component({
  selector: 'app-edit-booking',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './edit-booking.component.html',
  styleUrl: './edit-booking.component.css'
})
export class EditBookingComponent {

  bookingId: string | number | null = null;
  bookingObj = new Booking();

  constructor(private activteRoute: ActivatedRoute, private bookingService: BookingService) {

    this.bookingId = this.activteRoute.snapshot.paramMap.get('id');
    console.log("user ID", this.bookingId);
  }

  ngOnInit() {
    var endPoint = "booking/" + this.bookingId;
    this.bookingService.getServerData(endPoint).subscribe({
      next: (resp: any) => {
        if (resp) {
          console.log(resp);
          this.bookingObj = { ...resp };
        }
      },
      error: (error: any) => {
        console.log(error)
      }
    })
  }

  updateBooking(form: NgForm) {
    var endPoint = "booking/" + this.bookingId;
    if (form.valid) {
      this.bookingService.putDataToServer(endPoint, this.bookingObj).subscribe({
        next: (resp: any) => {
          if (resp) {
            this.bookingObj = resp;
          }
        },
        error: (error: any) => {
          console.log("error", error)
        }
      })
    }

  }

}
