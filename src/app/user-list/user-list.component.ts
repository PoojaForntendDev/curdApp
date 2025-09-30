import { Component } from '@angular/core';
import { HttpServiceService } from '../service/http-service.service';


@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {

  userData: any = []
  constructor(private httpService: HttpServiceService) {

  }

  ngOnInit() {
    this.httpService.getServerData().subscribe({
      next: (resp: any) => {
        console.log("Data List", resp);
        this.userData = resp;
        this.userData = this.userData.splice(0, 10);
        console.log(this.userData)
      },
      error: (resp: any) => {

      }
    })
  }
}
