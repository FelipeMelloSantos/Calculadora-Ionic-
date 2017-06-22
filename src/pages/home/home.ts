import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public alertCtrl: AlertController) {
  }


number1;
number2;
number3 = 0;

//get number3(){

 // return eval(this.number1+"/"+this.number2);

//}



 soma(){

  this.number3 = eval(this.number1+"+"+this.number2);
   this.showAlert(this.number3);

 }

 subtracao(){

  this.number3 = eval(this.number1+"-"+this.number2);
   this.showAlert(this.number3);

 }

 divisao(){

  this.number3 = eval(this.number1+"/"+this.number2);
   this.showAlert(this.number3);

 }

 multiplicacao(){

  this.number3 = eval(this.number1+"*"+this.number2);
   this.showAlert(this.number3);

 }

 raiz(){

  this.number3 = eval("Math.sqrt("+this.number1+")");
   this.showAlert(this.number3);

 }


 potencia(){

  this.number3 = eval("Math.pow("+this.number1+","+this.number2+")");
  this.showAlert(this.number3);

 }

  showAlert(resultado) {
    let alert = this.alertCtrl.create({
      title: 'Resultado!',
      subTitle: resultado,
      buttons: ['OK']
    });
    alert.present();
  }



}
