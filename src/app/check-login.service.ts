import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckLoginService {
  private users: { email: string, password: string }[] = [];

  constructor() { }

  addUser(email: string, password: string) {
    this.users.push({ email, password });
  }

  userExists(email: string, password: string): boolean {
    return this.users.some(user => user.email === email && user.password === password);
  }

  emailExists(email: string): boolean {
    return this.users.some(user => user.email === email);
  }
}
