import { Component } from '@angular/core';
import {Router ,RouterModule } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
constructor(private router:Router){}

navigateToCpa(){
  this.router.navigate(['/cpa-list'])
}
navigateToCustomer(){
  this.router.navigate(['/customer-list'])
}
navigateToMeeting(){
  this.router.navigate(['/meeting-list'])
}

}
