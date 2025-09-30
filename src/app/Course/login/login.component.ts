import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  routerUrl: string | null = null;
  constructor(private authService: AuthService, private activateRoute: ActivatedRoute, private router: Router) {
    this.routerUrl = this.activateRoute.snapshot.queryParamMap.get('routerUrl')
  }

  login() {
    this.authService.setValidUSer()
    this.router.navigate([this.routerUrl])
    console.log(this.routerUrl)

  }
}
