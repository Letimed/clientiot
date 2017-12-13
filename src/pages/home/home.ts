import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StatusPage } from '../status/status';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage {
 username: any;
 password: any;

constructor(public navCtrl: NavController) {
 
  }

login(){
  if (this.password != null && this.username != null)
      this.navCtrl.push(StatusPage, {username: this.username, password: this.password});
  else
    console.log('error login null');
}

}
