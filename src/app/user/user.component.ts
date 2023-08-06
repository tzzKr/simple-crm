import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { Service } from '../service/simple-crm.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  users: any;

  constructor(public dialog: MatDialog, private service: Service) { 
  }

  ngOnInit(): void {
    this.service.getAll().valueChanges({idField: 'id'}).subscribe(changes => {
      console.log(changes);
      this.users = changes;
    });
  };

  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }
}
