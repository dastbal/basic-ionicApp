import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.page.html',
  styleUrls: ['./cities.page.scss'],
})
export class CitiesPage implements OnInit {
  constructor(
    private toastController: ToastController,
    private alertController: AlertController
  ) {}

  ngOnInit() {}

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'citiy selected.',
      duration: 2000,
      position: 'middle',
    });
    toast.present();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'City Deleted.',
      buttons: ['OK'],
    });

    await alert.present();
  }
  async presentAlert2() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'City Deleted.',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('no deleted');
          },
        },
        {
          text: 'Si',
          handler: () => {
            console.log('deleted');
          },
        },
      ],
    });

    await alert.present();
  }
}
