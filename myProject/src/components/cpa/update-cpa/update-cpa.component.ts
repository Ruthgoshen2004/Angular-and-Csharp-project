import { CommonModule } from '@angular/common';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CpaService } from '../../../services/cpa.service';
import { Cpa } from '../../../model/cpa';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { error } from 'console';

@Component({
  selector: 'app-update-cpa',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './update-cpa.component.html',
  styleUrl: './update-cpa.component.css'
})
export class UpdateCpaComponent implements OnInit{

  public updateCpaForm!:FormGroup
  @Input() id!:number
  constructor(private cpaService:CpaService,private dialogRef: MatDialogRef<UpdateCpaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: number }){}

  ngOnInit(): void {
    this.updateCpaForm=new FormGroup({
      "name": new FormControl("",[Validators.required,Validators.minLength(2),Validators.pattern("^[a-zA-Zא-ת ]+$")
    ]),

      "seniorityYears":new FormControl("",[Validators.required,Validators.pattern("^[0-9]+$")]
      )
    })
    this.loadCpa(this.data.id);
  }
  loadCpa(id:number):void{
   this.cpaService.getCpaById(id).subscribe({
    next:(res)=>{
      this.updateCpaForm.patchValue({
        name:res.name,
        seniorityYears:res.seniorityYears
      })
    },    
     error:(err)=>console.error('Error loading cpa',err)

   })
  }

  editCpa()
  {
    if(this.updateCpaForm.valid)
    {
      const cpa:Cpa={
        id:this.id,
        ...this.updateCpaForm.value
      }
      this.cpaService.updateCpa(this.data.id,cpa).subscribe({
        next:(res)=>{
          console.log("The updated cpa: ",res)
          this.dialogRef.close('updated');
        },
        error:(err)=>console.error('Error update cpa',err)
      })
    }
  }
  close(): void {
    this.dialogRef.close();
  }

}
