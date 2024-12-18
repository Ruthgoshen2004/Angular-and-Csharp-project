import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../services/customer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-customer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent implements OnInit {
  customerId!: number;

  constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id !== null) {
        const parsedId = Number(id);
        if (!isNaN(parsedId)) {
          this.customerId = parsedId;
          this.customerService.deleteCustomer(this.customerId).subscribe({
            next: () => {
              // מחיקה בוצעה, מתחילים את הטיימר לניווט לדף הלקוחות
              setTimeout(() => {
                this.router.navigate(['/customer-list']);
              }, 3000); // 5000 מילישניות = 5 שניות
            },
            error: (err) => {
              console.error('Error deleting customer', err);
            }
          });
        } else {
          console.error('Invalid ID');
        }
      } else {
        console.error('ID not found');
      }
    });
  }
}
