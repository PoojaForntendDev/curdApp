import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { BookingService } from '../service/booking.service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-create-booking',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './create-booking.component.html',
  styleUrl: './create-booking.component.css'
})
export class CreateBookingComponent {
  bookingObj = new Booking();

  constructor(private bookingService: BookingService) {

  }

  ngOnInit() {
    console.log("BookingOBJ", this.bookingObj)

  }

  createBooking(form: NgForm) {
    console.log("BookingOBJ Data", this.bookingObj);

    if (form.valid) {
      this.bookingService.postDataToServer("booking", this.bookingObj).subscribe({

        next: (resp: any) => {
          if (resp) {
            alert("Booking created successfully !")
          }
        },
        error: (error: any) => {
          console.log(error)

        }
      })
    }

  }

}

export class Booking {
  id: string | null = "";
  customerName: string | null = "";
  source: string | null = "";
  destination: string | null = "";
  travelDate: string | null = "";
}
