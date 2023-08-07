import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';
import { Service } from '../service/simple-crm.service';

@Component({
  selector: 'app-dialog-edit-address',
  templateUrl: './dialog-edit-address.component.html',
  styleUrls: ['./dialog-edit-address.component.scss']
})
export class DialogEditAddressComponent implements OnInit {

  loading = false;
  user!: User;
  userId!: string;

  constructor( public dialogRef: MatDialogRef<DialogEditAddressComponent>, private service: Service) { }


  ngOnInit(): void {
  }

  saveUser() {
    this.loading = true;
    this.service.update(this.userId, this.user).then(() => {
      console.log('Updated item successfully!');
      this.loading = false;
      this.dialogRef.close(this.user);

    });
  }
  onNoClick(){
    this.dialogRef.close();
  }


}
