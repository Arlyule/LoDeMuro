import { Component } from '@angular/core';

@Component({
  selector: 'app-carreras',
  templateUrl: './carreras.component.html',
  styleUrls: ['./carreras.component.css']
})
export class CarrerasComponent {
  tema: string = "carreras";
  tec: boolean = true;
  iee: boolean = true;
  adm: boolean = true;
  tsu: boolean = true;
  ing: boolean = true;
  lic: boolean = true;

  constructor() {

  }

  checkbox(parametro: string) {
    switch (parametro) {
      case "tec":
        this.tec = !this.tec;
        break;
      case "iee":
        this.iee = !this.iee;
        break;
      case "adm":
        this.adm = !this.adm;
        break;
      case "tsu":
        this.tsu = !this.tsu;
        break;
      case "ing":
        this.ing = !this.ing;
        break;
      case "lic":
        this.lic = !this.lic;
        break;
    }
    console.log(this.tec);
    console.log(this.adm);
    console.log(this.iee);
    console.log(this.tsu);
    console.log(this.ing);
    console.log(this.lic);
  }
}
