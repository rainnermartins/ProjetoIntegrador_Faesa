import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private angularFireAuth: AngularFireAuth) { }

  createUser(user: User) {
    return this.angularFireAuth.createUserWithEmailAndPassword(user.email, user.password);
  }

  login(user: User) {
    return this.angularFireAuth.signInWithEmailAndPassword(user.email, user.password);
  }

  async signOut() : Promise<any> {
    if ((await this.angularFireAuth.currentUser).providerData.length) {
        var provider = (await this.angularFireAuth.currentUser).providerData;
        return this.signOutFirebase();
        }

  }

  private signOutFirebase() {
    return this.angularFireAuth.signOut();
  }

  resetPassword(email: string) {
    return this.angularFireAuth.sendPasswordResetEmail(email);
  }
}

