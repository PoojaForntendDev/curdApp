import { Component } from '@angular/core';
import { BookingService } from '../service/booking.service';
import { DatePipe, NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, RouterLink } from "@angular/router";

@Component({
  selector: 'app-booking-list',
  standalone: true,
  imports: [NgFor, RouterLink, DatePipe, NgIf],
  templateUrl: './booking-list.component.html',
  styleUrl: './booking-list.component.css'
})
export class BookingListComponent {
  bookingId: string | number | null = null;
  bookingList: booking[] = []

  constructor(private bookingService: BookingService, private activateRoute: ActivatedRoute) {
    // this.bookingId = this.activateRoute.snapshot.paramMap.get('id');
    // console.log("Id", this.bookingId)
  }


  ngOnInit() {
    this.bookingService.getServerData("booking").subscribe({
      next: (resp: any) => {
        console.log(resp);
        this.bookingList = resp;


      },
      error: (resp: any) => {
        console.log("error", resp)
      }
    })
  }

  deleteBookingData(id: any, index: any) {

    var isConfirm = confirm("Are You Sure, Do you Want To Delete ?")
    if (isConfirm) {

      var endPoint = "booking/" + id;
      this.bookingService.deleteDataFromServer(endPoint).subscribe({
        next: (resp: any) => {
          if (resp) {

            this.bookingList.splice(index, 1)
          }
        },
        error: (error: any) => {
          console.log("error", error)
        }
      })
    }

  }
}
interface booking {
  id: string | number,
  customerName: string,
  source: string;
  destination: string,
  travelDate: string
}
