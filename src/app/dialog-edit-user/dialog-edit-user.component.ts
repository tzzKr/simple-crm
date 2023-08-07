import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';
import { Service } from '../service/simple-crm.service';

@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss']
})
export class DialogEditUserComponent {
  loading = false;
  user!: User;
  birthDate!: Date;
  userId!: string;


  constructor( public dialogRef: MatDialogRef<DialogEditUserComponent>, private service: Service) { }

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
