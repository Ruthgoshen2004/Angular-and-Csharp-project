import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CpaService } from '../../../services/cpa.service';

@Component({
  selector: 'app-add-cpa',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-cpa.component.html',
  styleUrls: ['./add-cpa.component.css'] // תיקון styleUrls
})
export class AddCpaComponent implements OnInit {
  public addForm!: FormGroup;

  constructor(private _cpaService: CpaService) {}

  ngOnInit(): void {
    this.addForm = new FormGroup({
      name: new FormControl("", [Validators.required, Validators.maxLength(5)]),
      seniorityYears: new FormControl("seniorityYears", Validators.required)

    });
  }

  public save() {
    if (this.addForm.valid) {
      this._cpaService.addCpa(this.addForm.value).subscribe({
        next:(any)=>{
          alert("add succes")
        }
      
      });
    }
    
  }
}

