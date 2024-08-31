import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage {
  notificacionesActivadas: boolean = true;

  constructor(private navCtrl: NavController) {}

  
  logout() {
    console.log('Cerrando sesión del usuario...');
    this.navCtrl.navigateRoot('/home'); 
  }
  
navigateToDashboard(dashboardUrl: string) {
  this.navCtrl.navigateForward(dashboardUrl, { animated: true });
}

}
