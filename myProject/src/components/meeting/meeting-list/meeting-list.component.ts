import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MeetingService } from '../../../services/meeting.service';
import { Meeting } from '../../../model/meeting';
import { RouterModule,Router } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MeetingDatePipe } from '../../meeting-date.pipe';
import { MyDirectiveDirective } from'../../my-directive.directive';
import { MatDialog } from '@angular/material/dialog';
import { UpdateMeetingComponent } from '../update-meeting/update-meeting.component';


@Component({
  selector: 'app-meeting-list',
  standalone: true,
  imports: [CommonModule,RouterModule, MatTableModule, MatButtonModule, MatIconModule,MeetingDatePipe,MyDirectiveDirective],
  templateUrl: './meeting-list.component.html',
  styleUrl: './meeting-list.component.css'
})
export class MeetingListComponent implements OnInit {
  constructor(private MeetingService:MeetingService,private router:Router, private dialog: MatDialog){}
  public MeetingList!:Meeting[]
  ngOnInit(): void {
   this.loadMeetings();
  }
  displayedColumns: string[] = ['id', 'meetingDate', 'meetingHour','meetingDuration','cpaId','customerId', 'actions'];

   navigateToAddMeeting(){
    this.router.navigate(['/add-meeting'])
   }
   loadMeetings(): void {
    this.MeetingService.getAllMeeting().subscribe({
      next: (res) => {
        this.MeetingList = res;
      },
      error: (err) => console.error('Error loading meetings', err)
    });
  }
   editMeeting(id: number): void {
    const dialogRef = this.dialog.open(UpdateMeetingComponent, {
      width: '350px',
      height:'500px',
      data: { id: id }
    });

    dialogRef.afterClosed().subscribe(result => {//אחרי הסגירה של הדייאלוג אם הוא התעדכן תטען מחדש את הרשימה
      if (result === 'updated') {
        this.loadMeetings(); 
    }});
    
  }

   deleteMeeting(meetingId:number){
    this.MeetingService.deleteMeeting(meetingId).subscribe({
       next:(any)=>
       this.loadMeetings()
        })
      
    }
  }
   

