import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';
import { Service } from '../service/simple-crm.service';


@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent {

  user: User = new User();
  birthDate!: Date;
  loading = false;

  constructor(
    public dialogRef: MatDialogRef<DialogAddUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service: Service) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    // this.dialogRef.close(this.user);
    console.log(this.user);
    this.loading = true;

    this.service.create(this.user).then(() => {
      console.log('Created new item successfully!');
      this.loading = false;
    this.dialogRef.close();

    });


  }
}
