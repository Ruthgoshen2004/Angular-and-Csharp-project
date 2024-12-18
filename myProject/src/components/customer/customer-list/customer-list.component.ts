import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../services/customer.service';
import { Customer } from '../../../model/customer';
import { RouterModule, Router } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { UpdateCustomerComponent } from '../update-customer/update-customer.component';
import { FormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog'; 
import { MyDirectiveDirective } from '../../my-directive.directive';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    UpdateCustomerComponent,
    FormsModule,
    MatDialogModule,
    MyDirectiveDirective
  ],
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customerList!: Customer[];
  filteredCustomers!: Customer[];
  searchTerm: string = '';
  displayedColumns: string[] = ['id', 'name', 'caseNumber', 'actions'];

  constructor(private customerService: CustomerService, private router: Router, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers(): void {
    this.customerService.getAllCustomer().subscribe({
      next: (res) => {
        this.customerList = res;
        this.filteredCustomers = res;
      },
      error: (err) => console.error('Error loading customers', err)
    });
  }

  applyFilter(): void {
    this.filteredCustomers = this.customerList.filter(customer => 
      customer.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  navigateToAddCustomer(): void {
    this.router.navigate(['/add-customer']);
  }

  editCustomer(id: number): void {
    const dialogRef = this.dialog.open(UpdateCustomerComponent, {
      width: '350px',
      height: '500px',
      data: { id: id }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'updated') {
        this.loadCustomers();
      }
    });
  }

  navigateToDeleteCustomer(customerId: number): void {
    this.router.navigate([`/delete-customer/${customerId}`]);
  }
}
