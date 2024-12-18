import { Routes } from '@angular/router';
import { HomePageComponent } from '../components/home-page/home-page.component';
import { CpaListComponent } from '../components/cpa/cpa-list/cpa-list.component';
import { AddCpaComponent } from '../components/cpa/add-cpa/add-cpa.component';
import { UpdateCpaComponent } from '../components/cpa/update-cpa/update-cpa.component';
import { CustomerListComponent } from '../components/customer/customer-list/customer-list.component';
import { AddCustomerComponent } from '../components/customer/add-customer/add-customer.component';
import { UpdateCustomerComponent } from '../components/customer/update-customer/update-customer.component';
import { MeetingListComponent } from '../components/meeting/meeting-list/meeting-list.component';
import { AddMeetingComponent } from '../components/meeting/add-meeting/add-meeting.component';
import { UpdateMeetingComponent } from '../components/meeting/update-meeting/update-meeting.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { DeleteCpaComponent } from '../components/cpa/delete-cpa/delete-cpa.component';
import { DeleteCustomerComponent } from '../components/customer/delete-customer/delete-customer.component';
import { DeleteMeetingComponent } from '../components/meeting/delete-meeting/delete-meeting.component';

export const routes: Routes = [
    {path:'',redirectTo:'home-page',pathMatch:'full'},

    {path:'home-page',component:HomePageComponent},
    {path:'cpa-list',component:CpaListComponent},
    {path:'add-cpa',component:AddCpaComponent},
    // {path:'delete-cpa/:id',component:DeleteCpaComponent},

    {path:'customer-list',component:CustomerListComponent},
    {path:'add-customer',component:AddCustomerComponent},
    {path:'delete-customer/:id',component:DeleteCustomerComponent},

    {path:'meeting-list',component:MeetingListComponent},
    {path:'add-meeting',component:AddMeetingComponent},
    // {path:'delete-meeting/:id',component:DeleteMeetingComponent},
    {path:'**',component:NotFoundComponent}

];
