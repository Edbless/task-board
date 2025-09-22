import { Component } from '@angular/core';  
import { AuthService } from '../login/auth.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-navbar',
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  constructor(public authService: AuthService) {}
}
