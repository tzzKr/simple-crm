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

  ngOnInit(): void {
  }

  saveUser() {
    this.dialogRef.close(this.user);
  }
  onNoClick(){
    this.dialogRef.close();
  }

  constructor( public dialogRef: MatDialogRef<DialogEditAddressComponent>) { }

}
