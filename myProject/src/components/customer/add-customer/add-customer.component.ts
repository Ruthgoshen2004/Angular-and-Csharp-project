import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomerService } from '../../../services/customer.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-customer',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css'] // תיקון styleUrls
})
export class AddCustomerComponent implements OnInit {
  public addForm!: FormGroup;

  constructor(private _customerService: CustomerService) {}

  ngOnInit(): void {
    this.addForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      caseNumber: new FormControl(null, Validators.required)
    });
  }

  public save() {
    if (this.addForm.valid) {
      this._customerService.addCustomer(this.addForm.value).subscribe({
        next:(any)=>{
          alert("add succes")
        }
      });
    }
    
  }
}

