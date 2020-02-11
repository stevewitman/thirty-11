import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

	isAuthenticated$ = new BehaviorSubject(false);

	constructor() { }
	
	setToken(value) {
		localStorage.setItem('user', value);
		this.isAuthenticated$.next(value)
	}
 
	getToken() {
		localStorage.getItem('user');
	}
 
}
