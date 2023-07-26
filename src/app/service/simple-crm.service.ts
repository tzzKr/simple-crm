import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { User } from 'src/models/user.class';


@Injectable({
  providedIn: 'root'
})
export class Service {
  private dbPath = '/users';

  crmRef: AngularFirestoreCollection<any>;

  constructor(private db: AngularFirestore) {
    this.crmRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<User> {
    return this.crmRef;
  }

  create(user: User): any {
    return this.crmRef.add(user.toJSON());
  }
  

  update(id: string, user: User): Promise<void> {
    return this.crmRef.doc(id).update(user.toJSON());
  }

  delete(id: string): Promise<void> {
    return this.crmRef.doc(id).delete();
  }
}