import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  usuario: string = ''; 
  pass: string = '';

  constructor(private navCtrl: NavController) {}

  ingresar() {
    if (this.pass === '123') {
      this.navCtrl.navigateForward('/welcome'); 
    } else {
      alert('No autorizado'); 
    }
  }
  

  ionViewDidEnter() {
    console.log('');
    
  }
}
