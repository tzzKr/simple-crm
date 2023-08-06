import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Service } from '../service/simple-crm.service';
import { User } from 'src/models/user.class';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  userId = '';
user: User = new User();

  constructor(private route:ActivatedRoute, private service: Service, public dialog: MatDialog) {

    
   }
   ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      console.log(params.get('id'));
      this.userId = params.get('id')!;
      this.getUser();
    });
  }

  getUser() {
    this.service.getAll().doc(this.userId).valueChanges().subscribe(user => {
      console.log(user);
      this.user = user as User;
    }
    );
  }

  editAddressDetails(){
   const dialog = this.dialog.open(DialogEditAddressComponent);
  dialog.componentInstance.user = this.user;
  }

  editUserDetails(){
    const dialog = this.dialog.open(DialogEditUserComponent);
    dialog.componentInstance.user = this.user;
  
  }

}  

