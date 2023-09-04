import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class GlobalStateService {
    private isLoggedInSubject = new BehaviorSubject<boolean>(false);
    isLoggedIn$ = this.isLoggedInSubject.asObservable();

    constructor() {
        // Retrieve the value from local storage during service initialization
        const storedLoggedIn = localStorage.getItem('isLoggedIn');
        if (storedLoggedIn !== null) {
            this.isLoggedInSubject.next(JSON.parse(storedLoggedIn));
        }
    }

    setLoggedIn(value: boolean) {
        // Update the BehaviorSubject and store the value in local storage
        this.isLoggedInSubject.next(value);
        localStorage.setItem('isLoggedIn', JSON.stringify(value));
    }
}
