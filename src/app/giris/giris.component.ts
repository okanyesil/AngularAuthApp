import { Component, OnInit } from '@angular/core';
import {FirebaseAuthService} from '../services/firebase-auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-giris',
  templateUrl: './giris.component.html',
  styleUrls: ['./giris.component.css']
})
export class GirisComponent implements OnInit {

  constructor(private firebaseAuth: FirebaseAuthService, private router: Router) { }

  ngOnInit(): void {
  }
  girisYap(email, password) {
    this.firebaseAuth.login(email, password).then(data => {
      localStorage.setItem('isLogin', 'true');
      this.router.navigateByUrl('icerik').then(r => r);
    });
  }
  signWithGoogle() {
    this.firebaseAuth.loginWithPopUp().then(data => {
      localStorage.setItem('isLogin', 'true');
      this.router.navigateByUrl('icerik').then(r => r);
    }).catch(err => console.log(err));
  }

}
