import {Inject, Injectable} from '@angular/core';
import {LOCAL_STORAGE, StorageService} from 'ngx-webstorage-service';
import {FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(@Inject(LOCAL_STORAGE) private localStorage: StorageService) { }

  public saveUserDetails(fg: FormGroup): void {
    this.localStorage.set('FULL_NAME', fg.get('fullName').value);
    this.localStorage.set('EMAIL_ID', fg.get('emailID').value);
    this.localStorage.set('USER_NAME', fg.get('userName').value);
    this.localStorage.set('PASSWORD', fg.get('password').value);
  }

  public checkLoginCredentials(fg: FormGroup): boolean {

    if ( this.localStorage.get('USER_NAME') === fg.get('userName').value  &&
      this.localStorage.get('PASSWORD') === fg.get('password').value ) {
      return true;
    }
    return false;
  }
}
