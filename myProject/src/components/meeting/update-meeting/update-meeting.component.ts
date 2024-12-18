import { CommonModule } from '@angular/common';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Meeting } from '../../../model/meeting';
import { MeetingService } from '../../../services/meeting.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-update-meeting',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './update-meeting.component.html',
  styleUrls: ['./update-meeting.component.css'] 
})
export class UpdateMeetingComponent implements OnInit {
  public updateMeetingForm!: FormGroup;
  // meeting: Meeting | null = null;

  constructor(
    private meetingService: MeetingService,
    private dialogRef: MatDialogRef<UpdateMeetingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: number }
  ) {}

  ngOnInit(): void {
    this.updateMeetingForm = new FormGroup({
      meetingDate : new FormControl("", [
        Validators.required,
      ]),
      meetingHour: new FormControl("", [
        Validators.required,
        Validators.pattern("^[0-9]+$")
      ]),
      meetingDuration: new FormControl("", [
        Validators.required,
        
      ]),
      cpaId: new FormControl("", [
        Validators.required,
        
      ]),
      customerId: new FormControl("", [
        Validators.required,
        
      ])
    });

    this.loadMeeting(this.data.id);
  }

  loadMeeting(id: number): void {
    this.meetingService.getMeetingById(id).subscribe({
      next: (res) => {
        // this.customer = res;
        this.updateMeetingForm.patchValue({
          meetingDate: res.meetingDate,
          meetingHour: res.meetingHour,
          meetingDuration: res.meetingDuration,
          cpaId: res.cpaId,
          customerId: res.customerId,

        });
      },
      error: (err) => console.error('Error loading meeting', err)
    });
  }

  editMeeting(): void {
    if (this.updateMeetingForm.valid) {
      const meeting: Meeting = {
        id: this.data.id,
        ...this.updateMeetingForm.value
      };

      this.meetingService.updateMeeting(this.data.id, meeting).subscribe({
        next: (res) => {
          console.log("The updated meeting: ", res);
          this.dialogRef.close('updated');
        },
        error: (err) => console.error('Error updating meeting', err)
      });
    }
  }

  close(): void {
    this.dialogRef.close();
  }
}