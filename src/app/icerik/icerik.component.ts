import { Component, OnInit } from '@angular/core';
import {FirebaseAuthService} from '../services/firebase-auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-icerik',
  templateUrl: './icerik.component.html',
  styleUrls: ['./icerik.component.css']
})
export class IcerikComponent implements OnInit {

  constructor(private firebaseAuth: FirebaseAuthService, private router: Router) { }

  ngOnInit(): void {
  }
  signOut() {
    this.firebaseAuth.logOut().then(data => {
      localStorage.removeItem('isLogin');
      this.router.navigateByUrl('').then(r => r);
    })
      .catch(err => console.log(err));
  }

}
