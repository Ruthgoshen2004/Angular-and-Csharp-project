import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MeetingService } from '../../../services/meeting.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-add-meeting',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-meeting.component.html',
  styleUrls: ['./add-meeting.component.css'] // תיקון styleUrls
})
export class AddMeetingComponent implements OnInit {
  public addForm!: FormGroup;

  constructor(private _meetingService: MeetingService) {}

  ngOnInit(): void {
    this.addForm = new FormGroup({
      meetingDate: new FormControl("meetingDate", Validators.required),
      meetingHour: new FormControl("meetingHour", Validators.required),
      meetingDuration: new FormControl("meetingDuration", Validators.required),
      cpaId: new FormControl("cpaId", Validators.required),
      customerId: new FormControl("customerId", Validators.required)

    });
  }

  public save() {
    if (this.addForm.valid) {
      this._meetingService.addMeeting(this.addForm.value).subscribe(
        {
          next:(any)=>{
            alert("add succes")
          }
        
        }
      );
    }
    
  }
}

