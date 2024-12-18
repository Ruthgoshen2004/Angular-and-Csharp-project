import { CpaService } from '../../../services/cpa.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Cpa } from '../../../model/cpa';
import { RouterModule, Router } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { UpdateCpaComponent } from '../update-cpa/update-cpa.component';
import { MyDirectiveDirective } from '../../my-directive.directive';

@Component({
  selector: 'app-cpa-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule, 
    MatTableModule, 
    MatButtonModule, 
    MatIconModule,
    MatDialogModule,
    MyDirectiveDirective
  ],
  templateUrl: './cpa-list.component.html',
  styleUrls: ['./cpa-list.component.css']
})
export class CpaListComponent implements OnInit {
  constructor(private cpaService: CpaService, private router: Router, private dialog: MatDialog) { }
  public cpaList!: Cpa[];
  displayedColumns: string[] = ['id', 'name', 'seniorityYears', 'actions'];

  ngOnInit(): void {
    this.loadCpas();
  }
  loadCpas():void{
    this.cpaService.getAllCpa().subscribe({
      next: (res) => {
        this.cpaList = res;
      },
      error: (err) => console.error('Error loading cpas', err)
    });
  }

  navigateToAddCpa() {
    this.router.navigate(['/add-cpa']);
  }

  deleteCpa(cpaId: number) {
    if (confirm("Are you sure you want to delete this CPA?")) {
      this.cpaService.deleteCpa(cpaId).subscribe({
        next: () => {
          this.loadCpas();
        },
        error:(err)=>console.error('Error deleting cpa')
      });
    }
  }
  editCpa(cpaId:number){
   const dialogRef=this.dialog.open(UpdateCpaComponent,{
    width:'350px',
    height:'500px',
    data:{id:cpaId}
   })
   dialogRef.afterClosed().subscribe(result=>{
    if(result==='updated')
        this.loadCpas()
   })
  }
 
}
