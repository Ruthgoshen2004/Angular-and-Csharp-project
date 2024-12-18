import { CommonModule } from '@angular/common';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Customer } from '../../../model/customer';
import { CustomerService } from '../../../services/customer.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-update-customer',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css'] 
})
export class UpdateCustomerComponent implements OnInit {
  public updateCustomerForm!: FormGroup;
  // customer: Customer | null = null;

  constructor(
    private customerService: CustomerService,
    private dialogRef: MatDialogRef<UpdateCustomerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: number }
  ) {}

  ngOnInit(): void {
    this.updateCustomerForm = new FormGroup({
      name: new FormControl("", [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern("^[a-zA-Zא-ת ]+$")
      ]),
      caseNumber: new FormControl("", [
        Validators.required,
        Validators.pattern("^[0-9]+$")
      ])
    });

    this.loadCustomer(this.data.id);
  }

  loadCustomer(id: number): void {
    this.customerService.getCustomerById(id).subscribe({
      next: (res) => {
        // this.customer = res;
        this.updateCustomerForm.patchValue({
          name: res.name,
          caseNumber: res.caseNumber
        });
      },
      error: (err) => console.error('Error loading customer', err)
    });
  }

  editCustomer(): void {
    if (this.updateCustomerForm.valid) {
      const customer: Customer = {
        id: this.data.id,
        ...this.updateCustomerForm.value
      };

      this.customerService.updateCustomer(this.data.id, customer).subscribe({
        next: (res) => {
          console.log("The updated customer: ", res);
          this.dialogRef.close('updated');
        },
        error: (err) => console.error('Error updating customer', err)
      });
    }
  }

  close(): void {
    this.dialogRef.close();
  }
}
